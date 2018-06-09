import React, {
    Component
} from 'react';
import "./Films.css"


class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listeFilm: [{
                    titre: "batman",
                    note: 4,
                    description: "un film de Batman",
                    img: "https://media.senscritique.com/media/000012723320/source_big/Batman.jpg"
                },
                {
                    titre: "batman robin",
                    note: 3,
                    description: "un autre film de Batman",
                    img: "https://i2.cdscdn.com/pdt2/5/8/4/1/700x700/auc2009958396584/rw/affiche-batman-robin-arnold-schwarzenegger.jpg"
                },
                {
                    titre: "catwoman",
                    note: 1,
                    description: "il y a Halle Berry",
                    img: "http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/23/93/18378823.jpg"
                },
                {
                    titre: "avenger",
                    note: 4,
                    description: "hmm Scarlett",
                    img: "https://ae01.alicdn.com/kf/HTB1OEShOFXXXXcEXVXXq6xXFXXXA/Peinture-Murale-personnalis-e-Lego-Papier-Peint-Lego-Affiche-Thor-Autocollant-Marvel-Comics-Super-H-ros.jpg_640x640.jpg"
                },
                {
                    titre: "star wars",
                    note: 5,
                    description: "star wars avec yoda",
                    img: "https://i2.cdscdn.com/pdt2/3/7/6/1/700x700/clo4035519445376/rw/poster-star-warsl-empire-contre-attaque-couvert.jpg"
                },
                {
                    titre: "fight club",
                    note: 5,
                    description: "Edward Norton se bat contre Brad Pitt",
                    img: "https://media.senscritique.com/media/000014744218/source_big/Fight_Club.jpg"
                },
                {
                    titre: "tous en scene",
                    note: 3,
                    description: "Scarlett chante dedans",
                    img: "https://pmcdn.priceminister.com/photo/tous-en-scene-sing-affiche-originale-de-cinema-format-120x160-cm-un-film-de-garth-jennings-avec-les-voix-de-patrick-bruel-jenifer-bartoli-elodie-martelet-laurent-gerra-annee-2017-1103005488_ML.jpg"
                }

            ]
        }
    }
    render() {



        return <div >

            <
            h2 > Liste de Films < /h2> 

        {
            /* < div class = "row" >
                <
                div class = "small-10 medium-11 columns" >
                <
                div class = "range-slider"
            data-slider data-options = "display_selector: #sliderOutput3;" >
                <
                span class = "range-slider-handle"
            role = "slider"
            tabindex = "0" > < /span> <
                span class = "range-slider-active-segment" > < /span> <
                /div> <
                /div> <
                div class = "small-2 medium-1 columns" >
                <
                span id = "sliderOutput3" > < /span> <
                /div> <
                /div> */
        }

        <
        div className = 'row' > {
            this.state.listeFilm.map(film =>
                <
                div class = "card offset-1 col-2" >
                <
                img class = "card-img-top"
                src = {
                    film.img
                }
                alt = {
                    film.titre
                }
                height = "auto"
                width = "33rem" / >
                <
                div class = "card-body" >
                <
                h5 class = "card-title" > {
                    film.titre
                } < /h5>  <
                p class = "card-text" > {
                    film.description
                } < /p>   < /
                div > <
                /div>)



            }

            <
            /div> <
            /div> 
        }
    }

    export default Films;