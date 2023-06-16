const ENDPOINT = "http://localhost:3001/api/v1";


export default function upLoadRollPlayAudio({
    course,
    section,
    chapter,
    audio1,
    audio2,
    audio3,
    audio4,
    audio5,
    context,
    jwt,
}){
    const Bearer = `Bearer ${jwt}`;
    return fetch(`${ENDPOINT}/rollPlays`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer,
        },
        body: JSON.stringify({
            course,
            section,
            chapter,
            audio1,
            audio2,
            audio3,
            audio4,
            audio5,
            context,
        }),
    }).then(res =>{
        if(!res.ok) throw new Error('Response is not ok')
        return res.json();
    })
}


