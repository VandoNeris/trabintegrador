"use client"

import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import { LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'

export function Header(){
    const router = useRouter();

    async function handleLogout(){
        deleteCookie("session", { path: "/" } )
        toast.success("Logout Efetuado")
        router.replace("/")
    }

    return(
        <header className={styles.headerContainer}>
           <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <Image
                        src="/nocs-login.png" width={80} height={80}
                        alt="Logo NOCS"
                        priority={true}
                        quality={100}
                    />
                </Link>

                <nav>
                    <Link href="/dashboard/ticket">
                        Ticket
                    </Link>
                    <Link href="/dashboard/grafico">
                        Dashboard Tickets
                    </Link>
                    <Link href="/dashboard/product">
                        Produto
                    </Link>
                    <form action={handleLogout}>
                        <button type='submit'>
                            <LogOutIcon size={24}/>
                        </button>
                    </form>
                </nav>
           </div>
        </header>
    )
}