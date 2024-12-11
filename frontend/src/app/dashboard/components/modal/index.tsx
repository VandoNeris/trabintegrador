"use client"

import styles from './styles.module.scss'
import { X } from 'lucide-react'
import { use } from 'react'
import { TicketContext } from '../../../../../providers/ticket'
import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br';


export function Modalticket(){
  const { onRequestClose, ticket, finishTicket } = use(TicketContext);

  async function handleFinishTicket(id: string){;
    await finishTicket(id)
  }

  return(
    <dialog className={styles.dialogContainer}>

     <section className={styles.dialogContent}>
        <button className={styles.dialogBack} onClick={onRequestClose}>
          <X size={40} color="#FF3f4b" />
        </button>

        <article className={styles.container}>
          <h2>Detalhes do Ticket</h2>

          <span className={styles.title}>
            <b>Ticket {ticket[0].title}</b>
          </span>

          {ticket[0].description && (
          <span className={styles.description}>
            {ticket[0].description}
          </span>
          
          
          )}
           <span className={styles.createData}>
           <b>Criado Em: {moment(ticket[0].created_at).format("lll")}</b>
          </span>

          {/* {ticket.map( item => (
          <section className={styles.item} key={item.id}>
            <span>
              Qtd: {item.amount} - <b>{item.product.name}</b> - R$ {parseFloat(item.product.price) * item.amount}
            </span>
            <span className={styles.description}>
              {item.product.description}
            </span>
          </section>             
          ))}   */}


          <button className={styles.buttonTicket} onClick={   () => handleFinishTicket(ticket[0].id)}>
            Concluir Ticket
          </button>

        </article>

     </section>

    </dialog>
  )
}