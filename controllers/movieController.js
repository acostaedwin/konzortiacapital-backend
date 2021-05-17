
const Movie = require("./../models/Movie");
const Clasification = require("./../models/Clasification");
const mongoose = require('mongoose');

exports.create = (req, res) => {

    const { name, director, clasification } = req.body;

    if (!director || !name || !mongoose.isValidObjectId(clasification))
        return res.json({ status: false, message: "PARAMS_IS_REQUIRED" });

    return Clasification.findById(clasification).then(clasiData => {

        if (!clasiData)
            return res.json({ status: false, message: "CLASIFICATION_NOT_EXISTS" });

        const movie = new Movie({ name, director, clasification });

        return movie.save(movie)
            .then(data => {
                return res.json({ status: true, message: "CREATED", data });
            }).catch(err => {
                console.error(err);
                return res.json({ status: false, message: err });
            });
    }).catch(err => {
        console.error(err);
        return res.json({ status: false, message: err });
    });
}

exports.read = (req, res) => {
    return Movie.find().then(data => res.json({ status: true, message: "OK", data }));

}

exports.update = (req, res) => {
    const { id } = req.params;
    const { name, director, clasification } = req.body;


    if (!director || !name || !clasification || !id || !mongoose.isValidObjectId(clasification) || !mongoose.isValidObjectId(id))
        return res.json({ status: false, message: "PARAMS_IS_REQUIRED" });


    return Movie.findById(id).then(data => {
        if (data) {

            data.name = name;
            data.director = director;
            data.clasification = clasification;

            return data.save(data)
                .then(data => {
                    return res.json({ status: true, message: "UPDATE", data });
                }).catch(err => {
                    console.error(err);
                    return res.json({ status: false, message: err });
                });
        } else {
            return res.json({ status: false, message: "NOT_EXISTS" });
        }

    });
}

exports.delete = (req, res) => {
    const { id } = req.params;
    if (!id)
        return res.json({ status: false, message: "ID_IS_REQUIRED" });
    return Movie.findByIdAndDelete(id).then(data => res.json({ status: true, message: "DELETED", data }));
}

