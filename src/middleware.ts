import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from './lib/auth'; // Asegúrate de que la ruta sea correcta

// Routes that don't require authentication
const PUBLIC_ROUTES = ['/login', '/register', '/api/auth/login', '/api/auth/register'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Skip API routes that don't need auth
  if (pathname.startsWith('/api/') && PUBLIC_ROUTES.some(r => pathname.startsWith(r))) {
    return NextResponse.next();
  }

  // Get token from cookie
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    // No token found, redirect to login for non-API routes
    if (!pathname.startsWith('/api/')) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
    // For API routes, return 401
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Verify token
  const decoded = await verifyToken(token);

  if (!decoded) {
    // Token is invalid, clear cookie and redirect
    const response = !pathname.startsWith('/api/')
      ? NextResponse.redirect(new URL('/login', request.url))
      : NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    response.cookies.delete('auth-token');
    return response;
  }

  // CORRECCIÓN: Clonar los headers del request para pasarlos a las siguientes rutas
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', decoded.userId);
  requestHeaders.set('x-company-id', decoded.companyId);
  requestHeaders.set('x-user-role', decoded.role);

  // Devolver NextResponse.next() inyectando los nuevos headers en la petición
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder images (svg, png, jpg, etc.)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};