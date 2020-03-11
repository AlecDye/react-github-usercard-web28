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

function FollowerCard(props) {
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
  return (
    <>
      {props.followerData.map(item => (
        <Card className={classes.root}>
          <CardContent>
            <Avatar
              variant="rounded"
              src={item.avatar_url}
              key={item.id}
              alt="User's avatar"
              className={classes.large}
            />
            <Typography variant="subtitle1">{item.login}</Typography>
            <a href={item.url}>
              <Button startIcon={<GitHubIcon />}>Profile</Button>
            </a>
          </CardContent>
        </Card>
      ))}
    </>
  );
}

export default FollowerCard;
