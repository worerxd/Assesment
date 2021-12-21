# Worer Fake Store App

Worer Fake Store App is the title of this project.

# Project Description

This project is about an Assesment from MakeItReal Bootcamp. The goal is to use a fake API and display the products they are giving us as an Array, then we have add a timer to each product, when the timer comes to 0 the button "Go to Detail" will be disabled pretending that the offer is over.

The project was build with:

### `html, css, react and material ui`

Some of the challenges i had was to add the timer globally so it will kepp the count down of the timer even when you enter at the detail's page. And the answer was to use Context.

# End Points

| ROUTES      | RESULT                                                          |
| ----------- | --------------------------------------------------------------- |
| /           | List all the products                                           |
| /detail/:id | List the detail of one product                                  |
| /about      | Shows the personal info                                         |
| /questions  | Shows the questions and answers for the part 2 of the assesment |

# How to use the project

### `npm install`

Installs all the packages used in this project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
