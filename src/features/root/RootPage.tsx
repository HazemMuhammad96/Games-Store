import React, { ReactElement } from 'react'
import {  } from 'react-router-dom'
import Navbar from '../nav/Navbar'

interface Props {
    children: ReactElement

}

export default function RootPage({children}: Props): ReactElement {
    return (
        <div>
            <Navbar
                routes={[{name: "Discover", path: "/"},{name: "Browse", path: "/browse"}]}
            />
            <main>
                {
                    children
                }
            </main>
        </div>
    )
}
