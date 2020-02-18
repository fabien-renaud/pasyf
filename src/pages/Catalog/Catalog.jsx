import React from 'react';
import {useProduct} from '../../features';
import {CatalogTable} from './CatalogTable';

export const Catalog = () => {
    const {products} = useProduct();
    return (
        <section role="main" className="container">
            <h1>Liste des produits</h1>
            <CatalogTable products={products} />
        </section>
    );
};
