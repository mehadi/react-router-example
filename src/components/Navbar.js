import React from 'react'
import {Link} from 'react-router-dom';
class About extends React.Component {
    render() {
        return <div
            className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal"><Link className="p-2 text-dark" to="/">React Router Example</Link></h5>
            <nav className="my-2 my-md-0 mr-md-3">
                <Link className="p-2 text-dark" to="/about">About</Link>
                <Link className="p-2 text-dark" to="/contact">Contact</Link>
            </nav>
        </div>
    }
}
export default About