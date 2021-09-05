import React,{ useState } from 'react';

const Navbar = ({searchRoom}) => {

    // list of rooms

    const [adultAge,setAdultAge] = useState(0);
    const [childAge,setChildAge] = useState(0);
    const [place,setPlace] = useState('');

    const [show,setShow] = useState(false);
    const [location,setLocation] = useState(false);
    const [guest,setGuest] = useState(false);
    const [countries] = useState([{id:1,city:'Helsinki', country:'Finland'},{id:2,city:'Turku',country:'Finland'},{id:3,city:'Vaasa',country:'Finland'},{id:4,city:'Oulu', country:'Finland'}]);
    

    return (
        <nav className="main navbar">
           {!show && <div className="container nav-content">
                <div className="title">
                    <a href="/"><img src="/images/logo.png" alt="logo" /></a>
                </div>
                <div onClick={() => setShow(!show)} className="search-div">
                   <div>
                        <p>{place === '' ? 'Add Location' : <>{place + ', Finland'}</>}</p>
                   </div>
                   <div>
                        <p>{childAge + adultAge <= 0 ? 'Add Guests' : <>{adultAge + childAge} guests</>}</p>
                   </div>
                   <div>
                        <svg className="search-logo" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>
                   </div>
                </div>
           </div>}
           {show && 
           <div className="modal-container"> {/* Modal Box */}
                <div className="search-modal container">
                    <div className="modal-sub">
                        <div onClick={() => setLocation(!location)} className="modal-content">
                            <div>
                                <span>LOCATION</span><br/>
                                <span style={{ color:"gray",fontWeight:"lighter" }}>{place === '' ? 'Add Location' : <>{place + ', Finland'}</>}</span>
                            </div>
                            <svg className="caret-down" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                        { location && 
                        <div className="location-container">
                            {countries && countries.map((country) => (
                                <div key={country.id} className="location">
                                    <div onClick={() => setPlace(`${country.city}`)} className="locations">
                                        <svg className="caret-down" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                        </svg>
                                        <p>{country.city}, {country.country}</p>
                                    </div>
                                </div>
                            ))}
                        </div> }
                    </div>
                    <div className="modal-sub">
                        <div onClick={() => setGuest(!guest)} className="modal-content">
                            <div>
                                <span>GUESTS</span><br/>
                                <span style={{ color:"gray",fontWeight:"lighter" }}>{childAge + adultAge <= 0 ? 'Add Guests' : <>{adultAge + childAge} guests</>}</span>
                            </div>
                            <svg className="caret-down" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                       { guest && <div className="guest-container">
                            <div className="guest-content">
                                <h3 className="guest-title">Adults</h3>
                                <p className="guest-subtitle">Ages 13 or above</p>
                                <div className="adult-btn">
                                    <button onClick={() => setAdultAge(adultAge-1)} style={{ color:"black",background:"whitesmoke",border:"1px solid rgb(34, 31, 31)" }}>-</button>
                                    <p>{adultAge}</p>
                                    <button onClick={() => setAdultAge(adultAge+1)} style={{ color:"black",background:"whitesmoke",border:"1px solid rgb(34, 31, 31)" }}>+</button>
                                </div>
                            </div>
                            <div className="guest-content">
                                <h3 className="guest-title">Children</h3>
                                <p className="guest-subtitle">Ages 2-12</p>
                                <div className="child-btn">
                                    <button onClick={() => setChildAge(childAge-1)} style={{ color:"black",background:"whitesmoke",border:"1px solid rgb(34, 31, 31)" }}>-</button>
                                    <p>{childAge}</p>
                                    <button onClick={() => setChildAge(childAge+1)} style={{ color:"black",background:"whitesmoke",border:"1px solid rgb(34, 31, 31)" }}>+</button>
                                </div>
                            </div>
                        </div>}
                        
                    </div>
                    <div className="modal-button">
                        <button onClick={() => searchRoom(place, childAge+adultAge)}>
                            <svg className="search-logo" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>Search
                        </button>
                    </div>
                </div>
           </div>}
           {show && 
                    <div className="modal-exit">
                        <svg onClick={() => setShow(!show)} className="exit" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>}
        </nav>
    )
}

export default Navbar
