import React, { ReactElement } from 'react'
import styles from './Filters.module.css';
interface Props {
    name: string;
    state: boolean;
}

export default function FilterItem({ name, state }: Props): ReactElement {
    return (
        <div className={styles.item}>
            <div>
                {name}
            </div>
            <div>
                {state}
            </div>
        </div>
    )
}
