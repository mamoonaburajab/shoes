// import React from 'react';
// import { TextField, Button, RadioGroup, FormControlLabel, Radio, Typography, Paper } from '@mui/material';
// import { makeStyles, ThemeProvider, createTheme } from '@mui/material/styles'; // Import ThemeProvider and createTheme
// import './signup.css'; // Import your CSS file for styling

// const useStyles = makeStyles((theme) => ({
//   formContainer: {
//     padding: theme.spacing(2),
//     maxWidth: '400px',
//   },
// }));

// const theme = createTheme(); // Create a theme instance

// const Signup = () => {
//   const classes = useStyles();

//   return (
//     <ThemeProvider theme={theme}> {/* Wrap your component in ThemeProvider */}
//       <div className="signup-container">
//         <Paper elevation={3} className={classes.formContainer}>
//           <Typography variant="h5">Sign Up</Typography>
//           <form>
//             <TextField
//               label="First Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Last Name"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Email"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="Phone Number"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//             />
//             <TextField
//               label="City"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//             />
//             <RadioGroup
//               aria-label="Gender"
//               name="gender"
//             >
//               <FormControlLabel value="male" control={<Radio />} label="Male" />
//               <FormControlLabel value="female" control={<Radio />} label="Female" />
//               <FormControlLabel value="other" control={<Radio />} label="Other" />
//             </RadioGroup>
//             <TextField
//               label="Age"
//               variant="outlined"
//               fullWidth
//               margin="normal"
//               type="number"
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//             >
//               Sign Up
//             </Button>
//           </form>
//         </Paper>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default Signup;
