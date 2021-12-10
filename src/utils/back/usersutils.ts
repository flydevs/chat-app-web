import { uuid, getUserProfiles } from '../interfaces'
import { access_token } from '../mock_auth';
import { AuthInfo } from './request_interfaces';
const getUsers= async (userinfo:AuthInfo,users:uuid[]) => {
    if (userinfo.access_token == undefined){
        return
    }
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", userinfo.access_token)
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