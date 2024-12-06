"use client"
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function Header() {

    const path = usePathname();
    useEffect(()=> {
        console.log(path);
    }, [])
  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
        <Image src={'./logo.svg'} width={60} height={80} alt='logo' />
        <ul className='hidden md:flex gap-6'>
            <li className={`hover:gray-700 hover:font-bold transition-all cursor-pointer ${path=='/dashboard' && 'text-purple-700 font-bold'}`}>Dashboard</li>
            <li className={`hover:gray-700 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/questions' && 'text-purple-700 font-bold'}`}>Questions</li>
            <li className={`hover:gray-700 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/upgrade' && 'text-purple-700 font-bold'}`}>Upgrade</li>
            <li className={`hover:gray-700 hover:font-bold transition-all cursor-pointer ${path=='/dashboard/howitworks' && 'text-purple-700 font-bold'}`}>How it works?</li>
        </ul>
        <UserButton />
    </div>
  )
}

export default Header