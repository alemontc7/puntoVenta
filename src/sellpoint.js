module.exports = class SellPoint{

    constructor(_estado, canti, preci){
        this.estado = _estado;
        this.cantidad = canti;
        this.precio = preci;
    }

    getPorcentaje(){
        switch(this.estado){
            case "UT":
                return 0.0665;
            case "NV":
                return 0.08;
            case "TX":
                return 0.0625;
            case "AL":
                return 0.04;
            case "CA":
                return 0.0825
        }
    }
    getPrecioNeto()
    {
        return this.cantidad*this.precio;
    }

    getTotalImpuesto(){
        return this.getPrecioNeto() * this.getPorcentaje();
    }

    getVerificarImpuesto(esperado){
        const eps = 1e-9;
        if( Math.abs(this.getTotalImpuesto() - esperado)  < eps) return true;
        return false;    
    }

};