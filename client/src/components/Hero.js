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
            <p className="not-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, recusandae laborum itaque quae ea sint ullam commodi similique dicta repudiandae labore illum voluptas facere rerum deserunt ab possimus quisquam adipisci!
            Delectus unde exercitationem doloribus at. Obcaecati quos libero veniam corporis similique laborum consectetur blanditiis, cum perspiciatis, culpa in suscipit ut repellat quibusdam repudiandae voluptatibus enim necessitatibus tempora, quae commodi eum!
            Atque ipsam eius odio expedita molestiae provident. Porro nihil vero in numquam harum, iure earum repudiandae incidunt quasi, molestiae dolores tempora magnam autem ratione explicabo pariatur commodi doloribus ducimus corporis?</p>
            <button className="btn primary-btn"><Link to="/catalog">Shop Now</Link></button>
        </div>
    </section>
    );
};