import { Router, Request, Response } from "express";

const router = Router();

/**
 * http://localhost:3002/item [GET]
 */

router.get("/", (req: Request, res: Response) => {
  res.send({ data: "Aqui van los modelos" });
});

export { router };
