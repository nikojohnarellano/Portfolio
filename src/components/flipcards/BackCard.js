/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react';
import { Card, Image, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'
import _ from 'lodash'

class BackCard extends Component {

    render() {
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>
                        { this.props.section.name }
                    </Card.Header>
                </Card.Content>
            </Card>
        );

    }
}

export default BackCard;
