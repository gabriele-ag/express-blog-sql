import express from "express"
import postRouter from "./router/post.js"

const app = express();
const port = 3000

app.use("/posts", postRouter)

app.listen(port, () => {
    console.log(`Server in ascolto nella porta ${port}`)
})