import NotFoundView from "./NotFoundView";

const routes: { [ route: string ]: (...args: any[]) => JSX.Element } = {
    '/': NotFoundView
};

export default routes;