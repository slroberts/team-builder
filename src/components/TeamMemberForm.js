import React, {useState} from "react";

const TeamMemberForm = (props) => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (event) => {
    console.log(event.target.value);
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
    console.log(teamMember);
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addTeamMember(teamMember);
    setTeamMember({name: "", email: "", role: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        value={teamMember.name}
        type="text"
        placeholder="John/Jane Doe"
        onChange={handleChange}
      ></input>

      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        value={teamMember.email}
        type="email"
        placeholder="name@company.com"
        onChange={handleChange}
      ></input>

      <label htmlFor="role">Role</label>
      <select
        id="role"
        name="role"
        value={teamMember.role}
        onChange={handleChange}
      >
        <option></option>
        <option>Backend Engineer</option>
        <option>Frontend Engineer</option>
        <option>Project Manager</option>
        <option>UX Designer</option>
      </select>
      <button type="submit">Add Team Member</button>
    </form>
  );
};

export default TeamMemberForm;
