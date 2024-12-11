import prismaClient from "../../prisma";

interface TicketRequest{
  id: string;
}

class FinishTicketService{
  async execute({ id }: TicketRequest){

    const ticket = await prismaClient.ticket.update({
      where:{
        id: id
      },
      data:{
        status: true,
      }
    })
    return ticket;
  }
}

export { FinishTicketService }