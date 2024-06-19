import { Button, DialogActions } from '@mui/material'
import React from 'react'

const Action = ({handleClick, handleClose}) => {
    return (
        <DialogActions>
            <Button autoFocus onClick={handleClose} size="large" style={{fontSize: 14}}>
                Cancel
            </Button>
            <Button onClick={handleClick} 
                autoFocus 
                size="large" 
                style={{fontSize: 14}}
            >
                Confirm
            </Button>
        </DialogActions>
    )
}

export default Action