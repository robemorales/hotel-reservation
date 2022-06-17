import indoorpool from '../src/imagenes/indoorpool.jpeg';
import bar from '../src/imagenes/bar.jpg';
import standard from '../src/imagenes/standard.jpg';
import outdoorpool from '../src/imagenes/outdoorpool.jpeg';
import executive from '../src/imagenes/executive.jpg';
import withbalcony from  '../src/imagenes/withbalconi.jpg';
import juniorsuite from '../src/imagenes/juniorsuite.jpg';
import suite from '../src/imagenes/suite.jpg';


const mockData = [
    {
        src: indoorpool,
        title: "Our indoor pool",
        description: "25m long indoor pool with hammock and sauna"
    },
    {
        src: bar,
        title: "Cocktail bar",
        description: "Espendid clasis cocktail bar with live music"
    },
    {
        src: standard,
        title: "Standard Room",
        description: "20 sqm room with full amenities",
        cat: "room",
        price: 140,
        stock: 12,
        notAvailablestart: new Date(2022, 6, 16).getTime(),
        notAvailableend: new Date(2022, 6, 16).getTime(),
    },
    {
        src: outdoorpool,
        title: "Our outdoor pool",
        description: "Infinity pool with breath taking Ocean views",
        
    },
    {
        src: executive,
        title: "Executive room",
        description: "Our business rooms lounge addess",
        cat: "room",
        price: 170,
        stock: 9,
        notAvailablestart: new Date(2022, 6, 16).getTime(),
        notAvailableend: new Date(2022, 6, 16).getTime(),
    },
    {
        src: withbalcony,
        title: "Rooms with balcony",
        description: "Rooms with amazinf views",
        cat: "room",
        price: 175,
        stock: 15,
        notAvailablestart: new Date(2022, 6, 16).getTime(),
        notAvailableend: new Date(2022, 6, 16).getTime(),
    },
    {
        src: juniorsuite,
        title: "Junior Suite room",
        description: "Our JuniorSuite rooms ",
        cat: "room",
        price: 275,
        stock: 10,
        notAvailablestart: new Date(2022, 6, 16).getTime(),
        notAvailableend: new Date(2022, 6, 16).getTime(),
    },
    {
        src: suite,
        title: "Our Corner Suite",
        description: "Discrete and luxiurious with butler service",
        cat: "room",
        price: 350,
        stock: 4,
        notAvailablestart: new Date(2022,0,16).getTime(),
        notAvailableend: new Date(2022,0,20).getTime(),
    },
    
    
];
export const chips = [
    {key: 0, label: "Cancellation Flexibility"},
    {key: 1, label: "Standard rooms"},
    {key: 2, label: "Executive rooms"},
    {key: 3, label: "Acces to lounge"},
    {key: 4, label: "more filters"},
   
];
export default mockData;






