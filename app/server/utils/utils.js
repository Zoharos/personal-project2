import * as R from 'ramda';

export const match = (route,routesArray) => R.contains(route,routesArray);