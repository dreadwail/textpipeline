import React from 'react';
import { matchPath, RouteProps } from 'react-router-dom';

import Home from './components/Home';
import OpenSource from './components/OpenSource';
import OpenSourceProject from './components/OpenSourceProject';
import Transform from './components/Transform';
import { bySlug as ossBySlug } from './oss';
import { bySlug as transformsBySlug } from './transforms';

type BaseRouteKey = 'home' | 'oss';

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
};

const transformRoutes: Record<string, PathableRouteProps> = Object.keys(transformsBySlug).reduce(
  (transformRoutesSoFar, slug) => {
    const { name, inputTypeName, outputTypeName, openSourceProject, defaultOutput, execute } = transformsBySlug[slug];
    return {
      ...transformRoutesSoFar,
      [`transform-${slug}`]: {
        path: `${transformsPath}/${slug}`,
        component: () => (
          <Transform
            name={name}
            ossHref={openSourceProject ? `${ossPath}/${openSourceProject.slug}` : undefined}
            inputTypeName={inputTypeName}
            outputTypeName={outputTypeName}
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
  const { name, description, href, repositoryHref, license, licenseText } = ossBySlug[slug];
  return {
    ...ossRoutesSoFar,
    [`oss-${slug}`]: {
      path: `${ossPath}/${slug}`,
      component: () => (
        <OpenSourceProject
          name={name}
          description={description}
          slug={slug}
          href={href}
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
