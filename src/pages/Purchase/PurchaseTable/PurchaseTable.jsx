import React from 'react';

export const PurchaseTable = (props) => {
    const {purchases} = props;
    return (
        <table className="highlight">
            <thead>
            <tr>
                <th>ID Client</th>
                <th>ID Produit</th>
                <th>Date d'achat</th>
            </tr>
            </thead>
            <tbody>
            {purchases.map((purchase) => {
                return (
                    <tr key={purchase.id}>
                        <td>{purchase.customerId}</td>
                        <td>{purchase.productId}</td>
                        <td>{new Date(purchase.createdAt).toLocaleString()}</td>
                    </tr>)
            })}
            </tbody>
        </table>
    );
};
