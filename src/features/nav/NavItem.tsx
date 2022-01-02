import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./Navbar.module.css";

interface Props {
    route: {path, name}
}

export default function NavItem({route}: Props): ReactElement {
    return (
        <li className={styles.item}>
            <NavLink
                className={(state) =>
                    state.isActive ? styles.active : styles.inactive
                }
                to={route.path}
            >
                {route.name}
            </NavLink>
        </li>
    )
}
