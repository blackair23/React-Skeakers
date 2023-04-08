import aboutCSS from './aboutUs.module.css';

export const AboutUs = () => {

    return (
        <section id={aboutCSS["about-us"]} >
            <img src="" alt="" />
            <div className={aboutCSS.background}>
                <h2>SNEAKER</h2>
                <h2>SNEAKER</h2>
                <h2>SNEAKER</h2>
            </div>
            <div className={aboutCSS.about}>
                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                <div className={aboutCSS.text}>
                    <p>
                        Welcome to Sneak.in - the premier online platform for buying and selling limited edition sneakers!
                    <br></br>
                    Based in Bulgaria, our business is fully online, which means we have the ability to connect sneaker enthusiasts from all corners of the globe. At Sneak.in, we are passionate about sneakers, and we understand the thrill of owning a coveted pair of limited edition shoes.
                    <br></br>
                    Our mission is to create a community-driven marketplace where buyers and sellers can come together to buy, sell, and trade their favorite sneakers. We are proud to offer an easy-to-use platform that allows sneaker enthusiasts to find the perfect pair of shoes to add to their collection.
                    </p>
                </div>
            </div>
        </section>
    )
}