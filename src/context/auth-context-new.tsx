'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import type { AppUser, UserRole } from '@/lib/types';
import { loginUserAction, getCurrentUserAction, logoutUserAction } from '@/lib/actions/auth-actions';
import { createInitialAdminUser } from '@/lib/actions/setup';

interface AuthContextType {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, passwordString: string) => Promise<void>;
  register: (
    email: string,
    passwordString: string,
    name: string,
    companyName?: string
  ) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
// Agregamos este comentario para que ESLint ignore el 'any' justificadamente aquí
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const normalizeUser = (backendUser: any): AppUser => {
  return {
    ...backendUser,
    uid: backendUser.id,
    name: backendUser.name ?? '',
    // La magia sigue aquí: el 'ADMIN' de Prisma se convierte en el 'admin' que necesita tu frontend
    role: (backendUser.role ? backendUser.role.toLowerCase() : 'employee') as UserRole,
  };
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await getCurrentUserAction();
        if (userData) {
          setUser(normalizeUser(userData));
        }
      } catch (error) {
        console.error('Error verificando la sesión:', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email: string, passwordString: string) => {
    try {
      const response = await loginUserAction(email, passwordString);
      if (response.success && response.user) {
        setUser(normalizeUser(response.user));
      }
    } catch (error) {
      throw error;
    }
  };

 const register = async (
    email: string,
    passwordString: string,
    name: string,
    companyName?: string
  ) => {
    try {
      if (!companyName) {
        throw new Error('El nombre de la empresa es obligatorio para el registro inicial');
      }

      const response = await createInitialAdminUser({
        email,
        password: passwordString,
        adminName: name,
        companyName,
      });

      if (response.success) {
        // Le explicamos a TypeScript la estructura exacta que nos devuelve Prisma
       const companyData = response.company as unknown as { users: Array<Record<string, unknown>> };
        
        if (companyData.users && companyData.users.length > 0) {
          const newUser = companyData.users[0];
          setUser(normalizeUser(newUser));
        }
      }
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await logoutUserAction();
      setUser(null);
    } catch (error) {
      console.error('Error cerrando sesión:', error);
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
}