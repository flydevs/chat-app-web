import { uuid, getUserProfiles } from '../interfaces'
import { access_token } from '../mock_auth';
const getUsers= async (users:uuid[]) => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", access_token)
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