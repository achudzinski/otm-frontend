import {apiClient, TasksApiClient} from "./TasksApiClient";

describe("TasksApiClient", () => {

    describe("getTodoLists", () => {
        it("provides empty list of todo lists", async () => {
            const apiResponseContent = {
                "lists": [],
            };

            const apiResponse = new Response(JSON.stringify(apiResponseContent));

            const apiClientSpy = jest.spyOn(apiClient, 'sendGet');
            apiClientSpy.mockImplementation(() => Promise.resolve(apiResponse));

            const service = new TasksApiClient(apiClient);
            const result = await service.getTodoLists();

            expect(apiClientSpy).toHaveBeenCalled();
            expect(result).toStrictEqual([]);

            apiClientSpy.mockRestore();
        });

        it("provides list of todo lists", async () => {
            const apiResponseContent = {
                "lists": [{id: 1, name: "List A"}, {id: 2, name: "List B"}, {id: 3, name: "List C"}],
            };

            const apiResponse = new Response(JSON.stringify(apiResponseContent));

            const apiClientSpy = jest.spyOn(apiClient, 'sendGet');
            apiClientSpy.mockImplementation(() => Promise.resolve(apiResponse));

            const service = new TasksApiClient(apiClient);
            const result = await service.getTodoLists();

            expect(apiClientSpy).toHaveBeenCalled();
            expect(result).toStrictEqual(apiResponseContent.lists);

            apiClientSpy.mockRestore();
        });

        it("throws exception in case of error", async () => {
            const apiResponseContent = {
                error: "Uh oh, something has gone wrong."
            }

            const apiResponse = new Response(JSON.stringify(apiResponseContent));

            const apiClientSpy = jest.spyOn(apiClient, 'sendGet');
            apiClientSpy.mockImplementation(() => Promise.resolve(apiResponse));

            const service = new TasksApiClient(apiClient);

            await expect(service.getTodoLists());

            apiClientSpy.mockRestore();
        });
    });
});