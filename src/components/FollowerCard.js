import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,
  Card,
  Typography,
  CardContent,
  Button
} from "@material-ui/core";

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
          <CardContent>
            <Avatar
              variant="rounded"
              src={item.avatar_url}
              key={item.id}
              alt="User's avatar"
              className={classes.large}
            />
            <h3>{item.login}</h3>
            <a href={item.url}>
              <Button>Profile</Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default FollowerCard;
