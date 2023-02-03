import React from 'react';
import Navigation from '../components/Navigation';

const Networks = () => {
    return (
        <div className="networks">
            <Navigation />
            <div className="networksContent">
                <ul >
                    <li>
                        <a href="https://linkedin.com/in/lionel-b-837660201" target="_blank" rel="noreferrer"><i className="fab fa-linkedin" /></a>
                    </li>
                    <li>
                        <a href="https://github.com/JustVNRR" target="_blank" rel="noreferrer"><i className="fab fa-github" /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/lionel_bos" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
                    </li>
                    <li>
                        <a href="https://codepen.io/JustVNRR/pens/public" target="_blank" rel="noreferrer"><i className="fab fa-codepen" /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Networks;