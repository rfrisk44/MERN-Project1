const TripsController = require('../controllers/controller');
const multer = require('multer')
const {v4:uuidv4} = require('uuid')
const path = require("path")

const storage = multer.diskStorage({
    destination:function (req,file,cb){
        cb(null,'./images/')
    },
    filename: function(req,file,cb){
        cb(null,uuidv4()+'-' + Date.now() + path.extname(file.originalname))
    }
})

const fileFilter = (req,file,cb) =>{
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png']
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null,true)
    }
    else {
        cb(null,false)
    }
}

const upload = multer({storage:storage})


module.exports = app => {

    // Read/Get all
    app.get('/api/trips', TripsController.findAllTrips);

    // Read/Get one
    app.get('/api/trips/:id', TripsController.findOneSingleTrips);

    // Update
    app.patch('/api/trips/:id', TripsController.updateExistingTrips);

    // Create
    app.post('/api/trips',upload.single('images'), TripsController.createNewTrips);

    // Delete
    app.delete('/api/trips/:id', TripsController.deleteAnExistingTrips);
}
