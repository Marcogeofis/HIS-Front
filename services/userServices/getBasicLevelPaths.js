const ENDPOINT = "http://localhost:3001/api/v1";

async function getBasicLevelPaths() {
    try {
        const res = await fetch(`${ENDPOINT}/basic-course`, {method: 'GET'})
        const data = await res.json()
        return (data)
    } catch (error) {
        console.log(error)
    }
}

export default getBasicLevelPaths;