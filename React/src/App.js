import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import LoginPage from "./views/UserProfile/LoginPage";
import { Provider } from "react-redux";
import store from "./store";
import AuthProvider from "./utils/authProvider";
import oauth, { loadUserFromStorage } from "./services/oauth";
import PrivateRoute from "./utils/protectedRoute";

// core components
import AuthLayout from "layouts/Auth.js";
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

function App() {
  useEffect(() => {
    // fetch current user
    loadUserFromStorage(store);
  }, []);

  return (
    <Provider store={store}>
      <AuthProvider userManager={oauth} store={store}>
        <Router>
          <Switch>
            <PrivateRoute path="/admin/user" component={Admin} />
            <PrivateRoute path="/admin" component={Admin} />
            <PrivateRoute path="/rtl" component={RTL} />

            <Route path="/login-page" component={LoginPage} />
            <Route path="/auth" component={AuthLayout} />

            <Redirect from="/" to="/admin/dashboard" />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
