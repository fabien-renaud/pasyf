/* eslint-disable no-undef */
const app = require("./../../../src/server");
const sequelize = require("./../../../src/configurations/db");
const supertest = require("supertest");

const request = supertest(app);

const product = {
    name: "Magazine : Le petit quotidien du platiste",
    price: 0.23
};

const mock_id = "ede61974-df03-4cc1-ae2a-d4a076bf2bd3";

describe("Starting client http requests", () => {
    beforeAll(async () => {
        await sequelize.sync();
    });

    afterAll(() => {
        sequelize.close();
    });

    it("POST /purchases", async () => {
        const res_product = await request.post("/products").send(product);

        const purchase = {
            customerId: "lemoche",
            productId: res_product.body.id
        };

        const res_purchase = await request.post("/customers/lemoche/purchases").send(purchase);

        expect(res_purchase.status).toEqual(201);
        expect(res_purchase.body.productId).toEqual(purchase.productId);

        id_purchase = res_purchase.body.id;
    });

    it("GET /purchases", async () => {
        const res_purchases = await request.get("/customers/lemoche/purchases");

        expect(res_purchases.status).toEqual(200);
        expect(res_purchases.body.length).toBeGreaterThan(0);
    });

    it("GET /purchases/id", async () => {
        const res_purchase = await request.get(`/customers/lemoche/purchases/${id_purchase}`);

        expect(res_purchase.status).toEqual(200);
        expect(res_purchase.body.id).toEqual(id_purchase);
    });

    it("GET /purchases/wrong id", async () => {
        const res_purchase = await request.get(`/customers/lemoche/purchases/${mock_id}`);

        expect(res_purchase.status).toEqual(404);
    });

    it("PUT /purchases", async () => {
        const res_purchase = await request.get(`/customers/lemoche/purchases/${id_purchase}`);

        expect(res_purchase.status).toEqual(200);

        let purchase_to_updated = res_purchase.body;
        purchase_to_updated.customerId = "lethon";

        const res_purchase_updated = await request.put(`/customers/lemoche/purchases/${id_purchase}`).send(purchase_to_updated);

        expect(res_purchase_updated.status).toEqual(200);
    });

    it("DELETE /purchases", async () => {
        const res_purchase_deleted = await request.delete(`/customers/lemoche/purchases/${id_purchase}`);

        expect(res_purchase_deleted.status).toEqual(204);

        const res_purchase = await request.get(`/customers/lemoche/purchases/${id_purchase}`);

        expect(res_purchase.status).toEqual(404);
    });
});
