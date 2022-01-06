import { uuid, getUserProfiles, userProfile, storageUsers } from '../interfaces'
import { access_token } from '../mock_auth';
import { AuthInfo } from './request_interfaces';
import { standardRequest } from "./common"

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
    const data = await fetch(
        url,
      { method: "GET",
      headers: requestHeaders}
    );
    const jn: getUserProfiles= await data.json();
    let users_storage_string = localStorage.getItem("users")
    let users_storage:storageUsers = (users_storage_string != null) ? JSON.parse(users_storage_string) : {}
    let new_users_storage:storageUsers = {}
    jn.data.forEach((user) => {
        new_users_storage[user.uuid.uuid] = user
    });
    localStorage.setItem("users", JSON.stringify({...users_storage, ...new_users_storage}))
    return new_users_storage
}

const searchContact = async (userinfo:AuthInfo, query:string):Promise<userProfile[]>=>{
    if (userinfo.access_token == undefined || userinfo.uuid == undefined || query.trim() == ""){
        return []
    }
    let url = 'http://localhost:7999/search?query='+query

    const data = await fetch(
        url,
        {
            method: "GET",
            headers: standardRequest(userinfo.access_token),
        }
    )

    const jn: getUserProfiles=await data.json();
    if (jn.response.status != 200) {
        return []
    }
    return jn.data
}

export {getUsers, searchContact}