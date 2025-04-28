'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Bars4Icon, UserCircleIcon } from '@heroicons/react/16/solid'
import MobileNav from './MobileNav'
import { motion } from "framer-motion"
import { supabase } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'

const Navbar = () => {
    const [isMobileNavOpen, setMobileNav] = useState(false)
    const [user, setUser] = useState(null)
    const router = useRouter()

    const toggleMenu = () => setMobileNav(prev => !prev)

    //side effect to see if user exists, ensures we check for session on mount and on state change
    useEffect(() => {
        const getUser = async () => {
            const { data: { session } } = await supabase.auth.getSession() //returns data object --> desctruc data to session
            setUser(session?.user || null)
        }

        getUser()

        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setUser(session?.user || null)
            }
        )
        return () => subscription?.unsubscribe()
    }, [])

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push('/')
    }

    return (
        <>
            <div className='flex justify-between items-center px-12 py-6 border-b'>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        alt='company logo'
                        width={225}
                        height={75}
                        className=''
                    />
                </Link>

                <div className='flex gap-6'>
                    <ul className='items-center space-x-8 text-gray-600 hidden md:flex text-lg'>
                        <motion.li
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: .95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href="/about">
                                About
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: .95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Link href="/learn">
                                Learn
                            </Link>
                        </motion.li>
                    </ul>
                    {user ? (
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center'>
                                <UserCircleIcon className="h-6 w-6 text-brandBlue mr-2" />
                                <span className='font-medium'>
                                    Hi, {user.user_metadata?.first_name || user.email?.split('@')[0] || 'User'}
                                </span>
                            </div>
                            <motion.button
                                onClick={handleSignOut}
                                className="px-4 py-2 border border-brandBlue text-black font-medium rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: .95 }}
                                transition={{ duration: 0.2 }}
                            >
                                Log out
                            </motion.button>
                        </div>
                    ) : (
                        <div className='space-x-4'>
                            <motion.button
                                className="px-4 py-2 border border-brandBlue text-black font-medium rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: .95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link href="/sign-in">Sign in</Link>
                            </motion.button>
                            <motion.button
                                className="px-4 py-2 bg-brandBlue text-white font-medium rounded-lg"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: .95 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Link href="/sign-up">Sign Up</Link>
                            </motion.button>
                        </div>
                    )}
                </div>
                <Bars4Icon
                    className="w-5 h-5 md:hidden cursor-pointer"
                    onClick={toggleMenu}
                />
            </div>
            <MobileNav isMobileNavOpen={isMobileNavOpen} toggleMenu={toggleMenu} />
        </>
    )
}

export default Navbar