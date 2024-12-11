"use client"
import { createContext, ReactNode, useState } from 'react'
import { api } from '@/services/api'
import { getCookieClient } from '@/lib/cookieClient'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface TicketDescProps{
  id: string;
  title: string;
  description: string;
  created_at: string;

}

type TicketContextData = {
  isOpen: boolean;
  onRequestOpen: (id: string) => Promise<void>;
  onRequestClose: () => void;
  ticket: TicketDescProps[];
  finishTicket: (id: string) => Promise<void>;
}

type TicketProviderProps = {
  children: ReactNode;
}

export const TicketContext = createContext({} as TicketContextData)

export function TicketProvider({ children }: TicketProviderProps){
  const [isOpen, setIsOpen] = useState(false);
  const [ticket, setTicket] = useState<TicketDescProps[]>([])
  const router = useRouter();

  async function onRequestOpen(id: string){

    const token = await getCookieClient();
    const response = await api.get("/ticket/detail", {
      headers:{
        Authorization: `Bearer ${token}`
      },
      params:{
        id: id,
      }
    })

    setTicket(response.data);


    setIsOpen(true);

  }

  function onRequestClose(){
    setIsOpen(false);
  }

  async function finishTicket(id: string){
    const token = getCookieClient();

    const data = {
      id: id,
    }

    try {
      await api.put("ticket/finish", data, {
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
    } catch (err) {
      console.log(err);
      return;
    }

    toast.success("Ticket finalizado com sucesso!")
    router.refresh();
    setIsOpen(false);
  }

  return(
    <TicketContext.Provider 
      value={{ 
        isOpen,
        onRequestOpen,
        onRequestClose,
        finishTicket,
        ticket
      }}
    >
      {children}
    </TicketContext.Provider>
  )
}


