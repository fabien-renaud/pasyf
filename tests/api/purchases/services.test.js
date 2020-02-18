/* eslint-disable no-undef */
const sequelize = require("./../../../src/configurations/db");
const PurchaseService = require("./../../../src/api/purchases/services");
const ProductService = require("./../../../src/api/products/services");

const product = {
    name: "Magazine : Le petit journal du platiste unitaire",
    price: 0.23
};

const customerId = "marc-du-trou";

let purchase = {
    customerId: customerId,
    productId: ""
};

const customerIdUpdated = "petit-boule";

let id_purchase = "";

describe("Unit test of Purchase", () => {
    beforeAll(() => {
        sequelize.sync();
    });

    afterAll(() => {
        sequelize.close();
    });

    it("create one", async () => {
        await ProductService.create(product).then(res => {
            purchase.productId = res.id;
        });

        await PurchaseService.create(purchase).then(res => {
            expect(res.customerId).toEqual(purchase.customerId);
            expect(res.productId).toEqual(purchase.productId);
            id_purchase = res.id;
        });
    });

    it("get all", async () => {
        await PurchaseService.getAll(customerId).then(res => {
            expect(res.length).toBeGreaterThan(0);
        });
    });

    it("get one by id", async () => {
        await PurchaseService.getOneByPk(id_purchase).then(res => {
            expect(res.customerId).toEqual(purchase.customerId);
            expect(res.productId).toEqual(purchase.productId);

            purchase_updated = res;
        });
    });

    it("update", async () => {
        purchase.customerId = customerIdUpdated;

        await PurchaseService.update(id_purchase, purchase).then(async res => {
            expect(res.length).toEqual(1);
            await PurchaseService.getOneByPk(id_purchase).then(res_updated => {
                expect(res_updated.customerId).toEqual(purchase.customerId);
                expect(res_updated.productId).toEqual(purchase.productId);
            });
        });
    });

    it("delete", async () => {
        await PurchaseService.destroy(id_purchase).then(async res => {
            expect(res).toEqual(1);
            await PurchaseService.getOneByPk(id_purchase).then(res_deleted => {
                expect(res_deleted).toEqual(null);
            });
        });
    });
});
