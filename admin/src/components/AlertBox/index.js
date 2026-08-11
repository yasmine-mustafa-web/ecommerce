import {useContext} from "react";
import {Snackbar , Alert } from "@mui/material";
import {MyContext} from "../../App";

const AlertBox= () =>{
    const context = useContext(MyContext);

    const handleClose =(event , reason) => {
        if(reason === 'clickaway'){
            return ;
        }
        
        context.setAlertBox({
            ...context.alertBox,
            open:false
        });
    };
    return (
        <Snackbar open={context.alertBox.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{vertical: 'top ' , horizontal: 'center'}}
         >

        <Alert onClose={handleClose}
        severity={context.alertBox.error ? "error" : "success"}
        variant="filled"
        sx={{width:'100%'}}
        >
        {context.alertBox.msg}
        </Alert>
        </Snackbar>
    )
}

export default AlertBox;