import React from "react";
import { useSelector } from "react-redux";
import { history } from "../..";
import { routes } from "../../app/routes/routes";
import { RootState } from "../../app/store";

export const ServerError: React.FC = () => {
  const error = useSelector((state: RootState) => state.error);
  return (
    <div className="message fullscreen">
      <h2>Internal server error....</h2>
      <p>Status code: {error.statusCode}</p>
      <p>Error code: {error.message}</p>
      <p className="hover" onClick={() => history.push(routes.homePage)}>
        Go to Home Page
      </p>
    </div>
  );
};
