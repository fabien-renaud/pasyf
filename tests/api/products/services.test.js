/* eslint-disable no-undef */
const sequelize = require("./../../../src/configurations/db");
const ProductService = require("./../../../src/api/products/services");

const product = {
    name: "Magazine : Le petit quotidien du platiste unitaire",
    price: 0.23
};

const product_update = {
    name: "DVD : Jaquie&Michel, la menace java",
    price: 666
};

let id_product = "";

describe("Unit test of Product", () => {
    beforeAll(async () => {
        await sequelize.sync();
    });

    afterAll(() => {
        sequelize.close();
    });

    it("create one", async () => {
        await ProductService.create(product).then(res => {
            expect(res.name).toEqual(product.name);
            expect(res.price).toEqual(product.price);
            id_product = res.id;
        });
    });

    it("get all", async () => {
        await ProductService.getAll().then(res => {
            expect(res.length).toBeGreaterThan(0);
        });
    });

    it("get one", async () => {
        await ProductService.getOneByPk(id_product).then(res => {
            expect(res.name).toEqual(product.name);
            expect(res.price).toEqual(product.price);
        });
    });

    it("get one that doesn't exists", async () => {
        await ProductService.getOneByPk("8261d195-3553-49b3-bdc7-8864e0357c41").then(res => {
            expect(res).toEqual(null);
        });
    });

    it("update one", async () => {
        await ProductService.update(id_product, product_update).then(async res => {
            expect(res.length).toEqual(1);
            await ProductService.getOneByPk(id_product).then(res_updated => {
                expect(res_updated.name).toEqual(product_update.name);
                expect(res_updated.price).toEqual(product_update.price);
            });
        });
    });

    it("delete one", async () => {
        await ProductService.destroy(id_product).then(async res => {
            expect(res).toEqual(1);
            await ProductService.getOneByPk(id_product).then(res_deleted => {
                expect(res_deleted).toEqual(null);
            });
        });
    });
});
