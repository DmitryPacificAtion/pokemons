import React, {Component} from 'react';
import './Header.scss';
import {connect} from "react-redux";
import {fetchData} from "../../Actions/actions";

const List = ({items, getData}) => {
    return items.map(title => {
        return <li key={title} className="menu-item">
            <a href="#" className="menu-item__link"
               onClick={(e) => {
                   e.preventDefault();
                   getData(title.toLowerCase() + '/1')
               }}>{title}</a>
        </li>
    })
};

class Header extends Component {
    render() {
        let payload = this.props.payload;
        let list = '';
        if (typeof payload === "object" && Object.keys(payload).length > 0) {
            list = Object.keys(payload).map(endpoint => {
                return <li key={endpoint} className="menu-item">
                    <a href="#" className="menu-item__link"
                       onClick={(e) => {
                           e.preventDefault();
                           this.props.getData(endpoint)
                       }}>{endpoint}</a>
                </li>
            });
        }
        return <div>
            <header><h1>Pokedex</h1></header>
            <nav className="nav-bar">
                <ul className="menu">
                    {list}
                    {/*<List items={[
                        'Berries',
                        'Contests',
                        'Encounters',
                        'Evolution',
                        'Games',
                        'Items',
                        'Machines',
                        'Moves',
                        'Locations',
                        'Pokemon',
                        'Utility'
                    ]} getData={this.props.getData}/>*/}
                </ul>
            </nav>
        </div>
    }
}

export default connect(
    state => {
        return {
            payload: state.payload
        }
    },
    dispatch => {
        return {
            getData: (endpoint) => {
                dispatch(fetchData(endpoint));
            }
        }
    })(Header);