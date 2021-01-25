const body = document.querySelector("body");



const contenedor = document.createElement("div");
contenedor.id = "contenedor";
body.appendChild(contenedor);



function paintWeatherData(name, weather, main) {
    const body = document.querySelector("body");

	const container = document.createElement("div");

	const nameP = document.createElement("p");

	nameP.innerText = name;

    container.appendChild(nameP);

    const mainP = document.createElement("p");

	mainP.innerText = main.temp;

	container.appendChild(mainP);

	weather.map(weatherInfo => {
		const weatherContainer = document.createElement("div");
		const description = document.createElement("p");


		description.innerText = weatherInfo.description;

		weatherContainer.appendChild(description);

		container.appendChild(weatherContainer);

		return weatherContainer;
    });

	body.appendChild(container);
}

function paintWeather5diasData(city, list) {
    const body = document.querySelector("body");

	const container = document.createElement("div");

	const nameP = document.createElement("p");

	nameP.innerText = city.name;

    container.appendChild(nameP);

	list.map(weatherInfo => {
		const weatherContainer = document.createElement("div");
		const description = document.createElement("p");


		description.innerText = weatherInfo.weather.description;

		weatherContainer.appendChild(description);

		container.appendChild(weatherContainer);

		return weatherContainer;
    });

	body.appendChild(container);
}

function getWeatherData(inputVal) {
    const apiKey = "";
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metrics&lang=es`)
	.then(response => response.json())
	.then(data => {
        console.log(data);
		const {name, weather, main} = data;
		paintWeatherData(name, weather, main);
	});
}

function getWeather5diasData(inputVal) {
    const apiKey = "";
	fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=${apiKey}&units=metrics&lang=es`)
	.then(response => response.json())
	.then(data => {
        console.log(data);
		const {city, list} = data;
		paintWeather5diasData(city, list);
	});
}


function getCityName() {

    const buscador = document.createElement("div");
    const labelInput = document.createElement("label");
    const inputCiudad = document.createElement("input");
    const btn = document.createElement("button");
    const btn5 = document.createElement("button");

    buscador.id = "buscador";
    labelInput.innerText = "Find City";
    inputCiudad.placeholder = "Search City"
    btn.innerText = "Search";
    btn.preventDefault;
    btn5.innerText = "5 Días";
    btn5.preventDefault;

    contenedor.appendChild(buscador);
    buscador.appendChild(labelInput);
    buscador.appendChild(inputCiudad);
    buscador.appendChild(btn);
    buscador.appendChild(btn5);


    btn.addEventListener("click", () => {
        const inputVal = inputCiudad.value;

        if (inputVal) {
            getWeatherData(inputVal);
        }
        else
        console.log("No has introducido ninguna ciudad");
        return inputVal;
    });

    btn5.addEventListener("click", () => {
        const inputVal = inputCiudad.value;

        if (inputVal) {
            getWeather5diasData(inputVal);
        }
        else
        console.log("No has introducido ninguna ciudad");
        return inputVal;
    });
};

getCityName();
