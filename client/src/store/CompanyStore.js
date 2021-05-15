import {makeAutoObservable} from "mobx";

export default class CompanyStore {
    constructor() {
        // this._types = []
        // this._countries = []
        // this._companies = []
        this._types = [
            {id: 1, name: "Дизайн"},
            {id: 2, name: "Образование"},
            {id: 3, name: "Дизайн"},
            {id: 4, name: "Образование"},
            {id: 5, name: "Дизайн"},
            {id: 6, name: "Образование"},
            {id: 7, name: "Дизайн"},
            {id: 8, name: "Образование"}
        ]
        this._countries = [
            {id: 1, name: "Беларусь"},
            {id: 2, name: "Россия"},
            {id: 3, name: "Беларусь"},
            {id: 4, name: "Россия"},
            {id: 5, name: "Беларусь"},
            {id: 6, name: "Россия"},
            {id: 7, name: "Беларусь"},
            {id: 8, name: "Россия"},
        ]
        this._companies = [
            {id: 1, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 2, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 3, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 4, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 5, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 6, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 7, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 8, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 9, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 10, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 12, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 13, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 14, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 15, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 16, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 17, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 18, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 19, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 20, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},
            {id: 21, name: "LearnUP", amount: "250000", typeId:2, countryId:2, rating:5, img: ""},
            {id: 22, name: "DesignUP", amount: "250000", typeId:1, countryId:2, rating:5, img: ""},

        ]
        this._selectedType = {}
        this._selectedCountry = {}
        this._page = 1
        this._totalCount = 0
        this._limit = 3
        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }
    setCountries(countries) {
        this._countries = countries
    }
    setCompanies(companies) {
        this._companies = companies
    }

    setSelectedType(type) {
        this._selectedType = type
    }
    setSelectedCountry(country) {
        this._selectedCountry = country
    }
    setPage(page) {
        this._page = page
    }
    setTotalCount(count) {
        this._totalCount = count
    }

    get types() {
        return this._types
    }
    get countries() {
        return this._countries
    }
    get companies() {
        return this._companies
    }
    get selectedType() {
        return this._selectedType
    }
    get selectedCountry() {
        return this._selectedCountry
    }
    get totalCount() {
        return this._totalCount
    }
    get page() {
        return this._page
    }
    get limit() {
        return this._limit
    }
}
