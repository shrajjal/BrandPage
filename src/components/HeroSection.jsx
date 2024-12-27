const HeroSection = () =>{
    return <main className="hero">
        <div className="hero-text">
            <h1>YOUR FEET DESERVE THE BEST </h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES. </p>
            <div className="hero-btn">
                <button href="#">Shop Now</button>
                <button href="#" className="secondary-btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available on</p>
                <div className="brand-icon">
                    <img src="/Images/flipkart.png" alt="logo" />
                    <img src="Images/amazon.png" alt="logo" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src= "/Images/shoe_image.png" alt="logo" />
        </div>
    </main>;
};

export default HeroSection;