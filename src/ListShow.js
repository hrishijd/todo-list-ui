import React, { useState } from 'react'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { Button, Container, CssBaseline, Divider, List, ListItem, ListItemIcon, ListItemText, makeStyles, TextField, Typography } from '@material-ui/core';
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
     const  Check= (e) => {
        startPost(e);
    };
    const  startPost= (e) => {
      e.preventDefault();
      disp();  
    };
    
    
    
    const disp=()=>
    {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"list":todo});
    console.log("hey");
    var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };
    fetch("http://hrishis-todo-list-api.herokuapp.com/user/"+person.id, requestOptions)
    .then(response => response.text())
    .then(result => {
        console.log(result);
        props.history.push("/user",result);})
    .catch(error => console.log('error', error));
    }
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
                <ListItem>
                <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={Check}
                >
            Save
          </Button>    
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
