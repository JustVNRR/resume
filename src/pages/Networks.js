import React from 'react';
import Navigation from '../components/Navigation';

const Networks = () => {
    return (
        <div className="networks">
            <Navigation />
            <div className="networksContent">
                <div className="content">
                     <ul >
                        <li>
                            <a href="https://linkedin.com/in/lionel-b-837660201" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
                        </li>
                        <li>
                            <a href="https://github.com/JustVNRR" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                        </li>
                        <li>
                            <a href="https://google.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Networks;