const project = [
    {
        name: 'insurance-advisor',
        title: 'Insurance Advisor Software',
        skills: 'Django, Bootstrap, Machine Learning',
        content: [
            `The Insurance advisor software was designed to collect information about the user’s needs and history and suggest suitable insurance plans. The software is consumer-centric because it prioritizes ample coverage over the price of insurance. It may not guarantee the cheapest coverage, but it will guarantee that the consumer has as much coverage as required with a few extra dollars. The goal of this research is to ensure that consumers have adequate coverage when filing for insurance claims while allowing users to pick low-cost insurance policies. `,
            `Types of insurance provided include Automobile Insurance, House Insurance, Term Life Insurance, Disability Insurance, Health Insurance and Umbrella Policy. The software was implemented in Django with Python backend along with the MySQL database. We used Linear regression, Ridge regression, Bayesian Ridge regression, Lasso Regression, Lasso LARS regression and a deep neural network with four hidden layers, Decision Tree Regression, Ada Boost Regression, Gradient Boosting Regression, XG Boost Regression, Random Forest  Regression, Extra Tree Regression, Support Vector Regression, K Nearest Neighbors Regression, Bagging Regression and Voting Regression to predict the insurance premium based on the user’s health. Of all the methods used, Voting Regression with an ensemble of two Gradient Boosting Regressession models gave the most negligible Mean Absolute Error(MAE).`,
            `The software that targets citizens of Ontario, Canada who want to purchase private insurance. But in the future, the software can be updated to provide insurance as per regulations of individual provinces and possibly of other countries as well. This will require keeping track of the minimum insurance requirements of each province and country by law.`, 
        ],
        source: 'https://github.com/dhatwalia/insurance',
    },
    {
        name: 'optimal-hospital',
        title: 'Optimal hospital placement for COVID-19 patients',
        skills: 'Machine Learning, Optimization',
        content: [
            `At present, cases of COVID-19 are appearing in a non- uniform manner across the country. This distribution is hard to predict because travel of people from one place to another is influenced by many factors including work, education, climate, geopolitical factors etc. In the ever so connected world that we live, it makes it even more dif- ficult to track the spread of diseases. At present, setting up of hospitals is done in a localized manner. Macroscopic influences over number of patients visiting hospitals is not considered. When a hospital is having too many patients in an area, newer hospitals are set-up in order to accomodate for the healthcare requirement. This approach works with seasonal factors affecting spread of diseases. However, in a pandemic, spread of disease does not always follow the same pattern. The current medical health system is at risk of being overburdened by patients if the number of cases was to spike uncontrollably. To prepare ourselves for the worst- case scenario, the right decisions must be made quickly when upgrading the medical infrastructure of the country.`,
            `In a pandemic, in some places the number of are much higher than others. For example in places like Toronto and Montreal, where the number of travellers is more, the number of cases is also high. Whereas in other places like Thunder- Bay and Manitoba, the number of cases is low. The rate of spread is also influenced by the number of people travelling in and out of a city. This could rapidly change the number of patients that a hospital expects. This could be as a con- sequence of the early opening up of businesses or lack of preventive action. Therefore, there is a need for software that will determine which is the optimal place to set-up a hospital from a list of suitable sites. It is necessary that the software will rely on the latest data so that action can be taken as suited. The software needs to be able to accommodate rapid change in the COVID-19 hot-spots before the location of the hospitals needed is finalized. The software should yield fast results in order to help in quick decision making.`,
            `If we were to apply only optimization techniques towards solving this problem, then we would suffer from an instability in the solution. Each new patient getting added to the list of patients would require an alteration to the hospital site. Furthermore, it is also not possible to set up hospitals at the optimal location because of the site might not be available for constructing hospital. Some other building might already be occupying that location.`,
            `If we were to apply clustering algorithm, we would end up with centroid which would be ideal for setting up hospitals. But the centroids themselves might not be able available for constructing hospitals. Therefore, I have proposed a software that will use a com- bination of clustering and linear programming to minimize the distance of the patients from the hospitals.`,
            `In order to solve the problem, we must know at-least the lo- cation of sites that are available for constructing the hospitals and the location of patients. First I have clustered the patients in order to bring the number of patient-groups to a manageable level. This also helps increase the stability of the optimal solution. Then I have used Linear Programming to determine the hospital in such a way that each cluster is assigned only 1 hospital.`,
            `For as many patients as possible, these hospitals should be as accessible as possible. We must minimize the total distance that everyone has to travel to reach these hospitals to achieve maximum efficiency in COVID-19 isolation.`,
        ],
        source: 'https://github.com/dhatwalia/optimal-hospital-placement',
    },
    {
        name: 'jsf-sudoku-solver',
        title: 'JSF based Sudoku Solver',
        skills: 'Java, JSF',
        content: [
            `A Sudoku puzzle made up of 9x9 grid filled with numbers ranging from 1-9. The entire puzzle itself is divided into 9 3x3 sub-grids. The number of numbers already given can be used to greatly effect the difficulty of solving the puzzle. There are other versions of Sudoku with their own twists like including extra 3x3 subgrids in the intersection of the original 9 grids and so on. We spoke of the difficulty and number of combinations a single sudoku puzzle can have which makes it computationally difficult to find all solutions or the solutions that fall within certain characteristics.`,
            `We have successfully implemented a Sudoku puzzle in JSF. Though there is a lot of scope for improvement, the Sudoku puzzle itself will accurately generate a solved puzzle and check the correctness of the user’s solution.`,
            `The main benefit of using our program is that the high complexity task of generating the Sudoku is quickly performed at the server side and checking for the correctness is done at the client side. This eliminates the need of sending the data from the server to the client and vice versa. Another implication of doing so is that we eliminate the risk of man in the middle attack.`,
            `This project through the usage of publicly available components showcases the benefits of using JSF and its wide variety of components whilst developing the complex parts in Java.`,
        ],
        source: 'https://github.com/dhatwalia/sudoku-solver',
    },
    {
        name: 'gan-captcha-gen',
        title: 'Generating digits for captcha using Generative Adversarial Network',
        skills: 'Machine Learning, Deep Learning, Neural Networks',
        content: [
            `We propose to generate digits for Captcha using Generative Adversarial Network(GAN). The captcha will be made up of digits only because it reduces the time it takes for a human to solve the captcha. This will also eliminate the need of manually generate captcha and increase the diversity in our captcha dataset. Since our captcha is made up of only digits, it also takes less time for humans to solve. Additionally, it is more language neutral.`,
            `Captcha was first introduced as an automated test to deter- mine if the user is a human or not. It generates a sequence of characters that humans can understand, but computers cannot. The human must enter the sequence in the text-box, that comes along with the it, in the order to solve the it. Due to its reliability, it has been considered useful by many websites. Text based captchas can take 11.5 seconds to solve.`,
            `Generative Adversarial Network(GAN) is a neural network which simultaneously train two models: a generator that cap- tures the data distribution, and a discriminator that determines the probability that a sample came from the training data [3]. This discriminator can be trained from real samples and generate fake images using the generator.`,
            `We can use MNIST database of handwritten digits to solve the problem of training our discriminator. It has 60,000 training and 10,000 testing data samples. The data is publicly available and free to use in keras python library.`,
        ],
        source: 'https://github.com/dhatwalia/sudoku-solver',
    },
];

export default project;
