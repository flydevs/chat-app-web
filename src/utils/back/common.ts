function standardRequest(token?:string):HeadersInit {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("access-token", token != undefined ? token: "")
    requestHeaders.set("Content-Type", "application/json")
    return requestHeaders
}

function customHeaders(keyvalues: {key:string, value:string}[]):HeadersInit {
    const requestHeaders: HeadersInit = new Headers();
    keyvalues.forEach((keyvalue) => {
        requestHeaders.set(keyvalue.key, keyvalue.value)
    })
    return requestHeaders
}

type basic401Prop<T> = {
    data: T,
    response: {
        status: 401,
        message: ""
      }
};

function basic401Message<T> (data: T):basic401Prop<T> {
    return {
    data: data,
    response: {
        status: 401,
        message: ""
      }
    };
};

export { standardRequest, customHeaders, basic401Message };