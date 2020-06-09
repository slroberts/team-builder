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

  const [memberToEdit, setMemberToEdit] = useState([
    {
      name: "",
      email: "",
      role: "",
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

  const editTeamMember = (event) => {
    console.log("Edit this team member");
    setMemberToEdit([
      {
        name: event.target.value,
        email: event.target.value,
        role: event.target.value,
      },
    ]);

    // setTeamMembers(memberToEdit);
  };

  return (
    <>
      <AppBar position="static" style={{backgroundColor: "#181818"}}>
        <Box textAlign="center">
          <h1>Teamdex</h1>
        </Box>
      </AppBar>
      <Container maxWidth="sm">
        <TeamMemberForm
          addTeamMember={addTeamMember}
          memberToEdit={memberToEdit}
        />
        <TeamMembers
          teamMembers={teamMembers}
          editTeamMember={editTeamMember}
        />
      </Container>
    </>
  );
}

export default App;
