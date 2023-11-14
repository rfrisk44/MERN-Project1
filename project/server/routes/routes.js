const TripsController = require('../controllers/controller');
 
module.exports = app => {

    // Read/Get all
    app.get('/api/trips', TripsController.findAllTrips);

    // Read/Get one
    app.get('/api/trips/:id', TripsController.findOneSingleTrips);

    // Update
    app.patch('/api/trips/:id', TripsController.updateExistingTrips);

    // Create
    app.post('/api/trips', TripsController.createNewTrips);

    // Delete
    app.delete('/api/trips/:id', TripsController.deleteAnExistingTrips);
}
