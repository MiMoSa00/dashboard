import React from 'react'
import './Listing.css'

// imported icon
import {AiFillHeart} from 'react-icons/ai'
import {BsArrowRightShort} from 'react-icons/bs'
import {AiOutlineHeart } from 'react-icons/ai'

// Imported img

import img from "../../../Assets/img3.jpg"
import img1 from "../../../Assets/banner.jpg"
import img2 from "../../../Assets/img2.jpg"
import img3 from "../../../Assets/img5.jpg"
import user1 from "../../../Assets/user7.jpeg"
import user2 from "../../../Assets/user4.jpg"
import user3 from "../../../Assets/user5.jpeg"
import user4 from "../../../Assets/user6.jpeg"
const Listing = () => {
  return (
    <div className='listingSection'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
      </div>

      <div className="secContainer">
        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img} alt="Image Name" />

          <h3>Annual Vince</h3>
        </div>


        <div className="singleItem">
          <AiOutlineHeart  className="icon"/>
          <img src={img1} alt="Image Name" />

          <h3>Coffee Plant</h3>
        </div>


        <div className="singleItem">
          <AiOutlineHeart  className="icon"/>
          <img src={img2} alt="Image Name" />

          <h3>Button fern</h3>
        </div>


        <div className="singleItem">
          <AiFillHeart className="icon"/>
          <img src={img3} alt="Image Name" />

          <h3>Spider Plant </h3>
        </div>
      </div>

    <div className="sellers flex">
      <div className="topSellers">
        <div className="heading flex">
        <h3>Top Sellers</h3>

        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
        </div>

        <div className="card flex">
          <div className="users">
            <img src={user1} alt="Users Image" />
            <img src={user2} alt="Users Image" />
            <img src={user3} alt="Users Image" />
            <img src={user4} alt="Users Image" />
          </div>

          <div className="cardText">
            <span>
              14,2333 Plant sold <br/>
              <small>
                21 Sellers <span className='date'>7 Days</span>
              </small>
            </span>
          </div>
        </div>
        </div>
      <div className="Featured Sellers">
        <div className="heading flex">
        <h3>Top Sellers</h3>

        <button className='btn flex'>
          See All <BsArrowRightShort className="icon"/>
        </button>
        </div>

        <div className="card flex">
          <div className="users">
            <img src={user1} alt="Users Image" />
            <img src={user2} alt="Users Image" />
            <img src={user3} alt="Users Image" />
            <img src={user4} alt="Users Image" />
          </div>

          <div className="cardText">
            <span>
              23,889 Plant sold <br/>
              <small>
                29 Sellers <span className='date'>31 Days</span>
              </small>
            </span>
          </div>
        </div>
        </div>
        </div>  
    </div>
  )
}

export default Listing