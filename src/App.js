import React, {useState} from "react";
import TeamMemberForm from "./components/TeamMemberForm";
import TeamMembers from "./components/TeamMembers";

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
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

  return (
    <div>
      <TeamMemberForm addTeamMember={addTeamMember} />
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;
