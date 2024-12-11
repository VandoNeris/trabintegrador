import prismaClient from "../../prisma";

interface DetailRequest{
  id: string;
}

class DetailTicketService{
  async execute({ id }: DetailRequest){

    const tickets = await prismaClient.ticket.findMany({
      where:{
        id: id
      }
    })
    return tickets;

  }
}

export { DetailTicketService }