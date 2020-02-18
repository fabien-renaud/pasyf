const Service = require("./services");

module.exports = {
    getProducts(req, res) {
        Service.getAll()
            .then(cas => {
                if (!cas) res.sendStatus(404);
                else res.status(200).send(cas);
            })
            .catch(err => res.status(500).send(err));
    },

    getProductById(req, res) {
        const { id } = req.params;
        Service.getOneByPk(id)
            .then(cas => {
                if (!cas) res.sendStatus(404);
                else res.status(200).send(cas);
            })
            .catch(err => res.status(500).send(err));
    },

    createProduct(req, res) {
        const product = req.body;
        Service.create(product)
            .then(cas => {
                if (!cas) res.sendStatus(404);
                else res.status(201).send(cas);
            })
            .catch(err => res.status(500).send(err));
    },

    updateProduct(req, res) {
        const { id } = req.params;
        const product = req.body;
        Service.update(id, product)
            .then(cas => {
                if (!cas) res.sendStatus(404);
                else res.status(200).send(cas);
            })
            .catch(err => res.status(500).send(err));
    },

    destroyProduct(req, res) {
        const id = req.params.id;
        Service.destroy(id)
            .then(() => res.sendStatus(204))
            .catch(err => res.status(500).send(err));
    }
};
