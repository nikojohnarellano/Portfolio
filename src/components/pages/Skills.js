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
    Progress,
    Segment,
    Tab
} from 'semantic-ui-react'


const Main = () => (
    <Grid as={Segment} inverted className="fadeIn">
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Java :"/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={85} inverted color='orange' size="large" progress/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="C# :"/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={90} inverted color='blue' progress/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="C++ :"/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={75} inverted color='green' progress/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="PHP: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={85} inverted color='violet' progress/>
            </Grid.Column>
        </Grid.Row><Grid.Row>
        <Grid.Column width={4}>
            <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Javascript: "/>
        </Grid.Column>
        <Grid.Column width={12}>
            <Progress percent={85} inverted color='red' progress/>
        </Grid.Column>
    </Grid.Row>
    </Grid>
);

const FrontEnd = () => (
    <Grid as={Segment} inverted className="fadeIn">
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="React: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={90} inverted color='blue' size="large" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="jQuery: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={85} inverted color='orange' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="D3js: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={85} inverted color='green' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Angular2: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={75} inverted color='red' />
            </Grid.Column>
        </Grid.Row><Grid.Row>
    </Grid.Row>
    </Grid>
);

const BackEnd = () => (
    <Grid as={Segment} inverted className="fadeIn">
        <Grid.Row>
            <Grid.Column width={4} verticalAlign="middle">
                <div style={{ textAlign: "center" }}>
                    <Image size="tiny" src='/assets/skills/csharp.png' avatar />
                    <span style={{ textAlign : "center", color: "white", fontSize:"15"}}>ASP.Net:</span>
                </div>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress style={{ marginTop : "5%" }} percent={90} inverted color='blue' size="large" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4} verticalAlign="middle">
                <div style={{ textAlign: "center" }}>
                    <Image size="tiny" src='/assets/skills/php.png' avatar />
                    <span style={{ textAlign : "center", color: "violet", fontSize:"15"}}>Laravel:</span>
                </div>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={90} inverted color='orange' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4} verticalAlign="middle">
                <div style={{ textAlign: "center" }}>
                    <Image size="tiny" src='/assets/skills/express.png' avatar />
                    <span style={{ textAlign : "center", color: "white", fontSize:"15"}}>Express:</span>
                </div>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress style={{ margin: "auto", textAlign: "center" }} percent={75} inverted color='green' />
            </Grid.Column>
        </Grid.Row>
    </Grid>
);

const Mobile = () => (
    <Grid as={Segment} inverted className="fadeIn">
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="React Native :"/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={90} inverted color='red' size="large" />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Swift: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={80} inverted color='orange' />
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column width={4}>
                <Header as="h2" style={{ textAlign : "center", color: "white"}} content="Java in Android Studio: "/>
            </Grid.Column>
            <Grid.Column width={12}>
                <Progress percent={75} inverted color='yellow' />
            </Grid.Column>
        </Grid.Row>
    </Grid>
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
            <div className="fadeInUp content-custom" style={{ height: window.innerHeight-300 }}>
                <Tab
                    menu={{ widths:4, pointing : true, inverted :true }}
                    style={{ width : "75%", margin: "auto", }} panes={panes} />
            </div>
        )
    }
}