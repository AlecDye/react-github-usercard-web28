import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  Typography,
  CardContent,
  Button
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";

function UserCard(props) {
  // Styling components
  const useStyles = makeStyles(theme => ({
    root: {
      width: 275,
      minWidth: 275,
      margin: "0 1% 4% 1%",
      color: "#454545"
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    }
  }));

  const classes = useStyles();

  //   console.log(props);
  return (
    <Card className={classes.root}>
      <CardContent>
        <Avatar
          variant="rounded"
          src={props.userData.avatar_url}
          alt="Alec's avatar"
          className={classes.large}
        />
        <Typography variant="subtitle1">{props.userData.login}</Typography>
        <Typography variant="body1">
          {props.userData.followers} Followers
        </Typography>
        <Typography variant="body1">
          {props.userData.following} Following
        </Typography>
        <a href={props.userData.url}>
          <Button startIcon={<GitHubIcon />}>Profile</Button>
        </a>
      </CardContent>
    </Card>
  );
}

export default UserCard;
