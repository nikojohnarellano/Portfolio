/**
 * Created by nikoarellano on 2017-10-17.
 */
/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {
    Header,
    Container,
    Menu,
} from 'semantic-ui-react'
import {
    Navbar,
    Nav,
    NavItem,
} from 'react-bootstrap'

import {
    IndexLinkContainer,
    LinkContainer
} from 'react-router-bootstrap'


export default class NavMenu extends Component {
    state = {activeItem: ''};

    handleItemClick = (e, {name}) => this.props.setActiveItem(name);

    render() {
        const {activeItem} = this.props;

        return (
            <div className="wrapper">
                <Container style={{ padding : "5em 0em", width: "70%"}}>

                    {
                        /*
                         <Header
                         as="h2"
                         content="Niko Arellano"
                         style={{ float: "left", color: "white", marginTop: "1.5rem"}}
                         />
                        <Menu stackable inverted pointing secondary size='large' style={{float: "right"}}>
                            <Menu.Item as={Link} to="/" name='Home' active={activeItem === 'Home'}
                                       onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to="/Portfolio" name='Portfolio' active={activeItem === 'Portfolio'}
                                       onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} to="/Skills" name='Skills' active={activeItem === 'Skills'}
                                       onClick={this.handleItemClick}/>
                            <Menu.Item name='Resume' active={activeItem === 'Resume'} onClick={this.handleItemClick}/>
                        </Menu>*/
                    }

                    <Navbar style={{ background : "transparent", border: "none",  borderTop : 0, fontSize : "1.3em" }}
                     fluid collapseOnSelect>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <span style={{ color : "white" }}>Niko Arellano</span>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight>

                                <IndexLinkContainer to="/"  >
                                    <NavItem
                                        className={activeItem === 'Home' ? "selected-item" : null}
                                        onClick={() => this.props.setActiveItem("Home")}>
                                        <span>Home</span>
                                    </NavItem>
                                </IndexLinkContainer>
                                <LinkContainer to="/Portfolio">
                                    <NavItem
                                        className={activeItem === 'Portfolio' ? "selected-item" : null}
                                        onClick={() => this.props.setActiveItem("Portfolio")}>
                                        <span>Portfolio</span>
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/Skills" style={{ color : "white" }}>
                                    <NavItem
                                        className={activeItem === 'Skills' ? "selected-item" : null}
                                        onClick={() => this.props.setActiveItem("Skills")}>
                                        <span>Skills</span>
                                    </NavItem>
                                </LinkContainer>
                                <LinkContainer to="/Resume">
                                    <NavItem
                                        className={activeItem === 'Resume' ? "selected-item" : null}
                                        onClick={() => this.props.setActiveItem("Resume")}>
                                        <span>Resume</span>
                                    </NavItem>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>

        )
    }
}