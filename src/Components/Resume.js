import React, { Component } from 'react'
import {Grid ,Cell} from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';
import Certificate from './Certificate';
class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4} tablet={6}> phone={4}>>
                        <div style={{textAlign:'center'}}>
                            <img
                            src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            alt="avatar"
                            style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:'1em',}}>Sarabjeet Singh</h2>
                        <h4 style={{color:'#a2a2a2'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                        <p>
                        I have been working with web development since 2019, the period during which I have worked in different environments, start-ups companies. I am a self-motivated and self-taught professional who likes to solve problems.<br/>
                        I merge a passion for usability and user experience with technical knowledge to create cool digital experiences. My repertoire includes programming languages and tools such as Html, Css, JavaScript, React Native, ReactJS, Mobx, Wordpress, SailsJS, MySQL,and Apache server configuration, Bootstrap, jQuery, and more.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                        <div>
                            <h5>Address</h5>
                            <p>Block -B Jahangir Puri Delhi-110033</p>
                            <h5>Phone</h5>
                            <p>9818527603</p>
                            <h5>Email</h5>
                            <p>skn123495@gmail.com</p>
                            <h5>Website</h5>
                            <p>mywebsite.com</p>
                        </div>
                        <hr style={{borderTop:'3px solid #833fb2',width:'50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8} tablet={6}> phone={2}>
                        <h2>Education</h2>
                        <Education
                            startYear={2011}
                            endYear ={2012}
                            schoolName={'NIOS'}
                            schoolDescription={'Class X'}
                        />
                         <Education
                            startYear={2013}
                            endYear ={2014}
                            schoolName={'CBSE'}
                            schoolDescription={'Class XII'}
                        />
                         <Education
                            startYear={2014}
                            endYear ={2017}
                            schoolName={'Ignou'}
                            schoolDescription={'Bachelor of Computer Application ( BCA )'}
                        />
                        <Education
                            startYear={2017}
                            endYear ={2019}
                            schoolName={'Ignou'}
                            schoolDescription={'Master of Computer Application ( MCA )'}
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Certifications</h2>
                        <Certificate 
                            six="6 Month Diplomain Computer Basic."
                            one="6 Month Diplomain Computer Basic."
                            two="6 Month Diploma in Hardware&Networking"
                            three="6 Month Diploma in Network Assistant Manager"
                            four=" 6 Month Diplomain Business Correspondent & Business Facilitator."
                            five="6 Month Certification of Full Stack Web Developer from APTECH PRITAMPURA"
                        />
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear={2020}
                            jobName={'Millionify.com'}
                            jobDescription={'3 Month Internship as a Frontend Web Developer '}
                        />
                          <Experience
                            startYear={2019}
                            endYear={2020}
                            jobName={'WebDuo Technology'}
                            jobDescription={'3 Month Internship as a React Developer'}
                        />
                       
                        <hr style={{borderTop:'3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <div>
                            <Skill
                                skill='Html'
                                progress={90}
                            />
                            <Skill
                                skill='Css'
                                progress={75}
                            />
                            <Skill
                                skill='JavaScript'
                                progress={70}
                            />
                            <Skill
                                skill='Bootstrap'
                                progress={70}
                            />
                            <Skill
                                skill='React Js'
                                progress={60}
                            />
                            <Skill
                                skill='ReactNative'
                                progress={60}
                            />
                             <Skill
                                skill='WordPress'
                                progress={85}
                            />
                             <Skill
                                skill='Video Editing'
                                progress={70}
                            />
                        </div>
                            
                    </Cell>
                </Grid>

                <div style={{width: '80%', margin: 'auto'}}>
    <Grid className="demo-grid-ruler">
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
        <Cell col={1}>1</Cell>
    </Grid>
    <Grid className="demo-grid-1">
        <Cell col={4}>4</Cell>
        <Cell col={4}>4</Cell>
        <Cell col={4}>4</Cell>
    </Grid>
    <Grid className="demo-grid-2">
        <Cell col={6}>6</Cell>
        <Cell col={4}>4</Cell>
        <Cell col={2}>2</Cell>
    </Grid>
    <Grid className="demo-grid-3">
        <Cell col={6} tablet={8}>6 (8 tablet)</Cell>
        <Cell col={4} tablet={6}>4 (6 tablet)</Cell>
        <Cell col={2} phone={4}>2 (4 phone)</Cell>
    </Grid>
</div>
            </div>

        )
    }
}

export default Resume;