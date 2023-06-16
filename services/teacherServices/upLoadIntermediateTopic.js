const ENDPOINT = 'http://localhost:3001/api/v1'

export default function upLoadIntermediateTopicClass({
    course,
    section,
    chapter,
    video,
    point1,
    point2,
    point3,
    point4,
    point5,
    context,
    jwt,
}){
    const Bearer = `Bearer ${jwt}`;
    return fetch(`${ENDPOINT}/intermediate-course`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer,
        },
        body: JSON.stringify({
            course,
            section,
            chapter,
            video,
            point1,
            point2,
            point3,
            point4,
            point5,
            context,
        })
    }).then(res=>{
        if(!res.ok) throw new Error('Response is not ok')
        return res.json();
    })
}