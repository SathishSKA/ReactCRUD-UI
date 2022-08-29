import * as React from "react";
import Box from "@mui/material/Box";
import AccountCircle from '@mui/icons-material/AccountCircle';
import TextField from '@mui/material/TextField';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import WebIcon from '@mui/icons-material/Web';
import HandymanIcon from '@mui/icons-material/Handyman';
import EngineeringIcon from '@mui/icons-material/Engineering';

export const AddEmployee = () => {
  return (
    <div className="add-content">
      <form className="add-employee">
        <Box sx={{ fontSize: 18, display: 'flex', alignItems: 'flex-end' }}>
          <PersonAddIcon sx={{ fontSize: 40, color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Employee Name" variant="standard" />
        </Box>
        <Box sx={{ fontSize: 18, display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ fontSize: 40, color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Profile Link" variant="standard" />
        </Box>
        <Box sx={{ fontSize: 18, display: 'flex', alignItems: 'flex-end' }}>
          <WebIcon sx={{ fontSize: 40, color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Employee Id" variant="standard" />
        </Box>
        <Box sx={{ fontSize: 18, display: 'flex', alignItems: 'flex-end' }}>
          <HandymanIcon sx={{ fontSize: 40, color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Department" variant="standard" />
        </Box>
        <Box sx={{ fontSize: 18, display: 'flex', alignItems: 'flex-end' }}>
          <EngineeringIcon sx={{ fontSize: 40, color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Job Title" variant="standard" />
        </Box>

      </form>
    </div>
  );
};
