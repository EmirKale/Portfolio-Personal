'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(prevState: any, formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  const validUser = process.env.ADMIN_USER || 'admin';
  const validPwd = process.env.ADMIN_PASSWORD || 'emir2026';

  if (username === validUser && password === validPwd) {
    // Giriş başarılı, HttpOnly cookie ayarla
    const cookieStore = await cookies();
    cookieStore.set('admin_token', 'authenticated', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 // 1 gün
    });
    
    return redirect('/admin');
  }

  return {
    message: 'Hatalı kullanıcı adı veya şifre!'
  };
}

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  redirect('/login');
}
