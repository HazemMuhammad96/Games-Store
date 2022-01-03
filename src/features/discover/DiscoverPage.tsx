import React, { ReactElement } from 'react'
import GameCard from '../common/gameCard/GameCard';
import DemoCarousel from '../common/slider/slider';
import styles from "./DiscoverPage.module.css"


interface Props {

}

export default function DiscoverPage({ }: Props): ReactElement {



    return (
        <div>
            {/* <div className={styles.Backgrond}><img src='https://cdn1.epicgames.com/b0ebefb11a9145488af78f6d2488afff/offer/EGS_NeonAbyss_VeewoGames_S1-2560x1440-a5d38c2d5a422a1c7682082d64343e2b.jpg'></img>
            </div> */}
            <DemoCarousel />
            <div className={styles.SeeMore}>
                <h1>New Releases</h1>
                <button>See More</button>
            </div>

            <div className={styles.NewReleases}>
                <GameCard
                    title={"RedAlert"}
                    cover={"https://media.contentapi.ea.com/content/dam/gin/common/packart/command-and-conquer-red-alert-3-gen-packart.jpg"}
                    price={30.00}
                />
                <GameCard
                    title={"Katanta Zero"}
                    cover={"https://www.mobygames.com/images/covers/l/553018-katana-zero-macintosh-front-cover.jpg"}
                    price={30.00}
                />
                <GameCard
                    title={"Hitman 3"}
                    cover={"https://cdn1.epicgames.com/ed55aa5edc5941de92fd7f64de415793/offer/EGS_HITMAN3_IOInteractiveAS_S2-1200x1600-b285fb6eb586113c9479ff33ed646b69.jpg"}
                    price={30.00}
                />
                <GameCard
                    title={"God of war"}
                    cover={"https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7"}
                    price={30.00}
                />
            </div>

        </div>

    )
}