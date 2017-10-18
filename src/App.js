import React, {Component} from 'react';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import './css/App.css';
import './css/Animation.css'
import HomepageLayout from "./components/HomePageLayout";

class App extends Component {
    render() {
        return (
            <HomepageLayout/>
        );
    }
}

export default () =>
    <Router>
        <App/>
    </Router>;
