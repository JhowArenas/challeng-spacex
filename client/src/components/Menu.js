import React, { Component } from 'react';
import { Menu } from '../asset/styles/styles'
import logo from '../asset/img/logo.png';

export class Main extends Component {
    constructor(props) {
        super(props);

        var urlpath = window.location.pathname;
        urlpath = urlpath.replace("/", "");

        if(urlpath !== ""){
            this.state = { menu:"close", url: urlpath };
        } else {
            this.state = { menu:"close", url: urlpath };
        }
    }
    render(){
        return(
            <Menu className={this.state.menu}>
                <div className="bt-menu" onClick={() => this.state.menu === 'close' ? this.setState({menu:'open'}) : this.setState({menu:'close'}) }>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="logo"><img src={logo} alt="SpaceX"/></div>
                <div className="menus">
                    <div>
                        <a href="/lancamentos" className={ this.state.url === 'lancamentos' ? 'select' : '' } title="Lançamentos"><span>Lançamentos</span></a>
                        <a href="/foguetes"  className={ this.state.url === 'foguetes' ? 'select' : '' } title="Foguetes"><span>Foguetes</span></a>
                        <a href="/equipe" className={ this.state.url === 'equipe' ? 'select' : '' } title="Equipe"><span>Equipe</span></a>
                    </div>
                    <a href="/novos-lancamentos" className={ this.state.url === 'novos-lancamentos' ? 'select' : '' } title="Novos Lançamentos"><span>Novos Lançamentos</span></a>
                </div>
            </Menu>
        )
    }
}

export default Main;