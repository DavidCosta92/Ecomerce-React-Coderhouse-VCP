import "./DeleteModal.css"
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import DangerousIcon from '@mui/icons-material/Dangerous';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const DeleteModal=({deleteFunc})=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <div className="btnVaciarCarrito">
            <Button onClick={handleOpen} >Vaciar Carrito <DangerousIcon/></Button>
            <Modal            
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
            <Fade in={open}>
                <Box sx={style}>
                <div className="msjModal">
                    <p>¿Estas seguro que deseas eliminar <b>todos</b> los elementos del carrito?</p>
                </div>
                <div className="btnModal">
                    <div className="btnModalSi">
                        <button onClick={()=>deleteFunc()}>¡Si!</button>
                    </div>
                    <div className="btnModalNo"> 
                        <button  onClick={()=>handleClose()}>¡No!, solo me equivoque</button>
                    </div>
                </div>
                </Box>
            </Fade>
            </Modal>
        </div>
    )
}
export default DeleteModal;

  