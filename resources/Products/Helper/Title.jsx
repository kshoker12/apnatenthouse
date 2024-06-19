import { DialogTitle } from '@mui/material'
import React from 'react'

const Title = ({name}) => {
    return (
        <DialogTitle id="responsive-dialog-title" sx={{paddingTop: 0, paddingBottom: 0, textTransform: "capitalize"}} >
            <div className="tw-text-black h3 tw-py-0">
                {name}  
            </div>
        </DialogTitle>
    )
}

export default Title