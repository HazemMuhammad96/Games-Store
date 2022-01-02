import React, { ReactElement } from 'react'
import FilterItem from './FilterItem'

interface Props {
    title: string;
    filters: any;
}

export default function FiltersList({ title, filters, ...props }: Props): ReactElement {
    return (
        <div>
            <div>
                {filters.map((it: any, index) => (
                    <FilterItem
                        key={index}
                        name={it.name}
                        state={it.state}
                    />
                ))}
            </div>
        </div>
    )
}

