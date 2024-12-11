import Image from "next/image"
import Link from "next/link"
import styles from '../page.module.scss'
import { api } from '@/services/api'
import{ redirect } from 'next/navigation'


export default function Signup(){

    async function handleRegister(formData: FormData){
        "use server"

        const name = formData.get("name")
        const email = formData.get("email")
        const password = formData.get("password")

        if(name === "" || email === "" || password === ""){
            console.log("Preencha Todos os Campos")
            return;
        }

        try {
            await api.post("/users", {
                name: name,
                email: email,
                password: password
            })
        } catch (err) {
            console.log("error")
            console.log(err)
        }

        redirect("/")
    }

    return(
        <>
             <div className={styles.containerCenter}>
            <Image
            src="/nocs-login.png" width={100} height={100}
            alt="Login" 
            />

            <section className={styles.login}>
                <h1> Criando Sua Conta </h1>
                <form action={handleRegister}>
                    <input
                        type="text"
                        required
                        name="name"
                        placeholder="Digite seu nome..."
                        className={styles.input}
                    />
                    <input
                        type="email"
                        required
                        name="email"
                        placeholder="Digite seu email..."
                        className={styles.input}
                    />

                    <input
                        type="password"
                        required
                        name="password"
                        placeholder="*************"
                        className={styles.input}
                    />

                    <button type="submit" className={styles.button}>
                        Cadastrar
                    </button>


                </form>

                <Link href="/" className={styles.text}>
                Já possui uma conta? Faça o Login
                </Link>
            </section>
        </div>
        </>
    )
}