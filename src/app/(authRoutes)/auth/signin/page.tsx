import React from 'react'
import { SignIn } from '@/components/auth/SignIn';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth';

const page = async () => {
  const user = await getCurrentUser();
  
  if (user) {
    redirect("/profile");
  }
  
  
  return (
    <div>
      <SignIn />
    </div>
  )
}


export default page