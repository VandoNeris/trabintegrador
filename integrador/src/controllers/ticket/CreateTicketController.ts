import { Request, Response } from "express";

import { CreateTicketService } from "../../services/ticket/CreateTicketService";

class CreateTicketController{
    async handle(req: Request, res: Response){

        const { title, description} = req.body;
        const user_id = req.user_id;
        const createTicketService = new CreateTicketService();
        const ticket = await createTicketService.execute({
            title,
            description,
            user_id,
        });


        return res.json(ticket)

    }
}

export { CreateTicketController }