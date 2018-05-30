import React, {
    Component
} from 'react';

class Films extends Component {
    constructor(props) {
        super(props);
        this.state = {
            film1: {
                titre: "batman",
                note: 4,
                description: "un film de Batman",
                pochette: "https://media.senscritique.com/media/000012723320/source_big/Batman.jpg"
            },
            film2: {
                titre: "batman robin",
                note: 3,
                description: "un autre film de Batman",
                pochette: "https://i2.cdscdn.com/pdt2/5/8/4/1/700x700/auc2009958396584/rw/affiche-batman-robin-arnold-schwarzenegger.jpg"
            },
            film3: {
                titre: "catwoman",
                note: 1,
                description: "il y a Halle Berry",
                pochette: "http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/23/93/18378823.jpg"
            },
            film4: {
                titre: "avenger",
                note: 4,
                description: "hmm Scarlett",
                pochette: "https://ae01.alicdn.com/kf/HTB1OEShOFXXXXcEXVXXq6xXFXXXA/Peinture-Murale-personnalis-e-Lego-Papier-Peint-Lego-Affiche-Thor-Autocollant-Marvel-Comics-Super-H-ros.jpg_640x640.jpg"
            },
            film5: {
                titre: "star wars",
                note: 5,
                description: "star wars avec yoda",
                pochette: "https://i2.cdscdn.com/pdt2/3/7/6/1/700x700/clo4035519445376/rw/poster-star-warsl-empire-contre-attaque-couvert.jpg"
            },
            film6: {
                titre: "fight club",
                note: 5,
                description: "Edward Norton se bat contre Brad Pitt",
                pochette: "https://media.senscritique.com/media/000014744218/source_big/Fight_Club.jpg"
            },
            film7: {
                titre: "tous en scene",
                note: 3,
                description: "Scarlett chante dedans",
                pochette: "https://pmcdn.priceminister.com/photo/tous-en-scene-sing-affiche-originale-de-cinema-format-120x160-cm-un-film-de-garth-jennings-avec-les-voix-de-patrick-bruel-jenifer-bartoli-elodie-martelet-laurent-gerra-annee-2017-1103005488_ML.jpg"
            }
            // film8: {
            //     titre: "batman robin",
            //     note: 3,
            //     description: "un autre film de Batman",
            //     pochette: "https://i2.cdscdn.com/pdt2/5/8/4/1/700x700/auc2009958396584/rw/affiche-batman-robin-arnold-schwarzenegger.jpg"
            // },
            // film9: {
            //     titre: "catwoman",
            //     note: 1,
            //     description: "un autre film de Batman",
            //     pochette: "http://fr.web.img3.acsta.net/r_1280_720/medias/nmedia/18/35/23/93/18378823.jpg"
            // },
            // film10: {
            //     titre: "batman robin",
            //     note: 3,
            //     description: "un autre film de Batman",
            //     pochette: "https://i2.cdscdn.com/pdt2/5/8/4/1/700x700/auc2009958396584/rw/affiche-batman-robin-arnold-schwarzenegger.jpg"
            // },
            // film11: {
            //     titre: "batman robin",
            //     note: 3,
            //     description: "un autre film de Batman",
            //     pochette: "https://i2.cdscdn.com/pdt2/5/8/4/1/700x700/auc2009958396584/rw/affiche-batman-robin-arnold-schwarzenegger.jpg"
            // },
            // film12: {
            //     titre: "batman robin",
            //     note: 3,
            //     description: "un autre film de Batman",
            //     pochette: "https://i2.cdscdn.com/pdt2/5/8/4/1/700x700/auc2009958396584/rw/affiche-batman-robin-arnold-schwarzenegger.jpg"
            // }
        };
    }
    render() {
        return <div >
            <
            p > {
                this.state.film1.titre
            } < /p> </div >

    }
}

export default Films;