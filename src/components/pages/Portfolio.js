/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import {
    Grid,
    Header,
    Image,
    Segment,
} from 'semantic-ui-react'
import PortfolioItem from "../components/PortfolioItem";

const items = [
    {
        title : "Zenwallet",
        description : "A mobile wallet app that allows cardholders using Canada Post prepaid cards to check balances, view transactions and reload money into their cards.",
        type : "mobile",
        techStack : [
            { name : "React Native (JS)", icon : "./assets/skills/reactjs.png" },
            { name : "Expo", icon : "" }
        ],
        images : [
            "./assets/zenwallet/zenwallet1_iphone7plusgold_portrait.png",
            "./assets/zenwallet/zenwallet2_iphone7plusgold_portrait.png"
        ]
    },
    {
        title : "Collab",
        description : "A web application where students can share study notes and tips to their fellow students",
        techStack : [
            { name : "Laravel Framework", icon : "./assets/skills/laravel.png" },
            { name : "Javascript", icon : "./assets/skills/javascript.png" },
            { name : "Bootstrap", icon : "./assets/skills/bootstrap.png"},
            { name : "jQuery", icon : "./assets/skills/jquery.png" }
        ],
        type : "web",
        images : [
            "./assets/collab-notes/collab-notes.png",
        ]
    },
    {
        title : "Whatsaround",
        description : "A mobile app that lets you see different sale listings around you in a map view.",
        type : "mobile",
        techStack : [
            { name : "React Native (JS)", icon : "./assets/skills/reactjs.png"},
            { name : "Laravel Framework", icon : "./assets/skills/laravel.png" },
            { name : "Expo", icon : "./assets/skills/expo.png" },
        ],
        images : [
            "./assets/whatsaround/whatsaround1_iphone7plusgold_portrait.png",
            "./assets/whatsaround/whatsaround2_iphone7plusgold_portrait.png"
        ]
    },
    {
        title : "My eCash",
        description : "A mobile app for Now Prepay eCash merchants to check their balance and add funds using Loadhub at any Canada Post location.",
        type : "mobile",
        techStack : [
            { name : "React Native (JS)", icon : "./assets/skills/reactjs.png"},
            { name : "Expo", icon : "./assets/skills/expo.png" },
        ],
        images : [
            "./assets/myecash/myecash1_iphone7plusgold_portrait.png",
            "./assets/myecash/myecash1_iphone7plusgold_portrait.png"
        ]
    },
    {
        title : "Responsetek - Admin Portal Feature Plugin",
        description : "A web plugin that integrates with Responsetek's Admin Portal that lets the Client Managers see what features are on or off for their clients",
        type : "web",
        techStack : [
            { name : "ASP.Net MVC (C#)", icon : ""},
            { name : "jQuery", icon : "./assets/skills/jquery.png" },
            { name : "Javascript", icon : "./assets/skills/javascript.png" },
        ],
        images : [
            "./assets/rt-feature-plugin/rt-feature.png",
        ]
    },
    {
        title : "Responsetek - Dynamic Data Charts",
        description : "A front end data driven dynamic charts that integrates with Responsetek's LEARN Platform.",
        type : "web",
        techStack : [
            { name : "D3js", icon : "./assets/skills/d3js.png"},
            { name : "jQuery", icon : "./assets/skills/jquery.png" },
        ],
        images : [
            "./assets/rt-tiles/rt-charts.png",
        ]
    },
]

export default class Portfolio extends Component {
    render() {
        return (
            <div className="fadeInUp">
                {
                    items.map(item =>
                        <PortfolioItem item={item} />
                    )
                }
                {/*
                <Segment textAlign="center" padded vertical>
                    <Grid container stackable>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <Grid.Row centered>
                                    <Grid.Column textAlign="center">
                                        <Image.Group size="small">
                                            <Image
                                                src="./assets/zenwallet/zenwallet1_iphone7plusgold_portrait.png"
                                                centered
                                                spaced
                                                style={{height: "300px"}}/>
                                            <Image
                                                src="./assets/zenwallet/zenwallet2_iphone7plusgold_portrait.png"
                                                centered
                                                spaced
                                                style={{height: "300px"}}/>
                                        </Image.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row width={4}>
                                    <Grid.Column>
                                        <Header as='h3' style={{fontSize: '2em'}}>
                                            Zenwallet
                                        </Header>
                                        <p style={{fontSize: '1.13em'}}>

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
                                                   style={{height: "300px"}}/>
                                            <Image src="./assets/myecash/myecash2_iphone7plusgold_portrait.png"
                                                   centered
                                                   spaced
                                                   style={{height: "300px"}}/>
                                        </Image.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row width={4}>
                                    <Grid.Column>
                                        <Header as='h3' style={{fontSize: '2em'}}>
                                            My eCash
                                        </Header>
                                        <p style={{fontSize: '1.13em'}}>

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
                                            <Image
                                                src="./assets/whatsaround/whatsaround1_iphone7plusgold_portrait.png"
                                                centered
                                                spaced
                                                style={{height: "300px"}}/>
                                            <Image
                                                src="./assets/whatsaround/whatsaround2_iphone7plusgold_portrait.png"
                                                centered
                                                spaced
                                                style={{height: "300px"}}/>
                                        </Image.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row width={4}>
                                    <Grid.Column>
                                        <Header as='h3' style={{fontSize: '2em'}}>
                                            Whatsaround
                                        </Header>
                                        <p style={{fontSize: '1.13em'}}>

                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column>
                                <Grid.Row centered>
                                    <Grid.Column textAlign="center">
                                        <Image.Group size="small">
                                            <Image src="./assets/collab-notes/collab-notes-front1.png"
                                                   centered
                                                   spaced
                                                   style={{height: "300px", width: "250px"}}/>
                                            <Image src="./assets/collab-notes/collab-notes-front2.png"
                                                   centered
                                                   spaced
                                                   style={{height: "300px", width: "250px"}}/>
                                        </Image.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row width={4}>
                                    <Grid.Column>
                                        <Header as='h3' style={{fontSize: '2em'}}>
                                            Collab
                                        </Header>
                                        <p style={{fontSize: '1.13em'}}>

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
                                            <Image src="./assets/rt-tiles/rt-tiles-front1.png"
                                                   centered
                                                   spaced
                                                   style={{height: "300px", width: "250px"}}/>
                                            <Image src="./assets/rt-tiles/rt-tiles-front2.png"
                                                   centered
                                                   spaced
                                                   style={{height: "300px", width: "250px"}}/>
                                        </Image.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row width={4}>
                                    <Grid.Column>
                                        <Header as='h3' style={{fontSize: '2em'}}>
                                            Responsetek - Dynamic Data Charts
                                        </Header>
                                        <p style={{fontSize: '1.13em'}}>

                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                            <Grid.Column>
                                <Grid.Row centered>
                                    <Grid.Column textAlign="center">
                                        <Image.Group size="small">
                                            <Image src="./assets/rt-feature-plugin/rt-feature-front1.png"
                                                   centered
                                                   spaced
                                                   style={{height: "300px", width: "250px"}}/>
                                            <Image src="./assets/rt-feature-plugin/rt-feature-front2.png"
                                                   centered
                                                   spaced
                                                   style={{height: "300px", width: "250px"}}/>
                                        </Image.Group>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row width={4}>
                                    <Grid.Column>
                                        <Header as='h3' style={{fontSize: '2em'}}>
                                            Responsetek - Admin Portal Feature Plugin
                                        </Header>
                                        <p style={{fontSize: '1.13em'}}>

                                        </p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                */}

            </div>

        )
    }
}