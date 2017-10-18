/**
 * Created by nikoarellano on 2017-10-17.
 */
/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
    Icon
} from 'semantic-ui-react'

export default class Footer extends Component {

    render() {

        return (
            <div>
                <Segment vertical>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={8}>
                                    <div style={{ float : "right" }}>
                                        <Header
                                            as="h2"
                                            content="© 2017 Niko Arellano"
                                            style={{fontSize: '1.5em', fontWeight: 'normal', color: "white"}}
                                            />
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={8}>
                                    <List horizontal link inverted>
                                        <List.Item as='a'>
                                            <div style={{fontSize: '1.5em', fontWeight: 'normal', color: "white", textDecoration:"underline",}}>
                                                Github
                                            </div>
                                        </List.Item>
                                        <List.Item as='a'>
                                            <div style={{fontSize: '1.5em', fontWeight: 'normal', color: "white", textDecoration:"underline",}}>
                                            LinkedIn
                                            </div>
                                        </List.Item>
                                        <List.Item as='a'>
                                            <div style={{fontSize: '1.5em', fontWeight: 'normal', textDecoration:"underline", color: "white"}}>
                                                Facebook
                                            </div>
                                        </List.Item>
                                    </List>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>

            </div>


    )
    }
}