'use strict'

const Animals = require('../models/animals');

const controller = {
    //metodo para registrar
    register: (req, res) => {
        //obtenemos los datos
        let params = req.body;
        let animal = new Animals();

        animal.typeOfAnimal = params.typeOfAnimal;
        animal.weight = params.weight;
        animal.nameOfPotrero = params.nameOfPotrero;
        animal.deviceType = params.deviceType;
        animal.deviceNumber = params.deviceNumber

        animal.save((err, animalStored) => {
            if(err || !animalStored){
                return res.status(404).send({
                    status: 'Error',
                    message: 'The animal was not registered'
                })
            }
            return res.status(200).send({
                status: 'success',
                animalStored
            })
        })
    },
    //Método Get
    getAnimals: (req, res)=> {
        const query = Animals.find({});

        query.sort('-weight').exec((err, animals)=>{
            if(err){
                return res.status(404).send({
                    status: 'Error',
                    message: 'No animal record found'
                })
            }
            if(!animals){
                return res.status(404).send({
                    status: 'Error',
                    message: 'No animal record found'
                })
            }
            return res.status(200).send({
                status: 'success',
                animals
            })
        })
        
    },
    //Delete register
    delete: (req, res)=> {
        let animalId = req.params.id;
        Animals.findOneAndDelete({_id:animalId}, (err, animalRemoved) => {
            if(err){
                return res.status(404).send({
                    status: 'Error',
                    message: 'An error occurred while deleting'
                })
            }
            if(!animalRemoved){
                return res.status(404).send({
                    status: 'Error',
                    message: 'The animal you want to delete has not been found'
                })
            }
            return res.status(200).send({
                status: 'success',
                animalRemoved
            })
        })
    },
    update: (req, res)=> {
        let animalId = req.params.id;
        let params = req.body;
        const typeOfAnimal = params.typeOfAnimal;
        const nameOfPotrero = params.nameOfPotrero;
        const weight = params.weight;
        const deviceType = params.deviceType;
        const deviceNumber = params.deviceNumber;

        Animals.findOneAndUpdate({_id: animalId}, {typeOfAnimal : typeOfAnimal, weight: weight, deviceType:deviceType, deviceNumber: deviceNumber, nameOfPotrero: nameOfPotrero}, { new:true}, (err, animalUpdate)=> {
            if(err){
                return res.status(404).send({
                    status: 'Error',
                    message: 'Could not update information'
                })
            }
            if(!animalUpdate){
                return res.status(404).send({
                    status: 'Error',
                    message: 'Could not update information'
                })
            }
            return res.status(200).send({
                status: 'success',
                animalUpdate
            })
        })
    }
}

module.exports = controller;