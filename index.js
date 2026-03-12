const express = require('express')
const app = express()

const EnergyRoute = require('./routes/energy.route')
const FactoerRoute = require('./routes/factors.routes')

app.use('/api/energy', EnergyRoute)
app.use('/api/factors', FactoerRoute)

app.use('/', (req, res) => {
    res.send("Server is Running on 5000")
})


app.listen(5000, console.log("Server Started on PORT 5000"))