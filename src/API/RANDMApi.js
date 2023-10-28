const BASE_URL = 'https://rickandmortyapi.com/api'

const getAllDataFromRAMApiEndpoint = async (endpoint) => {
    let allData = [];
    let nextUrl = `${BASE_URL}/${endpoint}/?page=1`

    while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            allData = allData.concat(data.results);
        }

        nextUrl = data.info.next;
    }

    return allData;
}

const getDataFromERAMApiEndpoint = async (endpoint, id) => {
    let dataToReturn;
    let url = `${BASE_URL}/${endpoint}/${id}`;

    let data = await fetch(url);
    if (data.results && data.results.length > 0) {
         dataToReturn = data.results;
    }

    return dataToReturn;
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