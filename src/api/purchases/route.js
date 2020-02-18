const router = require("express").Router();
const purchaseController = require("./controller");

/**
 * @group Purchase - Operations about purchase
 * @route GET /purchases
 * @param {UUID} achat_id.query.required - achat_id
 * @returns {object} 200 - JSON of the purchase
 * @returns {Error}  default - Unexpected error
 */
router.get("/:customerId/purchases/", purchaseController.getPurchasesByCustomerId);
/**
 * @group Purchase - Operations about purchase
 * @route GET /purchases/{id}
 * @param {UUID} achat_id.query.required - achat_id
 * @returns {object} 200 - JSON of the purchase
 * @returns {Error}  default - Unexpected error
 */
router.get("/:customerId/purchases/:id", purchaseController.getPurchaseById);
/**
 * @group Purchase - Operations about purchase
 * @route POST /purchases
 * @param {DATE} client_first_name.params.required - achat_date
 * @param {STRING} client_last_name.params.required - client_id
 * @param {UUID} client_number.params.required - produit_id
 * @returns {object} 201
 * @returns {Error}  default - Unexpected error
 */
router.post("/:customerId/purchases/", purchaseController.createPurchase);
/**
 * @group Purchase - Operations about purchase
 * @route PUT /purchases/{id}
 * @param {DATE} client_first_name.params.required - achat_date
 * @param {STRING} client_last_name.params.required - client_id
 * @param {UUID} client_number.params.required - produit_id
 * @returns {object} 201
 * @returns {Error}  default - Unexpected error
 */
router.put("/:customerId/purchases/:id", purchaseController.updatePurchase);
/**
 * @group Purchase - Operations about purchase
 * @route DELETE /purchases/{id}
 * @param {UUID} achat_id.query.required - achat_id
 * @returns {object} 200 - JSON of the purchase
 * @returns {Error}  default - Unexpected error
 */
router.delete("/:customerId/purchases/:id", purchaseController.destroyPurchase);

module.exports = router;
