import React, { useContext } from 'react';
import '../style/nav.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Navbar = (props) => {
    const { showAlerts } = props;
    const { isLoggedIn, handleLogout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogoutclick = () => {
        showAlerts("Logged out successfully", "success");
        handleLogout();
        navigate('/')

    };

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src="./images/logo.png" alt="Logo" onClick={() => navigate('/')} style={{ width: '125px' }} />
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/products">Products</Link>
                                </li>
                                {isLoggedIn ? (
                                    <>
                                        <li>
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li style={{ cursor: 'pointer' }} onClick={handleLogoutclick}>
                                            Logout
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link  to="/accounts">Login</Link>
                                        </li>
                                        <li>
                                            <Link to="/accounts">Sign Up</Link>
                                        </li>
                                    </>
                                )}
                                <li>
                                    <Link to="/contacts">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                            </ul>
                        </nav>
                        {isLoggedIn && (<i className="fa-solid fa-cart-shopping" style={{ cursor: 'pointer' }} onClick={() => navigate('/cart')}></i>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
