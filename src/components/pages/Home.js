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
} from 'semantic-ui-react'

export default class Home extends Component {

    render() {

        return (

            <div>
                <Segment
                    textAlign='center'
                    className='HomeSegment fadeInUp'
                    style={{height: window.innerHeight - 300}}
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
                    </Container>
                </Segment>
            </div>

        )
    }
}