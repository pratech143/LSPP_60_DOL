import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div style={{
                padding: "7px",
                backgroundColor: "gray",
                display: "flex",
                justifyContent: "space-between"
            }}>
                <div >
                    <img style={{
                        borderRadius: "50px"
                    }}
                        src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1718150400&semt=sph" width={50} alt="logo" />
                </div>
                <div className='navigation'>
                    <ul style={{
                        display: "flex",
                        justifyContent: "space-around",
                        listStyleType: "none"
                    }}>
                        <li 
                        style={{
                            marginLeft:"5px",
                            marginRight:"5px"
                        }}>
                            <Link
                                to="/"
                                style={{
                                    padding: "3px",
                                    color: "white",
                                    textDecoration: "none"
                                }}
                            >
                                Home

                            </Link>
                        </li>
                        <li
                        style={{
                            marginLeft:"5px",
                            marginRight:"5px"
                        }}>
                            <Link
                            style={{
                                padding: "3px",
                                color: "white",
                                textDecoration: "none"
                            }}
                                to="/about"
                                className="about"
                            >
                                About

                            </Link>
                        </li>
                        <li
                        style={{
                            marginLeft:"5px",
                            marginRight:"5px"
                        }}>
                            <Link
                            style={{
                                padding: "3px",
                                color: "white",
                                textDecoration: "none"
                            }}
                                to="/contact"
                                className="contact"
                            >
                                Contact

                            </Link>
                        </li>
                        <li
                        style={{
                            marginLeft:"5px",
                            marginRight:"5px"
                        }}>
                            <Link
                            style={{
                                padding: "3px",
                                color: "white",
                                textDecoration: "none"
                            }}
                                to="/github"
                                className="home"
                            >
                                Github

                            </Link>
                        </li>
                    </ul>

                </div>
                <div style={{ width: "100px" }}>

                </div>
            </div>
        </>
    )
}
export default Header;

