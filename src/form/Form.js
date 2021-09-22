import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Avatar, Button, Stack, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';


function FormComponent({ info, setInfo, handleFormSubmit }) {
  const handleInputChange = (e) => {
    // const name= e.target.name
    // const value = e.target.value
    const { name, value } = e.target
    setInfo({ ...info, [name]: value })
  }
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2, width: '60ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="App">
        <Stack
          mt={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Avatar
            sx={{ width: 300, height: 300, bgcolor: blue[500], textAlign: "center" }}
            alt="blog"
            src="https://eds-fireblog.herokuapp.com/static/media/blok.7e6674a5.png" />
        </Stack>
        <Typography variant="h5" mt={3} mb={2} >
          -----NEW BLOG-----
        </Typography>
        <div>
          <TextField
            value={info.title}
            onChange={handleInputChange}
            id="outlined-helperText"
            label="Title"
            required
          />
        </div>
        <div>
          <TextField
            value={info.image}
            onChange={handleInputChange}
            id="outlined-helperText"
            label="Image URL"
            required
          />
        </div>
        <div>
          <TextField
            value={info.content}
            onChange={handleInputChange}
            id="outlined-helperText"
            label="Content"
            required
            multiline
            rows={12}
          />
        </div>
        <div>
          <Button
            sx={{ width: '75ch', m: 2 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            SUBMIT
          </Button>
        </div>
      </div>
    </Box>
  )
}

export default FormComponent
