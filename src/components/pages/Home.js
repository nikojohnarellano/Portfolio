/**
 * Created by nikoarellano on 2017-10-17.
 */
/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import {
    Container,
    Header,
    Segment,
    Button,
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class Home extends Component {

    render() {

        return (

            <div className="content-custom">
                <Segment
                    textAlign='center'
                    className='fadeInUp'
                    vertical
                >
                    <Container fluid style={{ padding : "3em 0em", width:"50%"}}>
                        <Header
                            as='h2'
                            content='Full Stack Software Developer from Vancouver, BC'
                            inverted
                            style={{fontSize: '2em', fontWeight: 'bold'}}
                        />
                        <Header
                            as='h3'
                            content='I develop and design desktop, web and mobile applications. If you are an employer looking to hire or a business seeking a web presence, lets get in touch.'
                            inverted
                            style={{fontSize: '1.7em', fontWeight: 'normal'}}
                        />

                        <Link to="/Portfolio">
                        <Button color="violet" size="large" inverted onClick={() => {this.props.setActiveItem("Portfolio")}}>
                            <Button.Content visible>
                                    <span style={{ color: "white" }}>See My Works</span>
                            </Button.Content>
                        </Button>
                        </Link>
                    </Container>
                </Segment>
            </div>

        )
    }
}