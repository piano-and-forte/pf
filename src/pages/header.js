import { Outlet, Link } from "react-router-dom";
import "./header.css";

import PnfLogo from "./pnf-logo";

import { RecoilRoot, useRecoilValue } from "recoil";
import { displayLogout } from "./recoil_state";

function MyHeaders() {
  return (
    <div>
      <div className="header-menu-bar-container">
        <PnfLogo />

        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/appointment">
          Schedule Free Class
        </Link>
        <Link className="link" to="/volunteer">
          Mentor Registration
        </Link>
<div>
        <Link className="link signIn" to="/signIn">
          Sign in
        </Link>
        <Link className="link signUp" to="/createUser">
          Sign up
        </Link>
        </div>

        {useRecoilValue(displayLogout) && (
          <Link className="link" to="/logOut">
            Sign out
          </Link>
        )}

        {useRecoilValue(displayLogout) && (
          <Link className="link" to="/appointmentList">
            Appointments
          </Link>
        )}
      </div>

      <Outlet />
    </div>
  );
}

function Headers() {
  return (
    <RecoilRoot>
      <MyHeaders />
    </RecoilRoot>
  );
}
export default Headers;
