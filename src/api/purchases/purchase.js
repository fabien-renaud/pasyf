const Sequelize = require("sequelize");
const sequelize = require("./../../configurations/db");

const { Product } = require("./../products/product");

/**
 * @typedef Purchase
 * @property {UUID} achat_id
 * @property {DATE} achat_date
 * @property {STRING} client_id
 * @property {UUID} produit_id
 */
const Purchase = sequelize.define(
    "Purchase",
    {
        id: {
            type: Sequelize.UUID,
            allowNull: false,
            primaryKey: true,
            unique: true,
            defaultValue: Sequelize.UUIDV4()
        },
        purchaseDate: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW
        },
        customerId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        productId: {
            type: Sequelize.UUID,
            references: {
                model: "Product",
                key: "id"
            }
        }
    },
    {
        tableName: "purchase"
    }
);

Purchase.associate = () => Purchase.belongsTo(Product);

module.exports = Purchase;
