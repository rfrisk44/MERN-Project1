const Trips = require('../models/model');
 
// Read/Get all
module.exports.findAllTrips = (req, res) => {
    Trips.find()
        .then((allDaTrips) => {
            res.json(allDaTrips)
        })
        .catch((err) => {
            res.json(err)
        });
}
 
// Read/Get one
module.exports.findOneSingleTrips = (req, res) => {
    Trips.findById(req.params.id)
        .then(oneSingleTrips => {
            res.json(oneSingleTrips)
        })
        .catch((err) => {
            res.json(err)
        });}
 
// Create
module.exports.createNewTrips = (req, res) => {
    Trips.create(req.body)
        .then(newlyCreatedTrips => {
            res.json(newlyCreatedTrips)
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
// Update
module.exports.updateExistingTrips = (req, res) => {
    Trips.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedTrips => {
            res.json(updatedTrips)
        })
        .catch((err) => {
            res.status(400).json(err)
        });}
 
// Delete
module.exports.deleteAnExistingTrips = (req, res) => {
    Trips.findByIdAndDelete(req.params.id )
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json(err)
        });}
