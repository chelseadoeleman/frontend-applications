export const setNewLocalStorage = (inputName, selectedValue, keyValue) => {
    const data = window.localStorage.getItem('data') || [];
    try {
      //Parse data to Javascript
      const parsedData = JSON.parse(data);
      //Set default data
      parsedData[0][keyValue][inputName] = selectedValue;
      //Set item in local storage
      window.localStorage.setItem('data', JSON.stringify(parsedData));
    }
    catch (error) {
      throw new Error(error);
    }
  }