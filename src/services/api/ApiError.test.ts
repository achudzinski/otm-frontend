import {ApiError} from "./ApiError";

describe("ApiError", () => {

    it("provides information with original error ", async () => {
        const originalError = new Error();
        const error = new ApiError("test", originalError);

        expect(error.errorCode).toBe("test");
        expect(error.originalError).toBe(originalError);
    });

    it("provides information without original error ", async () => {
        const error = new ApiError("test");

        expect(error.errorCode).toBe("test");
        expect(error.originalError).toBe(undefined);
    });

});