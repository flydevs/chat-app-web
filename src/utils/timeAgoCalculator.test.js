import '@testing-library/jest-dom/extend-expect'
import { TimeAgo } from "./timeAgoCalculator";

describe('TimeAgo', () => {
    test('function should return an empty string if the parameter is not correct or if the interval', () => {
        const mockTimeStamp = NaN;

        expect(TimeAgo(mockTimeStamp)).toBe("");
    })
    test('function should return an empty string if the time interval is negative', () => {
        const mockTimeStamp = (new Date() * 20);

        expect(TimeAgo(mockTimeStamp)).toBe("");
    })
    test('function should recieve a timeStamp and return a value', () => {
        const mockTimeStamp = 1;

        expect(TimeAgo(mockTimeStamp)).not.toBeNull();
    })
    test('function should recieve a timeStamp and return a value of type string', () => {
        const mockTimeStamp = 1;
        expect(typeof (TimeAgo(mockTimeStamp))).toBe("string")
    })
    test('function should recieve a timeStamp with at least 1 year of difference with current time to return a string with the value in years elapsed ', () => {

        const mockTimeStamp = new Date() - 31537000000;
        const yearRegEx = new RegExp("([0-9])*y");
        const timeAgo = TimeAgo(mockTimeStamp);

        expect(timeAgo).toMatch(yearRegEx);

    })
    test('function should recieve a timeStamp with at least 1 month of difference with current time to return a string with the value in months elapsed ', () => {

        const mockTimeStamp = new Date() - 2593000000;
        const monthRegEx = new RegExp("([0-9])*m");
        const timeAgo = TimeAgo(mockTimeStamp);

        expect(timeAgo).toMatch(monthRegEx);

    })
    test('function should recieve a timeStamp with at least 1 day of difference with current time to return a string with the value in days elapsed  ', () => {

        const mockTimeStamp = new Date() - 86500000;
        const dayRegEx = new RegExp("([0-9])*d");
        const timeAgo = TimeAgo(mockTimeStamp);

        expect(timeAgo).toMatch(dayRegEx);

    })
    test('function should recieve a timeStamp with at least 1 hour of difference with current time to return a string with the value in hours elapsed  ', () => {

        const mockTimeStamp = new Date() - 3700000;
        const hourRegEx = new RegExp("([0-9])*h");
        const timeAgo = TimeAgo(mockTimeStamp);

        expect(timeAgo).toMatch(hourRegEx);

    })
    test('function should recieve a timeStamp with at least 1 minute of difference with current time to return a string with the value in minutes elapsed ', () => {

        const mockTimeStamp = new Date() - 65000;
        const minuteRegEx = new RegExp("([0-9])*min");
        const timeAgo = TimeAgo(mockTimeStamp);

        expect(timeAgo).toMatch(minuteRegEx);

    })

    test('function should recieve a timeStamp with at least 1 second of difference with current time to return a string with the value in seconds elapsed ', () => {

        const mockTimeStamp = new Date() - 2000;
        const secondRegEx = new RegExp("([0-9])*s");
        const timeAgo = TimeAgo(mockTimeStamp);

        expect(timeAgo).toMatch(secondRegEx);

    })
})