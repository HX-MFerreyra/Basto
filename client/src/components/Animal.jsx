import { AiFillDelete, AiFillEdit } from 'react-icons/ai';

export default function Animal({ id, animalData, delAnimal, editAnimal}) {
    const {typeOfAnimal, nameOfPotrero, weight, deviceType, deviceNumber, _id} = animalData
    
    const del = () => {
        delAnimal(id);
    }

    const edit = () => {
        editAnimal(id);
    }
    return (
        <>
                <tbody>
                    <tr>
                        <td>{_id}</td>
                        <td>{typeOfAnimal}</td>
                        <td>{nameOfPotrero}</td>
                        <td>{weight}</td>
                        <td>{deviceType}</td>
                        <td>{deviceNumber}</td>
                        <button onClick={edit} ><AiFillEdit/></button>
                        <button onClick={del}><AiFillDelete/></button>
                    </tr>
                </tbody>
        </>
    )
}
