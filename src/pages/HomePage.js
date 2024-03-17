import React from 'react';

const HomePage = () => (
    <>
        <div class="page-content">
            <h1>Prajwal</h1>
            <img src={process.env.PUBLIC_URL + '/prajwal.jpg'} alt='my-pic' class="image-60" /> 
            <p>
                Hello, world! I am a Full Stack Developer with 5+ years of experience in FinTech, CryptoTech, MarTech and Telematics using MERN stack, Machine Learning and Software Engineering.
            </p>
            <p>
                I love to work with Rust, Typescript, Python and C++.
            </p>
            <p>
                I can solve your problems with high throughput, scalable and maintainable technologies. I can lead development and wear multiple hats with product, design, development, testing, deployment and support teams in a collaborative environment. In a team with great diversity, I will learn from the passionate and experienced and mentor the energetic and curious.
            </p>
            <h2>Share this website</h2>
            <img src={process.env.PUBLIC_URL + '/qr.png'} alt='qr-code' class="image-40" />
        </div>
    </>
);

export default HomePage;
