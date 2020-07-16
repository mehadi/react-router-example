import React from 'react'
import {Link} from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
        <div className="card">
            <div className="card-header">
                Homepage
            </div>
            <div className="card-body">
                <h1>Weclome to Homepage! Content shoing from App.js</h1>
            </div>
        </div>
    )
  }
}
export default App