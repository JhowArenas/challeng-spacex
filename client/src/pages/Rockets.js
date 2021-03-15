import React, { Component, Fragment } from 'react';
import GetRockets from '../components/GetData/GetRockets';
import TopBar from '../components/TopBar'

export class Rockets extends Component {
    render(){
        return(
            <Fragment>
                <TopBar name="Foguetes"/>
                <GetRockets/>
            </Fragment>
        )
    }
}

export default Rockets;