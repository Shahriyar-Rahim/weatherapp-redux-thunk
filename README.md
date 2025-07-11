# Weather Dashboard App

![App Screenshot/Banner](public\dash-banner.png)
## Project Title: Weather Dashboard with React Redux & RTK

## Description

This is a dynamic and responsive **Weather Dashboard Application** that allows users to fetch and display current weather data for any city worldwide. Beyond its core functionality, this project serves as a comprehensive demonstration of state management in React applications using advanced Redux patterns. It specifically showcases the integration of **React Redux**, **Redux Toolkit (RTK)**, **Redux Thunk** for asynchronous operations, and **Redux Logger** for state debugging.

## Live Demo

You can explore the live Weather Dashboard here: Not deployed yet for some issues on vercel!!!

## Features

* **City Search:** Users can input any city name to retrieve its current weather conditions.
* **Weather Data Display:** Shows essential weather information such as temperature, humidity, wind speed, and weather description.
* **Real-time Data:** Fetches up-to-date weather information from a public API.
* **Mobile Responsive:** Designed to provide an optimal viewing and interaction experience across various devices and screen sizes.
* **Advanced State Management Demo:**
    * **React Redux:** Connects React components to the Redux store.
    * **Redux Toolkit (RTK):** Simplifies Redux development with opinionated tools for common use cases.
    * **Redux Thunk:** Handles asynchronous logic (like API calls) within Redux actions.
    * **Redux Logger:** Provides a console log of every Redux action and state change for debugging purposes.

## Technologies Used

This project is built with a modern React ecosystem, focusing on robust state management:

* **React.js:** The primary JavaScript library for building the user interface.
* **Vite:** A next-generation frontend tooling that provides a fast and efficient development experience.
* **Tailwind CSS:** A utility-first CSS framework for rapid and responsive UI styling.
* **Redux Ecosystem:**
    * `@reduxjs/toolkit`: The official, opinionated, batteries-included toolset for efficient Redux development.
    * `react-redux`: Official React bindings for Redux.
    * `redux-thunk`: Middleware for Redux that allows you to write action creators that return a function instead of an action.
    * `redux-logger`: A simple logger for Redux, useful for debugging.
* **React Icons:** For easily including popular icon libraries in React projects.

### Dependencies from `package.json`:

* `@reduxjs/toolkit`
* `@tailwindcss/vite`
* `react`
* `react-dom`
* `react-icons`
* `react-redux`
* `redux-logger`
* `redux-thunk`
* `tailwindcss`

### Development Dependencies from `package.json`:

* `@eslint/js`
* `@types/react`
* `@types/react-dom`
* `@vitejs/plugin-react`
* `eslint`
* `eslint-plugin-react-hooks`
* `eslint-plugin-react-refresh`
* `globals`
* `vite`

## Installation and Local Setup

To get a copy of this project running on your local machine for development and testing, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Shahriyar-Rahim/weatherapp-redux-thunk.git
    cd weatherapp-redux-thunk
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Set up Environment Variables:**
    This application likely uses a Weather API (e.g., OpenWeatherMap). You will need to obtain an API key and configure it.
    Create a `.env` file in the root of the project and add your API key:
    ```
    VITE_WEATHER_API_KEY=YOUR_API_KEY_HERE
    ```
    *(Replace `YOUR_API_KEY_HERE` with your actual API key.)*
4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically open in your web browser at `http://localhost:5173` (or a similar port provided by Vite).

## Usage

Once the application is running:

1.  Enter the name of a city in the provided input field.
2.  Press Enter or click the search button to fetch and display the weather data for that city.
3.  Observe the console in your browser's developer tools to see the Redux actions and state changes logged by `redux-logger`.

## Contributing

Contributions, issues, and feature requests are highly encouraged! If you have ideas for improvements, new features, or find any bugs, please feel free to fork the repository and open a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'feat: Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

This project is open-source and distributed under the **MIT License**. See the `LICENSE` file in the repository for full details.

## Contact

Shahriyar Rahim

Project Link: https://github.com/Shahriyar-Rahim/weatherapp-redux-thunk