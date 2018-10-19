// Shoutout to Maikel van Veen
// return data of a certain user (in this case the first user) by converting the JSON string to JS
// in this case the storagekey(i.e. general) and the index out of data, 
// which is written in window.localstorage
export const getLocalStorageValue = (storageKey, storageIndex) => {
    const data = window.localStorage.getItem('data')

    try {
        const parsedData = JSON.parse(data)
        return parsedData[0][storageKey][storageIndex]
    } catch (error) {
        throw new Error(error)
    }
}