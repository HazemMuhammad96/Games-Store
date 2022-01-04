import React, { ReactElement } from 'react'
import GameCard from '../common/gameCard/GameCard';
import { useAppFetchSelector } from '../../data/store/hooks'
import { clear, fetchAll, GameState, selectGames } from './gamesSlice';
import styles from "./GamesPage.module.css";
import FiltersAside from '../filters/FiltersAside';
import LoadingSection from '../common/section/LoadingSection';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery, useSelectedQuery } from '../../utils/hooks/routerHooks';
import SearchBar from '../searchbar/SearchBar';
import ClickableGameCard from '../common/gameCard/ClickableGameCard';
interface Props {

}

export default function GamesPage({ }: Props): ReactElement {

    const query = useSelectedQuery(['search', 'filter']);

    const { games, loading } = useAppFetchSelector<GameState>(
        selectGames,
        fetchAll,
        query,
        true,
        clear,
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
                            <ClickableGameCard
                                key={it._id}
                                game={it}
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
