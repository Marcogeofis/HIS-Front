const ENDPOINT = "http://localhost:3001/api/v1";

export default function upLoadAPSound({
    symbol,
    image,
    audio,
    example1,
    example2,
    example3,
    example4,
    context,
    jwt
}){
    const Bearer =  `Bearer ${jwt}`;
    return fetch(`${ENDPOINT}/phonetic-table`,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer,
        },
        body: JSON.stringify({
            symbol,
            image,
            audio,
            example1,
            example2,
            example3,
            example4,
            context,
        })
    }).then(res => {
            const data = res.json();
            return data;
        })
      .catch(err => console.error('error connection'))
}