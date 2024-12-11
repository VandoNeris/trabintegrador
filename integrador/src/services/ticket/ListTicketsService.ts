import prismaClient from "../../prisma";

interface TicketRequest{
  category_id: string;
}

class ListTicketsService{
  async execute({ category_id }: TicketRequest){
    
    const findByCategory = await prismaClient.ticket.findMany({
     
    })

    return findByCategory;

  }
}

export { ListTicketsService }