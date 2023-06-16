export async function authenticateUser ({email, password}) {
    const ENDPOINT = "http://localhost:3001/api/v1";

    try {
        const res = await fetch(`${ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email, password})
        })

        const data = await res.json();
        const { user, jwToken } = data;
        const dataUser = {
            user: user.id,
            jwt: jwToken
        }

        return dataUser;
    } catch (error) {
        console.log(error)
    }
}


