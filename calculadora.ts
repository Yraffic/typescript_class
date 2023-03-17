class Calculadora {
    constructor(
        private primeiroNumero: number,
        private segundoNumero:number
    ){}

    public somar(){
        return this.primeiroNumero + this.segundoNumero
    }

    public subtrair(){
        return this.primeiroNumero - this.segundoNumero
    }

    public mutiplicar(){
        return this.primeiroNumero * this.segundoNumero
    }

    public dividir(){
        return this.primeiroNumero / this.segundoNumero
    }
}

const conta = new Calculadora(2,3)


console.log('soma', conta.somar())
console.log('subtrair', conta.subtrair())
console.log('multiplicar', conta.mutiplicar())
console.log('dividir', conta.dividir())