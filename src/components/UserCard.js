import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  Typography,
  CardContent,
  Icon,
  Button
} from "@material-ui/core";
import { GroupIcon } from "@material-ui/icons";

function UserCard(props) {
  // Styling components
  const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    }
  }));

  const classes = useStyles();

  //   console.log(props);
  return (
    <Card>
      <CardContent>
        <Avatar
          variant="rounded"
          src={props.userData.avatar_url}
          alt="Alec's avatar"
          className={classes.large}
        />
        <Typography variant="subtitle1">{props.userData.login}</Typography>
        <Typography variant="body1">{props.userData.followers}</Typography>
        <Typography variant="body1">{props.userData.following}</Typography>
        <a href={props.userData.url}>
          <Button>Profile</Button>
        </a>
      </CardContent>
    </Card>
  );
}

export default UserCard;
