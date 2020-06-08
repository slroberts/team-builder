import React, {useState} from "react";

import {
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
  Button,
  Box,
} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  formControl: {
    width: "100%",
  },
}));

const TeamMemberForm = (props) => {
  const style = useStyles();
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const handleChange = (event) => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addTeamMember(teamMember);
    setTeamMember({name: "", email: "", role: ""});
  };

  return (
    <form onSubmit={submitForm}>
      <Box mt={3}>
        <TextField
          fullWidth
          id="name"
          value={teamMember.name}
          name="name"
          label="Full Name"
          onChange={handleChange}
        />

        <TextField
          fullWidth
          id="email"
          value={teamMember.email}
          name="email"
          label="Email"
          onChange={handleChange}
        />

        <FormControl className={style.formControl}>
          <InputLabel id="role-select-label">Role</InputLabel>
          <Select
            fullWidth
            labelId="role-select-label"
            id="role"
            name="role"
            label="Role"
            value={teamMember.role}
            onChange={handleChange}
          >
            <MenuItem value={"Backend Engineer"}>Backend Engineer</MenuItem>
            <MenuItem value={"Frontend Engineer"}>Frontend Engineer</MenuItem>
            <MenuItem value={"Project Manager"}>Project Manager</MenuItem>
            <MenuItem value={"UX Designer"}>UX Designer</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box mt={4}>
        <Button variant="outlined" color="primary" size="large" type="submit">
          Add Team Member
        </Button>
      </Box>
    </form>
  );
};

export default TeamMemberForm;
