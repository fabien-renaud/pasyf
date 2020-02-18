/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const app = require("./../../../src/server");
const sequelize = require("./../../../src/configurations/db");
const supertest = require("supertest");

const request = supertest(app);

const product_route = "/products";

const product = {
    name: "Magazine : Le petit quotidien du platiste",
    price: 0.23
};

const product_update = {
    name: "DVD : Jaquie&Michel, la menace fantome",
    price: 666
};

let id_product = "";

const wrong_id = "5a665ae6-6d65-4f37-b384-ec3fee3c83fe";

describe("Starting client http requests", () => {
    beforeAll(async () => {
        await sequelize.sync();
    });

    afterAll(() => {
        sequelize.close();
    });

    it("POST /products", async () => {
        const res = await request.post(product_route).send(product);

        expect(res.status).toEqual(201);
        expect(res.body.name).toEqual(product.name);
        expect(res.body.price).toEqual(product.price);

        id_product = res.body.id;
    });

    it("GET /products", async () => {
        const res = await request.get(product_route);

        expect(res.status).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });

    it("GET /products/{:id}", async () => {
        const res = await request.get(`${product_route}/${id_product}`);

        expect(res.status).toEqual(200);

        expect(res.body.id).toEqual(id_product);
        expect(res.body.name).toEqual(product.name);
        expect(res.body.price).toEqual(product.price);
    });

    it("GET /products check not found", async () => {
        const res = await request.get(`${product_route}/${wrong_id}`);

        expect(res.status).toEqual(404);
    });

    it("PUT /products", async () => {
        const res = await request.put(`${product_route}/${id_product}`).send(product_update);

        expect(res.status).toEqual(200);

        const res_updated = await request.get(`${product_route}/${id_product}`);

        expect(res_updated.status).toEqual(200);
        expect(res_updated.body.name).toEqual(product_update.name);
        expect(res_updated.body.price).toEqual(product_update.price);
    });

    it("DELETE /products", async () => {
        const res = await request.delete(`${product_route}/${id_product}`);

        expect(res.status).toEqual(204);

        const res_deleted = await request.get(`${product_route}/${id_product}`);

        expect(res_deleted.status).toEqual(404);
    });
});
