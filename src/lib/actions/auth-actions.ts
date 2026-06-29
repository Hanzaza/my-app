'use server';

import { cookies } from 'next/headers';
import { prisma } from '../prisma';
import { comparePassword, generateToken, verifyToken } from '../auth';

// 1. INICIAR SESIÓN
export async function loginUserAction(email: string, passwordString: string) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error('Credenciales incorrectas');
    }

    const isPasswordValid = await comparePassword(passwordString, user.password);

    if (!isPasswordValid) {
      throw new Error('Credenciales incorrectas');
    }

    const token = await generateToken({
      userId: user.id,
      companyId: user.companyId,
      email: user.email,
      role: user.role,
    });

    // CORRECCIÓN NEXT.JS 15: await cookies()
    const cookieStore = await cookies();
    cookieStore.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return { 
      success: true, 
      user: { 
        id: user.id, 
        name: user.name, 
        email: user.email, 
        role: user.role, 
        companyId: user.companyId 
      } 
    };
  } catch {
    throw new Error('Credenciales incorrectas');
  }
}

// 2. OBTENER SESIÓN ACTUAL
export async function getCurrentUserAction() {
  try {
    // CORRECCIÓN NEXT.JS 15: await cookies()
    const cookieStore = await cookies();
    const token = cookieStore.get('auth-token')?.value;
    
    if (!token) return null;

    const decoded = await verifyToken(token);
    if (!decoded) return null;

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true, role: true, companyId: true },
    });

    return user;
  } catch {
    return null;
  }
}

// 3. CERRAR SESIÓN
export async function logoutUserAction() {
  // CORRECCIÓN NEXT.JS 15: await cookies()
  const cookieStore = await cookies();
  cookieStore.delete('auth-token');
  return { success: true };
}