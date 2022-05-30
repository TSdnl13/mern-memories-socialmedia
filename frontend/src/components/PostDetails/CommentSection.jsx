import React, { useState } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

import useStyles from './styles';

const CommentSection = ({ post }) => {
   const classes = useStyles();
   const [comments, setComments] = useState([]);
   const [comment, setComment] = useState('');

   const handleClick = () => {}

   return (
      <div>
         <div className={classes.commentsOuterContainer}>
            <div className={classes.commentsInnerContainer}>
               <Typography gutterBottom variant='h6' >Comments</Typography>
               {comments.map((comment, i)  => (
                  <Typography key={i} gutterBottom variant='subtitle1'>Comment {i}</Typography>
               ))}
            </div>

            <div style={{ width: '70%' }}> 
               <Typography gutterBottom variant='h6' >Write a comment</Typography>
               <TextField 
                  fullWidth
                  minRows={4}
                  variant='outlined'
                  label='Comment'
                  multiline
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
               />     

               <Button 
                  style={{ marginTop: '10px' }}
                  fullWidth
                  disabled={!comment}
                  variant='contained'
                  onClick={handleClick}
               >
                  Comment
               </Button>          
            </div>
         </div>
      </div>
  )
}

export default CommentSection