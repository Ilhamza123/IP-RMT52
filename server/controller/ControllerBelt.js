const {Belt} = require('../models');

class ControllerBelt {
    static async GetBelt(req, res, next) {
        try {
            const belt = await Belt.findAll();
            if (!belt || belt.length === 0) {
                return next({ name: 'NotFound' });
            }
            res.status(200).json(belt);
        } catch (error) {
            next(error);
        }
    }

    static async CreateBelt(req, res, next) {
        try {
            const newBelt = await Belt.create(req.body);
            if (!newBelt) {
                return next({ name: 'BadRequest' });
            }
            res.status(201).json(newBelt);
        } catch (error) {
            next(error);
        }
    }

    static async UpdateBelt(req, res, next) {
        try {
            const { id } = req.params;
            const [updated] = await Belt.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedBelt = await Belt.findOne({ where: { id: id } });
                res.status(200).json(updatedBelt);
            } else {
                next({ name: 'NotFound' });
            }
        } catch (error) {
            next(error);
        }
    }

    static async DeleteBelt(req, res, next) {
        try {
            const { id } = req.params;
            const deleted = await Belt.destroy({
                where: { id: id }
            });
            if (deleted) {
                res.status(200).json({ message: 'Sabuk berhasil dihapus' });
            } else {
                next({ name: 'NotFound' });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerBelt;
