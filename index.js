const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const path=require('path')
const PORT =process.env.PORT||5000

//process.env.NODE_ENV=>production or undefined



//middleware
app.use(cors());
app.use(express.json()); //req.body

app.use(express.static(path.join(__dirname, 'client/build')))

if(process.env.NODE_ENV === 'production'){
  // app.use(express.static(path.join(__dirname, 'client/build')))
}

//ROUTES//

//create a room
app.post("/rooms", async (req, res) => {
  try {
    const room_type= req.body.room_type
    const price = req.body.price
    const newTodo = await pool.query(
      "INSERT INTO rooms (room_type, price) VALUES($1,$2) RETURNING *",
      [room_type, price]
    );

    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all rooms

app.get("/rooms", async (req, res) => {
  try {
    const rooms = await pool.query("SELECT * FROM rooms");
    res.json(rooms.rows);
  } catch (err) {
    console.error(err.message);
  }
});


app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});