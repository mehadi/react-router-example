import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, Link,Switch, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import NavBar from './components/Navbar'
import Contact from './components/Contact';
import About from './components/About';
const routing = (
    <Router>
        <div>

            <NavBar/>

            <section className="container">
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                </Switch>
            </section>

        </div>
    </Router>
)
ReactDOM.render(routing, document.getElementById('root'))