const {Basic, Teknik} = require('../models');

class ControllerBasic{

    static async GetBasics(req, res, next) {
        try {
            const basic = await Basic.findAll();
            if (!basic || basic.length === 0) {
                return next({ name: 'NotFound' });
            }
            res.status(200).json(basic);
        } catch (error) {
            next(error);
        }
    }

    static async CreateBasic(req, res, next) {
        try {
            const newBasic = await Basic.create(req.body);
            if (!newBasic) {
                return next({ name: 'BadRequest' });
            }
            res.status(201).json(newBasic);
        } catch (error) {
            next(error);
        }
    }

    static async UpdateBasic(req, res, next) {
        try {
            const { id } = req.params;
            const [updated] = await Basic.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedBasic = await Basic.findOne({ where: { id: id } });
                res.status(200).json(updatedBasic);
            } else {
                next({ name: 'NotFound' });
            }
        } catch (error) {
            next(error);
        }
    }

    static async DeleteBasic(req, res, next) {
        try {
            const { id } = req.params;
            const deleted = await Basic.destroy({
                where: { id: id }
            });
            if (deleted) {
                res.status(200).json({ message: 'Basic berhasil dihapus' });
            } else {
                next({ name: 'NotFound' });
            }
        } catch (error) {
            next(error);
        }
    }
    static async GetDetailteknik(req, res, next) {
        try {
            const detailteknik = await Teknik.findAll();
            if (!detailteknik || detailteknik.length === 0) {
                return next({ name: 'NotFound' });
            }
            res.status(200).json(detailteknik);
        } catch (error) {
            next(error);
        }
    }

    static async CreateDetailteknik(req, res, next) {
        try {
            const newDetailteknik = await Teknik.create(req.body);
            if (!newDetailteknik) {
                return next({ name: 'BadRequest' });
            }
            res.status(201).json(newDetailteknik);
        } catch (error) {
            next(error);
        }
    }

    static async UpdateDetailteknik(req, res, next) {
        try {
            const { id } = req.params;
            const [updated] = await Teknik.update(req.body, {
                where: { id: id }
            });
            if (updated) {
                const updatedDetailteknik = await Teknik.findOne({ where: { id: id } });
                res.status(200).json(updatedDetailteknik);
            } else {
                next({ name: 'NotFound' });
            }
        } catch (error) {
            next(error);
        }
    }

    static async DeleteDetailteknik(req, res, next) {
        try {
            const { id } = req.params;
            const deleted = await Teknik.destroy({
                where: { id: id }
            });
            if (deleted) {
                res.status(200).json({ message: 'Detail teknik berhasil dihapus' });
            } else {
                next({ name: 'NotFound' });
            }
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ControllerBasic