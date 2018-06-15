module.exports = {
  create: (req, res, next) => {
    const dbInstance = req.app.get("db");
    const { name, price, img } = req.body;

    dbInstance
      .create([name, price, img])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Error!"
        });
        console.log(err);
      });
  },

  read_products: (req, res, next) => {
    const dbInstance = req.app.get("db");

    dbInstance
      .read_products()
      .then(() => res.sendStatus(products))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Error!"
        });
        console.log(err);
      });
  }
};
