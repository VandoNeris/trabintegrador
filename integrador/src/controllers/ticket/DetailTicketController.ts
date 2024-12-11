import {Request, Response} from 'express'
import { DetailTicketService } from '../../services/ticket/DetailTicketService';



class DetailTicketController{
  async handle(req: Request, res: Response){

    const id = req.query.id as string;
    const detailTicketService = new DetailTicketService();
    const tickets = await detailTicketService.execute({
      id
    })
    return res.json(tickets);

  }
}

export { DetailTicketController }