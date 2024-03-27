import Button from '../components/Button';
import researches from '../content/Researches';
import Researches from '../components/Researches';
import NotFound from './404';
import { useParams } from 'react-router-dom';

const Research = () => {
    const { name } = useParams();
    const research = researches.find(research => research.name === name);

    if (!research) return <NotFound />

    const otherResearches = researches.filter(research => research.name !== name);


    return <div className="page-content">
        <h2>{research.title}</h2>
        <h4>Published on: {research.date}</h4>
        {research.content.map((paragraph, key) => (
            <div>
                <p key={key}>{paragraph}</p>
            </div>
        ))}
        <Button href={research.source}>Source</Button>
        <h3>Other Research:</h3>
        <Researches researches={otherResearches} />
    </div>;
};

export default Research;
