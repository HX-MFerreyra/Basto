import Modal from 'react-modal';

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

const styleBtn = {
    color: "white",
    backgroundColor: "black",
    borderRadius: "5px",
    padding: "5px"
};


export default function AnimalModal({closeModal, modalIsOpen, handleSubmit, data, title, changeState}){
    let subtitle;
    function afterOpenModal() {
        subtitle.style.color = '#000000';
    }

    return (
        <div>
            <Modal
                isOpen= {modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose= {closeModal}
                style={customStyle}
                contentLabel={title}>
                <h2 ref={(_subtitle)=> (subtitle = _subtitle)}>{title}</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Type of Animal*
                            <input 
                                type="text" 
                                name="typeOfAnimal"
                                value={data.typeOfdata}
                                onChange= {changeState} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Name of Potrero*
                            <input 
                                type="text" 
                                name="nameOfPotrero"
                                value={data.nameOfPotrero}
                                onChange= {changeState}  />
                        </label>
                    </div>
                    <div>
                        <label>
                            Weight*
                            <input 
                                type="text" 
                                name="weight"
                                value={data.weight}
                                onChange= {changeState}  />
                        </label>
                    </div>
                    <div>
                        <label>
                            Device Type:
                            <input 
                                type="text" 
                                name="deviceType"
                                value={data.deviceType}
                                onChange= {changeState}  />
                        </label>
                    </div>
                    <div>
                        <label>
                            Device Number:
                            <input 
                                type="text" 
                                name="deviceNumber"
                                value={data.deviceNumber}
                                onChange= {changeState} />
                        </label>
                    </div>
                    <input type="submit" value={title === "New Animal" ? "Register" : "Edit"} style={styleBtn} />
                    <input type="button" value="Close" onClick={closeModal} style={styleBtn} />
                </form>
            </Modal>
        </div>
    )
}