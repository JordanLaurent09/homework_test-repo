class Singer {
    id;
    name;
    surname;
    genre;
    country;

    constructor(id, name, surname, genre, country) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.genre = genre;
        this.country = country;
    }

    getName() {
        return this.name;
    }
}

module.exports = Singer;