const ENDPOINT = "http://localhost:3001/api/v1/user"

export default async function askForRoleTeacher({userHis, jwt}){
    const Bearer = `Bearer ${jwt}`;
    const res = await fetch(`${ENDPOINT}/${userHis}`, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer,
        },
    })

    const data = res.json()

    return data;

}
