import React from 'react';

const VolunteerPage = () => (
    <>

        <h1>Volunteer</h1>
        <img src={process.env.PUBLIC_URL + '/helpage-india.png'} alt='help-age-india-logo' class="image-100"/> 
        <p>
            HelpAge India is a charity in India that has worked with and for disadvantaged elderly for nearly four decades. It has been running in India since 1978. There is an estimated 106 million elderly in India. HelpAge advocates for their needs, such as Universal Pension, quality healthcare and abuse faced by senior citizens. It advocates for elder-friendly policies and works towards their implementation. It also works with Senior Citizens Associations to understand the needs of the disadvantaged elderly by working with them.
        </p>
        <p>
            The aim is to help elders live active, dignified and healthier lives. HelpAge's focus over the years has moved from Welfare to Development.
        </p>
        <figure>
        <img src={process.env.PUBLIC_URL + '/helping-elders.jpg'} alt='covid19-relief-india' class="image-80" />
        <figcaption>Distribution of family Survival Kits for senior citizens in Kannigapuram, Chennai, India during COVID-19 pandemic.</figcaption>
        </figure>
        <p>
            It provides elderly relief through various interventions for the elderly. It features one of the most extensive mobile healthcare programs through its Mobile Healthcare Units in India. It provides free healthcare services to destitute elders. It also helps elders earn their livelihood through the formation of Elder-Self-Help Groups, making them self-reliant. It conducts cataract surgeries to restore their sight. It's Support-a-Gran program looks after their basic needs. It also features Elder Helplines across India. It provides relief and rehabilitation for elders post disasters.
        </p>
        <a class="button" href="https://www.helpageindia.org/donate/" target="_blank" rel="noreferrer">Donate</a>
    </>
);

export default VolunteerPage;
