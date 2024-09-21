# Material UI MVVM Login and Image Gallery

This is a **React.js** project demonstrating a **Login** and **Image Gallery** app, built using **Material UI** components and following the **MVVM (Model-View-ViewModel)** architecture. The application includes a login page where users can enter their credentials, and upon successful login, they are redirected to a page displaying a simple image gallery.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)

## Technologies Used

- **React.js**: JavaScript library for building user interfaces.
- **Material UI**: A popular React UI framework implementing Google's Material Design.
- **TypeScript**: A strongly-typed superset of JavaScript.
- **React Router**: A standard library for routing in React.

## Features

- **Login Page**: Users are prompted to log in with a valid username (`pengguna`) and password (`masuk`).
- **Image Gallery**: After logging in, the user is redirected to a page showing three placeholder images.
- **MVVM Architecture**: The app follows the Model-View-ViewModel architecture, separating the logic, data handling, and UI components.

## Setup and Installation

1. Clone this repository:
```bash
git clone https://github.com/your-repository/material-ui-mvvm.git
```

2. Navigate to the project directory:
```bash
cd material-ui-mvvm
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

4. Start the development server:
```bash
npm start
```
5. Open your browser and go to `http://localhost:3000` to see the application in action.

## Usage

- **Login**:
- Enter the username `pengguna` and the password `masuk`.
- Click the "Login" button to validate your credentials.
- **After Login**:
- If the credentials are valid, you will be redirected to an image gallery page where you can see three placeholder images.
- If the credentials are incorrect, an error message will be displayed.

## Available Scripts

In the project directory, you can run:

### `$ npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.  
You will also see any lint errors in the console.

### `$ npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

### `$ npm test`

Launches the test runner in the interactive watch mode.
