import React, { ReactElement } from 'react'
import { Images } from 'react-bootstrap-icons';
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppFetchSelector } from '../../data/store/hooks';
import LoadingSection from '../common/section/LoadingSection';
import Carousel from '../common/slider/slider'
import styles from "./GameDetails.module.css"
import { add, clear, fetch, selectDetails } from './gameDetailsSlice';
interface Props {

}

export default function GameDetails({ }: Props): ReactElement {

    const params = useParams();

    const { game, loading } = useAppFetchSelector(
        selectDetails,
        fetch,
        { id: params.id },
        // clear,
    )

    const dispatch = useAppDispatch();

    const onAddToCart = () => {

        dispatch(add(game))
    }



    return (
        <section className={styles.container}>
            <LoadingSection
                loading={loading}

            >
                <>
                    <div className={styles.gameHeader}>Name</div>
                    <div className={styles.content}>
                        <div className={styles.carouselContainer}>
                            <Carousel
                                orientation='horizontal'
                                images={game.screenshots?.slice(1, 5)}
                            />
                        </div>

                        <div>
                            <h3>Genres</h3>
                            <div>
                                {
                                    game.genres?.map((genre, i) => (
                                        <button key={i} className='chip'>
                                            {genre.toUpperCase()}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h3>Descreption</h3>
                            <p className={styles.description}>
                                {
                                    game.description
                                }
                            </p>
                        </div>
                    </div>
                    <div className={styles.aside}>
                        <div className={styles.details}>
                            <img src={game.cover} alt="Game Cover" />
                            <div className={`${styles.listItem} ${styles.price}`}>
                                <span>
                                    ${game.price}
                                </span>
                            </div>
                            <button
                                onClick={onAddToCart}>Add to Cart</button>
                            <ul>
                                {
                                    game.details && Object.keys(game.details).map(it => (
                                        <>
                                            <li className={styles.listItem} key={it}>
                                                <span>{it}</span>
                                                <span>{game.details[it]}</span>
                                            </li>
                                            <hr />
                                        </>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </>
            </LoadingSection>
        </section>
    )
}
