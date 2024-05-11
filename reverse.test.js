const stringReverse = require("./stringReverse");

test('The string "Gorilla" should return "alliroG"',() =>{
    expect(stringReverse("Gorilla")).toBe("alliroG");
})