import {routeToHomePage, routeToTasksList, getUrlToHomePage, getUrlToTasksList} from "./urlManager";

describe("urlManager helper", () => {
    describe("home page routes", () => {
        it ('defines route to home page', () => {
            expect(routeToHomePage).toBe("/");
        })

        it ('generates url to home page', () => {
            expect(getUrlToHomePage()).toBe("/");
        })
    });

    describe("tasks list routes", () => {
        it ('defines route to tasks list', () => {
            expect(routeToTasksList).toBe("/tasks/:listId");
        })

        it ('generates url to tasks list', () => {
            expect(getUrlToTasksList(4)).toBe("/tasks/4");
        })
    });

});