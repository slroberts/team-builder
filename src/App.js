import React, {useState} from "react";
import TeamMemberForm from "./components/TeamMemberForm";
import TeamMembers from "./components/TeamMembers";
import {Container, AppBar, Box} from "@material-ui/core";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Shomari Roberts",
      email: "shomariroberts@gmail.com",
      role: "Frontend Engineer",
    },
  ]);

  const addTeamMember = (teamMember) => {
    const newTeamMember = {
      id: Date.now(),
      name: teamMember.name,
      email: teamMember.email,
      role: teamMember.role,
    };

    setTeamMembers([...teamMembers, newTeamMember]);
  };

  return (
    <>
      <AppBar position="static" style={{backgroundColor: "#181818"}}>
        <Box textAlign="center">
          <h1>Teamdex</h1>
        </Box>
      </AppBar>
      <Container maxWidth="sm">
        <TeamMemberForm addTeamMember={addTeamMember} />
        <TeamMembers teamMembers={teamMembers} />
      </Container>
    </>
  );
}

export default App;
