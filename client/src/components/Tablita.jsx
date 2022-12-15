import React, { useEffect , useState, useMemo} from "react";
import {COLUMNS} from '../utils'
import { useTable } from 'react-table';
import axios from "axios";
import Global from "../Global";
import "./tablita.css"


export default function Tablita() {

    
    const [animals,setAnimals] = useState([
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
      ]);

    const url = Global.url;

    
    const columns = useMemo(() => COLUMNS, []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: animals });



    // useEffect(() => {
    //     getAnimals();
    //     console.log(animals);
    // }, [animals.length]);
    const getAnimals = () => {
        axios.get(url).then((res) => {
          setAnimals(res.data.animals);
        });
      };
      
      const deleteAnimal = (id) => {
        const idAnimal = animals[id]._id;
        axios.delete(url + idAnimal).then((res) => {
          getAnimals();
        });
      };
      const editAnimal = (id) => {
        const idAnimal = animals[id]._id;
        axios.put(url + idAnimal).then((res) => {
          getAnimals();
        });
      };

    // const aux = rows.map(row => {
    //     prepareRow(row);
    //     console.log("ROW", row)

    // })




    return (
            <div className="container">
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                <button onClick={() => console.log(row.original.id_number)}>Edit</button>
                                <button onClick={() => console.log(row.original.id_number)}>Delete</button>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

