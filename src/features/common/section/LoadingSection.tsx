import React, { ReactElement } from 'react'
import { PropagateLoader } from 'react-spinners'
import styles from './LoadingSection.module.css'
interface Props {
    loading: boolean;
    empty?: boolean;
    children: ReactElement;

}

export default function LoadingSection({ loading, empty, children, ...props }: Props): ReactElement {
    return (
        <div {...props}>
            {loading ?
                <div className={styles.loadingWrapper}>
                    <PropagateLoader />
                </div>
                :
                empty ?
                    <div className={styles.loadingWrapper}>
                        No Result Found!
                    </div>
                    :
                    children
            }
        </div>
    )
}
