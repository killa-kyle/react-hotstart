import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
    render() {
        return (
            <div>
                <h2>HOME COMPONENT</h2>
                <Link to="/detail">GO TO DETAIL</Link>
            </div>
        );
    }
}
