import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material';
import React ,{useState} from 'react';
import {Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack} from "@mui/icons-material";
import styled from '@emotion/styled';
import muiimg from "../images/muiimg.jpg";
import { Stack } from '@mui/system';

const StyledModal=styled(Modal)({
    display:"flex", 
    alignItems:"center",
    justifyContent:"center"
})

const UserBox   =styled(Box)({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    marginBottom:"20px"
})



const Add = () => {

    const [open, setopen] = useState(false)

  
    function handleOpen(e){
        setopen(true);
    }

    function handleClose(){
        setopen(false);
    }
    return (
      <div>
        <Tooltip onClick={handleOpen}
          title="Delete"
          sx={{
            position: "fixed",
            bottom: 20,
            left: { xs: "calc(50%)", md: 30 },
          }}
        >
                <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Tooltip>
<StyledModal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
 <Typography variant='h6' color="gray" textAlign="center">
          Create Post....
 </Typography>
 <UserBox>
 <Avatar sx={{ width: 30, height: 30 }} src={muiimg} onClick={e=>setopen(true)}  />
            <Typography variant="span" fontWeight={500}>Jhon</Typography>
 </UserBox>
 <TextField
        sx={{width :"100%"}}
          id="standard-multiline-static"
          multiline
          rows={3}
          placeholder="what's on your mind ??"
          variant="standard"
        />
         <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange  />
            </Button>
          </ButtonGroup>
  </Box>
</StyledModal>
      </div>
    );
};

export default Add;