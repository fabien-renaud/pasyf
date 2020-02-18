import React from 'react';

export const CatalogTable = (props) => {
    const {products} = props;
    return (
        <table className="highlight">
            <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
            </thead>
            <tbody>
            {products.map((product) => {
                return (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.price.toFixed(2)} €</td>
                    </tr>)
            })}
            </tbody>
        </table>
    );
};
