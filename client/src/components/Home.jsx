import { useState } from 'react';
import NewAnimal from './NewAnimal';
import Tablita from './Tablita';

export default function Home() {
  const [flag, setFlag] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
    setFlag(false);
  }

  function closeModal() {
    setIsOpen(false);
    setFlag(true);
  }

  return (
    <>
      <h1>Animal Management</h1>
      <NewAnimal
        openModal={openModal}
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
      <hr />
      <Tablita
        modalIsOpen={modalIsOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
    </>
  );
}
