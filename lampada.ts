
class Lampada {
    private estado: boolean
    private potencia: number

    constructor(potencia: number) {
        this.potencia = potencia
        this.estado = false
    }

    public ligar() {
        this.estado = true
    }

    public desligar() {
        this.estado = false
    }

    public verificarEstado(): boolean {
        return this.estado
    }

    public medirPotencia(): number {
        return this.potencia
    }
}

const lampada = new Lampada(40)

console.log(lampada.verificarEstado());
lampada.ligar()
console.log(lampada.verificarEstado());
lampada.desligar()
console.log(lampada.medirPotencia());