const ENDPOINT = "http://localhost:3001/api/v1";


export default function upLoadVocabularyService({
    word,
    wordImage,
    wordAudio,
    exampleAudio,
    exampleWrited1,
    exampleWrited2,
    exampleWrited3,
    synonymous,
    antonyms,
    theoryOfWord,
    jwt
}){
    const Bearer = `Bearer ${jwt}`;
    return fetch(`${ENDPOINT}/vocabulary`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Authorization": Bearer,
        },
        body: JSON.stringify({
            word,
            wordImage,
            wordAudio,
            exampleAudio,
            exampleWrited1,
            exampleWrited2,
            exampleWrited3,
            synonymous,
            antonyms,
            theoryOfWord,
        }),
    }).then(res =>{
        if(!res.ok) throw new Error('Response is not ok')
        return res.json();
    })

}


