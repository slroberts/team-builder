import React, {useState, useEffect} from "react";
import * as yup from "yup";

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
  button: {
    color: "#4BB543",
  },
}));

const TeamMemberForm = (props) => {
  const style = useStyles();

  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    role: "",
  });

  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email"),
    role: yup
      .mixed()
      .oneOf([
        "Backend Engineer",
        "Frontend Engineer",
        "Project Manager",
        "UX Designer",
      ])
      .defined()
      .required("Must select role"),
  });

  useEffect(() => {
    formSchema.isValid(teamMember).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [teamMember, formSchema]);

  const validateChange = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((inputIsValid) => {
        setErrors({
          ...errors,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        setErrors({
          ...errors,
          [event.target.name]: err.errors[0],
        });
      });
  };

  const handleChange = (event) => {
    event.persist(); //use persist with async code. Keep event alive!
    validateChange(event);
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
  };

  const submitForm = (event) => {
    event.preventDefault();
    props.addTeamMember(teamMember);
    setTeamMember({name: "", email: "", role: ""});
  };

  return (
    <>
      <Box mt={4} color="text.secondary">
        <p>Enter New Team Member</p>
      </Box>
      <form onSubmit={submitForm}>
        <Box mt={3}>
          <TextField
            fullWidth
            id="name"
            value={teamMember.name}
            name="name"
            label="Full Name *"
            onChange={handleChange}
          />
          {errors.name.length > 0 ? <p>{errors.name}</p> : null}
        </Box>
        <Box mt={1}>
          <TextField
            fullWidth
            id="email"
            value={teamMember.email}
            name="email"
            label="Email *"
            onChange={handleChange}
          />
          {errors.email.length > 0 ? <p>{errors.email}</p> : null}
        </Box>
        <Box mt={1}>
          <FormControl className={style.formControl}>
            <InputLabel id="role-select-label">Role *</InputLabel>
            <Select
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
            {errors.role.length > 0 ? <p>{errors.role}</p> : null}
          </FormControl>
        </Box>

        <Box mt={4}>
          <Button
            variant="outlined"
            className={style.button}
            size="large"
            type="submit"
            disabled={buttonDisabled}
          >
            Add Team Member
          </Button>
        </Box>
      </form>
    </>
  );
};

export default TeamMemberForm;
