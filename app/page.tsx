'use client';

import LoginForm from '@/app/components/LoginForm';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

type LoginFormProps = {
  session: Session | null;
}

export default function LoginPage({ session }: LoginFormProps) {

  return (
    <SessionProvider session={session}>
      <main className="flex items-center justify-center md:h-screen">
        <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
          <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
            <div className="w-32 text-white md:w-36">
              Company Logo
            </div>
          </div>
          <LoginForm session={session}/>
        </div>
      </main>
    </SessionProvider>

  );
}