import React, { Component } from 'react';

class Project extends Component {

    state = {
        showInfo: false
    }

    handleInfo = (e) => { e.preventDefault(); this.setState({ showInfo: !this.state.showInfo }) }

    render() {

        let { name, languagesIcons, source, url, youtube, info, picture } = this.props.item;

        return (
            <div className="project">
                <div className="icons">
                    {languagesIcons.map(icon => <i key={icon} className={icon}></i>)}
                </div>
                <h3>{name}</h3>
                <img src={picture} alt="" onClick={this.handleInfo} />
                <span className="infos" onClick={this.handleInfo}>
                    <i className="fas fa-plus-circle"></i>
                </span>

                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <h2>{name}</h2>
                                </div>
                                <p className="text">{info}</p>
                                <ul>
                                    {
                                        source && <li>
                                                <a href={source} rel="noreferrer" target="_blank" className="github"><i className="fab fa-github" /> source</a>
                                            </li>
                                    }
                                    {
                                         url && <li>
                                            <a href={url} rel="noreferrer" target="_blank" className="button">Accéder</a>
                                        </li>
                                    }
                                    {
                                         youtube && <li>
                                            <a href={youtube} rel="noreferrer" target="_blank" className="github"><i className="fab fa-youtube"></i> demo</a>
                                        </li>
                                    }
                                    <li>
                                        <a href="/#" rel="noreferrer" target="_blank" className="github" onClick={this.handleInfo}>Fermer</a>
                                    </li>
                                </ul>
                                
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Project;