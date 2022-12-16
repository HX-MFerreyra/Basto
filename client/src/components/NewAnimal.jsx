import axios from 'axios';
import { useRef } from 'react';
import { useState } from 'react';
import Global from '../Global';
import Modal from 'react-modal';

export default function NewAnimal() {

    //Modal
    const styleBtn = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "5px",
        padding: "5px"
    };

    const customStyle = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#000000';
    }

    function closeModal() {
        setIsOpen(false);
    }

    const url = Global.url

    const [animal, setAnimal] = useState({
        typeOfAnimal: [],
        nameOfPotrero: '',
        weight:'',
        deviceType: [],
        deviceNumber: '',
    });

    const changeState = () => {
        setAnimal({
            typeOfAnimal: typeOfAnimalRef.current.value,
            nameOfPotrero: nameOfPotreroRef.current.value,
            weight: weightRef.current.value,
            deviceType: deviceTypeRef.current.value,
            deviceNumber: deviceNumberRef.current.value,
        })
        console.log(animal);
    }

    //Reference
    const typeOfAnimalRef = useRef(null);
    const nameOfPotreroRef = useRef(null);
    const weightRef = useRef(null);
    const deviceTypeRef = useRef(null);
    const deviceNumberRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        changeState();
        //POST
        // url, más la función, màs nuestro estado
        //recordemos que funcionan con promesas
        axios.post(url + 'register', animal).then(res => {
            console.log(res.data)
            alert('Animal registered successfully')
            setAnimal({
                typeOfAnimal: [],
                nameOfPotrero: '',
                weight:'',
                deviceType: [],
                deviceNumber: '',
            })
        })
        
    };

    return (
        <>
        {/* <AnimalModal flag="post" info={animal} /> */}
            <button style={styleBtn} onClick={openModal}> New Animal</button>
            <Modal
                isOpen= {modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose= {closeModal}
                style={customStyle}
                contentLabel="New Animal"
            >
                <h2 ref={(_subtitle)=> (subtitle = _subtitle)}>New Animal</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Type of Animal*
                            <input 
                                type="text" 
                                name="typeOfAnimal"
                                value={animal.typeOfAnimal}
                                ref= {typeOfAnimalRef}
                                onChange= {changeState} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Name of Potrero*
                            <input 
                                type="text" 
                                name="nameOfPotrero"
                                value={animal.nameOfPotrero}
                                ref= {nameOfPotreroRef}
                                onChange= {changeState}  />
                        </label>
                    </div>
                    <div>
                        <label>
                            Weight*
                            <input 
                                type="text" 
                                name="weight"
                                value={animal.weight}
                                ref= {weightRef}
                                onChange= {changeState}  />
                        </label>
                    </div>
                    <div>
                        <label>
                            Device Type:
                            <input 
                                type="text" 
                                name="deviceType"
                                value={animal.deviceType}
                                ref= {deviceTypeRef}
                                onChange= {changeState}  />
                        </label>
                    </div>
                    <div>
                        <label>
                            Device Number:
                            <input 
                                type="text" 
                                name="deviceNumber"
                                value={animal.deviceNumber}
                                ref= {deviceNumberRef}
                                onChange= {changeState} />
                        </label>
                    </div>
                    <input type="submit" value="Register" style={styleBtn} />
                    <input type="button" value="Closed" onClick={closeModal} style={styleBtn} />
                </form>
            </Modal>
        </>
    )
}