import React from 'react'
import './Activity.css'

// Imported images
import user1 from '../../../Assets/customer1.jpeg'
import user2 from '../../../Assets/customer7.jpeg'
import user3 from '../../../Assets/customer5.jpeg'
import user4 from '../../../Assets/customer2.jpeg'

// Imported icon  
import {BsArrowRightShort} from 'react-icons/bs'
const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className='btn flex'>
          See all  
          <BsArrowRightShort className='icon'/>
        </button>
      </div>


      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Images" />
          <div className="customerDetails">
            <span className='name'>Olamide Martins</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 mins ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Images" />
          <div className="customerDetails">
            <span className='name'>Christian Nortan</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 mins ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Images" />
          <div className="customerDetails">
            <span className='name'>Lisa Koshi</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 mins ago
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Images" />
          <div className="customerDetails">
            <span className='name'>Kira Kosarin</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 mins ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity