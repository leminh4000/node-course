const express=require('express');

const app = express();
const port = process.env.PORT || 3004;

// app.use(express.json())

app.post('/users', (req,res)=>{
    console.log(req.body)
    res.send(`Welcome`);
});

app.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
})
