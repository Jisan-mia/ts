export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        return `${this.name} is playing from ${this.country}`;
    }
}
