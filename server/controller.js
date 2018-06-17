module.exports = {
  create: (req, res, next) => {
    let db = req.app.get("db");
    const { name, price, img } = req.body;

    db.create([name, price, img])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Error!"
        });
        console.log(err);
      });
  },

  read_products: (req, res, next) => {
    let db = req.app.get("db");
    db.read_products().then(products => {
      return res.status(200).send(products);
    });
  }
};
