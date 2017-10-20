/**
 * Created by nikoarellano on 2017-10-17.
 */
/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import {
    Container,
    Segment,
} from 'semantic-ui-react'

export default class Resume extends Component {

    render() {

        return (

            <div className="content-custom" style={{ width : "80%", height : "100%", margin: "auto" }}>
                <Segment
                    textAlign='center'
                    className='fadeInUp'
                    vertical
                    >
                    <Container fluid>
                        <embed src="./assets/files/Arellano_Niko_Resume.pdf" width="100%" height="2100px" />
                    </Container>
                </Segment>
            </div>

        )
    }
}