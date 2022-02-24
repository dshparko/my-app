import React from 'react'

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Grid, Paper, Avatar, TextField, Button, Typography,Link} from '@material-ui/core'
const Login =()=>{
    const btnstyle={width: 200}
    const paperStyle = { padding:20,  width:450, margin:"-712px -200px -600px 475px",height:710}

    return( 
        <Grid  >
            <Paper  style = {paperStyle}>
               <Grid align = 'center'>
                  
               <Avatar>H</Avatar>
                <h2>Вход</h2></Grid>
                <form align ='center'>
                <TextField  label="Логин" placeholder ="Введите логин" fullWidth required />
                <TextField label="Пароль" placeholder ="Введите пароль" type = 'password' fullWidth required />
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label ="Запомнить"
                 />  
                 <br />
                 <Button  type='submit' color='primary' variant="contained" style={btnstyle} fullWidth >Войти</Button>
                <Typography >
                     <Link href="#" >
                        Забыли пароль?
                </Link>
                </Typography>
                     <Link href="#"  >
                        Регистрация
                </Link>
                    </form>
            </Paper>
        </Grid>
        
    )
}

export default Login