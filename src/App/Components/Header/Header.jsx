import React, {Component} from 'react';
import './Header.scss';
import {connect} from "react-redux";
import {fetchData} from "../../Actions/actions";

class Header extends Component {
    render() {
        let payload = this.props.payload;
        let list = '';
        if (typeof payload === "object" && Object.keys(payload).length > 0) {
            list = Object.keys(payload).map(item => {
                return <li key={item} className="menu-item">
                    <a href="#" className="menu-item__link"
                       onClick={(e) => {
                           e.preventDefault();
                           this.props.getData(item)
                       }}>{item}</a>
                </li>
            });
        }
        return <div>
            <header><h1>Pokedex</h1></header>
            <nav className="nav-bar">
                <ul className="menu">{list}</ul>
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
            getData: (payload) => {
                dispatch(fetchData(payload));
            }
        }
    })(Header);