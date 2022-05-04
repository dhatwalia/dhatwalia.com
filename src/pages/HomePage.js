import React from 'react';

const HomePage = () => (
    <>
        <h1>Prajwal Dhatwalia</h1>
        <img src={process.env.PUBLIC_URL + '/prajwal.jpg'} alt='prajwal-dhatwalia' class="image-60" />
        <p>
            Hello, world! I am a Full Stack Developer with 7+ years of software development experience with 4+ frameworks for clients across the globe.
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
