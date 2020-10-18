import React from 'react'
import AccountPage from '../Components/AccountPage'
import '../HomePage/Signup.css'

function Signuppage(){
    return(
        <div>
            <div className="left-half" style={{marginTop:'3rem'}}>
                <h1>Have Fun Finding the RIGHT Roommate</h1>
                <h4>From a rotten potato</h4>
            </div>
            <a nimateTransform className="right-half">
                <AccountPage />
            </a>
        </div>
    )
}
export default Signuppage