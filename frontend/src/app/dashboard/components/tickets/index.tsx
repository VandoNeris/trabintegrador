"use client"

import { use } from 'react'
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { RefreshCw, SquareDashed, SquareCheck } from 'lucide-react';
import { TicketProps } from '@/lib/ticket.type';
import { Modalticket } from '@/app/dashboard/components/modal';
import { TicketContext } from '../../../../../providers/ticket';
import { toast } from 'sonner';

interface Props {
    tickets: TicketProps[];
}

export function Ticket({ tickets }: Props) {
    
    const { isOpen, onRequestOpen } = use(TicketContext)

    function handleDetailTicket(tickets: string){
        onRequestOpen(tickets);
    }
    
    async function handleRefresh(){
        window.location.href="/dashboard"
        await toast.success("Pedidos Atualizados!")

    }
    
    const [localTickets, setLocalTickets] = useState<TicketProps[]>(tickets);



    return (
        
        <>
            <main className={styles.container}>
                <section className={styles.containerHeader}>
                    <h1>Tickets</h1>
                    <button onClick={handleRefresh}>
                        <RefreshCw size={24} color="var(--pink)" />
                    </button>
                </section>

                <section className={styles.listTickets}>
                    {localTickets.map(ticket => (
                        <button
                            key={ticket.id}
                            className={styles.ticketItem}
                            onClick={   () => handleDetailTicket(ticket.id)}
                        >
                            <div className={styles.tag}></div>
                            <span>
                                Ticket {ticket.title}
                                {ticket.status === false && (
                                    <i className={styles.iconeFalse}>
                                        <SquareDashed size={24} />
                                    </i>
                                )}
                                {ticket.status === true && (
                                    <i className={styles.iconeTrue}>
                                        <SquareCheck size={24} />
                                    </i>
                                )}
                            </span>
                        </button>
                    ))}
                </section>
            </main>

            { isOpen && <Modalticket/> }
        </>
    );
}