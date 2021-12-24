function standardRequest(token:string):HeadersInit {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", token)
    requestHeaders.set("Content-Type", "application/json")
    return requestHeaders
}

export { standardRequest };