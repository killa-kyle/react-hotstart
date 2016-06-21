import React, { Component } from 'react';
import { Link } from 'react-router'

export default class Detail extends Component {
    render() {
        return (
            <div>
                <h2>DETAIL COMPONENT</h2>
            <Link to="/">BACK TO HOME</Link>
            </div>
        );
    }
}
