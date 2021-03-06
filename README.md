# Uplifting Quotes
## [David Eliason](http://www.davethemaker.com)


### Concept
To build React app that displays uplifting quotes with such features as filter and adding user quotes. Technology used includes React, Redux, Firebase for data persistence, Heroku deployment, Docker container, AWS S3 and CloudFront deployment, Bootstrap styling.

### Steps Taken
1. make CRA and create folder structure
2. create JSON with several quotes and upload to Firebase DB
3. Systematically build Redux reducers, containers, etc.
4. Build input field which used props functions to update Redux state
5. Built Background component which fetched random quotes from API
6. Bootstrap styling


### Lessons Learned/Challenges
Need to make sure to add Bootstrap css CDN link in root file or else changes will not show ;) Working with Fetch and an API was something I hadn't worked with in awhile. Working with Bootstrap within the React world also provided some learning opportunities.

Previously, an AWS S3 bucket was used to host, as well as using a Docker container, and these features can re-initiated again.

### Conclusion 
Successfully created a React app which uses Redux to populate state data to child components. Use of an API to randomly generate a quote. Input fields to allow user to add a quote which will be added to Firebase Database for persistence.

[David Eliason](https://www.linkedin.com/in/davideliason/)
[Portfolio](https://davideliason.github.io/portfolio/

[Heroku](https://upliftingquotes.herokuapp.com/)
[Github](https://github.com/davideliason/upliftingquotes)

[AWS S3 Deployment](http://upliftingquotes.s3-website-us-west-2.amazonaws.com/)
![InspirationalQuotes](./InspirationalQuotes.png)

To run the Dockerized version:
1. Clone repo
2. $ docker run -it -v ${PWD}:/usr/src/app -p 3000:3000 --rm upliftinuotes