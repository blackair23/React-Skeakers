import { Link } from "react-router-dom"; 
export const Hero = () => {
    return (
        <section id="hero">
            
        <div className="hero-imgs">
            <img className="top-img" src="https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="sneakers"/>
            <div className="rotated-text">
                <h2>SKEAKERS</h2>
                <h2>SKEAKERS</h2>
                <h2>SKEAKERS</h2>
                <h2>SKEAKERS</h2>
                <h2>SKEAKERS</h2>
                <h2>SKEAKERS</h2>
            </div>
            <div className="frosted-circle"></div>
        </div>
        <div className="right-hero">
            <h1 className="title">SNEAK.IN</h1>
            <p className="not-text">Welcome to Sneak.in - the ultimate platform for buying and selling limited edition sneakers!
                <br/>
                At Sneak.in, we understand the importance of finding that perfect pair of sneakers that complements your style and personality.
                That's why we have created a community-driven marketplace that connects buyers and sellers of limited edition sneakers from all around the world.
                <br/>
                Our platform is designed to provide a seamless and secure experience for both buyers and sellers. Whether you're looking to sell a pair of coveted sneakers from your personal collection or hoping to snag the latest release from your favorite brand, Sneak.in is the place for you.
                </p>
            <button className="btn primary-btn"><Link to="/catalog">Shop Now</Link></button>
        </div>
    </section>
    );
};