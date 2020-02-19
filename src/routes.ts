import { matchPath, RouteProps } from 'react-router-dom';

interface ExtendedRouteProps extends RouteProps {
  readonly linkPath: string;
}

const routes: Record<string, ExtendedRouteProps> = {
  home: {
    path: '/',
    linkPath: '/',
    exact: true,
  },
};

export const isKnownPath = (suspectPath: string): boolean =>
  Object.keys(routes)
    .map(key => routes[key])
    .some(route => matchPath(suspectPath, route));

export default routes;
