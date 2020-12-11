import React, { Component } from 'react';

import api from "../../services/api";

export default class Main extends Component {
    componentDidMount() {
        this.loadProduts();
    }

    loadProduts = () => {
        const response = await api.get('/products');

        console.log(response);
    };

    render() {
        return <h1>Ola mundo!</h1>
    }
}