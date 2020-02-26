const apiUrl = 'http://34.89.93.186:8080/apiv1';

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
