import React from 'react';
import { matchPath, RouteProps } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import OpenSource from './components/OpenSource';
import OpenSourceProject from './components/OpenSourceProject';
import Transform from './components/Transform';
import { bySlug as ossBySlug } from './oss';
import { bySlug as transformsBySlug } from './transforms';

type BaseRouteKey = 'home' | 'oss' | 'transforms';

type PathableRouteProps = RouteProps & { path: string };

export const homePath = '/';
export const ossPath = '/oss';
export const transformsPath = '/transforms';

const baseRoutes: Record<BaseRouteKey, PathableRouteProps> = {
  home: {
    path: homePath,
    component: Home,
    exact: true,
  },
  oss: {
    path: ossPath,
    component: () => <OpenSource ossPath={ossPath} />,
    exact: true,
  },
  transforms: {
    path: transformsPath,
    component: NotFound,
    exact: true,
  },
};

const transformRoutes: Record<string, PathableRouteProps> = Object.keys(transformsBySlug).reduce(
  (transformRoutesSoFar, slug) => {
    const { name, inputType, outputType, project, defaultOutput, execute } = transformsBySlug[slug];
    return {
      ...transformRoutesSoFar,
      [name]: {
        path: `${transformsPath}/${slug}`,
        component: () => (
          <Transform
            name={name}
            ossHref={`${ossPath}/${project.slug}`}
            inputType={inputType}
            outputType={outputType}
            defaultOutput={defaultOutput}
            execute={execute}
          />
        ),
        exact: true,
      },
    };
  },
  {}
);

const ossRoutes: Record<string, PathableRouteProps> = Object.keys(ossBySlug).reduce((ossRoutesSoFar, slug) => {
  const { name, description, projectHref, repositoryHref, license, licenseText } = ossBySlug[slug];
  return {
    ...ossRoutesSoFar,
    [name]: {
      path: `${ossPath}/${slug}`,
      component: () => (
        <OpenSourceProject
          name={name}
          description={description}
          slug={slug}
          projectHref={projectHref}
          repositoryHref={repositoryHref}
          license={license}
          licenseText={licenseText}
          transformsPath={transformsPath}
        />
      ),
      exact: true,
    },
  };
}, {});

const routes: Record<string, PathableRouteProps> = {
  ...baseRoutes,
  ...transformRoutes,
  ...ossRoutes,
};

export const isKnownPath = (suspectPath: string): boolean =>
  Object.keys(routes)
    .map(key => routes[key])
    .some(route => matchPath(suspectPath, route));

export default routes;