const ScrollWhenFetchingOlderMessages = (uuid_to_scroll_to: string)=> {
    const element =    document.getElementById("chatContainer")
    let scroll_to_msg =  document.getElementById(uuid_to_scroll_to)
    element?.scrollTo({top:scroll_to_msg?.offsetTop})
};

const CheckIfScrollBottom = ():boolean => {
    const element =    document.getElementById("chatContainer")
    const IsBottom = ((element!.scrollHeight - element!.scrollTop) === element!.clientHeight)
    return IsBottom
}

const SetScrolltoBottom = () => {
    const element =    document.getElementById("chatContainer")
    const bottom =    document.getElementById("bottom")
    element?.scrollTo({top:bottom?.offsetTop})
}

export {ScrollWhenFetchingOlderMessages, CheckIfScrollBottom, SetScrolltoBottom};