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

     const sql = "SELECT * FROM `posts` INNER JOIN `post_tag` ON `posts`.`id` = `post_tag`.`post_id` WHERE `id` = ?"

     connection.query(sql, [id], (err, result) => {
        if(err) {
            console.log("Errore")
        } else {
            if (result.length === 0) {
                res.status(404).json({
                    error: "Post non trovato"
                })
            } else {
                res.json({
                    data: result[0]
                })
            }
        }
     })
}

 const destroy = (req, res) => {
     const id = req.params.id

     const sql = "DELETE FROM `posts` WHERE id = ?"

     connection.query(sql, [id], (err, result) => {
         if(err) {
            console.log("Error")
         } else {
            console.log(result)
                res.sendStatus(204)
            }
        
     })
 }

const controller = {
    index,
    show,
    destroy,
}

export default controller