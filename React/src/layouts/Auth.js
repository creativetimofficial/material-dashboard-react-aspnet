import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import AuthNavbar from "components/Navbars/AuthNavBar.js";
import Footer from "components/Footer/Footer.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/authStyle.js";

import register from "assets/img/register.jpeg";
import login from "assets/img/login.jpeg";

const useStyles = makeStyles(styles);

export default function Pages(props) {
    const { ...rest } = props;
    // ref for the wrapper div
    const wrapper = React.createRef();
    // styles
    const classes = useStyles();
    React.useEffect(() => {
        document.body.style.overflow = "unset";
        // Specify how to clean up after this effect:
        return function cleanup() { };
    });
    const getRoutes = routes => {
        return routes.map((prop, key) => {
            if (prop.collapse) {
                return getRoutes(prop.views);
            }
            if (prop.layout === "/auth") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            } else {
                return null;
            }
        });
    };
    const getBgImage = () => {
        if (window.location.pathname.indexOf("/auth/register-page") !== -1) {
            return register;
        } else if (window.location.pathname.indexOf("/auth/login-page") !== -1) {
            return login;
        } else if (window.location.pathname.indexOf("/auth/pricing-page") !== -1) {
            return "";
        } else if (
            window.location.pathname.indexOf("/auth/lock-screen-page") !== -1
        ) {
            return "";
        } else if (window.location.pathname.indexOf("/auth/error-page") !== -1) {
            return "";
        }
    };
    const getActiveRoute = routes => {
        let activeRoute = "Default Brand Text";
        for (let i = 0; i < routes.length; i++) {
            if (routes[i].collapse) {
                let collapseActiveRoute = getActiveRoute(routes[i].views);
                if (collapseActiveRoute !== activeRoute) {
                    return collapseActiveRoute;
                }
            } else {
                if (
                    window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
                ) {
                    return routes[i].name;
                }
            }
        }
        return activeRoute;
    };
    return (
        <div>
            <AuthNavbar brandText={getActiveRoute(routes)} {...rest} />
            <div className={classes.wrapper} ref={wrapper}>
                <div
                    className={classes.fullPage}
                    style={{ backgroundImage: "url(" + getBgImage() + ")" }}
                >
                    <Switch>
                        {getRoutes(routes)}
                        <Redirect from="/auth" to="/auth/login-page" />
                    </Switch>
                    <Footer white />
                </div>
            </div>
        </div>
    );
}