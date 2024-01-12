import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state =
        {
            languages: [
                { id: 1, value: "C#", xp: 3 },
                { id: 2, value: "C++", xp: 1 },
                { id: 3, value: "Java", xp: 2 },
                { id: 4, value: "SQL", xp: 2 },
                { id: 5, value: "Javascript", xp: 2 },
                { id: 6, value: "Css", xp: 1 },
                { id: 7, value: "Python", xp: 1 }
            ],
            frameworks: [
                { id: 1, value: ".Net Framework/Core", xp: 1.9 },
                { id: 2, value: "Spring Boot", xp: 1.3 },
                { id: 3, value: "React", xp: 1 },
                { id: 4, value: "Vue.js", xp: 1 },
                { id: 5, value: "Bootstrap", xp: 1.5 },
                { id: 6, value: "SQL server", xp: 1.7 },
                { id: 7, value: "MySQL", xp: 1.3 }
            ]
        }
    render() {

        let {languages, frameworks} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar languages={languages} className="languagesDisplay" title="langages"/>
                <ProgressBar languages={frameworks} className="frameworksDisplay" title="frameworks, sgbd & co"/>
            </div>
        );
    }
}

export default Languages;