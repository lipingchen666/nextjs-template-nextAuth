import { authOptions } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';
import { redirect } from "next/navigation";
import React from 'react'

const page = async () => {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect(authOptions?.pages?.signIn || '/auth/signin')
  }

  return (
    <div>Private User Page</div>
  )
}

export default page