import React, { Component } from 'react';
import { MainContent } from '../asset/styles/styles';
export class Main extends Component {
    render(){
        return(
            <MainContent>
                <h1>Bem vindo(a)</h1>
                <p>Este app, ainda esta em desenvolvimento, mas espero que aproveite a experiencia!</p>
                <img src="https://media.giphy.com/media/lr8IOYVco0lhU0ODiT/giphy.gif"/>
            </MainContent>
        )
    }
}

export default Main;