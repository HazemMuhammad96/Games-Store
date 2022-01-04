import React, { ReactElement } from 'react'
import { useAppFetchSelector } from '../../data/store/hooks';
import ClickableGameCard from '../common/gameCard/ClickableGameCard';
import GameCard from '../common/gameCard/GameCard';
import LoadingSection from '../common/section/LoadingSection';
import Carousel from '../common/slider/slider';
import styles from "./DiscoverPage.module.css"
import { fetchAll, selectDiscover } from './discoverSlice';


interface Props {

}

export default function DiscoverPage({ }: Props): ReactElement {

    const {
        data,
        loading,
    } = useAppFetchSelector(
        selectDiscover,
        fetchAll,
        undefined,
        false,
    )

    return (
        <section>
            {/* <div className={styles.Backgrond}><img src='https://cdn1.epicgames.com/b0ebefb11a9145488af78f6d2488afff/offer/EGS_NeonAbyss_VeewoGames_S1-2560x1440-a5d38c2d5a422a1c7682082d64343e2b.jpg'></img>
            </div> */}
            <LoadingSection
                loading={loading}
                empty={false}
            >
                <>
                    <div className={styles.carouselContainer}>
                        <Carousel
                            orientation='vertical'
                            images={data.featured}
                        />
                    </div>



                    <div>
                        {
                            data.groups && Object.values(data.groups)?.map((it: any, i: number) => {

                                return (
                                    <div className={styles.featured}>
                                        <div className={styles.SeeMore}>
                                            <h2>{it.name}</h2>
                                            <button>See More</button>
                                        </div>
                                        <div className={styles.NewReleases}>
                                            {
                                                it.games.map((game: any, i: number) => (
                                                    <ClickableGameCard
                                                        game={game}
                                                        key={i}
                                                    />
                                                ))
                                            }


                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>

                </>
            </LoadingSection>

        </section>

    )
}