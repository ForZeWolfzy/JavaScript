var auto = {
    kleur: "grijs",
    merk: "tesla",
    snelheid: 0,

    gasgeven: function () {
        this.snelheid += 5;
        console.log(this.snelheid)
    },

    toettoet: function () {
        console.log("toet")
    }
};
console.log(auto.kleur);
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.gasgeven();
auto.toettoet();
