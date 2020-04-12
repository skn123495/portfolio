import React, { Component } from 'react'
import { Tabs, Tab ,Grid, Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton,CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if (this.state.activeTab ===0) {
            return (
               <div className="projects-grid">
                   {/* Project 1 */}
                    <Card shadow={0} style={{width: '350px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '20rem', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png) center / cover'}}># 1 Portfolio</CardTitle>
                        <CardText>
                            The Project Are You Currently Seen it is Protfolio Project
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/skn123495" target="_blank">GitHub</a></Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#ff f'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    {/* Project 2*/}
                    <Card shadow={0} style={{width: '350px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '20rem', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png) center / cover'}}># 2 Mini Cart System</CardTitle>
                        <CardText>
                            This is a Small Cart Systme For Understanding what is E-commerce
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/skn123495" target="_blank">GitHub</a></Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#ff f'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/}
                    <Card shadow={0} style={{width: '350px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '20rem', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png) center / cover'}}># Movie App </CardTitle>
                            <CardText>
                                This is a movie Details app For More Details Contact Me 
                            </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/skn123495" target="_blank">GitHub</a></Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#ff f'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
               </div>
            )
        }
        if(this.state.activeTab === 1){
            return(
                <div className="projects-grid">
                   {/* Project 1 */}
                    <Card shadow={0} style={{width: '350px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '20rem', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png) center / cover'}}># 1 Food Ordering App</CardTitle>
                        <CardText>
                            Food order System  monthly and subscription basic for mor detail Contact me
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/skn123495" target="_blank">GitHub</a></Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#ff f'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    
                    {/* Project 2*/}
                    <Card shadow={0} style={{width: '350px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '20rem', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png) center / cover'}}># Daily Basic App </CardTitle>
                        <CardText>
                          This is E-commerce App Like SuperDaily for more Details Contact Me
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/skn123495" target="_blank">GitHub</a></Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#ff f'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    {/* Project 3*/}
                    <Card shadow={0} style={{width: '350px', margin: 'auto'}}>
                        <CardTitle style={{color: '#fff', height: '20rem', background: 'url(https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png) center / cover'}}># 3 Qr Code App</CardTitle>
                            <CardText>
                                Qr Code Generate and Scaning App
                            </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/skn123495" target="_blank">GitHub</a></Button>
                            <Button colored>CodePen</Button>
                            <Button colored>Live Demo</Button>
                        </CardActions>
                        <CardMenu style={{color: '#ff f'}}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
               </div>
            )
        }
        if(this.state.activeTab === 2){
            return(
                <div><h4>Currently Not Uploaded HTMl-CSS Projects</h4></div>
            )
        }
        if(this.state.activeTab === 3){
            return(
                <div><h4>Currently Not Uploaded JS Projects</h4></div>
            )
        }
    }
   
    render() {
        return (
            <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={ (tabid)=> this.setState({activeTab:tabid}) } ripple>
                    <Tab>React Js</Tab>
                    <Tab>React Native</Tab>
                    <Tab>Html Css</Tab>
                    <Tab>JS Project</Tab>
               </Tabs>
               <Grid>
                    <Cell col={12}>
                        <div className="contect">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;