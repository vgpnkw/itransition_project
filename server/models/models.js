const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketCompany = sequelize.define('basket_company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Company = sequelize.define('company', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    amount: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Country = sequelize.define('country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const CompanyInfo = sequelize.define('company_info', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

const TypeCountry = sequelize.define('type_country', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

User.hasMany(Rating)
Rating.belongsTo(User)

Basket.hasMany(BasketCompany)
BasketCompany.belongsTo(Basket)

Type.hasMany(Company)
Company.belongsTo(Type)

Country.hasMany(Company)
Company.belongsTo(Country)

User.hasMany(Company)
Company.belongsTo(User)

Company.hasMany(Rating)
Rating.belongsTo(Company)

Company.hasMany(BasketCompany)
BasketCompany.belongsTo(Company)

Company.hasMany(CompanyInfo, {as: 'info'});
CompanyInfo.belongsTo(Company)

Type.belongsToMany(Country, {through: TypeCountry })
Country.belongsToMany(Type, {through: TypeCountry })

module.exports = {
    User, 
    Basket,
    BasketCompany,
    Company,
    Country,
    Type,
    Rating,
    TypeCountry,
    CompanyInfo
}
