import React from 'react'
require('../styles/style.scss');

export default React.createClass({
  render() {
    return (
        <div className='main-container'>
            <h1>REACT APP</h1>
            <hr/>
            {this.props.children}
        </div>
    )
  }
})
