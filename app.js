
import express from "express";
import { PORT } from "./env.js";
import {shortenedRoutes} from "./routes/shortenerRoutes.js";

const app = express();

app.use(express.static("public")); //! to access css file.
app.use(express.urlencoded({ extended: true }))


app.set("view engine","ejs"); //! defining  using engine and which engine
// app.set("views","./Folder_name") if different folder then VIEWS use this too


//? In Express.js a template engine is a tool that lets you embed dynamic content into HTML files and render them  on the server before sending them to the client. it allow you to create reusable template, making it easier to generate dynamic webpage with minimal code. 


//! shortenerRouter
app.use(shortenedRoutes);




//todo Server create 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})