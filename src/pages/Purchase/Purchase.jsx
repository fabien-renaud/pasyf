import React from 'react';
import {usePurchase} from '../../features';
import {useAuth} from '../../hooks/useAuth';
import {PurchaseTable} from './PurchaseTable';

export const Purchase = () => {
    const {user} = useAuth();
    const {purchases} = usePurchase(user.sub);
    return (
        <section role="main" className="container">
            <h1>Historique d'achat</h1>
            <PurchaseTable purchases={purchases} />
        </section>
    );
};
