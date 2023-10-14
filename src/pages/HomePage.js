import React from 'react';

const HomePage = () => (
    <>
        <h1>Prajwal</h1>
        <img src={process.env.PUBLIC_URL + '/prajwal.jpg'} alt='my-pic' class="image-60" />
        <p>
            Hello, world! I am a Software Engineer with multiple years of software development experience in 6+ frameworks for clients across the globe.
        </p>
        <p>
            I love to work with JavaScript, Python, Java and Rust. But I am willing to learn new technologies with the intention to master my skills.
        </p>
        <p>
            I write my code in an organized, optimized and foolproof manner, keeping maintainability in mind. I use a hybrid of high-focus solo programming with collaborative teamwork for working on challenging projects. In a team with great diversity, I will learn from the passionate and experienced and mentor the energetic and curious.
        </p>
    </>
);

export default HomePage;
