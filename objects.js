// var person = {
//     'Name': 'Shivam',
//     'Age': 23,
//     'Degree': 'BA'
// }
// console.log(person);

function BellBoy(name, yearsOfexperiece, cleaningRepertoire) {
    this.name = name;
    this.yearsOfexperiece = yearsOfexperiece;
    this.cleaningRepertoire = cleaningRepertoire;
    // this.cleaning = function () {
    //     alert('Cleaning in progress')
    // }
}
var bellBoy1 = BellBoy('Sundram', 3, ['Bathroom', 'Lobby']);
console.log(bellBoy1);