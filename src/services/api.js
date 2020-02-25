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
