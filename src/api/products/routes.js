const router = require("express").Router();
const produitController = require("./controller");

/**
 * @group Product - Operations about product
 * @route GET /products
 * @returns {object} 200 - JSON of the product
 * @returns {Error}  default - Unexpected error
 */
router.get("/", produitController.getProducts);
/**
 * @group Product - Operations about product
 * @route GET /products/{id}
 * @param {string} id.params - products_id
 * @returns {object} 200 - JSON of the product
 * @returns {Error}  default - Unexpected error
 */
router.get("/:id", produitController.getProductById);
/**
 * @group Product - Operations about product
 * @route POST /products
 * @param {string} produit_nom.params.required - produit_nom
 * @param {double} produit_prix.params.required - produit_prix
 * @returns {object} 201
 * @returns {Error}  default - Unexpected error
 */
router.post("/", produitController.createProduct);
/**
 * @group Product - Operations about product
 * @route PUT /products/{id}
 * @param {UUID} products_id.query.required - products_id
 * @param {string} produit_nom.params.required - produit_nom
 * @param {string} produit_prix.params.required - produit_prix
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.put("/:id", produitController.updateProduct);
/**
 * @group Product - Operations about product
 * @route DELETE /products/{id}
 * @param {UUID} products_id.query.required - products_id
 * @returns {object} 200
 * @returns {Error}  default - Unexpected error
 */
router.delete("/:id", produitController.destroyProduct);

module.exports = router;
