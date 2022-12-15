import { Crud } from "./components/Funciones";

const { editAnimal, deleteAnimal } = Crud();

export const COLUMNS = [
  {
    Header: "ID",
    accessor: "id_number",
  },
  {
    Header: "Type of Animal",
    accessor: "typeOfAnimal",
  },
  {
    Header: "Name of Potrero",
    accessor: "nameOfPotrero",
  },
  {
    Header: "Weight",
    accessor: "weight",
  },
  {
    Header: "Device Type",
    accessor: "deviceType",
  },
  {
    Header: "Device Number",
    accessor: "deviceNumber",
  },
  {
    Header: "Action",
    accessor: (originalRow, rowIndex) => (
      <div>
        <button onClick={() => editAnimal(originalRow.id_number)}>Edit</button>
        <button onClick={() => deleteAnimal(originalRow.id_number)}>
          Delete
        </button>
      </div>
    ),
    id: "action",
  },
];

const aux = [
  {
    id_number: "1",
    typeOfAnimal: "vaquillona",
    nameOfPotrero: "Henry",
    weight: 100,
    deviceType: "Chip",
    deviceNumber: 666,
  },
  {
    id_number: "2",
    typeOfAnimal: "vaquillona",
    nameOfPotrero: "Henry",
    weight: 100,
    deviceType: "Chip",
    deviceNumber: 666,
  },
  {
    id_number: "1",
    typeOfAnimal: "vaquillona",
    nameOfPotrero: "Henry",
    weight: 100,
    deviceType: "Chip",
    deviceNumber: 666,
  },
  {
    id_number: "1",
    typeOfAnimal: "vaquillona",
    nameOfPotrero: "Henry",
    weight: 100,
    deviceType: "Chip",
    deviceNumber: 666,
  },
  {
    id_number: "1",
    typeOfAnimal: "vaquillona",
    nameOfPotrero: "Henry",
    weight: 100,
    deviceType: "Chip",
    deviceNumber: 666,
  },
  {
    id_number: "1",
    typeOfAnimal: "vaquillona",
    nameOfPotrero: "Henry",
    weight: 100,
    deviceType: "Chip",
    deviceNumber: 666,
  },
  {
    id_number: "1",
    typeOfAnimal: "vaquillona",
    nameOfPotrero: "Henry",
    weight: 100,
    deviceType: "Chip",
    deviceNumber: 666,
  },
];
