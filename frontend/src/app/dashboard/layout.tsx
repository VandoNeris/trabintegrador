import { Header } from "./components/header"
import { TicketProvider } from "../../../providers/ticket"

export default function DashboardLayout({ children }: 
    { children: React.ReactNode }
){
    return(
        <>
            <Header/>
            <TicketProvider>
                {children}
            </TicketProvider>
            
        </>
    )
}