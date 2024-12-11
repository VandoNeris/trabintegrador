import {Request, Response } from 'express'
import { FinishTicketService } from '../../services/ticket/FinishTicketService';

class FinishTicketController{
  async handle(req: Request, res: Response){
    const { id } = req.body;

    const finishTicketService = new FinishTicketService();

    const ticket = await finishTicketService.execute({
      id
    })

    return res.json(ticket);

  }
}

export { FinishTicketController }