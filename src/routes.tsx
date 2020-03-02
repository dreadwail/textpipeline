import Home from 'components/Home';
import React from 'react';
import { matchPath, RouteProps } from 'react-router-dom';

import NotFound from './components/NotFound';
import Transform from './components/Transform';
import transforms from './transforms';

const appRoutes: Record<string, RouteProps> = {
  home: {
    path: '/',
    component: Home,
    exact: true,
  },
  oss: {
    path: '/oss',
    component: NotFound,
    exact: true,
  },
};

export const buildTransformPath = (slug: string): string => `/transform/${slug}`;

const routes: Record<string, RouteProps> = {
  ...appRoutes,
  ...Object.keys(transforms).reduce((transformRoutes, slug) => {
    const { name, inputType, outputType, execute } = transforms[slug];
    return {
      ...transformRoutes,
      [name]: {
        path: buildTransformPath(slug),
        component: () => (
          <Transform
            name={name}
            ossHref={`${appRoutes.oss.path}/${slug}`}
            inputType={inputType}
            outputType={outputType}
            execute={execute}
          />
        ),
        exact: true,
      },
    };
  }, {}),
};

export const isKnownPath = (suspectPath: string): boolean =>
  Object.keys(routes)
    .map(key => routes[key])
    .some(route => matchPath(suspectPath, route));

export default routes;
