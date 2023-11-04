const BASE_URL = 'https://rickandmortyapi.com/api'

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

const getDataFromERAMApiEndpoint = async (endpoint, id) => {
    let dataToReturn;
    let url = `${BASE_URL}/${endpoint}/${id}`;

    try {
        let response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`)
        }
        if (response.results && response.results.length > 0) {
            dataToReturn = response.results;
        }

        return dataToReturn;
    } catch (error) {
        throw new Error(`Error fetching data: ${error.message}`);
    }
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
    return getDataFromERAMApiEndpoint('character', id);
}

export const getLocation = async (id) => {
    return getDataFromERAMApiEndpoint('location', id);
}

export const getEpisode = async (id) => {
    return getDataFromERAMApiEndpoint('episode', id);
}