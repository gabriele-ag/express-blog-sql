import connection from "../db.js"

const index = (req, res) => {

    const sql = " SELECT * FROM `posts`"

    connection.query(sql, (err, result) => {
        if(err) {
            console.log("Error")
        }

        res.status(200).json({
            data: result,
        })
    })

}

const show = (req, res) => {
     const id = req.params.id
     res.json({
        data: `Dati dei post con id ${id}`
     })
}


const controller = {
    index,
    show,
}

export default controller