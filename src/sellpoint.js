module.exports = class SellPoint{

    constructor(_estado, canti, preci){
        this.estado = _estado;
        this.cantidad = canti;
        this.precio = preci;
        this.eps = 1e-2;
        
    }

    getPorcentaje(){
        switch(this.estado){
            
            case "UT":
                return 0.0665;
            case "TX":
                return 0.0625;
            case "CA":
                return 0.0825;
            case "AL":
                return 0.04;
            case "NV":
                return 0.08;
            default:
                return 0;
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
    getDescuento()
    {
        const precio = this.getPrecioNeto();
        if(precio >= 0 && precio <= 1000) return 0.03;
        if(precio > 1000 && precio <= 3000) return 0.05;
        if(precio > 3000 && precio <= 7000) return 0.07;
        if(precio > 7000 && precio <= 10000) return 0.1;
        else return 0;
    }
    getPrecioNetoConDescuento()
    {
        const descuentoDelNeto = (this.getDescuento(this.getPrecioNeto())*this.getPrecioNeto());
        return parseFloat(descuentoDelNeto.toFixed(2));
    }
    getVerificarDescuento(esperado){
        if( Math.abs(this.getPrecioNetoConDescuento - esperado)  < 0.001) return true;
        return false;    
    }
};