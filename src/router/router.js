import React from "react";
import { Switch } from "react-router-dom";
import { AppRoute, GuestRoute } from ".";
import { Auth } from "../pages/Auth";
import { Main } from "../pages/Main";
import { ROUTES } from ".";

function AppRouter() {
  return (
    <Switch>
      <GuestRoute path={ROUTES.login}>
        <Auth isLogin={true} />
      </GuestRoute>
      <GuestRoute path={ROUTES.signup}>
        <Auth />
      </GuestRoute>
      <AppRoute exact path={ROUTES.main}>
        <Main />
      </AppRoute>
    </Switch>
  );
}

export default AppRouter;
