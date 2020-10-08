import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Snackbar from "components/Snackbar/Snackbar.js";
import AddAlert from "@material-ui/icons/AddAlert";

import axios from "axios";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux'

import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const {
    register: registerPasswordFrom,
    handleSubmit: handleSubmitPasswordFrom,
  } = useForm();

  const [ok, setOK] = React.useState(false);
    const [error, setError] = React.useState(false);

    const user = useSelector(state => state.auth.user)

  const showNotification = (place) => {
    switch (place) {
      case "tr":
        if (!ok) {
          setOK(true);
          setTimeout(function () {
            setOK(false);
          }, 6000);
        }
        break;
      case "tc":
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

  const onSubmitProfile = (data) => {
    axios
      .post(`${process.env.REACT_APP_AUTH_SERVER_URL}/Profile`, {
        Email: data.Email,
        NewUserName: data.NewUserName,
        CurrentUserName: user?.preferred_username,
      })
      .then((res) => {
        //update stored profile
        user.email = res.data.email;
        user.preferred_username = res.data.newUserName;       
        
        showNotification("tr");
      })
      .catch((error) => {
        console.log(error);
        showNotification("tc");
      });
  };

  const onSubmitPassword = (data, e) => {
    axios
      .post(`${process.env.REACT_APP_AUTH_SERVER_URL}/Password`, {
          UserName: user?.data.email,
        CurrentPassword: data.CurrentPassword,
        NewPassword: data.NewPassword,
      })
      .then((res) => {
        showNotification("tr");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        showNotification("tc");
      });
  };

    if (user) {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <form
              onSubmit={handleSubmit(onSubmitProfile)}
              className={classes.form}
              key={1}
            >
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                  <p className={classes.cardCategoryWhite}>User information</p>
                </CardHeader>

                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        inputRef={register({ required: true })}
                        labelText="Name"
                        id="NewUserName"
                        name="NewUserName"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                            defaultValue: user?.preferred_username,
                          type: "text",
                          autoComplete: "off",
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        inputRef={register({ required: true })}
                        labelText="Email address"
                        id="Email"
                        name="Email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          defaultValue: user?.email,
                          type: "text",
                          autoComplete: "off",
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary" type="submit">
                    Save
                  </Button>
                  <Snackbar
                    place="tr"
                    color="success"
                    icon={AddAlert}
                    message="Saved"
                    open={ok}
                    closeNotification={() => setOK(false)}
                    close
                  />
                  <Snackbar
                    place="tc"
                    color="danger"
                    icon={AddAlert}
                    message="Failed"
                    open={error}
                    closeNotification={() => setError(false)}
                    close
                  />
                </CardFooter>
              </Card>
            </form>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <form
              onSubmit={handleSubmitPasswordFrom(onSubmitPassword)}
              className={classes.form}
              key={2}
            >
              <Card>
                <CardHeader color="primary">
                  <h4 className={classes.cardTitleWhite}>Change password</h4>
                  <p className={classes.cardCategoryWhite}>Password</p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        inputRef={registerPasswordFrom({ required: true })}
                        labelText="Current Password"
                        id="CurrentPassword"
                        name="CurrentPassword"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          autoComplete: "off",
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        inputRef={registerPasswordFrom({ required: true })}
                        labelText="New Password"
                        id="NewPassword"
                        name="NewPassword"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          autoComplete: "off",
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        inputRef={registerPasswordFrom({ required: true })}
                        labelText="Confirm New Password"
                        id="ConfirmNewPassword"
                        name="ConfirmNewPassword"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "password",
                          autoComplete: "off",
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button color="primary" type="submit">
                    Change Password
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don{"'"}t be scared of the truth because we need to restart
                  the human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="primary" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  } else {
    return <div>Unauthorized</div>;
  }
}
