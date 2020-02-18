const Service = require("./services");

module.exports = {
    getPurchasesByCustomerId(req, res) {
        const { customerId } = req.params;
        Service.getAll(customerId)
            .then(purchases => {
                if (!purchases) res.sendStatus(404);
                res.status(200).send(purchases);
            })
            .catch(err => res.status(500).send(err));
    },

    getPurchaseById(req, res) {
        const { id } = req.params;
        Service.getOneByPk(id)
            .then(purchase => {
                if (!purchase) res.sendStatus(404);
                else res.status(200).send(purchase);
            })
            .catch(err => res.status(500).send(err));
    },

    createPurchase(req, res) {
        const purchase = req.body;
        Service.create(purchase)
            .then(result => {
                if (!result) res.sendStatus(404);
                else res.status(201).send(result);
            })
            .catch(err => res.status(500).send(err));
    },

    updatePurchase(req, res) {
        const { id } = req.params;
        const purchase = req.body;
        Service.update(id, purchase)
            .then(result => {
                if (!result) res.sendStatus(404);
                else res.status(200).send(result);
            })
            .catch(err => res.status(500).send(err));
    },

    destroyPurchase(req, res) {
        const { id } = req.params;
        Service.destroy(id)
            .then(() => res.sendStatus(204))
            .catch(err => res.status(500).send(err));
    }
};
