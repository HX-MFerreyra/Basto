import React, { useEffect , useState, useMemo} from "react";
import {COLUMNS} from '../utils'
import { useTable } from 'react-table';
import "./tablita.css"
import {Crud} from "./Funciones";



export default function Tablita() {

  const { animals } = Crud()


    
    const columns = useMemo(() => COLUMNS, []);
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data: animals });



    // useEffect(() => {
    //     getAnimals();
    //     console.log(animals);
    // }, [animals.length]);


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

