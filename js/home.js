async function sendApiRequest() {
    let API_KEY = "lh80h9nRv18lfxOy9T6BUPRjYcGVGYU7RmDHhltH"
    let response = await fetch('https://api.nasa.gov/planetary/apod?api_key=${API_KEY}');
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data) {
    document.querySelector("#content").innerHTML = data.explanation
}