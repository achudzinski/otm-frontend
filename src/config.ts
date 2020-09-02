declare global {
    interface Window {
        configuration: any,
    }
}

export const config = window.configuration || {
    tasksApiUrl: 'http://localhost:3001',
    routerBaseUrl: '/',
    assetsBase: '/',
};

