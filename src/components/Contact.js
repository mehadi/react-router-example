import React from 'react'
class Contact extends React.Component {
    render() {
        return <div className="card">
            <div className="card-header">
                Contact
            </div>
            <div className="card-body">
                <form>
                    <div className="form-group">
                        <label >Name</label>
                        <input type="text" className="form-control"
                               placeholder="Enter name"/>
                    </div>

                    <div className="form-group">
                        <label >Message</label>
                        <textarea className="form-control" id="message" name="message"
                                  placeholder="Please enter your message here..." rows="5"/>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    }
}
export default Contact