/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import Portfolio from "./pages/Portfolio";
import Home from  "./pages/Home"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import { Route, Redirect} from 'react-router-dom'
import { Transition, Segment } from 'semantic-ui-react'
import TransitionGroup from 'react-transition-group/TransitionGroup'

export default class HomepageLayout extends Component {

    render() {
        return (
            <Route render={({location}) => (
                <div>
                     <Route exact path="/" render={() => (
                         <Redirect to="/Home"/>
                     )}/>

                    <Nav/>
                        <Route path="/Home" component={Home}/>
                        <Route path="/Portfolio" component={Portfolio}/>
                        {/*<Route path="/Contact" component={Topics}/>*/}
                    <Footer/>
                </div>
            )}/>

        )
    }
}