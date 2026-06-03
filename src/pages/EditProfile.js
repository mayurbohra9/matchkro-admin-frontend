import { Helmet } from 'react-helmet-async';
// @mui
import { Stack, Container, Typography, Box, Grid } from '@mui/material';
// components
import OtherDetails from '../sections/account/other-details';
import { AccountProfileDetails } from '../sections/account/account-profile-details';
import { AccountProfile } from '../sections/account/account-profile';

// ----------------------------------------------------------------------

export default function EditProfile() {
  return (
    <>
      <Helmet>
        <title> User | Matchkro UI </title>
      </Helmet>

      <Box component="main">
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <div>
              <Typography variant="h4">Account</Typography>
            </div>
            <div>
              <Grid sx={{ pt: 5 }} flex flexDirection={'row'} container spacing={3}>
                <Grid xs={12} md={6} lg={4}>
                  <AccountProfile />
                </Grid>
                <Grid xs={12} md={6} lg={8}>
                  <AccountProfileDetails />
                </Grid>
              </Grid>
              <Grid>
                <OtherDetails />
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
