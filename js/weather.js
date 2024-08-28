document.getElementById('search-btn').addEventListener('click', function() {
    const cityName = document.getElementById('city-name').value;
    const apiKey = 'a091619aa44fbd31c5df1e565f21a097'; // Replace with your actual API key
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    fetch(weatherUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                const weather = `
                    <div class="weather-info">
                        <h3>Weather in ${data.name}</h3>
                        <p>Temperature: ${data.main.temp} °C</p>
                        <p>Weather: ${data.weather[0].description}</p>
                        <p>Humidity: ${data.main.humidity}%</p>
                        <p>Wind Speed: ${data.wind.speed} m/s</p>
                    </div>
                `;
                document.getElementById('weather-results').innerHTML = weather;
            } else {
                document.getElementById('weather-results').innerHTML = `<p>Error: ${data.message}</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('weather-results').innerHTML = '<p>Error fetching results.</p>';
        });
});
