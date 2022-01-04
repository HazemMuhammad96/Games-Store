import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppFetchSelector } from '../../data/store/hooks';
import LoadingSection from '../common/section/LoadingSection';
import styles from "./cart.module.css";
import { clearCart, fetchAll, selectCart } from './cartSlice';
export default function Cart() {


    const {
        cart,
        loading,
    } = useAppFetchSelector(
        selectCart,
        fetchAll,
        undefined,
        false,
    )

    const [price, setprice] = useState({ price: 0, tax: 0 })


    React.useEffect(() => {
        const rawPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
        setprice((
            {
                price: rawPrice,
                tax: rawPrice * 0.1,
            }
        ));

        
    })

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    function onCheckout() {
        dispatch(clearCart());
        alert('Checkout Successful');
        navigate("/")

    }
    return (
        <div>
            <LoadingSection
                loading={loading}
                empty={cart.length === 0}
                msg={"No items in cart"}
            >
                <>
                    <h1 >My Cart</h1>
                    <div className={styles.gridContainer}>

                        <div className={styles.left}>
                            {
                                cart && cart.map((it: any, i: number) => (
                                    <div className={styles.card}>
                                        <img className={styles.img}
                                            src={it.cover}
                                            alt="" />
                                        <span className={styles.heading}>{
                                            it.name
                                        }</span>
                                        <div className={styles.price}>${it.price}</div>

                                    </div>
                                ))
                            }
                        </div>
                        <div className={styles.right}>
                            <h3>Games and Apps Summary</h3>
                            <h4>Price: {price.price}</h4>
                            <h4>Taxes: {price.tax}</h4>
                            <h4>subtotal: {price.price + price.tax}</h4>
                            <button onClick={onCheckout}>Checkout</button>

                        </div>
                    </div>
                </>
            </LoadingSection>
        </div>
    )
}
