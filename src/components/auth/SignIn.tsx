'use client'
import React from 'react'
import { signIn } from "next-auth/react";

export const SignIn = () => {
  return (
    <div>
      <button onClick={() => signIn("google")}>
        sign in
      </button>
    </div>
  )
}