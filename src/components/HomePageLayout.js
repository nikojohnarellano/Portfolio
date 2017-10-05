/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
    Sidebar
} from 'semantic-ui-react'
import FlipCardsContainer from "./flipcards/FlipCardsContainer";
import GithubSection from "./github/GithubSection";

export default class HomepageLayout extends Component {
    state = {visible: false, showMenu: false};

    hideFixedMenu = () => this.setState({showMenu: false});
    showFixedMenu = () => this.setState({showMenu: true});

    toggleVisibility = () => this.setState({visible: !this.state.visible});

    render() {
        const {visible, showMenu} = this.state;

        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
                    <Menu.Item name='home'>
                        <Icon name='home'/>
                        Home
                    </Menu.Item>
                    <Menu.Item name='gamepad'>
                        <Icon name='gamepad'/>
                        Games
                    </Menu.Item>
                    <Menu.Item name='camera'>
                        <Icon name='camera'/>
                        Channels
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <div>
                        {
                            showMenu ?
                                <Menu fixed='top' size='large'>
                                    <Container>
                                        <Menu.Item as='a' active>
                                            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
                                        </Menu.Item>
                                        {
                                            /*
                                             <Menu.Item as='a'>Work</Menu.Item>
                                             <Menu.Item as='a'>Company</Menu.Item>
                                             <Menu.Item as='a'>Careers</Menu.Item>
                                             */
                                        }
                                    </Container>
                                </Menu>
                                : null }

                        <Visibility
                            onBottomPassed={this.showFixedMenu}
                            onBottomVisible={this.hideFixedMenu}
                            once={false}
                        >
                            <Segment
                                inverted
                                textAlign='center'
                                className='HomeSegment'
                                vertical
                            >
                                <Container fluid>
                                    <Header
                                        as='h1'
                                        content='Niko John Arellano'
                                        inverted
                                        style={{
                                            fontSize: '4em',
                                            fontWeight: 'normal',
                                            marginBottom: 0,
                                            marginTop: '50px'
                                        }}
                                    />
                                    <Header
                                        as='h2'
                                        content='Full Stack Software Developer'
                                        inverted
                                        style={{fontSize: '1.7em', fontWeight: 'normal'}}
                                    />
                                </Container>
                            </Segment>
                        </Visibility>

                        <Segment style={{padding: '8em 0em'}} vertical>
                            <GithubSection/>
                        </Segment>

                        <Segment textAlign="center" padded vertical>
                            <Grid container stackable>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <Grid.Row centered>
                                            <Grid.Column textAlign="center">
                                                <Image.Group size="small">
                                                    <Image src="./assets/zenwallet/zenwallet1_iphone7plusgold_portrait.png"
                                                           centered
                                                           spaced
                                                           style={{ height: "300px" }}/>
                                                    <Image src="./assets/zenwallet/zenwallet2_iphone7plusgold_portrait.png"
                                                           centered
                                                           spaced
                                                           style={{ height: "300px" }}/>
                                                </Image.Group>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row width={4}>
                                            <Grid.Column>
                                                <Header as='h3' style={{fontSize: '2em'}}>
                                                    Zenwallet
                                                </Header>
                                                <p style={{fontSize: '1.13em'}}>
                                                    Instead of focusing on content creation and hard work, we have learned how to master
                                                    the art of doing
                                                    nothing by providing massive amounts of whitespace and generic content that can seem
                                                    massive, monolithic
                                                    and worth your attention.
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Grid.Row centered>
                                            <Grid.Column textAlign="center">
                                                <Image.Group size="small">
                                                    <Image src="./assets/myecash/myecash1_iphone7plusgold_portrait.png"
                                                           centered
                                                           spaced
                                                           style={{ height: "300px" }}/>
                                                    <Image src="./assets/myecash/myecash2_iphone7plusgold_portrait.png"
                                                           centered
                                                           spaced
                                                           style={{ height: "300px" }}/>
                                                </Image.Group>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row width={4}>
                                            <Grid.Column>
                                                <Header as='h3' style={{fontSize: '2em'}}>
                                                    My eCash
                                                </Header>
                                                <p style={{fontSize: '1.13em'}}>
                                                    Instead of focusing on content creation and hard work, we have learned how to master
                                                    the art of doing
                                                    nothing by providing massive amounts of whitespace and generic content that can seem
                                                    massive, monolithic
                                                    and worth your attention.
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <Grid.Row centered>
                                            <Grid.Column textAlign="center">
                                                <Image.Group size="small">
                                                    <Image src="./assets/whatsaround/whatsaround1_iphone7plusgold_portrait.png"
                                                           centered
                                                           spaced
                                                           style={{ height: "300px" }}/>
                                                    <Image src="./assets/whatsaround/whatsaround2_iphone7plusgold_portrait.png"
                                                           centered
                                                           spaced
                                                           style={{ height: "300px" }}/>
                                                </Image.Group>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row width={4}>
                                            <Grid.Column>
                                                <Header as='h3' style={{fontSize: '2em'}}>
                                                    Whatsaround
                                                </Header>
                                                <p style={{fontSize: '1.13em'}}>
                                                    Instead of focusing on content creation and hard work, we have learned how to master
                                                    the art of doing
                                                    nothing by providing massive amounts of whitespace and generic content that can seem
                                                    massive, monolithic
                                                    and worth your attention.
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Grid.Row centered>
                                            <Grid.Column textAlign="center">
                                                <Image.Group size="small">
                                                    <Image src="./assets/myecash/myecash1_iphone7plusgold_portrait.png"
                                                           centered
                                                           spaced
                                                           style={{ height: "300px" }}/>
                                                    <Image src="./assets/myecash/myecash2_iphone7plusgold_portrait.png"
                                                           centered
                                                           spaced
                                                           style={{ height: "300px" }}/>
                                                </Image.Group>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row width={4}>
                                            <Grid.Column>
                                                <Header as='h3' style={{fontSize: '2em'}}>
                                                    My eCash
                                                </Header>
                                                <p style={{fontSize: '1.13em'}}>
                                                    Instead of focusing on content creation and hard work, we have learned how to master
                                                    the art of doing
                                                    nothing by providing massive amounts of whitespace and generic content that can seem
                                                    massive, monolithic
                                                    and worth your attention.
                                                </p>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>

                        <Segment textAlign="center" padded vertical>
                            <Grid container stackable>
                                <Grid.Row textAlign="center">
                                    <Grid.Column>
                                        <Image src="./assets/whatsaround/whatsaround1_iphone7plusgold_portrait.png"
                                               centered
                                               size="huge"/>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Image src="./assets/whatsaround/whatsaround2_iphone7plusgold_portrait.png"
                                               centered
                                               size="huge"/>
                                    </Grid.Column>
                                    <Grid.Column width={8} style={{paddingBottom: '5em', paddingTop: '5em'}}>
                                        <Header as='h3' style={{fontSize: '2em'}}>
                                            My eCash
                                        </Header>
                                        <p style={{fontSize: '1.13em'}}>
                                            Instead of focusing on content creation and hard work, we have learned how to master
                                            the art of doing
                                            nothing by providing massive amounts of whitespace and generic content that can seem
                                            massive, monolithic
                                            and worth your attention.
                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Segment>

                        <Segment style={{padding: '8em 0em'}} vertical>
                            <Container text>
                                <Header as='h3' style={{fontSize: '2em'}}>Breaking The Grid, Grabs Your
                                    Attention</Header>
                                <p style={{fontSize: '1.13em'}}>
                                    Instead of focusing on content creation and hard work, we have learned how to master
                                    the art of doing
                                    nothing by providing massive amounts of whitespace and generic content that can seem
                                    massive, monolithic
                                    and worth your attention.
                                </p>
                                <Button as='a' size='large'>Read More</Button>

                                <Divider
                                    as='h4'
                                    className='header'
                                    horizontal
                                    style={{margin: '3em 0em', textTransform: 'uppercase'}}
                                >
                                    <a href='#'>Case Studies</a>
                                </Divider>

                                <Header as='h3' style={{fontSize: '2em'}}>Did We Tell You About Our Bananas?</Header>
                                <p style={{fontSize: '1.33em'}}>
                                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler
                                    content, but its really
                                    true.
                                    It took years of gene splicing and combinatory DNA research, but our bananas can
                                    really dance.
                                </p>
                                <Button as='a' size='large'>I'm Still Quite Interested</Button>
                            </Container>
                        </Segment>

                        <Segment inverted vertical style={{padding: '5em 0em'}}>
                            <Container>
                                <Grid divided inverted stackable>
                                    <Grid.Row>
                                        <Grid.Column width={3}>
                                            <Header inverted as='h4' content='About'/>
                                            <List link inverted>
                                                <List.Item as='a'>Sitemap</List.Item>
                                                <List.Item as='a'>Contact Us</List.Item>
                                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                                <List.Item as='a'>Gazebo Plans</List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column width={3}>
                                            <Header inverted as='h4' content='Services'/>
                                            <List link inverted>
                                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                                <List.Item as='a'>DNA FAQ</List.Item>
                                                <List.Item as='a'>How To Access</List.Item>
                                                <List.Item as='a'>Favorite X-Men</List.Item>
                                            </List>
                                        </Grid.Column>
                                        <Grid.Column width={7}>
                                            <Header as='h4' inverted>Footer Header</Header>
                                            <p>Extra space for a call to action inside the footer that could help
                                                re-engage users.</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        </Segment>

                    </div>
                </Sidebar.Pusher>
            </Sidebar.Pushable>

        )
    }
}