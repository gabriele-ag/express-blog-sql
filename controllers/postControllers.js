import connection from "../db.js"

const index = (req, res) => {

    const sql = " SELECT * FROM `posts`"

    connection.query(sql, (err, result) => {
        console.log(result)
    })

    res.json({
        data: "array di post"
    })
}

const show = (req, res) => {
     const id = req.params.id
}


const controller = {
    index,
    show,
}

export default controller