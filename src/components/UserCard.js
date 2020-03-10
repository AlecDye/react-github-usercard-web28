import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, CardHeader, CardContent, Icon } from "@material-ui/core";
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
      <Avatar
        variant="rounded"
        src={props.userData.avatar_url}
        alt="Alec's avatar"
        className={classes.large}
      />
      <h3>{props.userData.login}</h3>
      <span>
        <Icon />
        <p>{props.userData.followers}</p>
      </span>
      <span>
        <Icon />
        <p>{props.userData.following}</p>
      </span>
      <a href={props.userData.url}>
        <p>Github Profile</p>
      </a>
    </Card>
  );
}

export default UserCard;
