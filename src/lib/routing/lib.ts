import { RouteInstance, RouteParams } from 'atomic-router';

type Route = {
  path: string;
  route: RouteInstance<RouteParams> | Array<RouteInstance<RouteParams>>;
  routes?: Array<Route>;
};

export const flatRoutes = (routes: Array<Route>, base: string = '') => {
  const mappedRoutes: Array<Route | Array<Route>> = [];

  routes.forEach(({ path, route, routes: childRoutes }) => {
    mappedRoutes.push({ path: base + path, route });
    if (childRoutes?.length) {
      mappedRoutes.push(flatRoutes(childRoutes, base + path));
    }
  });

  return mappedRoutes.flat();
};
