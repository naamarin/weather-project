# Weather System

A weather application built with React that allows users to search for cities and view current weather conditions, including temperature, feels like temperature, and humidity. 

## Features

- Display current weather data for Eilat, New York, London and Alaska.
- Weather data include: temperature, feels like temperature, humidity
- Dynamic weather icons based on current weather conditions
- Responsive design for both desktop and mobile views

## Table of Contents

- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
- [Available Scripts](#available-scripts)
- [Usage](#usage)
- [APIs Used](#apis-used)
- [Contributing](#contributing)
- [License](#license)

## Demo

Add a link to a live demo if hosted.

Example:

You can check the live demo [here](https://weather-app-demo.com).

## Technologies Used

- **React**: Frontend library for building user interfaces
- **Axios**: For making HTTP requests to weather APIs
- **OpenWeatherMap API**: For fetching real-time weather data
- **React Icons**: For displaying weather-related icons
- **CSS/SCSS**: For styling the application

## Setup

To run this project locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/naamarin/weather-app.git
    ```

2. Navigate into the project directory:

    ```bash
    cd weather-app
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Create a `.env` file in the root of the project and add your API key for OpenWeatherMap:

    ```env
    REACT_APP_WEATHER_API_KEY=your_openweather_api_key
    ```

    You can get your API key from the [OpenWeatherMap website](https://openweathermap.org/api).

5. Start the development server:

    ```bash
    npm start
    ```

6. Open your browser and go to:

    ```
    http://localhost:3000
    ```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.  
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

## Usage

Once the application is up and running, you can see the weather in Eilat, New York, London OR Alaska for your choice, and it will display:

- Weather icon representing current conditions
- Temperature
- Feels like temperature
- Humidity

## APIs Used

- **[OpenWeatherMap API](https://openweathermap.org/api)**: Provides current weather data.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and make changes as you'd like. Submit a pull request with a clear description of the changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
