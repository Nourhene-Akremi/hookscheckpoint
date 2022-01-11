import React from'react'
import {Button,Modal,Form} from'react-bootstrap'
import {useState} from'react'


export default function Add({addHandler}) {
   
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [episodes, setEpisodes] = useState("");
    const [Season, setSeason] = useState("");
    const [Description, setDescription] = useState("");
    const [rating, setRating] = useState("");
 
    const addMovie=()=>{
      addHandler({image,name,episodes,Season,Description,rating});
      handleClose();
    }

    return (
      <>
        <Button variant="primary" onClick={handleShow} className='btn'>Add Anime</Button>
        <Modal show={show} onHide={handleClose}>
   
        <Modal.Header closeButton><Modal.Title>Modal heading</Modal.Title></Modal.Header>
         
         <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label >Anime Image</Form.Label>
                <Form.Control type="text" placeholder="Add Anime Image" onChange= {(e)=>setImage(e.target.value)}/>
                <Form.Label>Anime Name</Form.Label>
                <Form.Control type="text" placeholder="Add Anime Name " onChange= {(e)=>setName(e.target.value)}/>
                <Form.Label>Anime Episodes</Form.Label>
                <Form.Control type="text" placeholder="Add Anime Episodes" onChange= {(e)=>setEpisodes(e.target.value)}/>
                <Form.Label>Anime Season</Form.Label>
                <Form.Control type="text" placeholder="Add Anime Season"onChange= {(e)=>setSeason(e.target.value)}/>
                <Form.Label>Anime Description</Form.Label>
                <Form.Control type="text" placeholder="Add Anime Description" onChange= {(e)=>setDescription(e.target.value)}/>
                <Form.Label>Anime Rating</Form.Label>
                <Form.Control type="text" placeholder="Add Anime Rating" onChange= {(e)=>setRating(e.target.value)}/>
            </Form.Group>
          </Modal.Body>
          
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary"   onClick={addMovie}>Add</Button>
          </Modal.Footer>
       
        </Modal>
      </>
    );
  }
  
  
