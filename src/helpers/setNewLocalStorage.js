// Shoutout to Maikel van Veen
// Set the input of the user to LocalStorage by first getting the data object
// in window.localStorage
export const setNewLocalStorage = (inputName, selectedValue, keyValue) => {
    const data = window.localStorage.getItem('data') || [];
    try {
      //Parse JSON string to JS
      const parsedData = JSON.parse(data)
      //Set default data
      parsedData[0][keyValue][inputName] = selectedValue;
      //Set item in local storage in a JSON string
      window.localStorage.setItem('data', JSON.stringify(parsedData))
    }
    catch (error) {
      throw new Error(error)
    }
  }