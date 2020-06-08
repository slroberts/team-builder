import React from "react";
import {
  Grid,
  Card,
  CardActions,
  CardContent,
  Button,
  Box,
  Avatar,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

const TeamMembers = (props) => {
  return (
    <Grid container spacing={2}>
      {props.teamMembers.map((teamMember) => (
        <Grid item xs={12} sm={6} key={teamMember.id}>
          <Box mt={4}>
            <Card variant="outlined" elevation={3}>
              <CardContent>
                <Avatar
                  alt={`First letter from ${teamMember.name}`}
                  src="/broken-image.jpg"
                >
                  {teamMember.name.charAt(0)}
                </Avatar>
                <Box color="error.main">
                  <h2>{teamMember.name}</h2>
                </Box>
                <Box mt={-1}>
                  <p>{teamMember.email}</p>
                </Box>
                <Box mt={-1}>
                  <p>{teamMember.role}</p>
                </Box>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  <EditIcon />
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default TeamMembers;
