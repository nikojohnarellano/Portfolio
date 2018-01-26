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
} from 'semantic-ui-react'

export default class Footer extends Component {

    render() {

        return (
            <div className="footer-custom">
                <Segment vertical>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column textAlign="center" width={8}>
                                    <div>
                                        <Header
                                            as="h2"
                                            content="© 2018 Niko Arellano"
                                            style={{fontSize: '1.5em', fontWeight: 'normal', color: "white"}}
                                            />
                                    </div>
                                </Grid.Column>
                                <Grid.Column textAlign="center" width={8}>
                                    <List horizontal link inverted>
                                        <List.Item>
                                            <a href="https://github.com/nikoootine"
                                                style={{fontSize: '1.5em', fontWeight: 'normal', color: "white", textDecoration:"underline",}}>
                                                Github
                                            </a>
                                        </List.Item>
                                        <List.Item>
                                            <a href="https://www.linkedin.com/in/niko-john-arellano-48b181102/"
                                             style={{fontSize: '1.5em', fontWeight: 'normal', color: "white", textDecoration:"underline",}}>
                                            LinkedIn
                                            </a>
                                        </List.Item>
                                        <List.Item>
                                            <a
                                            href="https://www.facebook.com/niko.arellano1"
                                            style={{fontSize: '1.5em', fontWeight: 'normal', textDecoration:"underline", color: "white"}}>
                                                Facebook
                                            </a>
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