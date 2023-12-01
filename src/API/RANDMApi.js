const BASE_URL = 'https://rickandmortyapi.com/api'

async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        let data = await response.json();
        let dataToReturn = []
        if (Array.isArray(data)) {
            dataToReturn = data;
        } else if (data && typeof data == 'object') {
            dataToReturn = [data]
        }

        return dataToReturn;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getAllDataFromRAMApiEndpoint = async (endpoint) => {
    let allData = [];
    let nextUrl = `${BASE_URL}/${endpoint}/?page=1`

    try {
        while (nextUrl) {
            const response = await fetch(nextUrl);
            if(!response.ok) {
                throw new Error(`API Request failed with status: ${response.status}`)
            }
            const data = await response.json();

            if (data.results && data.results.length > 0) {
                allData = allData.concat(data.results);
            }

            nextUrl = data.info.next;
        }

        return allData;

    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`)
    }
}

const getDataFromRAMApiEndpoint = async (endpoint, id) => {
    let url = `${BASE_URL}/${endpoint}/${id}`;

    return await fetchData(url);

}

const getTriviaDataFromRAMApi = async () => {
    let randomNumbers = [];
    for (let i = 0; i < 4; i++) {
        let randomNumber = Math.floor(Math.random() * 800) + 1;
        randomNumbers.push(randomNumber);
    }
    const randomNumbersString = randomNumbers.join(',');

    let url = `${BASE_URL}/character/${randomNumbersString}`;
    let data = await fetchData(url)
    return data
}


export const getAllCharacters = async () => {
    return getAllDataFromRAMApiEndpoint("character");
}

export const getAllLocations = async () => {
    return getAllDataFromRAMApiEndpoint("locations");
}

export const getAllEpisodes = async () => {
    return getAllDataFromRAMApiEndpoint("episode");
}

export const getCharacter = async (id) => {
    return getDataFromRAMApiEndpoint('character', id);
}

export const getLocation = async (id) => {
    return getDataFromRAMApiEndpoint('location', id);
}

export const getEpisode = async (id) => {
    return getDataFromRAMApiEndpoint('episode', id);
}

export const getTriviaQuestion = async () => {
    return await getTriviaDataFromRAMApi()
}