import express from "express";
import products from "./data/Products.js"
import connectDatabase from "./config/MongoDb.js";
import dotenv from "dotenv";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json())

//API
app.use('/api/import', ImportData);
app.use('/api/products', productRoute);
app.use('/api/users', userRouter);

//ERROR HANDLER
app.use(notFound)
app.use(errorHandler)



const PORT = process.env.PORT || 1000;

app.listen(PORT,console.log(`server run in port ${PORT}`));


// //LOAD PRODUCTS FROM SERVER
// app.get("/api/products", (req,res)=>{
//     res.json(products);
// });

// //LOAD SINGLE PRODUCT FROM SERVER

// app.get("/api/products/:id", (req,res)=>{
//     const product = products.find((p) => p._id === req.params.id);
//     res.json(product);
// });
 