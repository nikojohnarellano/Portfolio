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

export default class Nav extends Component {
    state = {activeItem: 'Home'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Container style={{ padding : "5em 0em", width: "70%"}}>
                    <Header
                        as="h2"
                        content="Niko Arellano"
                        style={{ float: "left", color: "white", marginTop: "1.5rem"}}
                        />
                    <Menu inverted pointing secondary size='large' style={{ float: "right" }}>
                        <Menu.Item as={Link} to="/" name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick}/>
                        <Menu.Item as={Link} to="/Portfolio" name='Portfolio' active={activeItem === 'Portfolio'} onClick={this.handleItemClick}/>
                        <Menu.Item name='Resume' active={activeItem === 'Resume'} onClick={this.handleItemClick}/>
                        <Menu.Item name='Contact' active={activeItem === 'Contact'} onClick={this.handleItemClick}/>
                    </Menu>
                </Container>
            </div>

        )
    }
}