
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
            <h1 className="logo-text">Flipkart</h1>
            </div>

            <div className="icon-box">
                <div className="social-icon-main">
                <div className="social-icon">
                <i class="fa fa-user"></i>
                </div>
                
                <div className="social-icon2">
            
                        <a href="https://github.com/pooja062000?tab=repositories" target="blank"><i class="fa fa-github"></i></a>

                </div>

                <div className="social-icon3">
                
                <a href="https://www.facebook.com/poojaggarwal2000" target="blank"><i class="fa fa-facebook"></i></a>
                </div>
                
                <div className="social-icon3">
                <a href="https://www.myntra.com" target="blank"><i class="fa fa-shopping-bag"></i></a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

}

export default Header