import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import Header from './components/Menu/Header'
import Menu from './components/Menu/Menu'
import Footer from './components/Footer/Footer'

import Main from './pages/Main'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Account from './pages/Account'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Header />
            <Menu />

            <Switch>
                <Route path="/login">
                    <LogIn />
                </Route>

                <Route path="/signup">
                    <SignUp />
                </Route>

                <Route path="/account">
                    <Account />
                </Route>

                <Route path="/cart">
                    <Cart />
                </Route>

                <Route path="/shop">
                    <Shop />
                </Route>

                <Route path="/about">
                    <About />
                </Route>

                <Route path="/contact">
                    <Contact />
                </Route>

                <Route path="/">
                    <Main />
                </Route>
            </Switch>

            <Footer />
        </React.Fragment>
    )
}

export default App