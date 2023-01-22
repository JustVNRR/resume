import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const Home = () => {
    return (
        <div className="home">
            <Navigation />
            <div className="homeContent">
                <div className="content">
                    <h1>Just VNR</h1>
                     <ul >
                        <li>
                            <CopyToClipboard text="XXXXXXXXXX">
                                <span className="clickInput tooltip" >XX XX XX XX XX</span>
                            </CopyToClipboard>
                        </li>
                        <li>
                            <CopyToClipboard text="xxxxxxxxx.com">
                                <span className="clickInput tooltip" >xxxxxxxxx@gmail.com</span>
                            </CopyToClipboard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Home;