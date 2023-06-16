const ENDPOINT = 'http://localhost:3001/api/v1';

async function getAllTeachers(){
    try {
        const res = await fetch(`${ENDPOINT}/teacher`, {method: 'GET'})
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
        const data = await res.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}


export default getAllTeachers;