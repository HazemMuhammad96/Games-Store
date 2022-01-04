import React, { ReactElement } from 'react'
import { PropagateLoader } from 'react-spinners'
import styles from './LoadingSection.module.css'
interface Props {
    loading: boolean;
    empty?: boolean;
    children: ReactElement;
    msg?: string;
}

export default function LoadingSection({ loading, empty, children, msg, ...props }: Props): ReactElement {
    return (
        <>
            {loading ?
                <div className={styles.loadingWrapper}>
                    <PropagateLoader />
                </div>
                :
                empty ?
                    <div className={styles.loadingWrapper}>
                        {
                            msg ? msg : 'No Result Found!'
                        }
                    </div>
                    :
                    children
            }
        </>
    )
}
