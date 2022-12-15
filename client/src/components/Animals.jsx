// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react"
// import Animal from "./Animal";



// export default function() {
//     const [animals,setAnimals] = useState([]);


//     console.log(animals);
//     const url = Global.url

//     useEffect(() => {
//         getAnimals();
//         console.log(animals);
//     }, [animals.length]);

//     // const filterAnimal = () => {
//     //     const searchAnimal = animals.filter(e => e.typeOfAnimal === typeOfAnimal)
//     //     console.log(searchAnimal);
//     // }
//     // const handleChange = (e) => {
//     //     setSearch(e.target.value)
//     //     //filterAnimal();
//     // }

//     const getAnimals = () => {
//         axios.get(url).then(res => {
//             setAnimals(res.data.animals)
//         }) 
//     }


//     const deleteAnimal = (id) => {
//         const idAnimal = animals[id]._id;
//         axios.delete(url + idAnimal).then(res => {
//             getAnimals();
//         })
//     }
//     const editAnimal = (id) => {
//         const idAnimal = animals[id]._id;
//         axios.put(url + idAnimal).then(res => {
//             getAnimals();
//         })
//     }
//     return (
//         <>
//             {/* <Search onChange = {handleChange}/> */}
//             <h1>List of Animals</h1>
//             <div>
//                 {
//                     animals.length > 0 ? (
//                         animals?.map((animal, index) => {
//                             return(
//                                 <Animal
//                                     key= {index}
//                                     id= {index}
//                                     animalData= {animal}
//                                     delAnimal ={deleteAnimal}
//                                     editAnimal = {editAnimal}
//                                 />
//                             )
//                         })
//                     ) :( <h3>No registered animals</h3>)
//                 }
//             </div>
//         </>
//     )
// }

