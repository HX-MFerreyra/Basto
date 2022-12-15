import axios from "axios";
import Global from "../Global";
const url = Global.url;

export function Crud() {
  var animals = [
    {
      id_number: "11",
      typeOfAnimal: "vaquillona",
      nameOfPotrero: "Henry",
      weight: 100,
      deviceType: "Chip",
      deviceNumber: 666,
    },
    {
      id_number: "22",
      typeOfAnimal: "vaquillona",
      nameOfPotrero: "Henry",
      weight: 100,
      deviceType: "Chip",
      deviceNumber: 666,
    },
    {
      id_number: "33",
      typeOfAnimal: "vaquillona",
      nameOfPotrero: "Henry",
      weight: 100,
      deviceType: "Chip",
      deviceNumber: 666,
    },
    {
      id_number: "44",
      typeOfAnimal: "vaquillona",
      nameOfPotrero: "Henry",
      weight: 100,
      deviceType: "Chip",
      deviceNumber: 666,
    },
    {
      id_number: "55",
      typeOfAnimal: "vaquillona",
      nameOfPotrero: "Henry",
      weight: 100,
      deviceType: "Chip",
      deviceNumber: 666,
    },
    {
      id_number: "66",
      typeOfAnimal: "vaquillona",
      nameOfPotrero: "Henry",
      weight: 100,
      deviceType: "Chip",
      deviceNumber: 666,
    },
    {
      id_number: "77",
      typeOfAnimal: "vaquillona",
      nameOfPotrero: "Henry",
      weight: 100,
      deviceType: "Chip",
      deviceNumber: 666,
    },
  ];

  const deleteAnimal = (id) => {
    const idAnimal = animals[id]._id;
    axios.delete(url + idAnimal).then((res) => {
      getAnimals();
    });
    console.log("delete", id);
  };
  const editAnimal = (id) => {
    const idAnimal = animals[id]._id;
    axios.put(url + idAnimal).then((res) => {
      getAnimals();
    });
  };
  const getAnimals = () => {
    axios.get(url).then((res) => {
      animals = res.data.animals;
    });
  };

  return {
    animals,
    deleteAnimal,
    editAnimal,
    getAnimals,
  };
}
