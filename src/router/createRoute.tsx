import { Route } from "react-router-dom";
import { RouteObj } from ".";

type Props = {
  path: string;
  element: JSX.Element;
  children?: Array<RouteObj>;
};

const createRoute = ({ element, children, path }: Props) => {
  return (
    <Route key={path} path={path} element={element}>
      {children && children.map(createRoute)}
    </Route>
  );
};

export default createRoute;
