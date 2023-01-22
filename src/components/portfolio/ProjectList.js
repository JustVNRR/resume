import React, { Component } from 'react';
import { portfolioData } from '../../data/portfolioData';
import Project from './Project';

class ProjectList extends Component {

    state = {
        projects: portfolioData,
        radios: [
            { id: 1, value: "all", icone:<i className="fas fa-check-circle"></i>},
            { id: 2, value: "javascript", icone: <i className='fab fa-js'></i> },
            { id: 3, value: "css", icone: <i className='fab fa-css3-alt'></i> },
            { id: 4, value: "react", icone: <i className='fa fa-react'></i> },
            { id: 5, value: "php", icone: <i className='fa fa-php'></i> },
            { id: 6, value: "node", icone: <i className='fab fa-node-js'></i> },
            { id: 7, value: "c#", icone: <i className='fa fa-csharp'></i> },
            { id: 8, value: "c", icone: <i className='fa fa-c'></i> }
        ],
        selectedRadio: "all"
    };

    handleRadio = (event) => {
        let radio = event.target.value;
        this.setState({selectedRadio: radio})
    }
    render() {

        let { projects, radios, selectedRadio } = this.state;

        return (
            <div className="portfolioContent">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) => {
                            return (   
                                <li key={radio.id}>
                                    <input
                                        type="radio"
                                        name="radio"
                                        checked={radio.value === selectedRadio}
                                        value={radio.value}
                                        id={radio.value}
                                        onChange={this.handleRadio} />
                                    <label htmlFor={radio.value}>{radio.icone ? radio.icone : radio.value}</label>
                                </li>
                            )
                        }) 
                    }
                </ul>

                <div className="projects">
                    {
                        projects
                        .filter(item => { return selectedRadio === "all" ? item : item.languages.includes(selectedRadio)})
                        .map(item => {
                            return (
                                <Project key={item.id} item={item} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default ProjectList;