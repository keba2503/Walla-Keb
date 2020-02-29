const apiUrl = 'http://34.89.93.186:8080/apiv1';


//Register

export const registerApi = async (username, password) => {
    try {
        const registerUrl = `${apiUrl}/register`;

        const response = await fetch(registerUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            }),
            credentials: 'include'
        });
        const registerJson = await response.json()
        return registerJson;
    } catch (error) {
        console.error(error);
    }
}

//Login

export const loginApi = async (username, password) => {
    try {
        const loginUrl = `${apiUrl}/login`;

        const response = await fetch(loginUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            }),
            credentials: 'include'
        });
        const loginJson = await response.json()
        return loginJson;
    } catch (error) {
        console.error(error);
    }
}


//Anuncios

export const adApi = async () => {
    try {
        const adUrl = `${apiUrl}/anuncios`;
        const response = await fetch(adUrl, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        });
        const adJson = await response.json()
        return adJson;
    } catch (error) {
        console.error(error);
    }
}

//Tags

export const tags = async () => {
    const tagUrl = `${apiUrl}/tags`;  
    const response = await fetch(tagUrl);
    const json = await response.json();
    return json.results;
  };


  //// Filtrado de Anuncios

export const filter = async (params) => {
    const filterUrl = `${apiUrl}/anuncios?${params}`;
    console.log(filterUrl);
    const response = await fetch(filterUrl, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    const json = await response.json();
    return json;
  };


  ///detalle

  export const adDetail = async id => {
     try {
        const detailUrl = `${apiUrl}/anuncios`;
      const response = await fetch(`${detailUrl}/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      });
      const isadDetail = await response.json();

      return isadDetail;
    } catch (err) {
      console.error(err);
    }
  }