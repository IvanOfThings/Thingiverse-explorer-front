/*import React, { Component } from 'react';

import { ButtonBackToHome } from '../components/ButtonBackToHome';
import { Thing } from '../common/types/Thing';

const API_KEY = 'ca16a425';

type DetailsProps = {
    id: number
}

interface State {
    name: string,
    imageUrl: string
}

export default class Detail extends Component<DetailsProps, State>{


    state: State = {
        imageUrl: "",
        name: ""
    };

    constructor(props: DetailsProps) {
        super(props)
    }*/
    /*
        _fetchThing_old = ({ id }) => {
            fetch(`https://api.thingiverse.com/things/${id}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(response.statusText)
                    }
                    return response.json<{ data: T }>()
                })
                .then(data => {
                    return data.data
                })
                .catch((error: Error) => {
                    externalErrorLogging.error(error) /* <-- made up logging service *
                    throw error /* <-- rethrow the error so consumer can still catch it *
                })
    
                .then(res => {
                    return res.json();
                })
                .then(movie => {
                    console.log({ movie });
                    this.setState({ movie });
                });
        }*/
/*

    _fetchThing = (id: number) => {

        fetch(`https://api.thingiverse.com/things/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                return response.json<>()
            })
            .then(data => {
                this.setState({ imageUrl: data.thumbnail });
            })
            .catch((error: Error) => {
                //externalErrorLogging.error(error) /* <-- made up logging service *//*
                throw error 
            })

    }


    componentDidMount() {
        console.log(this.props);
        const { id } = this.props.id;
        this._fetchThing(id);
    }

    render() {
        const { imageUrl, name } = this.state;
        return (
            <div>
                <ButtonBackToHome />
                <h1>{name}</h1>
                <img src={imageUrl} alt={name} />
            </div>
        );
    }
}
*/