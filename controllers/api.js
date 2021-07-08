const Workout = require("../models/Workout");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    Workout.find({})
    .then(workoutres => {
        res.json(workoutres);
        console.log('workoutres', workoutres)
    })
    .catch((err) => {
        res.json(err);
    });
});

router.post("/api/workouts", ( req , res) => {
    Workout.create({})
    .then((workoutres) => {
        res.json(workoutres);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    let id = req.params.id;
    console.log('req.body', req.body)
    Workout.findByIdAndUpdate(
        id,
        { $push: { exercises: req.body } },
        { new: true, runValidators: true }
    )
    .then((workoutres) => {
        res.json(workoutres);
        console.log('workoutres: ', workoutres)
    })
    .catch((err) => {
        res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .limit(7)
    .then((workoutres) => {
        res.json(workoutres);
    })
    .catch((err) => {
        res.json(err);
    });
});

module.exports = router;
