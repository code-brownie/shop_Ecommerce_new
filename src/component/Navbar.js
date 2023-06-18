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
                            <img src="./images/logo9.png" alt="Logo" onClick={() => navigate('/')} style={{ width: '150px' }} />
                        </div>
                        <nav>
                            <ul>
                                <li class="list-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li class="list-item">
                                    <Link to="/products">Products</Link>
                                </li>
                                <li class="list-item">
                                    <Link to="/contacts">Contact</Link>
                                </li>
                                <li class="list-item">
                                    <Link to="/about">About</Link>
                                </li>

                                {isLoggedIn ? (
                                    <>
                                        <li class="list-item">
                                            <Link to="/profile">Profile</Link>
                                        </li>
                                        <li class="list-item" style={{ cursor: 'pointer' }} onClick={handleLogoutclick}>
                                            Logout
                                        </li>
                                    </>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/accounts">
                                                <button className="button-style">Login</button>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/accounts">
                                                <button className="button-style">SignUp</button>
                                            </Link>
                                        </li>
                                    </>
                                )}

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