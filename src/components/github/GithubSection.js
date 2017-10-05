/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react';
import { Card, Image, Icon, Container, Segment, Header, Loader} from 'semantic-ui-react'
import GithubCalendar from 'github-calendar'
import PropTypes from 'prop-types'
import _ from 'lodash'

class GithubSection extends Component {

    state = { show : false }

    async componentDidMount() {
        this.github = await new GithubCalendar('.github', 'nikoootine')

        this.setState({ show : true })
    }

    render() {

        return (
            <Segment vertical textAlign="center">
                <Header size="huge">
                    Github
                </Header>
               <div className="github">
               </div>
                {
                    !this.state.show &&
                    <Segment basic>
                        <Loader active/>
                    </Segment>
                }
            </Segment>

        );

    }
}

export default GithubSection;
