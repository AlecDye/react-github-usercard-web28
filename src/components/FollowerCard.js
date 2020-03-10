import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Card, CardHeader, CardContent } from "@material-ui/core";

function FollowerCard(props) {
  const useStyles = makeStyles(theme => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    }
  }));

  const classes = useStyles();
  return (
    <>
      {props.followerData.map(item => (
        <Card>
          <Avatar
            variant="rounded"
            src={item.avatar_url}
            key={item.id}
            alt="User's avatar"
            className={classes.large}
          />
          <h3>{item.login}</h3>
          <a href={item.url}>
            <p>Github Profile</p>
          </a>
        </Card>
      ))}
    </>
  );
}

export default FollowerCard;
