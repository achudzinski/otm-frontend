export const routeToHomePage = "/";
export const getUrlToHomePage = () => routeToHomePage;

export const routeToTasksList = "/tasks/:listId";
export const getUrlToTasksList = (listId:number) => `/tasks/${listId}`;
export const isUrlTasksList = (url: string, listId:number) => url === getUrlToTasksList(listId);