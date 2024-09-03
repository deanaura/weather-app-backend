# Weather App Backend
A simple backend application built with Node.js and Express to fetch weather information using the WeatherAPI.

## Features
- Fetch current weather data for a specified location.
- Uses [WeatherAPI](https://www.weatherapi.com/) for weather data.
- Built with Node.js and Express.

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or later recommended)
- [NPM](https://www.npmjs.com/) (Node Package Manager)

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/deanaura/weather-app-backend.git
   cd weather-app-backend
   ```
2. **Install Dependencies:**

   ```bash
   npm install
   ```
3. **Set Up Environment Variables:**
   
    Create a .env file in the root directory and add your WeatherAPI key and port configuration:
    ```bash
   WEATHER_API_KEY=YOUR_API_KEY_HERE
   PORT=3000
   ```
4. **Start the Server:**
   
  - For development (with auto-reload):
    ```bash
    npm run dev
    ```
    
  - For production:
    ```bash
    npm start
    ```

## Usage
Once the server is running, you can access the API endpoints as described below. You can use tools like Postman or a web browser to interact with the API.

## Endpoints
### Get Weather Data
  - URL: /api/weather/:location
  - Method: GET
  - URL Params:
    
    :location - Name of the location for which you want to get the weather data.
  - Success Response:
    - Code: 200 OK
    - Content:
      ```bash
      {
        "location": {
          "name": "Jakarta",
          "region": "",
          "country": "Indonesia",
          ...
        },
        "current": {
          "temp_c": 29.0,
          "condition": {
            "text": "Clear"
          },
          ...
        }
      }
      ```
- Error Response:
  - Code: 500 Internal Server Error
  - Content:
      ```bash
      {
        "message": "Error saat mengambil data cuaca",
        "error": "Error message here"
      }
      ```
