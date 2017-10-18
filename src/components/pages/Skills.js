/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import {
    Container,
    Divider,
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <Segment style={{padding: '2em 0em'}} vertical>
                    <Container textAlign="center" text>
                        <Header as='h2' style={{fontSize: '2em'}}>
                            Skills
                        </Header>
                        <Header as="h3">
                            <Header.Content>
                                Main Development Languages
                                <Image.Group>
                                    <Image shape="circular"
                                           label="C#"
                                           size="tiny"
                                           src="./assets/skills/csharp.png"/>
                                    <Image shape="circular"
                                           label="java"
                                           size="tiny"
                                           src="./assets/skills/java.png"/>
                                    <Image shape="circular"
                                           label="javascript"
                                           size="tiny"
                                           src="./assets/skills/javascript.png"/>
                                    <Image shape="circular"
                                           label="php"
                                           size="tiny"
                                           src="./assets/skills/php.png"/>
                                </Image.Group>
                            </Header.Content>
                        </Header>
                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{textTransform: 'uppercase'}}
                        >
                        </Divider>

                        <Grid>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Main Development Languages
                                            <Segment circular
                                                     inverted>
                                                <Image fluid src="./assets/skills/reactjs.png"/>
                                            </Segment>
                                            <Segment circular
                                                     inverted>
                                                <Image fluid
                                                       src="./assets/skills/d3js.png"/>
                                            </Segment>
                                            <Segment circular
                                                     inverted>
                                                <Image fluid
                                                       src="./assets/skills/jquery.png"/>
                                            </Segment>
                                        </Header.Content>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Main Development Languages
                                            <Image.Group>
                                                <Image shape="circular"
                                                       label="C#"
                                                       size="tiny"
                                                       src="./assets/skills/reactjs.png"/>
                                                <Image shape="circular"
                                                       label="java"
                                                       size="tiny"
                                                       src="./assets/skills/d3js.png"/>
                                                <Image shape="circular"
                                                       label="javascript"
                                                       size="tiny"
                                                       src="./assets/skills/jquery.png"/>
                                            </Image.Group>
                                        </Header.Content>
                                    </Header>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header as="h3">
                                        <Header.Content>
                                            Main Development Languages
                                            <Image.Group>
                                                <Image shape="circular"
                                                       label="C#"
                                                       size="tiny"
                                                       src="./assets/skills/reactjs.png"/>
                                                <Image shape="circular"
                                                       label="java"
                                                       size="tiny"
                                                       src="./assets/skills/d3js.png"/>
                                                <Image shape="circular"
                                                       label="javascript"
                                                       size="tiny"
                                                       src="./assets/skills/jquery.png"/>
                                            </Image.Group>
                                        </Header.Content>
                                    </Header>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
                <Footer/>
            </div>
        )
    }
}