// function chicken() {
//     return egg;
// }
// function egg() {
//     return chicken;
// }
// console.log(chicken() + " came first.");
// // → ??

// const  egg = () =>  chicken();
// console.log(chicken() + " came first.");
// function chicken() {
//     return egg;
// }


// const a= "ma chaine de characteres double cotes";
// const b = 'ma chaine de characteres simple cotes';
// const concaténation = a + ' ' + b;
// const mavariable = 10;
// const avecUneVariable = 'avec une variable';
// const c = `ma chaine de charactères
// sur plusieurs lignes ${avecUneVariable} ou une expression ${ 8 + mavariable}
// `;
//
// console.log(c)

// const monType = Symbol('ok');
// console.log(monType === 'ok'); // false
// console.log(monType ===  Symbol('ok')); // false
//
// const maPropritéVariable = "haha";
// const monObjet = {
//     monType : 'non',
//     [monType] : 'oui',
//     maPropritéVariable : 'une valeur',
//     [maPropritéVariable] : 'une autre valeur'
// }
//
// console.log(monObjet.monType); // non
// console.log(monObjet['monType']); // non
// console.log(monObjet[monType]);// oui
// console.log(monObjet[Symbol('ok')]);// undefined
// console.log(monObjet.maPropritéVariable);// une valeur
// console.log(monObjet['haha']);// une autre valeur
// console.log(monObjet);

// const maPropritéVariable = 'haha';
// const monObjet = {
//     [maPropritéVariable] : 'une autre valeur',
//     'haha' : "c'est moi qui ai raison !"
// }
// console.log(monObjet);

const str = "orange";
console.log("orange".slice(1,4));//ran
