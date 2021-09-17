import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from '../../organisms/Footer'
import MenuNav from '../../organisms/MenuNav'
import AboutPage from '../../pages/AboutPage'
import CekCovidPage from '../../pages/CekCovidPage'
import ContactPage from '../../pages/ContactPage'
import DonationPage from '../../pages/DonationPage'
import HomePage from '../../pages/HomePage'
import VaksinasiPage from '../../pages/VaksinasiPage'

const Routing: React.FC = () => {
    return (
        <Router>
            <MenuNav />

            <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/kontak' component={ContactPage} />
                <Route path='/donasi' component={DonationPage} />
                <Route path='/vaksinasi' component={VaksinasiPage} />
                <Route path='/cek-covid' component={CekCovidPage} />
                <Route path='/about' component={AboutPage} />
            </Switch>

            <div className='mt-20'>
                <Footer />
            </div>
        </Router>
    )
}

export default Routing
