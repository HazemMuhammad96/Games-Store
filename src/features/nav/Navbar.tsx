import React, { ReactElement } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import NavItem from './NavItem'
import styles from "./Navbar.module.css";
import SearchBar from '../searchbar/SearchBar';
import { BoxArrowInRight as LoginIcon } from "react-bootstrap-icons"
import { useScrollPositionListener } from '../../utils/hooks/uiHook';
interface Props {
    routes: { path: string, name: string }[]
}

export default function Navbar({ routes }: Props): ReactElement {

    const navigate = useNavigate();
    const [navState, setNavState] = React.useState('clipped');

    function handleNavSticky(position) {
        if (position > 30) {
            setNavState('floating');
        } else {
            setNavState("clipped");
        }
    }
    useScrollPositionListener(
        (position) => {
            handleNavSticky(position);
        }
    )

    return (
        <nav className={styles[navState]}>
            <div className='navContent'>


                <ul className={styles.itemsList}>
                    {
                        routes.map((route, index) => (
                            <NavItem route={route} key={index} />
                        ))
                    }
                </ul>
                <div className={styles.left}>
                    
                    <button className="clear"
                        onClick={() => {
                            navigate("login")
                        }}
                    >
                            {<LoginIcon />}
                        </button>
                    
                    <SearchBar onSearch={(Search) => {
                        if (Search)
                            navigate(`/browse?search=${Search}`);
                        else
                            navigate(`/browse`);
                    }} />
                </div>
            </div>
        </nav>
    )
}
