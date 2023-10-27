const BASE_URL = 'https://rickandmortyapi.com/api'

// Will return an Array with all characters in ID Order.
export const getAllCharacters = async () => {
    let allCharacters = [];
    let nextUrl = `${BASE_URL}/character/?page=1`

    while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            allCharacters = allCharacters.concat(data.results);
        }

        nextUrl = data.info.next;
    }
    return allCharacters;
};

// returns a single character by ID.
export const getSpecificCharacter = async (characterId) => {
   let characterToReturn;
   let characterURL = `${BASE_URL}/character/${characterId}`

   let data = await fetch(characterURL);
    if (data.results && data.results.length > 0) {
        characterToReturn = data.results;
    }

    return characterToReturn;
};

// returns all locations
export const getAllLocations = async () => {
    let allLocations = [];
    let nextUrl = `${BASE_URL}/location/?page=1`

    while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            allLocations = allLocations.concat(data.results);
        }

        nextUrl = data.info.next;
    }
    return allLocations;
};

// returns a single location by ID
export const getSpecificLocation = async (locationId) => {
    let locationToReturn;
    let locationURL = `${BASE_URL}/location/${locationId}`

    let data = await fetch(locationURL);
    if (data.results && data.results.length > 0) {
        locationToReturn = data.results;
    }

    return locationToReturn;
};