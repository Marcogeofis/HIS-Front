const ENDPOINT = "http://localhost:3001/api/v1";

// ?section=${section}
async function getBasicLevel(chapter) {
    try {
        const res = await fetch(`${ENDPOINT}/basic-course?chapter=${chapter}`, {method: 'GET'})
        const data = await res.json()
        return (data)
    } catch (error) {
        console.log(error)
    }
}

export default getBasicLevel;