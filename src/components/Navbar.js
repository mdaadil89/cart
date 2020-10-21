import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

 const Navbar = (props)=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-">Shopping</Link>
                    
                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li>Cart Count : {props.total}</li>
                    </ul>
                </div>
            </nav>
   
        
    )
}

const mapStateToProps = (state)=>{
    return {
      total: state.total
    }
  }

export default connect(mapStateToProps)(Navbar);