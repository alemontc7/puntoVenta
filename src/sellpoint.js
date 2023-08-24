module.exports = class SellPoint{

    constructor(_estado, canti, preci){
        this.estado = _estado;
        this.cantidad = canti;
        this.precio = preci;
    }

    getPorcentaje(){
        switch(this.estado){
            case "CA":
                return 0.0665;
            case "TX":
                return 0.08;
            case "AL":
                return 0.0625;
            case "NV":
                return 0.04;
            case "UT":
                return 0.0825
        }
    }
    getPrecioNeto()
    {
        return this.cantidad*this.precio;
    }


};