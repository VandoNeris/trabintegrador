
import { Ticket } from "./components/tickets";
import { api } from "@/services/api";
import { getCookieServer } from "@/lib/cookieServer";
import { TicketProps } from "@/lib/ticket.type";

async function getTickets(): Promise<TicketProps[] | []>{
    try {
        const token = await getCookieServer();
        const response = await api.get("/tickets", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data || []

    } catch (err) {
        console.log(err);
        return [];
    }
}

export default async function Dashboard(){

    const tickets = await getTickets(); 
    console.log(tickets)
    console.log('teste')
    return(
        <>
            <Ticket tickets={tickets}/>
        </>
    )
}