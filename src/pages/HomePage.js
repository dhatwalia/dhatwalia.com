import React from 'react';

const HomePage = () => (
    <>
        <h1>Prajwal Dhatwalia</h1>
        <img src={process.env.PUBLIC_URL + '/prajwal.jpg'} alt='prajwal-dhatwalia' class="image-60"/> 
        <p>
            I am a Computer Science student from Lakehead University. I have worked as a Full Stack Developer at Surya Software. I have developed Batch Asset Liability Management(BALM) and Fund Transfer Pricing(FTP) software for Oman Arab Bank(OAB) and HDFC Bank using Rust. I have also developed a document generator using GatsbyJS.
        </p>
        <p>
            I love to do pet projects when I am free, which includes (but is not limited to) Machine Learning, Mobile App Development, Linux Programming and Web Development.
        </p>
        <p>
            I write my code in an organized, optimized and foolproof manner, keeping maintainability in mind. I use a hybrid of high-focus solo programming with collaborative teamwork for working on challenging projects. In a team with great diversity, I will learn from the passionate and experienced and mentor the energetic and curious.
        </p>
    </>
);

export default HomePage;
