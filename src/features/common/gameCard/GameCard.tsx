import React, { ReactElement } from 'react'
import styles from "./GameCard.module.css"

interface Props {
    cover: string;
    title: string;
    price: number;
}

export default function GameCard({cover, title, price}: Props): ReactElement {
    return (
        <div className={styles.wrapper}>
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




