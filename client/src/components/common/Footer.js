import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/authContext"
export const Footer = () => {

    const { user } = useContext(AuthContext)
    return (
        <footer>
            <section id="footer">
                <div className="socilas">
                    <h1 className="title-footer">SNEAK.IN</h1>
                    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                    <ul role="list">
                        <li><Link><i className="fa-brands fa-instagram"></i></Link></li>
                        <li><Link><i className="fa-brands fa-facebook"></i></Link></li>
                        <li><Link><i className="fa-brands fa-twitter"></i></Link></li>
                    </ul>
                </div>
                <div className="explore">
                    <h2 className="top-title">GET IN TOUCH</h2>
                    <p>+58 555-351</p>
                    <p>London, Pub street 2</p>
                    <h2 className="bottom-title">EXPLORE</h2>
                    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                    <ul className="explore-list" role="list">
                        <li><Link to={`/create`}>SELL</Link></li>
                        <li><Link to={`/catalog`}>CATALOG</Link></li>
                        <li><Link to={`/about`}>ABOUT US</Link></li>
                        {user._id? 
                        <li><Link to={`/profile/${user._id}`}>PROFILE</Link></li>
                        : ""}
                    </ul>
                </div>
            </section>
        </footer>
    )
}
