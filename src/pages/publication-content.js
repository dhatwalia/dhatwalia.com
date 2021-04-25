const publications = [
    {
        name: 'selection-ipl-ensembles-classifier',
        title: 'Selection of Players and Team for an Indian Premier League Cricket Match Using Ensembles of Classifiers',
        date: "August 02, 2020",
        content: [
            `In this work, we have shown how we can use neural networks and K-Means or Hierarchical clustering in place of clustering algorithms to represent data in a meaningful way to predict the best batsman/bowler to be sent next for a given match condition at an Indian Premier League Cricket Match. We predicted the best bowler/batsman for a given match condition using the match parameters of every ball. We carried out tests using various neural networks ranging from single-layered perceptron to multilayered multi-neuron neural networks, along with a variety of data representations. The neural network with three hidden layers perceptron gave the best results for batsman and bowlers, respectively. These neural networks can produce fast and accurate results within 3 seconds. The activation functions used were ReLu and SoftMax. We used K-Means and hierarchical clustering to generate data. We also predict an ideal team for a match using K-Means Clustering and hierarchical clustering, which found interesting and accurate patterns, constraints.`,
        ],
        source: "https://ieeexplore.ieee.org/document/9198371",
    }, {
        name: 'prediction-ipl-regression',
        title: 'Prediction of Player Price in IPL Auction Using Machine Learning Regression Algorithms',
        date: "August 02, 2020",
        content: [
            `This work predicted the cost at which a player can be sold in the Indian Premier League Auction using machine learning-based algorithms. We estimated the players' selling price using their past performance parameters like runs, balls, innings, wickets and matches played. Tests were carried out in various machine learning models like Decision Tree Regressor, K-Nearest Neighbors (KNN), Linear Regression, Stochastic Logistic Regression, Random Forest Regressor and Support Vector Regression (SVR). Among these, SVR and Linear Regression gave the best results for predicting batsman and bowlers, respectively. These algorithms can produce fast and accurate results within 3 seconds, helping auctioneers make quick decisions. We have also considered the inflation factor and mapping the same to the budget during the model's training.`,
        ],
        source: "https://ieeexplore.ieee.org/document/9198668",
    }, {
        name: 'jsf-sudoku',
        title: 'Online Sudoku Generator and Solver for Competitions using Java Server Faces',
        date: "May 09, 2020",
        content: [
            `Sudoku is a trendy pass-time game that had gained much popularity when it was published by The Times in London. We have used Java Server Faces (JSF) as a tool for the Full-Stack development of Sudoku as a web browser-based game. By building this project, we had gained a better understanding of the framework. In this work, we present an algorithm for solving the Sudoku problem and a safe way of validating the results keeping scalability in mind.`,
        ],
        source: "https://www.techrxiv.org/articles/preprint/Online_Sudoku_Generator_and_Solver_for_Competitions_using_Java_Server_Faces/12093732/1",
    },
];

export default publications;
