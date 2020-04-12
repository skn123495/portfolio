import React, { Component } from 'react'
import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl';
import Main from '../src/Components/Main';
import {Link} from 'react-router-dom';
import './App.css';


export default class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title={<Link to="/" style={{textDecoration:'none',color:'white' }}>My Portfolio</Link>} scroll>
              <Navigation>
                  <Link to="/Resume">Resume</Link>
                  {/* <Link to="/AboutMe">About Me</Link> */}
                  <Link to="/Projects">Projects</Link>
                  <Link to="/Contact">Contact</Link>
              </Navigation>
          </Header>
          <Drawer title={<Link to="/" style={{textDecoration:'none',}}>My Portfolio</Link>}>
              <Navigation>
                  <Link to="/Resume">Resume</Link>
                  {/* <Link to="/AboutMe">About Me</Link> */}
                  <Link to="/Projects">Projects</Link>
                  <Link to="/Contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
              <div className="page-content" />
              <Main/>
          </Content>
      </Layout>
  </div>
    )
  }
}
