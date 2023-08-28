module.exports = class SellPoint{

    constructor(_estado, canti, preci){
        this.estado = _estado;
        this.cantidad = canti;
        this.precio = preci;
        this.eps = 1e-9;
        
    }

    getPorcentaje(){
        switch(this.estado){

            case "TX":
                return 0.0625;
       
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
        if( Math.abs(this.getTotalImpuesto() - esperado)  < this.eps) return true;
        return false;    
    }
    getTotalConImpuesto()
    {
        return this.getPrecioNeto() + this.getTotalImpuesto();
    }
    getTotalVerificarConImpuesto(esperado)
    {
        if( Math.abs(this.getTotalConImpuesto() - esperado)  < this.eps) return true;
        return false;    
    }

};