import my from '../src/Assets/Images/log.png'
import React from "react";


class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
 
        }
    }


render() {

    return(
        <>
        
        <div className="header-row">
            <div className="logo-box">
           
                <img src={my} alt="my" className="hi" />
          
            </div>

              <div className="navbarr">
                
              <div className="seller">Become a Seller</div>
              <div className="pro">Download App</div>
              <div className="pro">Profile</div>
              <div className="pro">Cart</div>

              </div>
         
            </div>
       
        </>
    )
}

}

export default Header