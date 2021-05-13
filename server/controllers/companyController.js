const uuid = require('uuid')
const path = require('path');
const {Company, CompanyInfo} = require('../models/models')
const ApiError = require('../error/ApiError');

class CompanyController {
    async create(req, res, next) {
        try {
            let {name, amount, countryId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const company = await Company.create({name, amount, countryId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    CompanyInfo.create({
                        title: i.title,
                        description: i.description,
                        companyId: company.id
                    })
                )
            }

            return res.json(company)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getAll(req, res) {
        let {countryId, typeId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let companies;
        if (!countryId && !typeId) {
            //companies = await Company.findAndCountAll({limit, offset})
             companies = await Company.findAll()
        }
        if (countryId && !typeId) {
            //companies = await Company.findAndCountAll({where:{brandId}, limit, offset})
             companies = await Company.findAll({where:{countryId}})
        }
        if (!countryId && typeId) {
            //companies = await Company.findAndCountAll({where:{typeId}, limit, offset})
            companies = await Company.findAll({where:{typeId}})
        }
        if (countryId && typeId) {
            //companies = await Company.findAndCountAll({where:{typeId, brandId}, limit, offset})
             companies = await Company.findAll({where:{countryId, typeId}})
        }
        return res.json(companies)
    }

    async getOne(req, res) {
        const {id} = req.params
        const company = await Company.findOne(
            {
                where: {id},
                include: [{model: CompanyInfo, as: 'info'}]
            },
        )
        return res.json(company)
    }
}

module.exports = new CompanyController()
