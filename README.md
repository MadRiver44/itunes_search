![Discography](https://user-images.githubusercontent.com/7386478/47652802-4fad5080-db5d-11e8-9d47-c6bdbd11779f.png)

[Deployment on Heroku](https://immense-stream-10893.herokuapp.com/)

### To run app locally,

1. clone repo
2. cd discograhy
3. npm install
4. yarn start

For a look at the true commit history https://github.com/MadRiver44/Discography
NOTE: Due to intractable issues dealing with preflight checks, CORS, and babel-lodaer dependency conflicts, this repo is is a stripped down version of the Discography app. Please view above repo for actual workflow and development track.

### This was created with Create React App.

The app queries the user to input the name of an artist and through an ajax request, the app hits the itunes api for search and returns the desired results.

Media queries and Flexbox are used for responsiveness. Scss is used for pre-processing by adding the node-sass module. The search icon is from the Fontawesome module.

### Workflow
![Whiteboarding](https://user-images.githubusercontent.com/7386478/47653641-618ff300-db5f-11e8-9a92-36d70c29cc6f.jpg)

Starting with a design, I mapped the look and functionality. I identified where state should live so as to best distribute it to appropriate component children. From here it was mocking up the components, using Postman to get data and view the shape of the response. 

App progress was mapped with Github projects board.

A Regex was used to parse the returned release date and .replace to enhance the image size.

