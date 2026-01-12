// main.tsc
const saludos = (persona: string) => {
return "Hola, " + persona;
}
const usuario: string = "Marcos";
let sentencia = `Hola, mi nombre es ${usuario}`;
console.log(usuario);
document.body.innerHTML = saludos(usuario);
export{};