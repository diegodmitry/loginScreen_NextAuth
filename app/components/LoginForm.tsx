'use client';

import { Session } from 'next-auth';
import { SessionProvider, useSession, signIn, signOut } from "next-auth/react";
import { FaGoogle, FaGithub, FaEnvelope, FaFacebook } from 'react-icons/fa';

type LoginFormProps = {
  session: Session | null;
}


export default function LoginForm({ session }: LoginFormProps) {

  return (
    // <form className="space-y-3">
    //   <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
    //     <h1 className={`mb-3 text-2xl`}>
    //       Please log in to continue.
    //     </h1>
    //     {/* <div className="w-full">
    //       <div>
    //         <label
    //           className="mb-3 mt-5 block text-xs font-medium text-gray-900"
    //           htmlFor="email"
    //         >
    //           Email
    //         </label>
    //         <div className="relative">
    //           <input
    //             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 focus:ring-cyan-500 placeholder:text-gray-500"
    //             id="email"
    //             type="email"
    //             name="email"
    //             placeholder="Enter your email address"
    //             required
    //           />
    //           <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //         </div>
    //       </div>
    //       <div className="mt-4">
    //         <label
    //           className="mb-3 mt-5 block text-xs font-medium text-gray-900"
    //           htmlFor="password"
    //         >
    //           Password
    //         </label>
    //         <div className="relative">
    //           <input
    //             className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 focus:ring-cyan-500 placeholder:text-gray-500"
    //             id="password"
    //             type="password"
    //             name="password"
    //             placeholder="Enter password"
    //             required
    //             minLength={6}
    //           />
    //           <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
    //         </div>
    //       </div>
    //     </div> */}
    //     <div className="flex h-8 items-end space-x-1">
    //       {/* {code === 'CredentialSignin' && (
    //         <>
    //         <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
    //         <p aria-live="polite" className="text-sm text-red-500">
    //         Invalid credentials  
    //         </p>
    //         </>
    //       )} */}
    //     </div>
    //   </div>
    // </form>
    <SessionProvider session={session}>
      <LoginButton />
    </SessionProvider>
  );
}

function LoginButton() {
  const { data: session, status } = useSession()
  // const { data: session } = useSession()


  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (session) {
    return (
      <>
        <button onClick={() => signOut()} className='flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 mt-8'>
          Log out
        </button>
        <div>{session && `${session.user?.name} - ${session.user?.email}`}</div>
      </>
    );
  }

  return (
    <>
      <div className="flex justify-around mt-4">
        <button onClick={() => signIn('google')}>
          <FaGoogle size={28} className="text-blue-500" />
        </button>
        <button onClick={() => signIn('github')}>
          <FaGithub size={28} className="text-blue-500"/>
        </button>
        
        {/* <FaEnvelope size={28} className="text-blue-500"/>
        <FaFacebook size={28} className="text-blue-500"/> */}
      </div>
    </>
  );
}
