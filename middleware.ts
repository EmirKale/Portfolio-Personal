import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Sadece /admin yollarını koru
  if (url.pathname.startsWith('/admin')) {

    // Cookie kontrolü yap
    const token = request.cookies.get('admin_token');

    // Token yoksa login sayfasına yönlendir
    if (!token || token.value !== 'authenticated') {
      const loginUrl = new URL('/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Token varsa geçişe izin ver
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
