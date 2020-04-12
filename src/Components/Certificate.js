import React, { Component } from 'react'
import {Grid ,Cell} from 'react-mdl';

 class Certificate extends Component {
    render() {
        return (
            <Grid className="mycss">
                <Cell col={8}>
                     <ul>
                         <li>{this.props.one}</li>
                         <li>{this.props.two}</li>
                         <li>{this.props.three}</li>
                         <li>{this.props.four}</li>
                         <li>{this.props.five}</li>
                         <li>{this.props.six}</li>
                     </ul>
                </Cell>
            </Grid>
        )
    }
}

export default Certificate;