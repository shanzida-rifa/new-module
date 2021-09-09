console.log(11111);
console.log(2221);
// setTimeout(() => console.log('aaaa'), 6000);
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
console.log(3333);
console.log(44443);
for (let i = 0; i < 40000; i++) {
    console.log(i);

}