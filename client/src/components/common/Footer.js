import { Link } from "react-router-dom"
export const Footer = () => {
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
                        <li><Link>SELL</Link></li>
                        <li><Link>CATALOG</Link></li>
                        <li><Link>ABOUT US</Link></li>
                        <li><Link>PROFILE</Link></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}
