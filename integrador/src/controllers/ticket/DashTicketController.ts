import { Request, Response } from "express";

import { DashTicketService } from "../../services/ticket/DashTicketService";

class DashTicketController {
    async handle(req: Request, res: Response){

        const totaisTickets = new  DashTicketService();
        const totais = await totaisTickets.execute();
        return res.json(totais);
        
          
    }
}

export { DashTicketController };