import { useState } from 'react';
import NewAnimal from './NewAnimal';
import Tablita from './Tablita';

export default function Home() {
    const [editModal, setEditModal] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    
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
        modalIsOpen={editModal}
        openModal={openModal}
        closeModal={closeModal}
        
      />
    </>
  );
}
