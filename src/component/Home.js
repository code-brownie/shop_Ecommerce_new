import React from 'react'
import '../style/home.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
<div className="header">
<div className="Container">
         <div className='row'>
            <div className="col-2">
                <h1>Join the<br /> ReNewCycle!</h1>
                <p>Together, we can create a sustainable future, one purchase and donation at a time.</p>
                <Link to="/featured">
                <button class="learn-more">
                    <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                    </span>
                    <span class="button-text">Explore Now</span>
                </button></Link>
            </div>
            <div className="col-2">
                <img src="./images/4894738.png" alt="images" />
            </div>
        </div>
   </div>
</div>
    )
}
export default Home
