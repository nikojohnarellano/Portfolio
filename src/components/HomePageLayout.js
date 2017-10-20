/**
 * Created by nikoarellano on 2017-10-03.
 */
import React, {Component} from 'react'
import Portfolio from "./pages/Portfolio";
import Home from  "./pages/Home"
import NavMenu from "./components/NavMenu"
import Footer from "./components/Footer"
import {Route, Redirect} from 'react-router-dom'
import Skills from "./pages/Skills"
import {Transition, Segment} from 'semantic-ui-react'
import TransitionGroup from 'react-transition-group/TransitionGroup'

export default class HomepageLayout extends Component {

    constructor(props) {
        super(props)

        this.setActiveItem = this.setActiveItem.bind(this)
    }

    state = {
        activeItem : ""
    };


    setActiveItem(activeItem) {
        this.setState({ activeItem })
    }


    render() {
        return (
            <div>
                <NavMenu activeItem={this.state.activeItem} setActiveItem={this.setActiveItem}/>
                <Route exact path="/" component={() => <Home setActiveItem={this.setActiveItem}/>}/>
                <Route path="/Portfolio" component={Portfolio}/>
                <Route path="/Skills" component={Skills}/>
                <Footer/>
            </div>
        )
    }
}