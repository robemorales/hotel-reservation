import indoorpool from '../src/imagenes/indoorpool.jpeg';
import bar from '../src/imagenes/bar.jpg';
import standard from '../src/imagenes/standard.jpg';
import outdoorpool from '../src/imagenes/outdoorpool.jpeg';
import executive from '../src/imagenes/executive.jpg';
import withbalcony from  '../src/imagenes/withbalconi.jpg';
import juniorsuite from '../src/imagenes/juniorsuite.jpg';
import suite from '../src/imagenes/suite.jpg';
import axios from 'axios';

const baseURLrooms = "http://localhost:4000/rooms";
const mockData=[];
const imageHome=[indoorpool, bar, outdoorpool, executive, withbalcony, juniorsuite, suite,standard];
export async function getRooms() {
    try {
      const response = await axios.get(baseURLrooms);
      const data = await response.data
      for (let index = 0; index < data.length; index++) {
        console.log(data[index])
        mockData[index]=data[index]
        mockData[index].src = imageHome[index]

         
    }
    
      //console.log(response.data.title);
    } catch (error) {
      console.error(error);
    }
  }
  export async function putRooms(id) {
    try {
      const response = await axios.put(baseURLrooms+'/'+id);
      const data = await response.data
      data.map(room=>{
        if(room.id === id){
            room.id = data.id;
            room.title = data.title;
            room.description = data.description,
            room.cat= data.cat,
            room.price = data.price,
            room.stock =data.stock,
            room.notAvailablestart= data.notAvailablestart,
            room.notAvailableend = data.notAvailableend

        }
      })
      //console.log(response.data.title);
    } catch (error) {
      console.error(error);
    }
  }
getRooms()
/*const mockData = [
    /*{
        id: 0,
        src: indoorpool,
        src1: indoorpool1,
        src2: indoorpool2,
        src3: indoorpool3,
        src4: indoorpool4,
        title: "Our indoor pool",
        description: "25m long indoor pool with hammock and sauna"
    },
    {
        id: 2,
        src: bar,
        src1: bar1,
        src2: bar2,
        src3: bar3,
        src4: bar4,
        title: "Cocktail bar",
        description: "Espendid clasis cocktail bar with live music"
    },*/
   /* {
        id: 1,
        src: standard,
        src1: indoorpool1,
        src2: indoorpool2,
        src3: indoorpool3,
        src4: indoorpool4,
        title: "data.title",
        description: "descriptione",
        cat: "room",
        price: 150,
        stock: 15,
        notAvailablestart: new Date(2022, 6, 3).getTime(),
        notAvailableend: new Date(2022, 6, 3).getTime(),
    },*/
   /* {
        id: 4,
        src: outdoorpool,
        src1: indoorpool1,
        src2: indoorpool2,
        src3: indoorpool3,
        src4: indoorpool4,
        title: "Our outdoor pool",
        description: "Infinity pool with breath taking Ocean views",
        
    },
    {
        id: 5,
        src: executive,
        src1: indoorpool1,
        src2: indoorpool2,
        src3: indoorpool3,
        src4: indoorpool4,
        title: "Executive room",
        description: "Our business rooms lounge addess",
        cat: "room",
        price: 170,
        stock: 9,
        notAvailablestart: new Date(2022, 6, 16).getTime(),
        notAvailableend: new Date(2022, 6, 16).getTime(),
    },
    {
        id: 6,
        src: withbalcony,
        src1: indoorpool1,
        src2: indoorpool2,
        src3: indoorpool3,
        src4: indoorpool4,
        title: "Rooms with balcony",
        description: "Rooms with amazinf views",
        cat: "room",
        price: 175,
        stock: 15,
        notAvailablestart: new Date(2022, 6, 16).getTime(),
        notAvailableend: new Date(2022, 6, 16).getTime(),
    },
    {
        id: 7,
        src: juniorsuite,
        src1: indoorpool1,
        src2: indoorpool2,
        src3: indoorpool3,
        src4: indoorpool4,
        title: "Junior Suite room",
        description: "Our JuniorSuite rooms ",
        cat: "room",
        price: 275,
        stock: 10,
        notAvailablestart: new Date(2022, 6, 16).getTime(),
        notAvailableend: new Date(2022, 6, 16).getTime(),
    },
    {
        id: 8,
        src: suite,
        src1: indoorpool1,
        src2: indoorpool2,
        src3: indoorpool3,
        src4: indoorpool4,
        title: "Our Corner Suite",
        description: "Discrete and luxiurious with butler service",
        cat: "room",
        price: 350,
        stock: 4,
        notAvailablestart: new Date(2022,5,16).getTime(),
        notAvailableend: new Date(2022,5,20).getTime(),
    },
    
    
];*/
export const chips = [
    {key: 0, label: "Cancellation Flexibility"},
    {key: 1, label: "Standard rooms"},
    {key: 2, label: "Executive rooms"},
    {key: 3, label: "Acces to lounge"},
    {key: 4, label: "more filters"},
   
];
export default mockData;






