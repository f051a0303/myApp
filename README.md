# My WebApp

Welcome to My WebApp, a simple and easy-to-use web application for browsing museum artifacts. This app was created using NextJS and React and is hosted on Vercel.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Installation](#installation)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [API](#api)

## Features

### Advanced Search

Use our advanced search feature to find items in our collection with specific titles, geographic locations, or mediums. You can also search for items that have been highlighted or are currently on view.

Here are the available search options:

- `#search-query`: Enter keywords or phrases to search for.
- `#search-by`: Choose from Title, Geo Location, or Medium to search for items by category.
- `#geo-location-and-medium`: Enter one or more search terms separated by the `|` operator for Geo Location and Medium.
- `#highlighted`: Search for items that have been highlighted in our collection.
- `#currently-on-view`: Search for items that are currently on view in our collection.

Use these search options to explore our collection and find the items you're interested in.


Besides that, it is a:

- A modern and user-friendly design that provides a seamless user experience
- JWT (JSON Web Token) authentication, which enables secure authentication and authorization for users
- A user registration feature that allows users to create an account and securely store their credentials
- A login feature that enables registered users to access their account and securely authenticate themselves using their stored credentials
- A user dashboard that displays personalized information for each user, including their profile information and any saved preferences or search history
- Role-based access control, which ensures that each user can only access the features and functionalities they are authorized to use
- User data encryption and secure storage, which protects user data from unauthorized access or breaches
- Error handling and exception reporting, which improves the app's robustness and reliability by handling any errors or exceptions that may occur
- Testing and debugging, which ensures the app is free from bugs or errors and provides optimal performance and functionality.

## Usage

To use this webapp, simply navigate to the webapp URL and create an account by clicking on the "Register" button. Once you've created an account, you can log in with your credentials and access the features and functionalities of the app that you're authorized to use based on your role. 

The user dashboard provides a personalized experience, displaying your profile information and any saved preferences or settings. You can access your profile by clicking on the "Profile" button in the navigation menu. 

If you encounter any issues or errors while using the app, please contact the app administrator for assistance. 



## Installation

To install and run this webapp locally, follow these steps:

1. Clone the repository to your local machine.
2. Open the terminal or command prompt and navigate to the project directory.
3. Run `npm install` to install all the necessary dependencies listed in the package.json file, including Next.js.
4. Once the installation is complete, run `npm run dev` to start the development server.
5. Open your web browser and navigate to `http://localhost:3000` to view your app.

If you encounter any issues during the installation process, please consult the documentation or seek assistance from the project maintainer.

Note that if you want to deploy the app to Vercel, you can simply connect your GitHub repository to your Vercel account and deploy your app from there. For more information on how to do this, please refer to the Vercel documentation.


## Deployment

To deploy your Next.js app with Vercel, follow these steps:

1. Create an account on Vercel if you haven't already done so.
2. Connect your GitHub repository to your Vercel account by following the instructions provided by Vercel.
3. Once your repository is connected, Vercel will automatically detect your Next.js app and prompt you to deploy it.
4. Choose your preferred deployment options, such as the name of your app and the environment you want to deploy to.
5. Vercel will then deploy your app and provide you with a URL where you can access it.

That's it! Your Next.js app is now deployed and accessible to the public. You can also configure various settings for your app, such as custom domains and SSL certificates, by accessing the Vercel dashboard.

If you encounter any issues during the deployment process, please consult the documentation or seek assistance from the Vercel support team.


## Contributing

If you'd like to contribute to this project, I welcome your contributions! Simply fork this repository and make any necessary changes. Then, submit a pull request with your changes and a brief description of what you've done. I'll review your changes and merge them into the main repository if they're appropriate.

## API


The Museum Web App is a frontend application that allows users to browse collections and exhibitions from various museums. This app is powered by the [Museum React App API](https://github.com/f051a0303/Museum-API), which provides data and functionality to the app.

To use the authentication features of the Museum Web App, you will need to have the Museum React App API up and running. Without the API, the entire authentication features will not work, including user registration, login, and the ability to view and modify a user's favorite exhibits and recently viewed exhibits.

Additionally, the searching feature in the Museum Web App is only available after a user has logged in. Without the API, this feature will not work.

To get started with the Museum Web App, you'll need to have the Museum React App API up and running. If you haven't already, head over to the [Museum React App API repository](https://github.com/f051a0303/Museum-API) to get started. 

Once the API is running, simply open the Museum Web App and start browsing museum collections and exhibitions.

## License
This project is licensed under the MIT License.


