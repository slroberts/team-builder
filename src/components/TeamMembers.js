import React from "react";

const TeamMembers = (props) => {
  return (
    <div>
      {props.teamMembers.map((teamMember) => (
        <div key={teamMember.id}>
          <h2>{teamMember.name}</h2>
          <p>{teamMember.email}</p>
          <p>{teamMember.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;
