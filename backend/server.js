require("dotenv").config(); //the enviorment required (.env)
const express = require("express");
const workoutsRoutes = require("./routes/workouts") //getting routes
const mongoose = require("mongoose")

// express app//
const app = express();//settting the app to express

//middleware//
/*Las funciones de middleware son funciones que tienen acceso al objeto
de solicitud (req), y al objeto de respuesta (res)*/
app.use(express.json()) //ver!
app.use("/", (req, res, next) => {
  console.log(req.method);
  next();
});
//route//
app.use(workoutsRoutes)
//mongoose//
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  app.listen(process.env.PORT, () => {
    console.log("connected to db & listening on", process.env.PORT);
  }); 
})
.catch((err)=>{
  console.log(err)
})
// app listening express//
