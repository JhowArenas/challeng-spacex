import React, { Component, Fragment } from 'react';
import GetLaunches from '../components/GetData/GetLaunches';
import TopBar from '../components/TopBar'

export class Rockets extends Component {
    render(){
        return(
            <Fragment>
                <TopBar name="Todos Lançamentos"/>
                <GetLaunches/>
            </Fragment>
        )
    }
}

export default Rockets;