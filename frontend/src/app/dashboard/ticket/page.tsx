import styles from './styles.module.scss'
import { Button } from '@/app/dashboard/components/button'
import { api } from '@/services/api'
import { redirect } from 'next/navigation'

import { getCookieServer } from '@/lib/cookieServer'

export default function Ticket(){

    async function handleRegisterTicket(formData: FormData){
        "use server"

        const title = formData.get("title")
        const description = formData.get("description")

        if(!title || !description){

            return;
        }

        const token = await getCookieServer();
        
        await api.post("/ticket",{title: title, description: description}, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        .catch((err) => {
            console.log(err);
            return;
        })
        

        redirect("/dashboard")


    }
    return(
        <main className={styles.container}>
            <h1>Novo Ticket</h1>

            <form className={styles.form} action={handleRegisterTicket}>

                <input 
                    type="text" 
                    name="title"
                    placeholder="Digite o nome do ticket..."
                    required
                    className={styles.input}
                />

                <textarea
                    className={styles.input}
                    placeholder="Digite a descrição do ticket..."
                    required
                    name="description"
                ></textarea>

                <Button name="Cadastrar ticket" />

            </form>
        </main>
    )
}