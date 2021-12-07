import { uuid, getUserProfiles } from './interfaces'
const getUsers= async (users:uuid[]) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzg5MTUxOTUsInV1aWQiOiI2ZDQ5ZDM4Zi0xZGZjLTRmM2ItOWQ1Yy00YThkNTkwZmE5YTIiLCJwZXJtaXNzaW9ucyI6MH0.n6oz3IJmPXtmvEfIs5FET4PBLex2fOOU-PM3wVKe26g")
    let url = `http://localhost:7999/user?`
    users.forEach((uuid:uuid) => {
        url += '&uuid='+uuid.uuid
    })
    console.log(url)
    const data = await fetch(
        url,
      { method: "GET",
      headers: requestHeaders}
    );
    const jn: getUserProfiles= await data.json();
    jn.data.forEach((user) => {
        localStorage.setItem(users[0].uuid, JSON.stringify(user))
    }
    )
    return
}

export {getUsers}