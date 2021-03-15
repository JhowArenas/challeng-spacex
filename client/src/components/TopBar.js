import { Component } from 'react';
import { TopBar } from '../asset/styles/styles'

export class topBar extends Component {
    render(){
        return(
            <TopBar>
                <h1>{this.props.name}</h1>
                <div className="content">
                    <div className="searchContent">
                        <input type="text" name="search" placeholder="buscar..." />
                        <div className="bt-search" onClick={searchFunc}>
                            <svg viewBox="0 0 32 32"><path d="M22 2l-10 10h-6l-6 8c0 0 6.357-1.77 10.065-0.94l-10.065 12.94 13.184-10.255c1.839 4.208-1.184 10.255-1.184 10.255l8-6v-6l10-10 2-10-10 2z"></path></svg>                
                        </div>
                    </div>
                </div>
            </TopBar>
        )
        function searchFunc() {
           alert('Search Not Working Yet, Sorry :(');
        }
    }
}

export default topBar;

