import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

interface Research {
    name: string;
    title: string;
    date: string;
    content: string[];
    source: string;
}

interface ResearchProps {
    researches: Research[];
}

const Researches = ({ researches }: ResearchProps) => {
    return <>
        {researches.map((research, key) => (
            <Link className="list-item" key={key} to={`/research/${research.name}`}>
                <h3>{research.title}</h3>
                <p>{research.content[0].substring(0, 150)}...</p>
                <ScrollToTop />
            </Link>
        ))}
    </>;
};

export default Researches;
