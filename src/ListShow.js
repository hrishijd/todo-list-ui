import React from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Container, CssBaseline, Typography } from '@material-ui/core';
function ListShow(props) {
     var todo=JSON.parse(props.location.state).list;
     
    return (
        <div>
            <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Your List
            </Typography>
                <CssBaseline />
                {todo.map((str)=>{
                return(<div>
                {str}
                </div>)
            })}
            <AddCircleOutlineOutlinedIcon/>
            </Container>
        </div>
    )
}

export default ListShow
