const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();



app.get("/api", (req, res) => {
    res.json({ status: "ok", message: "Hello from server" })
})

app.post('/api/submit/:email', (req, res) => {
    try{
        const email = req.params.email;

        res.json({ status: 'ok', message: email })
    }catch(error){
        console.error(error)
        res.json({ status: 'error' })
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})