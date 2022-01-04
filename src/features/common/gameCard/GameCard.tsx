import React, { ReactElement } from 'react'
import styles from "./GameCard.module.css"

interface Props {
    cover: string;
    title: string;
    price: number;
    onClick?: () => void;
}

export default function GameCard({cover, title, price, ...props}: Props): ReactElement {
    return (
        <div className={styles.wrapper} {...props}>
            <div className={styles.cover}>
                <img src={cover} alt="Game Cover"/>
            </div>
            <div className={styles.title}>
                {title}
            </div>
            <div className={styles.secondary}>
                ${price}
            </div>
        </div>
    )
}




