import React from 'react';
import Navigation from '../components/Navigation';
import Matrix from '../components/Home/Matrix';
const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <Matrix message="HELLO WORLD" container =".homeContent" font="pixel" fontSize="14" fps="24" />
            </div>
        </div>
    );
};

export default Home;