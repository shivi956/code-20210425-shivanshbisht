const express = require('express');
const router = express.Router();
const Post = require('../models/Schema');

//-------------------------------------Getting all data--------------------------------------------------//

router.get('/allbmidata', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }

});

//------------------------------Getting all the categories----------------------------------------------//

router.get('/normalweight', async (req, res) => {
    try {
        const posts = await Post.find({ BMI_category: 'Normal weight' });
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }

});
router.get('/underweight', async (req, res) => {
    try {
        const posts = await Post.find({ BMI_category: 'Underweight' });
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }

});
router.get('/overweight', async (req, res) => {
    try {
        const posts = await Post.find({ BMI_category: 'Overweight' });
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }

});
router.get('/moderatelyobese', async (req, res) => {
    try {
        const posts = await Post.find({ BMI_category: 'Moderately obese' });
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }

});
router.get('/severlyobese', async (req, res) => {
    try {
        const posts = await Post.find({ BMI_category: 'Severely obese' })
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }

});
router.get('/veryseverlyobese', async (req, res) => {
    try {
        const posts = await Post.find({ BMI_category: 'Very severely obese' })
        res.json(posts);

    } catch (err) {
        res.json({ message: err });
    }

});


//------------------------------Counting all BMI category-----------------------------------------------//

router.get('/UWcount', async (req, res) => {

    Post.count({ BMI_category: 'Underweight' }, (err, count) => {
        if (count) res.json(count);
        else res.json(err);
    });

});
router.get('/NWcount', async (req, res) => {


    Post.count({ BMI_category: 'Normal weight' }, (err, count) => {
        if (count) res.json(count);
        else res.json(err);
    });


});
router.get('/OWcount', async (req, res) => {

    Post.count({ BMI_category: 'Overweight' }, (err, count) => {
        if (count) res.json(count);
        else res.json(err);
    });
});
router.get('/MOcount', async (req, res) => {

    Post.count({ BMI_category: 'Moderate obese' }, (err, count) => {
        if (count) res.json(count);
        else res.json(err);
    });

});
router.get('/SOcount', async (req, res) => {

    Post.count({ BMI_category: 'Severly obese' }, (err, count) => {
        if (count) res.json(count);
        else res.json(err);
    });

});
router.get('/VSOcount', async (req, res) => {

    Post.count({ BMI_category: 'Very severly obese' }, (err, count) => {
        if (count) res.json(count);
        else res.json(err);
    });

});

//------------------------------------Post Request-------------------------------------------------//

router.post('/', async (req, res) => {

    var req1 = req.body;
    var savedPost = []
    for (var i = 0; i < req1.length; i++) {
        var parsed = req1[i];

        var a = parseInt(parsed.HeightCm);
        var b = parseInt(parsed.WeightKg);
        var c = parseFloat(((b * 100 * 100) / (a * a)).toFixed(1));
        var category, risks, range;

        if (c <= 18.4) {
            category = "Underweight";
            risks = "Malnutrition risk";
        }
        else if (c >= 18.5 && c <= 24.9) {
            category = "Normal weight";
            risks = "Low risk";
        }
        else if (c >= 25 && c <= 29.9) {
            category = "Overweight";
            risks = "Enhanced risk";
        }
        else if (c >= 30 && c <= 34.9) {
            category = "Moderately obese";
            risks = "Medium risk";
        }
        else if (c >= 35 && c <= 39.9) {
            category = "Severely obese";
            risks = "High risk";
        }
        else {
            category = "Very severely obese";
            risks = "Very high risk";
        }
        const post = new Post({
            Gender: parsed.Gender,
            BMI_category: category,
            BMI: c.toString(10),
            HealthRisk: risks
        });

        try {
            savedPost[i] = await post.save();

        } catch (err) {
            res.json({ message: err });
        }
    }
    res.json(savedPost);

});

//------------------------------Deleting all data-------------------------------------------------//

router.delete('/all', async (req, res) => {
    try {
        const post = await Post.deleteMany({});
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }

});

module.exports = router;