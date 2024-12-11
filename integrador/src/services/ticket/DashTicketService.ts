import prismaClient from "../../prisma";


class DashTicketService{
  async execute(){
    
    const TotaisAbertos = await prismaClient.ticket.count({
        where:{
          status: true
        }
      })
      const TotaisFechados = await prismaClient.ticket.count({
        where:{
          status: false
        }
      })

    return [TotaisAbertos, TotaisFechados];

  }
}

export { DashTicketService }