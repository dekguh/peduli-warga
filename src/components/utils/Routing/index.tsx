import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from '../../pages/HomePage'

const Routing: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path='/' exact component={HomePage} />
            </Switch>
        </Router>
    )
}

export default Routing
