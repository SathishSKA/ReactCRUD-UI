import * as React from "react";
import { Card, CardMedia } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHistory } from "react-router-dom";

export const Employees = ({ employees }) => {
    const history = useHistory();
  return (
    <div className="cards">
      {employees.map(({ name, profile, employee_id, working_years, department, job_title }) => (
        <Card sx={{ maxHeight: 200, maxWidth: 400 }}>
          <div className="profile-card">
            <CardMedia
              className="profile"
              component="img"
              image={profile}
              alt="profile_image"
            ></CardMedia>
            <div className="em-details">
              <h6>Name: {name}</h6>
              <h6>Employe Id: {employee_id}</h6>
              <h6>Working Years: {working_years}</h6>
              <h6>Department: {department}</h6>
              <h6>Job Title: {job_title}</h6>
              <div className="profile-button">
                <IconButton onClick={()=>history.push('/employee/edit')}><EditIcon color="primary" /></IconButton>
                <IconButton><DeleteIcon color="error" /></IconButton>
              </div>
            </div>
          </div>

        </Card>
      ))}
    </div>
  );
};
