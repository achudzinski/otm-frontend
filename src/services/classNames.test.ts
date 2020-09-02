import {classNames} from "./classNames";

describe("classNames helper", () => {
    it ('generates class list from empty list', () => {
        expect(classNames([])).toBe("");
    })

    it ('generates class list from single item', () => {
        expect(classNames(["abc"])).toBe("abc");
    })

    it ('generates class with many items', () => {
        expect(classNames(["abc", "def", "ghi"])).toBe("abc def ghi");
    })

    it ('generates class with many items mixed with filter', () => {
        expect(classNames(["abc", false && "def", true && "ghi"])).toBe("abc ghi");
    })
});