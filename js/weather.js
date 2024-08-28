document.getElementById('search-btn').addEventListener('click', function() {
    const apiKey = '2f216d7e12fc4a7093905d7847230a7f'; // Replace with your Weatherbit API key
    const cityName = document.getElementById('city-name').value;
    const weatherUrl = `https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${apiKey}`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.data && data.data.length > 0) {
                const weatherData = data.data[0];
                document.getElementById('weather-results').innerHTML = `
                    <div class="weather-card">
                        <div class="weather-info">
                            <h3>${weatherData.city_name}, ${weatherData.country_code}</h3>
                            <p><strong>Temperature:</strong> ${weatherData.temp} °C</p>
                            <p><strong>Weather:</strong> ${weatherData.weather.description}</p>
                            <p><strong>Wind Speed:</strong> ${weatherData.wind_spd} m/s</p>
                            <p><strong>Humidity:</strong> ${weatherData.rh} %</p>
                        </div>
                        <div class="weather-icon">
                            <i class="fas fa-cloud-sun"></i>
                        </div>
                    </div>
                `;
            } else {
                document.getElementById('weather-results').innerHTML = '<p>No weather data found for the entered city.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-results').innerHTML = '<p>Error fetching weather data. Please try again later.</p>';
        });
});
