const Product = require("./product");

const getAll = () => Product.findAll();

const getOneByPk = id => Product.findByPk(id);

const create = product => Product.create(product);

const update = (id, product) => Product.update(product, { where: { id } });

const destroy = id => Product.destroy({ where: { id } });

module.exports = { getAll, getOneByPk, create, update, destroy };
