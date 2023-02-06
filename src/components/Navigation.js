import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { useElementSize } from 'usehooks-ts'
const Navigation = () => {

    // const [sideRef, { height }] = useElementSize();

    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });

    const isSticky = (e) => {
        const header = document.querySelector('.sidebar');
        const scrollTop = window.scrollY;
        scrollTop >= 10 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
    };

    // useEffect(() => {

    //    if(height === 0) return;
    //     document.documentElement.style.setProperty('--sh', `${height}px`);
        
    //   }, [height]);

    return (
        <div className="sidebar" /*ref={sideRef}*/>
            <div className="id">
                <div className="idContent">
                <NavLink exact="true" to="/" activeclassname="navActive">
                    <div className="avatar"></div>
                </NavLink>
                </div>
            </div>

            <div className="navigation">
                <ul>
                    <li>
                        <NavLink exact="true" to="/" activeclassname="navActive">
                            <i className="fas fa-home"></i>
                            <span>Accueil</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/competences" activeclassname="navActive">
                        <i className="fa fa-cogs" aria-hidden="true"></i>
                            <span>Compétences</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/portfolio" activeclassname="navActive">
          
                            <i className="fas fa-images"></i>
                            <span>Portfolio</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact="true" to="/references" activeclassname="navActive">
                            <i className="fas fa-comments"></i>
                            <span>Témoignages</span>
                        </NavLink>
                    </li>
                    <li className="networks-link">
                        <NavLink exact="true" to="/networks" activeclassname="navActive">
                        <i className="fas fa-network-wired"></i>
                            <span>Réseaux</span>
                        </NavLink>
                    </li>
                    {/* <li>
                        <a href="./media/CV.pdf" target="_blank" rel="noopener noreferer">
                            <i className="fa fa-file-pdf"></i>
                            <span>.pdf</span> 
                        </a>
                    </li> */}
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
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
                <div className="signature">
                    <p>Just VNR - {new Date().getFullYear()}</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;