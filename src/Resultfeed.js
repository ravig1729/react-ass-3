import React, { Component } from 'react'
import './Style.css'

class Resultfeed extends Component {

    render() {

        return (
            <div className='feedback'>
                <h1 id="heading">EMPLOYEE FEEDBACK DATA</h1>
                <br></br>
                <div id="feedsys">
                    {this.props.feedback.map((value, index) => {
                        return (
                            <p id="details">
                                Name: {value.name} || Department:{value.department} || Rating:{value.rating}
                            </ p>
                        )
                    })}
                </div>
                <div className="back">
                    <button id="backbut" onClick={() => this.props.back()}>Go Back</button>
                </div>
            </div>
        )
    }
}

export default Resultfeed