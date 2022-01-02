import React from "react";
import { useLocation } from "react-router-dom";

export function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

export function useSelectedQuery(selection) {
    const query = useQuery();

    const [state, setState] = React.useState<{}>(
        reload({})
    );


    function reload(current) {
        let values = current;

        selection.forEach(it => {
            if (!(values[it] == query.get(it))) {
                values = ({ ...values, [it]: query.get(it) })
            }
                
        });

        return values;
    }

    React.useEffect(() => setState(
        prev => reload(prev)
    ), [query]);



    return state;
}