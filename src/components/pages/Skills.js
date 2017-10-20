/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import {
    Grid,
    Header,
    Progress,
    Segment,
    Tab
} from 'semantic-ui-react'


const Main = () => (
    <Grid as={Segment} inverted className="fadeIn">
        <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Beginner'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Intermediate'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Advanced'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="C# :"/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={70} inverted color='blue' size="large"/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Java :"/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={70} inverted color='orange' size="large"/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Javascript: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={70} inverted color='red' size="large"/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="C++ :"/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={50} inverted color='green' size="large"/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="PHP: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={50} inverted color='violet' size="large"/>
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const FrontEnd = () => (
    <Grid as={Segment} inverted className="fadeIn">
        <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Beginner'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Intermediate'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Advanced'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="React: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={70}  inverted color='blue' size="large" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="jQuery: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={65} size="large" inverted color='orange' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="D3js: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={50} size="large" inverted color='green' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Angular2: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={40} size="large" inverted color='red' />
            </Grid.Column>
        </Grid.Row><Grid.Row>
    </Grid.Row>
    </Grid>
);

const BackEnd = () => (
    <Grid as={Segment} inverted className="fadeIn">
        <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Beginner'
                    inverted
                    style={{fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Intermediate'
                    inverted
                    style={{ fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Advanced'
                    inverted
                    style={{fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4} verticalAlign="middle">
                {/*
                <div style={{ textAlign: "center" }}>
                    <Image size="tiny" style={{ height : "75px", width: "75px" }} src='/assets/skills/csharp.png' avatar />
                    <span style={{ textAlign : "center", color: "white", fontSize:"15"}}>ASP.Net:</span>
                </div>*/}
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="ASP.Net C#: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress style={{ marginTop : "4%" }} percent={70} inverted color='blue' size="large" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4} verticalAlign="middle">
                {/*
                <div style={{ textAlign: "center" }}>
                    <Image size="tiny" style={{ height : "75px", width: "75px" }}  src='/assets/skills/php.png' avatar />
                    <span style={{ textAlign : "center", color: "violet",  fontSize:"15"}}>Laravel:</span>
                </div>
                */}
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Laravel PHP: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress style={{ marginTop : "4%" }} percent={65} inverted color='orange' size="large" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4} verticalAlign="middle">
                {/*
                <div style={{ textAlign: "center" }}>
                    <Image size="tiny" style={{ height : "75px", width: "75px" }} src='/assets/skills/express.png' avatar />
                    <span style={{ textAlign : "center", color: "white", fontSize:"15"}}>Express:</span>
                </div>
                */}
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Express Nodejs: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress style={{ marginTop : "4%" }} size="large" percent={40} inverted color='green' />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const Mobile = () => (
    <div>

    <Grid as={Segment} inverted className="fadeIn">
        <Grid.Row>
            <Grid.Column width={4}>
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Beginner'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Intermediate'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
            <Grid.Column width={4}>
                <Header
                    as='h4'
                    content='Advanced'
                    inverted
                    style={{fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center'}}
                />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="React Native :"/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={68} inverted color='red' size="large" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Swift: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={50} size="large" inverted color='orange' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Java for Android: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={50} size="large" inverted color='yellow' />
            </Grid.Column>
        </Grid.Row>
    </Grid>
    </div>
);


const panes = [
    { menuItem: 'Main', render: () => <Main/>},
    { menuItem: 'Front End', render: () => <FrontEnd/> },
    { menuItem: 'Back End', render: () => <BackEnd/>},
    { menuItem: 'Mobile', render: () => <Mobile/>},
];

export default class Skills extends Component {

    render() {
        return (
            <div className="fadeInUp content-custom">
                <Tab
                    menu={{ widths:4, pointing : true, inverted :true }}
                    style={{ width : "75%", margin: "auto", }} panes={panes} />
            </div>
        )
    }
}