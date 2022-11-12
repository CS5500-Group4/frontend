import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { AddReviewComponent } from './index'

const AddReviewDialog = (props) => {
  const { open, handleClose, handleClickOpen, onSubmitReview } = props
  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Rate Course
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Submit Your Review'}</DialogTitle>
        <DialogContent>
          <AddReviewComponent onSubmitReview={onSubmitReview} />
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default AddReviewDialog
