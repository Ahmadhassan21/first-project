import { NavLink, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="errorpage">
      <h1>OOPs! An error Occured</h1>
      {error && <p>{error.data}</p>}
      <NavLink to="/">
        <button className="errorbtn">Go back</button>
      </NavLink>
    </div>
  );
};
