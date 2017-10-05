/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react';
import { Card, Image, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class FrontCard extends Component {

    render() {

        return (
            <Card onClick={() => this.props.handleClick()}>
                <Card.Content>
                    <Icon size="huge" color='red' name={ this.props.section.icon }/>
                    <Card.Header>
                        { this.props.section.name }
                    </Card.Header>
                </Card.Content>
            </Card>
        );

    }
}

FrontCard.propTypes = {
    section : PropTypes.object
};

export default FrontCard;
