import React, { ReactElement } from 'react'
import GameCard from '../common/gameCard/GameCard';
import { useAppFetchSelector } from '../../data/store/hooks'
import { fetchAll, GameState, selectGames } from './gamesSlice';
import styles from "./GamesPage.module.css";
import FiltersAside from '../filters/FiltersAside';
import LoadingSection from '../common/section/LoadingSection';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery, useSelectedQuery } from '../../utils/hooks/routerHooks';
import SearchBar from '../searchbar/SearchBar';
interface Props {

}

export default function GamesPage({ }: Props): ReactElement {

    const query = useSelectedQuery(['search', 'filter']);

    const { games, loading } = useAppFetchSelector<GameState>(
        selectGames,
        fetchAll,
        query
    );

    return (
        <section className={styles.container}
        >
            <LoadingSection
                loading={loading}
                empty={games.length === 0}
            >

                <div className={styles.list}>
                    {
                        games.map((it: any) => (
                            <GameCard
                                key={it._id}
                                title={it.name}
                                cover={it.cover}
                                price={it.price}
                            />
                        ))
                    }
                </div>



            </LoadingSection>

            <div className={styles.filters}>
                <FiltersAside />
            </div>
        </section>
    )
}
