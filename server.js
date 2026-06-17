
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/chat', async (req,res)=>{
  const {message, mode='guest'} = req.body;

  res.json({
    reply: `Demo backend received: ${message} (mode=${mode})`
  });
});

app.listen(process.env.PORT || 3000, ()=>{
  console.log('ORIGINS backend started');
});
