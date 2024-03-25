import { Counter } from "../page";

export type RouteObj = {
  path: string;
  element: JSX.Element;
  children?: Array<RouteObj>;
};

const routes: Array<RouteObj> = [
  {
    path: "",
    element: <Counter />,
  },
];

export default routes;
