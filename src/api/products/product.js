const Sequelize = require("sequelize");
const sequelize = require("./../../configurations/db");

/**
 * @typedef Product
 * @property {UUID} produit_id
 * @property {STRING} produit_nom
 * @property {DOUBLE} produit_prix
 */
const Product = sequelize.define(
    "Product",
    {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.UUIDV4()
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        price: {
            type: Sequelize.DOUBLE,
            allowNull: false
        }
    },
    {
        tableName: "product"
    }
);

module.exports = Product;
