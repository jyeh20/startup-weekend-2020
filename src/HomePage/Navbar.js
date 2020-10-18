import React from 'react'
import {Link} from 'react-router-dom'
import '../HomePage/Navbar.css'
import {AccountMenuItem} from '../Components/Services/AccountMenuItem'

function Navbar(){
    return (
        <div>
        <nav>
            <Link to ="/" className="logo">DwellN</Link>
            <ul>
                    <li><Link to="/shop">FAQs</Link></li>
                    <li><Link to="/match">Match!</Link></li>
                    <li className="account">
                    <a>Account</a>
                    <ul>
                            {AccountMenuItem.map((account,index) => {
                                return(
                                <li key={index}><Link to={account.path}>{account.title}</Link></li>
                                )
                            })}

                        </ul>
                    </li>

            </ul>
        </nav>
        </div>

    )
}
export default Navbar