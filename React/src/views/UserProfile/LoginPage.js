import React from "react";
import { useForm } from "react-hook-form";
import { login } from "services/oauth";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";

// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";

import styles from "assets/jss/material-dashboard-react/views/loginPageStyle.js";

const useStyles = makeStyles(styles);

export default function LoginPage() {
  const user = useSelector((state) => state.auth.user);
  const history = useHistory();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const { register: loginFrom, handleSubmit } = useForm();
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (user) {
      history.push("/admin/dasboard");
    }
    let id = setTimeout(function () {
      setCardAnimation("");
    }, 700);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.clearTimeout(id);
    };
  });
  const classes = useStyles();

  const showNotification = (place) => {
    switch (place) {
      case "tr":
        if (!error) {
          setError(true);
          setTimeout(function () {
            setError(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };

  const onSubmitLogin = (data) => {
      login({ email: data.email, password: data.password })
      .then((token) => {
        if (token) {
          history.push("/admin/dasboard");
        } else {
          showNotification("tr");
        }
      })
      .catch((error) => {
        console.log(error);
        showNotification("tr");
      });
  };

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form onSubmit={handleSubmit(onSubmitLogin)} key={1}>
            <Card login className={classes[cardAnimaton]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="rose"
              >
                <h4 className={classes.cardTitle}>Log in</h4>
                <div className={classes.socialLine}>
                  {[
                    "fab fa-facebook-square",
                    "fab fa-twitter",
                    "fab fa-google-plus",
                  ].map((prop, key) => {
                    return (
                      <Button
                        color="transparent"
                        justIcon
                        key={key}
                        className={classes.customButtonClass}
                      >
                        <i className={prop} />
                      </Button>
                    );
                  })}
                </div>
              </CardHeader>
              <CardBody>
                <CustomInput
                  inputRef={loginFrom({ required: true })}
                  labelText="Email..."
                  id="email"
                  name="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Email className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomInput
                  inputRef={loginFrom({ required: true })}
                  labelText="Password"
                  id="password"
                  name="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                  }}
                />
                          </CardBody>
                          <CardFooter className={classes.justifyContentCenter}>
                              <p>The default users are <strong>alice/bob</strong>, password: <strong>Pass123$</strong></p>
                          </CardFooter>
              <CardFooter className={classes.justifyContentCenter}>
                <Button type="submit" color="rose" simple size="lg" block>
                  Let{"'"}s Go
                </Button>
                <Snackbar
                  place="tr"
                  color="danger"
                  icon={AddAlert}
                  message="Failed to authenticate"
                  open={error}
                  closeNotification={() => setError(false)}
                  close
                />
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
