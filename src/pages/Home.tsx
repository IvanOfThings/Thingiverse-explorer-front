import React from 'react';
import { ThingsList } from '../components/ThingsList';
import { ThingProps } from '../components/Thing';
import { Title } from '../components/Title';

type HomeState = {
    results: ThingProps[]
};

export class Home extends React.Component<{}, HomeState> {



    render() {
        return (
            <div>
                <Title>Thingiverse Explorer</Title>
                <ThingsList things={[

                    {
                        "id": 3505423,
                        "name": "Flexi-Dragon",
                        "thumbnail": "https://cdn.thingiverse.com/renders/de/a9/de/6e/0e/f5a4c1e06d51dfad34f6ac4ac8e4593a_thumb_medium.jpg",
                        "like_count": 2334,
                        "creator": {
                            "id": 1873119,
                            "name": "feketeimre",
                            "first_name": "Fekete",
                            "last_name": "Imre",
                            "url": "https://api.thingiverse.com/users/feketeimre",
                            "public_url": "https://www.thingiverse.com/feketeimre",
                            "thumbnail": "https://cdn.thingiverse.com/renders/13/dc/6b/9d/53/a30853d153670ad81b545fbf39edcadc_thumb_medium.jpg"
                        }
                    },
                    {
                        "id": 3495390,
                        "name": "Cute Mini Octopus ",
                        "thumbnail": "https://cdn.thingiverse.com/renders/bd/3c/8b/bd/34/79ce327ccf19c444d662164138038e4b_thumb_medium.jpg",
                        "like_count": 2334,
                        "creator": {
                            "id": 1298537,
                            "name": "3DPRINTINGWORLD",
                            "first_name": "John",
                            "last_name": "Mulac",
                            "url": "https://api.thingiverse.com/users/3DPRINTINGWORLD",
                            "public_url": "https://www.thingiverse.com/3DPRINTINGWORLD",
                            "thumbnail": "https://cdn.thingiverse.com/renders/9c/c6/e4/23/2b/5a26c306e604ef74e9595ca2ed1619d4_thumb_medium.jpg"
                        }
                    },
                    {
                        "id": 3576952,
                        "name": "Flexi Cat",
                        "thumbnail": "https://cdn.thingiverse.com/renders/4e/6e/66/4c/c9/ad87e30916ccdc6f727acd24f517d257_thumb_medium.jpg",
                        "like_count": 2334,
                        "creator": {
                            "id": 1850704,
                            "name": "KerberosFI",
                            "first_name": "Ville",
                            "last_name": "Kivioja",
                            "url": "https://api.thingiverse.com/users/KerberosFI",
                            "public_url": "https://www.thingiverse.com/KerberosFI",
                            "thumbnail": "https://cdn.thingiverse.com/renders/3c/06/61/9d/86/d6882b47091bbed33d552bba84bc13d1_thumb_medium.jpg"
                        }
                    },
                    {
                        "id": 3597069,
                        "name": "Collapsing Pirate Sword (Print in Place)",
                        "thumbnail": "https://cdn.thingiverse.com/renders/00/76/87/46/0b/b9acced48bcbc5628ba3d823d1cf984f_thumb_medium.JPG",
                        "like_count": 2334,
                        "creator": {
                            "id": 1298537,
                            "name": "3DPRINTINGWORLD",
                            "first_name": "John",
                            "last_name": "Mulac",
                            "url": "https://api.thingiverse.com/users/3DPRINTINGWORLD",
                            "public_url": "https://www.thingiverse.com/3DPRINTINGWORLD",
                            "thumbnail": "https://cdn.thingiverse.com/renders/9c/c6/e4/23/2b/5a26c306e604ef74e9595ca2ed1619d4_thumb_medium.jpg"
                        }
                    }

                ]} />
            </div>
        );
    }
}

