
module.exports = {
  getAll: (req, res) => {
    const db = req.app.get('db')
    db.get_all().then(response => {
      res.status(200).send(response)
    })
  },
  createItem: (req, res) => {
    const db = req.app.get('db')
    let {name, price, image} = req.body
    db.create_item({name, price, image}).then(response => {
      res.status(200).send(response)
    })
  },
  deleteItem: (req, res) => {
    const db = req.app.get('db')
    let {id} = req.params
    db.delete_item({id}).then(response => {
      res.status(200).send(response)
    })
  }
}