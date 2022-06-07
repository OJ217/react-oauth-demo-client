import React, { useContext } from 'react'
import { authContext } from "../context/AuthContext"

export default function Home() {
  const user = useContext(authContext);

  return (
    <section>
      <h1 className="text-[#171515] font-bold text-3xl text-center">Hello <span className="underline">{user ? user?.username : "Guest"}</span></h1>
    </section>
  )
}
