import React, { Component } from 'react';

class Testimonial extends Component {

    render() {

        let { formation, text, prenom, date } = this.props.item;

        return (
            <div className="testimonial">
                <div className="wrapper">
                <p>{text}</p>
                <ul>
                    <li>{prenom}, {date} ({formation})</li>
                </ul>
                </div>
                </div>
        );
    }
}

export default Testimonial;