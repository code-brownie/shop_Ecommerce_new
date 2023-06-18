import React from 'react'
import '../style/home.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
<div className="header">
<div className="container">
         <div className='row'>
            <div className="col-2">
                <h1>Give Your Work<br />A New Direction!</h1>
                <p>Help the World By recycling Your Product With a fair Exchange</p>
                <Link to="/featured" className='btn'>Explore Now &#8594;</Link>
            </div>
            <div className="col-2">
                <img src="./images/image1.png" alt="images" />
            </div>
        </div>
   </div>
</div>
    )
}
export default Home
