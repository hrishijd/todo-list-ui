import React, { useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Button, Container, CssBaseline, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, TextField, Typography } from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
      },
      inline: {
        display: 'inline',
      },
  }));
function ListShow(props) {
    var [person,setPerson]=useState(JSON.parse(props.location.state));
     var [todo,setTodo]=useState(person.list);
     const [vra,setVra]=useState(false);
     const [login,setlogin]=useState("signin");
    const classes=useStyles();
    const chnge=()=>{
        let rav=todo;
        rav.push("");
        setTodo(rav);
        setVra(!vra);
    }
    const log=()=>
    {
        setPerson({});
        setTodo([]);
        props.history.push("/");
    }
    return (
        <div className={ classes.root }>
            <Container component="main" maxWidth="xs">
            <Typography component="h1" variant="h5">
                Your List
            </Typography>
            <List component="nav" aria-label="main mailbox folders">
                <CssBaseline />
                {todo.map((str,index)=>{    
                return(<div>
                <ListItem >
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    label={str}
                    name={str}
                    value={str}
                    onChange={(e)=>{
                        var arr=todo;
                        setVra(!vra);
                        arr[index]=e.target.value;
                        setTodo(arr);
                        console.log(arr);
                    }}
                    autoFocus
                    />
                </ListItem>
                </div>)
                })}
                <ListItem button onClick={chnge}>
                <AddCircleOutlineOutlinedIcon/>
                </ListItem>            
            </List>
            <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={log}
          >
            Log Out
          </Button>
            </Container>
        </div>
    )
}

export default ListShow
