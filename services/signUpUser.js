const ENDPOINT = "http://localhost:3001/api/v1";


export default async function singUpUserService({
        name,
        lastName,
        user:{
            email,
            password
        }
    }){

    try {
        const res = await fetch(`${ENDPOINT}/student`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    name,
                    lastName,
                    user:{
                        email,
                        password
                    }
                }),
        })
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error)
    }


    // .then(res => {
    //     if (!res.ok ) throw new Error('Response is not Ok')
    //     return res.json();
    // })
}