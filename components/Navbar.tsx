import React from 'react'
import Link from "next/link";
import Image from "next/image";
import {signOut, signIn, auth} from "@/auth";
import {BadgePlus, LogOut} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";

const Navbar = async() => {
    const session = await auth()
    return (
        <div className="px-5 py-3 bg-white shadow-sm font-work-sans">
            <nav className="flex justify-between items-center">
                <Link href="/">
                    {/*<Image src="/logo.png" width={256} height={10} alt="logo" />*/}
                    <h1 className="text-black font-semibold text-xl">LOGO</h1>
                </Link>
                <div className="flex items-center gap-5 text-black">
                    {session && session?.user? (
                        <>
                            <Link href="/startup/create">
                                <span className="max-sm:hidden">Create</span>
                                <BadgePlus className="size-6 sm:hidden text-red-500" />
                            </Link>
                            <form action={async() => {
                                "use server";
                                await signOut({redirectTo: '/'})
                            }}>
                                <span className="max-sm:hidden">Logout</span>
                                <LogOut className="size-6 sm:hidden text-red-500" />
                            </form>
                            <Link href={`/user/${session?.id}`}>
                                <Avatar className="size-10">
                                    <AvatarImage src={session?.user?.image || ''} alt={session?.user.name || ''} />
                                    <AvatarFallback>AV</AvatarFallback>
                                </Avatar>
                            </Link>
                        </>
                    ): (
                        <form action={async() => {
                            "use server";
                            await signIn('github')}}>
                            <button type='submit'>Login</button>
                        </form>
                    )}
                </div>
            </nav>
        </div>
    )
}
export default Navbar