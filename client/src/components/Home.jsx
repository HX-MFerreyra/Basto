import { useState } from "react";
import NewAnimal from "./NewAnimal";
import Tablita from "./Tablita"

export default function Home() {
    const [flag, setFlag] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);
    return (
        <>
            <h1>Animal Management</h1>
            <NewAnimal setFlag={setFlag} modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
            <hr />
            <Tablita flag={flag} setIsOpen={setIsOpen}/>
        </>
    )
}

