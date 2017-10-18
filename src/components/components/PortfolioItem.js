/**
 * Created by nikoarellano on 2017-10-17.
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
    Grid,
    Header,
    Segment,
    Image
} from 'semantic-ui-react'

export default class PortfolioItem extends Component {

    render() {
        const { item } = this.props;

        return (
            <Segment basic style={{ padding: '3em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={9} textAlign="center">
                            <Image.Group size="small">
                                <Image
                                    src={ item.images[0] }
                                    centered
                                    spaced
                                    style={{height:item.type === 'web' ? "500px" : "370px",
                                    width: item.type === 'web' ? "500px" : "210px" , margin: "10px"}}/>
                                {
                                    item.images[1] &&
                                    <Image
                                        src={ item.images[1] }
                                        centered
                                        spaced
                                        style={{
                                            height: "370px",
                                            width: item.type === 'web' ? "400px" : "210px",
                                            margin: "10px"
                                        }}/>
                                }
                            </Image.Group>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h3' style={{ fontSize: '2em', color: "white" }}>{ item.title }</Header>
                            <p style={{ fontSize: '1.33em', color: "white"  }}>
                                { item.description }
                            </p>
                            <Header as='h5' style={{ fontSize: '1.3em', color: "white"  }}>Tech Stack: </Header>
                            <p style={{ fontSize: '1.33em', color: "white"  }}>
                                {/* item.techStack*/ }
                                {
                                    item.techStack.map(techStack =>
                                        <div>
                                        <Image src={ techStack.icon } avatar />
                                        <span>{ techStack.name }</span>
                                        </div>
                                    )
                                }
                            </p>
                        </Grid.Column>

                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}


PortfolioItem.propTypes = {

};