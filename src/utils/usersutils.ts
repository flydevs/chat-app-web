import { uuid, getUserProfiles } from './interfaces'
const getUsers= async (users:uuid[]) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzkwMDA1MzksInV1aWQiOiI2ZDQ5ZDM4Zi0xZGZjLTRmM2ItOWQ1Yy00YThkNTkwZmE5YTIiLCJwZXJtaXNzaW9ucyI6MH0.W7f0Vq3_DOSubCNgtIaOJrKMh8bHrqxLN5HWEcXbPPk")
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
        localStorage.setItem(user.uuid.uuid, JSON.stringify(user))
    }
    )
    return
}

export {getUsers}