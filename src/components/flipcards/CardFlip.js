/**
 * Created by nikoarellano on 2017-10-03.
 */
import ReactCardFlip from 'react-card-flip';
import React, {Component} from 'react';
import {Card, Image, Icon, Container} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

class CardFlip extends Component {

    state = {
        isFlipped: false
    };

    handleClick = () => {
        this.setState({isFlipped: !this.state.isFlipped})
    };

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped}>
                <FrontCard section={this.props.section}
                           handleClick={this.handleClick.bind(this)}
                           key="front"/>

                <BackCard  key="back"/>
            </ReactCardFlip>
        );
    }

}

CardFlip.propTypes = {
    section: PropTypes.object
};

export default CardFlip;
