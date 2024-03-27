import researches from '../content/Researches';
import Researches from '../components/Researches';

const ResearchList = () => {
    return <div className="page-content">
        <h1>Research</h1>
        <Researches researches={researches} />
    </div>;
};

export default ResearchList;
