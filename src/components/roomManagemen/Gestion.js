
import React, { useState, useEffect} from 'react';
//Here in call bootstrap for styles, reactstrap for modal and axios for comunication with API
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Label, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap'; 
import { baseURLrooms } from '../../mockData';
import '../css/gestion.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
const Gestion = () => {
  const baseURL = baseURLrooms;
  const [data, setData]=useState([]);
  const [modalInsert, setModalInsert]=useState(false);
  const [modalEdit, setModalEdit]=useState(false);
  const [modalDelete, setModalDelete]=useState(false);
  const [roomSelected, setRoomSelected] = useState({
    id: '',
    title: '',
    description: '',
    cat: '',
    price: '',
    stock: '',
    notAvailablestart: '',
    notAvailableend: '',
    calification: '',
    opinions: ''

  });

  const handleCharge=e=>{
    const{name, value}=e.target;
    setRoomSelected({
      ...roomSelected,
      [name]: value
    });
  }
//method to open the modal for insert 
  const openCLoseModalInsert=()=>{
    setModalInsert(!modalInsert);
  }
  const openCLoseModalEdit=()=>{
    setModalEdit(!modalEdit);
  }
  const openCLoseModalDelete=()=>{
    setModalDelete(!modalDelete);
  }
  const roomSelect_Update = (room, caso)=>{
    setRoomSelected(room);
    (caso === "Edit")?
    openCLoseModalEdit(): openCLoseModalDelete();
  }

  //the request most be async because need work in backgroud
  const getRequest=async()=>{
    await axios.get(baseURL).then(response =>{
      setData(response.data);
    }).catch(error=>{console.log(error)});
  }

  const postRequest=async()=>{
    //first i delete the element id bacause this atribute is auto-incremenet
    delete roomSelected.id;
    await axios.post(baseURL, roomSelected).then(response =>{
      setData(data.concat(response.data));
      openCLoseModalInsert();
    }).catch(error=>{console.log(error)});
  }
  const putRequest=async()=>{

    await axios.put(baseURL+"/"+roomSelected.id, roomSelected).then(response =>{
      var resp = response.data;
      var dataAux =  data;
      dataAux.map(room=>{
        if(room.id === roomSelected.id){
          room.title = resp.title
          room.description = resp.description
          room.cat = resp.cat
          room.price = resp.price
          room.stock = resp.stock
          room.notAvailablestart = resp.notAvailablestart
          room.notAvailableend = resp.notAvailableend
          room.calification = resp.calification
          room.opinions = resp.opinions
      
        }
      })

      openCLoseModalEdit();
    }).catch(error=>{console.log(error)});
  }
  const deleteRequest=async()=>{
    await axios.delete(baseURL+"/"+roomSelected.id).then(response =>{
      setData(data.filter(room => room.id!==response.data));
      openCLoseModalDelete();
    })
    
  }
 
  useEffect(()=>{
    getRequest();
  },[])
  
  return (
    <div className='container' >
    <div className="tableRooms">
    <br></br>
    <button className='btn btn-success'  onClick={()=>openCLoseModalInsert()}>
      <Tooltip title="Insert">
        <IconButton>
          <AddBoxIcon/>
        </IconButton>
      </Tooltip>
      </button>
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Not Available-Start</th>
                <th>Not Available-End</th>
                <th>Calification</th>
                <th className='opinions'>Opinions</th>
            </tr>
          </thead>
          <tbody>
          {data.map(room=>(
          <tr className='rows' key={room.id}>
                <td>{room.id}</td>
                <td>{room.title}</td>
                <td>{room.description}</td>
                <td>{room.cat}</td>
                <td>{room.price}</td>
                <td>{room.stock}</td>
                <td>{room.notAvailablestart}</td>
                <td>{room.notAvailableend}</td>
                <td>{room.calification}</td>
                <td >{room.opinions}</td>
                <td>
                  <div className='row'>
                    <div>
                      <button className="btn btn-warning"  onClick={()=>roomSelect_Update(room, "Edit")}>
                        
                        <Tooltip title="Edit">
                          <IconButton>
                              <EditIcon/>
                          </IconButton>
                        </Tooltip>
                      </button>
                    </div>
                    <div>
                      <button className="btn btn-danger"  onClick={()=>roomSelect_Update(room, "Delete")}>
                        
                        <Tooltip title="Edit">
                          <IconButton>
                          <DeleteIcon/>
                          </IconButton>
                        </Tooltip>
                      </button>
                    </div>
                 
                    
                  </div>
                    
                  </td>
          </tr>       
          ))}
          </tbody>
        </table>
 
        <Modal isOpen={modalInsert}>
          <ModalHeader>Insert a new Room</ModalHeader>
          <ModalBody>
            <div className='form-group'>
              <label>Title: </label>
              <br />
              <input type="text" className='form-control' name='title' onChange={handleCharge}/>
              <label>Description: </label>
              <br />
              <input type="text" className='form-control' name='description' onChange={handleCharge} />
              <label>Category: </label>
              <br />
              <input type="text" className='form-control' name='cat' onChange={handleCharge} />
              <label>Price: </label>
              <br />
              <input type="number" className='form-control' name='price' onChange={handleCharge} />
              <label>Stock: </label>
              <br />
              <input type="number" className='form-control' name='stock' onChange={handleCharge} />
              <label>Not Abailable Start: </label>
              <br />
              <input type="date" className='form-control'  name='notAvailablestart' onChange={handleCharge} />
              <label>Not Available End: </label>
              <br />
              <input type="date" className='form-control'   name='notAvailableend' onChange={handleCharge} />
              <label>Calification: </label>
              <br />
              <input type="number" className='form-control' name='calification' onChange={handleCharge} />
              <label>Opinions: </label>
              <br />
              <input type="text" className='form-control' name='opinions' onChange={handleCharge} />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary'onClick={()=>postRequest()} >Insert</button>{"  "}
            <button className='btn btn-danger'onClick={()=>openCLoseModalInsert()}>Cancel</button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={modalEdit}>
          <ModalHeader>Update Room</ModalHeader>
          <ModalBody>
            <div className='form-group'>
            <label>Title: </label>
              <br />
              <input type="text" className='form-control' name='title' onChange={handleCharge} value={roomSelected && roomSelected.title}/>
              <label>Description: </label>
              <br />
              <input type="text" className='form-control' name='description' onChange={handleCharge} value={roomSelected && roomSelected.description} />
              <label>Category: </label>
              <br />
              <input type="text" className='form-control' name='cat' onChange={handleCharge} value={roomSelected && roomSelected.cat} />
              <label>Price: </label>
              <br />
              <input type="number" className='form-control' name='price' onChange={handleCharge} value={roomSelected && roomSelected.price} />
              <label>Stock: </label>
              <br />
              <input type="number" className='form-control' name='stock' onChange={handleCharge} value={roomSelected && roomSelected.stock} />
              <label>Not Abailable Start: </label>
              <br />
              <input type="text" className='form-control'  name='notAvailablestart' onChange={handleCharge} value={roomSelected && roomSelected.notAvailablestart} />
              <label>Not Available End: </label>
              <br />
              <input type="text" className='form-control'   name='notAvailableend' onChange={handleCharge} value={roomSelected && roomSelected.notAvailableend}/>
              <label>Calification: </label>
              <br />
              <input type="number" className='form-control' name='calification' onChange={handleCharge} value={roomSelected && roomSelected.calification} />
              <label>Opinions: </label>
              <br />
              <input type="text" className='form-control' name='opinions' onChange={handleCharge} value={roomSelected && roomSelected.opinions} />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className='btn btn-primary'onClick={()=>putRequest()} >Edit</button>{"  "}
            <button className='btn btn-danger'onClick={()=>openCLoseModalEdit()}>Cancel</button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={modalDelete}>
          <ModalBody>Are you sure you want to delete this room?</ModalBody>
          <ModalFooter>
            <button className='btn btn-danger'onClick={()=>deleteRequest()} >Yes</button>{"  "}
            <button className='btn btn-secondary'onClick={()=>openCLoseModalDelete()}>No</button>
          </ModalFooter>
        </Modal>

        
        
        </div>
    </div>
    </div>
    
  )
}

export default Gestion
