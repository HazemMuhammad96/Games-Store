import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import GameCard from './GameCard'

interface Props {
    game: any
}

export default function ClickableGameCard({ game, }: Props): ReactElement {

    const navigate = useNavigate();
    return (
        <GameCard
            cover={game.cover}
            title={game.name}
            price={game.price}
            onClick={() => {
                navigate(`${game._id}`);
            }}
        />
    )
}
