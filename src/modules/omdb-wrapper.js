import axios from "axios";

const APIKEY = "7b62fa5d"; 
const BASE_URL = "http://www.omdbapi.com/";

const OMDBSearchByPage = async (searchText, page = 1) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: APIKEY,
        s: searchText,
        page: page
      }
    });

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = parseInt(response.data.totalResults);
      returnObject.datos = response.data.Search;
    }
  } catch (error) {
    console.error("Error en OMDBSearchByPage:", error.message);
  }

  return returnObject;
};

const OMDBSearchComplete = async (searchText) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: []
  };

  try {
    const firstPage = await OMDBSearchByPage(searchText, 1);
    
    if (firstPage.respuesta) {
      return returnObject;
    }
    returnObject.respuesta = true;
    returnObject.cantidadTotal = firstPage.cantidadTotal;
    returnObject.datos = [...firstPage.datos];
    const totalPages = Math.ceil(firstPage.cantidadTotal / 10);
  
    const promises = [];
    for (let page = 2; page <= totalPages; page++) {
      promises.push(OMDBSearchByPage(searchText, page));
    }
    const otherPages = await Promise.all(promises);
    
    for (const pageResult of otherPages) {
      if (pageResult.respuesta) {
        returnObject.datos.push(...pageResult.datos);
      }
    }
  } catch (error) {
    console.error("Error en OMDBSearchComplete:", error.message);
  }

  return returnObject;
};

const OMDBGetByImdbID = async (imdbID) => {
  let returnObject = {
    respuesta: false,
    cantidadTotal: 0,
    datos: {}
  };

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: APIKEY,
        i: imdbID,
        plot: "full"
      }
    });

    if (response.data.Response === "True") {
      returnObject.respuesta = true;
      returnObject.cantidadTotal = 1;
      returnObject.datos = response.data;
    }
  } catch (error) {
    console.error("Error en OMDBGetByImdbID:", error.message);
  }

  return returnObject;
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };