import React from 'react'
import '../style/profile.css'
import Points from './Points'
const Profile = (props) => {
    return (
        <div class="profile-container">
        <div class="profile-header">
            {/* <img src="profile-picture.jpg" alt="Profile Picture" class="profile-picture" /> */}
            <h1 class="profile-name">John Doe</h1>
            <p class="profile-email">john.doe@example.com</p>
        </div>
        <div class="profile-body">
            <div class="profile-section">
                <h2 class="section-title">Coins Earned</h2>
               <Points message={props.message} />
            </div>
        </div>
    </div>

    )
}

export default Profile