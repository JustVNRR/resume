import React from 'react';
import Experience from '../components/knowledges/Experience';
// import Hobbies from '../components/knowledges/Hobbies';
import Education from '../components/knowledges/Education';
import Languages from '../components/knowledges/Languages';
import Navigation from '../components/Navigation';
import OtherSkills from '../components/knowledges/OtherSkills';

const Knowledges = () => {
    return (
        <div className="knowledges">
            <Navigation/>
            <div className="knowledgesContent">
                <Languages/>
                <Experience/>
                <OtherSkills/>
                <Education/>
            </div>
        </div>
    );
};

export default Knowledges;