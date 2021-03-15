import React, { Component } from 'react';
import { Menu } from '../asset/styles/styles'
import logo from '../asset/img/logo.png';

export class Main extends Component {
    render(){
        return(
            <Menu id="nav">
                <div className="bt-menu" onClick={openMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="logo"><img src={logo} alt="SpaceX"/></div>
                <div className="menus">
                    <div>
                        <a href="/lancamentos" id="linklancamento" title="Lançamentos"><span>Lançamentos</span></a>
                        <a href="/foguetes" id="linkfoguetes" title="Foguetes"><span>Foguetes</span></a>
                        <a href="/equipe" id="linkequipe" title="Equipe"><span>Equipe</span></a>
                    </div>
                    <a href="/novos-lancamentos" id="linknovos-lancamentos" title="Novos Lançamentos"><span>Novos Lançamentos</span></a>
                </div>
            </Menu>
        )
        function openMenu(){
            var nav = document.getElementById("nav");
            var urlpath = window.location.pathname;

            urlpath = urlpath.replace("/", "");
            console.log(urlpath)

            var opt = document.getElementById("link"+urlpath);

            opt.classList.add("select");
            nav.classList.toggle("open");
        }
    }
}

export default Main;