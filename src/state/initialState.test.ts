import {getInitialState} from "./initialState";

describe("getInitialState", () => {
    it("returns initial state", () => {
        expect(getInitialState()).toStrictEqual({
            todoLists: [],
            tasks: [],
        });
    })
});

