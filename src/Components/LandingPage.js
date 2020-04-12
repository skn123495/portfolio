import React, { Component } from 'react'
import {Grid,Cell} from 'react-mdl';
class LandingPage extends Component {
    render() {
        return (
            <div style={{width:'100%',margin:'auto'}}>
                   <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        alt="image" className="avatar-img"/>
                    </Cell>
                    <div className="banner-text">
                        <h1>Full Stack Web Developer</h1>
                        <hr/>
                        <p>HTML/CSS | Bootstrap | JavaScript | React JS | React Native | PHP | My SQL</p>
                        <div className="social-links">
                            {/* Linkedin */}
                            <a href="https://www.linkedin.com/in/sarabjeet-singh-64430b148" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                            </a>

                             {/* Github */}
                             <a href="https://github.com/skn123495" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true"></i>
                            </a>

                             {/* freecodecamp */}
                             <a href="https://stackoverflow.com/jobs/developer-jobs-using-node.js?id=378217" target="_blank">
                                <i className="fa fa-stack-overflow" aria-hidden="true"></i>
                            </a>

                             {/* Youtube */}
                             <a href="https://www.youtube.com/mytuitionwala" target="_blank">
                                <i className="fa fa-youtube-square" aria-hidden="true"></i>
                            </a>
                        </div>

                    </div>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;