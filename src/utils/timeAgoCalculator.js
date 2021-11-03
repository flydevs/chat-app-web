const TimeAgo = (timeStamp) => {

    let seconds = Math.floor((new Date() - timeStamp) / 1000);

    let interval = seconds / 31536000;
    if (!timeStamp) {
        return ""
    }
    if (interval < 0) {
        return ""
    }
    if (interval > 1) {
        return Math.floor(interval) + "y";
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return Math.floor(interval) + "m";
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return Math.floor(interval) + "d";
    }
    interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + "h";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + "min";
    }
    return Math.floor(seconds) + "s";
}

export { TimeAgo };