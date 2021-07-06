const mongoose = require('mongoose');
const Schema = mongoose.Schema ;

const workoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: true
        },
        type: {
            type: String,
            trim: true,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
},
{
    toJSON: {
        virtuals: true
    }
}
);

workoutSchema.virtual('totalDuration').get(() => {
    return this.exercises.reduce((total, item) => {
        return total + item.duration
    }, 0)
})

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;