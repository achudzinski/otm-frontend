import {getInitialState} from "./initialState";

describe("getInitialState", () => {
    it("returns initial state when stored nationalities are available", () => {
        const spy = jest.spyOn(Storage.prototype, 'getItem');
        spy.mockReturnValue("CH,FR");

        expect(getInitialState()).toStrictEqual({
            seed: null,
            users: [],
            selectedUser: null,
            selectedNationalities: ["CH", "FR"],
            searchTerm: "",
        });

        spy.mockReset();
    })

    it("returns initial state when stored nationalities are not available", () => {
        const spy = jest.spyOn(Storage.prototype, 'getItem');
        spy.mockReturnValue(null);

        expect(getInitialState()).toStrictEqual({
            seed: null,
            users: [],
            selectedUser: null,
            selectedNationalities: [],
            searchTerm: "",
        });

        spy.mockReset();
    })
});

