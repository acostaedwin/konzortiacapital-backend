
const Clasification = require("./../models/Clasification");
const mongoose = require('mongoose');

exports.create = (req, res) => {

    const { name } = req.body;

    if (!name)
        return res.json({ status: false, message: "NAME_IS_REQUIRED" });

    const clasification = new Clasification({ name });

    return clasification.save(clasification)
        .then(data => {
            return res.json({ status: true, message: "CREATED", data });
        }).catch(err => {
            console.error(err);
            return res.json({ status: false, message: err });
        });
}

exports.read = (req, res) => {
    return Clasification.find().then(data => res.json({ status: true, message: "OK", data }));
}

exports.update = (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    if (!id || !name || !mongoose.isValidObjectId(id))
        return res.json({ status: false, message: "PARAMS_IS_REQUIRED" });

    return Clasification.findById(id).then(data => {
        if (data) {

            data.name = name;

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
    return Clasification.findByIdAndDelete(id).then(data => res.json({ status: true, message: "DELETED", data }));
}

