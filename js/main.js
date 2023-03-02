export default {
    obr: document.querySelector("#obrero"),
    componente: null,
    value() {
        return this.obr.innerHTML;
    },

    setValue() {
        var nombres = [];
        var horas = [];
        var salario = [];
        for (let i=1; i<51; i++) {
            nombres.push(prompt("Nombre del obrero " + i));
            horas.push(Number(prompt("Numero de Horas del Obrero " + nombres[i-1])));
            salario.push(Number(horas[i-1] * 30000));
        }
        for (let i=0; i<50; i++) {
            this.obr.insertAdjacentText("beforeend", `${nombres[i]} trabajó ${horas[i]} y su salario es $${salario[i]} `);
        }
    }

}