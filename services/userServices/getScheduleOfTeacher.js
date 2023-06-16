const ENDPOINT = 'http://localhost:3001/api/v1';

async function getScheduleOfTeacher () {

    try {
        const res = await fetch(`${ENDPOINT}/class-of-course`, {method: 'GET'});
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }

}

export default getScheduleOfTeacher;