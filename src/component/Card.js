import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/featured.css'
const Card = (props) => {
  // console.log(props.name)
  const Navigate = useNavigate();
  return (
    <>
      <div className="sc">
        <div className="row">
          <div className="col-4">
            <img onClick={() => {
              Navigate(`/productsdetails?price=${props.price}&name=${props.name}&id=${props.id}&image=${encodeURIComponent(props.img)}`);
            }} src={props.img} alt="img" />
            <h4>{props.name}</h4>
            <div className="rating">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <h4>₹{props.price}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
