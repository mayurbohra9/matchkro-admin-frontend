import React, { useCallback, useState } from 'react';
import { Box, Card, CardContent, CardHeader, TextField, Unstable_Grid2 as Grid } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';

export const AccountProfileDetails = () => {
  const [Value, setValue] = React.useState('');

  const [values, setValues] = useState({
    firstName: 'Anika',
    lastName: 'Visser',
    email: 'demo@devias.io',
    phone: '',
    state: 'los-angeles',
    country: 'USA',
  });

  const handleNumber = (newValue) => {
    setValue(newValue);
  };

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card sx={{ height: 279 }}>
        <CardHeader
          sx={{
            pb: 3,
          }}
          title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="First name"
                  name="firstName"
                  required
                  disabled
                  onChange={handleChange}
                  value={values.firstName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  required
                  disabled
                  onChange={handleChange}
                  value={values.lastName}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  required
                  onChange={handleChange}
                  disabled
                  value={values.email}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <MuiTelInput label="Mobile" required fullWidth disabled value={Value} onChange={handleNumber} />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        {/* <Divider /> */}
        {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Save details</Button>
        </CardActions> */}
      </Card>
    </form>
  );
};

// interface CountryType {
//   code: string;
//   label: string;
//   phone: string;
//   suggested?: boolean;
// }

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
