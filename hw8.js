//HW1
let reg = /^(?!.*[aA])(.{6,})$/;
var str1 = "bcdefg";
var str2 = "xyz123";
var str3 = "BCDEFG";
var str4 = "abcde";
var str5 = "hello";
var str6 = "APPLE";
console.log(reg.test(str1)); 
console.log(reg.test(str2)); 
console.log(reg.test(str3)); 
console.log(reg.test(str4)); 
console.log(reg.test(str5)); 
console.log(reg.test(str6)); 

//HW2
let regex = /^([a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com))$/;
let arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru"
    },
];
let trustedEmails = [];
for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    if (regex.test(obj.email)) {
        trustedEmails.push(obj);
    }
}
console.log(trustedEmails);