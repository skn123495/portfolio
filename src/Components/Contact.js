import React, { Component } from 'react';
import {Grid ,Cell ,List,ListItem,ListItemContent} from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sarabjeet Singh</h2>
                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png" alt="avater" 
                        style={{height:'250px'}}/>
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour. I am able to work independently in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively when solving problems.</p>
                    </Cell>
                    <Cell col={6} style={{paddingLeft:'4rem'}}>
                        <h2>Contact Now</h2>
                        <hr className="Line"/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'32px',fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square"/>
                                    (8700-132-026)</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'32px',fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope"/>
                                    skn123495@gmail.com</ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'32px',fontFamily:'Anton'}}>
                                    <i className="fa fa-skype"/>
                                    skn123495</ListItemContent>
                                </ListItem>
                               
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;