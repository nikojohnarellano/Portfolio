/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react';
import _ from 'lodash'
import { Container, Grid, Segment} from 'semantic-ui-react'
import CardFlip from "./CardFlip";

const data = [
    { name : "About", icon : "id card"},
    { name : "Portfolio", icon : "briefcase" },
    { name : "Contacts", icon : "vcard"},
    { name : "Skills", icon : "cogs" },
    { name : "Resume", icon : "file text outline"},
    { name : "Services", icon : "configure"},
    { name : "About", icon : "id card"},
    { name : "Portfolio", icon : "briefcase" },
    { name : "Contacts", icon : "vcard"},
    { name : "Skills", icon : "cogs" },
    { name : "Resume", icon : "file text outline"},
    { name : "Services", icon : "configure"}
];

class FlipCardsContainer extends Component {

    render() {
        return (
            <Container className="FlipCard-container">
                <Segment basic>
                <Grid verticalAlign="middle"
                      textAlign="center"
                      columns={4}>
                    {
                        _.chunk(data, 4).map((row, rowIndex) => {
                            return (
                                <Grid.Row key={rowIndex}>
                                    {
                                        row.map((col, colIndex) => {
                                            return (
                                                <Grid.Column key={colIndex}>
                                                    <CardFlip section={col}/>
                                                </Grid.Column>
                                            )
                                        })
                                    }
                                </Grid.Row>
                            )
                        })
                    }
                </Grid>
                </Segment>
            </Container>
        );

    }
}

export default FlipCardsContainer;
