import React, { Component, Fragment } from 'react';
import GetCrew from '../components/GetData/GetCrew';
import TopBar from '../components/TopBar'

export class Crew extends Component {
    render(){
        return(
            <Fragment>
                <TopBar name="Pessoas da Equipe"/>
                <GetCrew/>
            </Fragment>
        )
    }
}

export default Crew;