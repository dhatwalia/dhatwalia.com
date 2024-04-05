import Button from '../components/Button';
import '../styles/Image.css';

const Volunteer = () => {
    return <div className="page-content">
        <h1>Volunteer</h1>
        <img src={'/volunteer/helpage-india.png'} alt='help-age-india-logo' className="image-100" />
        <p>
            HelpAge India is a charity in India that has worked with and for disadvantaged elderly for nearly four decades. It has been running in India since 1978. There is an estimated 106 million elderly in India. HelpAge advocates for their needs, such as Universal Pension, quality healthcare and abuse faced by senior citizens. It advocates for elder-friendly policies and works towards their implementation. It also works with Senior Citizens Associations to understand the needs of the disadvantaged elderly by working with them.
        </p>
        <p>
            The aim is to help elders live active, dignified and healthier lives. HelpAge's focus over the years has moved from Welfare to Development.
        </p>
        <figure>
            <img src={'/volunteer/helping-elders.jpg'} alt='covid19-relief-india' className="image-80" />
            <figcaption>Distribution of family Survival Kits for senior citizens in Kannigapuram, Chennai, India during COVID-19 pandemic.</figcaption>
        </figure>
        <p>
            It provides elderly relief through various interventions for the elderly. It features one of the most extensive mobile healthcare programs through its Mobile Healthcare Units in India. It provides free healthcare services to destitute elders. It also helps elders earn their livelihood through the formation of Elder-Self-Help Groups, making them self-reliant. It conducts cataract surgeries to restore their sight. It's Support-a-Gran program looks after their basic needs. It also features Elder Helplines across India. It provides relief and rehabilitation for elders post disasters.
        </p>
        <Button href="https://www.helpageindia.org/donate/">Donate</Button>
        <br /><br />
        <hr></hr>
        <img src={'/volunteer/bluesea.jpg'} alt='bluesea-foundation-logo' className="image-100" />
        <p>
            Blue Sea Foundation is a Canadian charitable foundation that has been working with other charities to make the world better since 2010. Headquatered in Kitchener, they work exclusively with social service charities who serve the most precarious, marginalized, and neglected people in Canada and around the world.
        </p>
        <p>
            They are known mainly for their three charitable campagins:
            <ol>
                <li>Coldest Night of the years - A winterrific family-friendly walk to raise money for local charities serving people experiencing hurt, hunger, and homelessness.</li>
                <li>Ride for Refuge - A family-friendly cycling and walking fundraiser that supports charities who provide refuge and hope for displaced, vulnerable, and exploited people everywhere.</li>
                <li>The Grand Parade - A super-fun, family-friendly fundraising walk that celebrates and supports aging Canadians and their families across Canada.</li>
            </ol>
        </p>
        <figure>
            <img src={'/volunteer/homeless.jpg'} alt='homeless-person' className="image-80" />
            <figcaption>A helpless homeless person braving the harsh winter.</figcaption>
        </figure>
        <p>
            They are driven by the suffering and need in our world, and believe that the best way to make a difference is to build your charity's fundraising and financial health. What powers their efforts is the deep desire to see charities better funded and thriving as a force in our communities.
        </p>
        <Button href="http://www.blueseafoundation.org/">Website</Button>
        <br /><br />
        <hr></hr>
        <img src={'/volunteer/sickkids.jpg'} alt='bluesea-foundation-logo' className="image-100" />
        <p>
            SickKids Foundation is a charitable foundation that supports The Hospital for Sick Children in Toronto, Canada. They believe that fighting for the health and wellbeing of children is one of the most powerful ways to improve society. They are committed to fostering an inclusive, accessible environment, where all individuals feel valued, respected and supported.
        </p>
        <figure>
            <img src={'/volunteer/sickkids-cheque.jpg'} alt='homeless-person' className="image-80" />
            <figcaption>Ontario Schools Battery Recycling Challenge(OSBRC) gives a $1769.36 check to SickKids Foundation in Toronto dated June 10, 2019.</figcaption>
        </figure>
        <p>
            Their goal is to save lives, find new cures and provide world-className care. They are also fighting against the limits of a 70-year-old hospital where parts of the building dont meet modern building codes. Their most vulnerable patients are crammed into overcrowded rooms. Their our outdated spaces cant accommodate the weight of an MRI machine. Thats why they are trying to raise $1.5 billion dollars in donations. They need you on our side in the SickKids VS Limits Campaign, the biggest fundraising campaign in Canadian health-care history, to help build a brand-new hospital.

        </p>
        <Button href="https://secure.sickkidsfoundation.com/donate?_ga=2.74558546.1389146586.1663201382-1329499667.1663201382">Donate</Button>
        <br /><br />
        <hr></hr>
    </div>;
};

export default Volunteer;
