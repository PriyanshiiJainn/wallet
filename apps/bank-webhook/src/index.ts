import express, { Request, Response } from "express";

const app = express();


app.use(express.json());

app.post("/bank-test", (req: Request, res: Response) => {

  const userData = {
    token: req.body.token,
    userId: req.body.userId,
    amount: req.body.amount,
  };

  console.log(userData);

  res.json({
    message: "SUCCESSFUL",
    data: userData
  });
});

app.listen(6900, () => {
  console.log("Server running on port 6900");
});