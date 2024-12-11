
import prismaClient from "../../prisma";

interface TicketRequest{
    title: string;
    description: string;
    user_id: string;
}

class CreateTicketService{
    async execute({title, description, user_id}: TicketRequest){

        const ticket = await prismaClient.ticket.create({
            data:{
                title: title,
                status: false,
                draft: true,
                description: description,
                user_id: user_id,
            }
        })
        
        return ticket;
    }
}

export{ CreateTicketService }