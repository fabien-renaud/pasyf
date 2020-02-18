const Purchase = require("./purchase");

const getAll = customerId => Purchase.findAll({ where: { customerId } });

const getOneByPk = id => Purchase.findByPk(id);

const create = purchase => Purchase.create(purchase);

const update = (id, purchase) => Purchase.update(purchase, { where: { id } });

const destroy = id => Purchase.destroy({ where: { id } });

module.exports = { getAll, getOneByPk, create, update, destroy };
