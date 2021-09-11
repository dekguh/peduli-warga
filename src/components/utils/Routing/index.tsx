import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from '../../organisms/Footer'
import MenuNav from '../../organisms/MenuNav'
import ContactPage from '../../pages/ContactPage'
import DonationPage from '../../pages/DonationPage'
import HomePage from '../../pages/HomePage'

const Routing: React.FC = () => {
    return (
        <Router>
            <MenuNav />

            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/kontak' component={ContactPage} />
                <Route path='/donasi' component={DonationPage} />
            </Switch>

            <div className='mt-20'>
                <Footer />
            </div>
        </Router>
    )
}

export default Routing
