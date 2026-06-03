import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Unstable_Grid2 as Grid,
  TextField,
} from '@mui/material';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import sound from '../../soundfile.wav';

export default function OtherDetails() {
  const [, setValues] = useState({
    profession: '',
    gender: '',
    sexualOrientation: '',
    starSign: '',
    height: '',
    workout: '',
    smoking: '',
    drinking: '',
    kids: '',
    politics: '',
    zodiac: '',
    religion: '',
    school: '',
    qualification: '',
    hometown: '',
  });

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
      <Card sx={{ mt: 3, ml: -0.5, pb: 2.7 }}>
        <CardHeader
          sx={{
            pb: 2,
          }}
          title="Other Details"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <TextField fullWidth required sx={{ mt: 2, mb: 2 }} label="About Me" />
            <Grid container spacing={3}>
              {textFields.map((element) => (
                <Grid key={element.Name} xs={12} md={6}>
                  <TextField fullWidth label={element.label} name={element.Name} onChange={handleChange} required />
                </Grid>
              ))}
              <Grid>
                <AudioPlayer
                  autoPlay
                  src={sound}
                  onPlay={() => console.log('onPlay')}
                  // other props here
                />{' '}
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Edit Profile</Button>
          <Button variant="contained">Save details</Button>
        </CardActions>
      </Card>
    </form>
  );
}

const textFields = [
  {
    label: 'Profession',
    Name: 'profession',
  },
  {
    label: 'Gender',
    Name: 'gender',
  },
  {
    label: 'Sexual Orientation',
    Name: 'Sexual-Orientation',
  },
  {
    label: 'Star Sign',
    Name: 'star-sign',
  },
  {
    label: 'Height',
    Name: 'height',
  },
  {
    label: 'Workout',
    Name: 'workout',
  },
  {
    label: 'Smoking',
    Name: 'smoking',
  },
  {
    label: 'Drinking',
    Name: 'drinking',
  },
  {
    label: 'Kids',
    Name: 'kids',
  },
  {
    label: 'Politics',
    Name: 'politics',
  },
  {
    label: 'Zodiac',
    Name: 'zodiac',
  },
  {
    label: 'Religion',
    Name: 'religion',
  },
  {
    label: 'School',
    Name: 'school',
  },
  {
    label: 'Qualification',
    Name: 'qualification',
  },
  {
    label: 'Hometown',
    Name: 'hometown',
  },
  {
    label: 'Written Prompt',
    Name: 'prompt1',
  },
  {
    label: 'Written Prompt',
    Name: 'prompt2',
  },
  {
    label: 'Written Prompt',
    Name: 'prompt3',
  },
  {
    label: 'Interests',
    Name: 'interests',
  },
];
