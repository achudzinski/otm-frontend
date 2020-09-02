import {routeToUserList, getUrlToUserList} from "./urlManager";

describe("urlManager helper", () => {
    describe("user list routes", () => {
        it ('defines route to user list', () => {
            expect(routeToUserList).toBe("/");
        })

        it ('generates url to user list', () => {
            expect(getUrlToUserList()).toBe("/");
        })
    });
});