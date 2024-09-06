const {HomePage} = require('../models');

class ControllerHomepage {
    static async GetHomepage(req, res, next) {
        try {
            const homepage = await HomePage.findAll();
            if (!homepage || homepage.length === 0) {
                return next({ name: 'NotFound' });
            }
            res.status(200).json(homepage);
        } catch (error) {
            next(error);
        }
    }

    static async CreateHomepage(req, res, next) {
        try {
            const newHomepage = await HomePage.create(req.body);
            if (!newHomepage) {
                return next({ name: 'BadRequest' });
            }
            res.status(201).json(newHomepage);
        } catch (error) {
            next(error);
        }
    }

    static async UpdateHomepage(req, res, next) {
        try {
            const { id } = req.params;
            const { title, text } = req.body;
            const [updated] = await HomePage.update({ title, text }, {
                where: { id: id }
            });
            if (updated) {
                const updatedHomepage = await HomePage.findOne({ where: { id: id } });
                res.status(200).json(updatedHomepage);
            } else {
                next({ name: 'NotFound' });
            }
        } catch (error) {
            console.error(error); 
            next(error);
        }
    }

    static async DeleteHomepage(req, res, next) {
        try {
            const { id } = req.params;
            const deleted = await HomePage.destroy({
                where: { id: id }
            });
            if (deleted) {
                res.status(200).json({ message: 'Homepage berhasil dihapus' });
            } else {
                next({ name: 'NotFound' });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerHomepage;