const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    Gender: {
        type: String,
        required: true
    },
    BMI_category: {
        type: String,
        index: true,
        required: true
    },
    BMI: {
        type: String,
        required: true
    },
    HealthRisk: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('bmidatas', PostSchema);