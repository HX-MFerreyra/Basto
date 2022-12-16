import axios from 'axios';
import { useState } from 'react';
import Global from '../Global';
import AnimalModal from './AnimalModal';

export default function NewAnimal({  modalIsOpen , closeModal, openModal}) {
  const url = Global.url;

  const styleBtn = {
    color: 'white',
    backgroundColor: 'black',
    borderRadius: '5px',
    padding: '5px',
  };

  const [animal, setAnimal] = useState({
    typeOfAnimal: [],
    nameOfPotrero: '',
    weight: '',
    deviceType: [],
    deviceNumber: '',
  });

  const changeState = (e) => {
    setAnimal({
      ...animal,
      [e.target.name]: e.target.value,
    });
    console.log(animal);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    changeState(e);
    //POST
    // url, más la función, màs nuestro estado
    //recordemos que funcionan con promesas
    axios.post(url + 'register', animal).then((res) => {
      console.log(res.data);
      alert('Animal registered successfully');
      setAnimal({
        typeOfAnimal: [],
        nameOfPotrero: '',
        weight: '',
        deviceType: [],
        deviceNumber: '',
      });
    });
  };

  return (
    <>
      <button style={styleBtn} onClick={openModal}>
        New Animal
      </button>
      <AnimalModal
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
        handleSubmit={handleSubmit}
        data={animal}
        title="New Animal"
        changeState={changeState}
      />
    </>
  );
}
