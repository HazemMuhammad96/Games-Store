import React, { ReactElement } from 'react'
import { useAppFetchSelector } from '../../data/store/hooks'
import FiltersList from './FiltersList'
import { fetchAll, selectFilters } from './filtersSlice'
import styles from "./Filters.module.css";
interface Props {
    className?: any;
}

export default function FiltersAside({className }: Props): ReactElement {
    
    const {filters, loading} = useAppFetchSelector(
        selectFilters,
        fetchAll,
    )

    return (
        <aside className={styles.aside}>
            {
                !loading &&
                <FiltersList
                    title="Genres"
                    filters={filters.genres}
                />
            }
        </aside>
    )
}
