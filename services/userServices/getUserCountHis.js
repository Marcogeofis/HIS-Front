const ENDPOINT = "http://localhost:3001/api/v1";

function getUserHIS ({userHis}) {
    
    return fetch(`${ENDPOINT}/student/${userHis}`, {
            method: 'GET',
        }).then(res =>{
            if(!res.ok) console.log('Response is not ok')
            return res.json();
        }).then(res => {
            const user = res
            return user;
        })
}

export default getUserHIS;
