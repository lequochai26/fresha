import HomeView from "./HomeView";
import NotFoundView from "./NotFoundView";

const routes: { [ route: string ]: (...args: any[]) => JSX.Element } = {
    '/': HomeView,
    '/home': HomeView,
    '/calendars': NotFoundView,
    '/sales': NotFoundView,
    '/clients': NotFoundView,
    '/catalogue': NotFoundView,
    '/online_profile': NotFoundView,
    '/marketing': NotFoundView,
    '/payments': NotFoundView,
    '/teams': NotFoundView,
    '/reports': NotFoundView,
    '/addons': NotFoundView,
    '/business_settings': NotFoundView
};

export default routes;