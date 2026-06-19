import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;

  // Sadece /admin yollarını koru
  if (url.pathname.startsWith('/admin')) {
    const basicAuth = request.headers.get('authorization');
    
    // Varsayılan kullanıcı adı ve şifre (Environment variable ile değiştirilebilir)
    const user = process.env.ADMIN_USER || 'admin';
    const pwd = process.env.ADMIN_PASSWORD || 'emir2026';

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1];
      const [providedUser, providedPwd] = atob(authValue).split(':');

      if (providedUser === user && providedPwd === pwd) {
        return NextResponse.next();
      }
    }

    // Yetkisiz erişimde Basic Auth promptunu göster
    return new NextResponse('Auth Required.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Admin Area"',
      },
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
