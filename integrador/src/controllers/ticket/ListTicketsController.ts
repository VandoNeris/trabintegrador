import {Request, Response} from 'express'
import { ListTicketsService } from '../../services/ticket/ListTicketsService'

class ListTicketsController{
  async handle(req: Request, res: Response){
    
    const category_id = req.query.category_id as string;
    const listTickets = new ListTicketsService();
    const tickets = await listTickets.execute({
      category_id
    });

    return res.json(tickets);

  }
}

export { ListTicketsController }