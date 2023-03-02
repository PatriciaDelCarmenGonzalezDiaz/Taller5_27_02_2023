import catetos from './catetos.js';
export default {
    btn: document.querySelector("#boton"),
    click() {
        this.btn.addEventListener("click", (event) =>{
            this.calcular(...catetos.data());
        })
    },
    calcular(c1,c2) {
        
        alert(`La Hipotenusa del triangulo con catetos ${c1} y ${c2} es ${Math.hypot(c1,c2)}`);
    }
}