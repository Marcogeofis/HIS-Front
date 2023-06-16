const ENDPOINT = "http://localhost:3001/api/v1";

async function getPhoneticSound(){
    try {
        const res = await fetch(`${ENDPOINT}/phonetic-table`, {method: 'GET'})
        const data = await res.json()
        return (data)
    } catch (error) {
        console.log(error)
    }
}

export default getPhoneticSound;