import React, { useEffect, useState, useMemo } from 'react';
import AnimalModal from './AnimalModal';
import { useTable } from 'react-table';
import './tablita.css';
import axios from 'axios';
import Global from '../Global';

const url = Global.url;

export default function Tablita({
  flag,
  setIsOpen,
  modalIsOpen,
  openModal,
  closeModal,
}) {
  const [animals, setAnimals] = useState([]);
  const [edited, setEdited] = useState({});

  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: '_id',
      },
      {
        Header: 'Type of Animal',
        accessor: 'typeOfAnimal',
      },
      {
        Header: 'Name of Potrero',
        accessor: 'nameOfPotrero',
      },
      {
        Header: 'Weight',
        accessor: 'weight',
      },
      {
        Header: 'Device Type',
        accessor: 'deviceType',
      },
      {
        Header: 'Device Number',
        accessor: 'deviceNumber',
      },
      {
        Header: 'Action',
        accessor: (originalRow, rowIndex) => (
          <div>
            <button onClick={() => editAnimal(originalRow)}>Edit</button>
            <button onClick={() => deleteAnimal(originalRow._id)}>
              Delete
            </button>
          </div>
        ),
        id: 'action',
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: animals });

  useEffect(() => {
    getAnimals();
    console.log(animals);
  }, [animals.length, flag]);

  const getAnimals = () => {
    axios.get(url).then((res) => {
      console.log(res.data);
      setAnimals(res.data.animals);
    });
  };
  const deleteAnimal = (id) => {
    console.log(id);
    axios.delete(url + id).then((res) => {
      getAnimals();
    });
    console.log('delete', id);
  };

  const editAnimal = (animal) => {
    setEdited((state) => animal);
    console.log(edited);
    openModal();
  };

  const sendEdition = (id) => {
    axios.put(url + id).then((res) => {
      getAnimals();
    });
  };
  return (
    <div className="container">
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <AnimalModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={sendEdition}
        data={edited}
        title="Edit Animal"
        changeState={setEdited}
      />
    </div>
  );
}
