import formulario from './formulario.js';
export default {
    btn: document.querySelector("#boton"),
    click() {
        this.btn.addEventListener("click", (event) =>{
            this.calcular(...formulario.data());
        })
    },
    calcular(r,h) {
        
        alert(`El Area Lateral del Cilindro de Radio ${r} y Altura ${h} es ${2 * Math.PI * r * h} y su Volumen es ${Math.PI * Math.pow(r,2) * h}`);
    }
}