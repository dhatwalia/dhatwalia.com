import reactLogo from '../assets/react.svg'
import typescriptLogo from '../assets/typescript.svg'
import './Home.css'

const Home = () => {
    return <div className="page-content">
        <h1>Prajwal Dhatwalia</h1>
        <img src={'/prajwal.jpg'} alt='my-pic' className="image-60" />
        <p>
            Hello, world! I am a Software Engineer with multiple years of experience in FinTech, CryptoTech, MarTech and Telematics using MERN stack, Machine Learning and Software Engineering.
        </p>
        <p>
            I love to work with Rust, Typescript, Python, Java and C++.
        </p>
        <p>
            I can solve your problems with high throughput, scalable and maintainable technologies. I can lead development and wear multiple hats with product, design, development, testing, deployment and support teams in a collaborative environment. In a team with great diversity, I will learn from the passionate and experienced and mentor the energetic and curious.
        </p>

        <a><img src={typescriptLogo} className="logo" alt="Typescript logo" /></a>

        <a><img src={reactLogo} className="logo react" alt="React logo" /></a>

        <p>This website is written in Typescript and uses React framework.</p>

        <h2>Share this website</h2>
        <img src={'/qr.png'} alt='qr-code' className="image-40" />
    </div>;
};

export default Home;
