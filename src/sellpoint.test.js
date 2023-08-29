import SellPoint from "./sellpoint";
describe("SellPoint", () => {
    it("deberia devolver la entrada de usuario", () => {
        const sp = new SellPoint('TX', 1,1)
        expect(sp.getPrecioNeto()).toEqual(1);
    });
  });
describe("SellPoint", () => {
    it("deberia devolver la entrada de usuario", () => {
        const sp = new SellPoint('TX', 2,1)
        expect(sp.getPrecioNeto()).toEqual(2);

    });
  });

describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estad CA deberia retornar 0.825", () => {
        const sp = new SellPoint('CA', 5,2)
        expect(sp.getVerificarImpuesto(0.825)).toEqual(true);

    });
  });


  describe("SellPoint", () => {
    it("Sea Cantidad 11, Precio 7, Estad CA deberia retornar 6.3525", () => {
        const sp = new SellPoint('CA', 11,7)
        expect(sp.getVerificarImpuesto(6.3525)).toEqual(true);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estado TX deberia retornar 0.625", () => {
        const sp = new SellPoint('TX', 5,2)
        expect(sp.getVerificarImpuesto(0.625)).toEqual(true);
    });

  
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estado TX deberia retornar 10.625", () => {
        const sp = new SellPoint('TX', 5,2)
        expect(sp.getTotalVerificarConImpuesto(10.625)).toEqual(true);
    });

  
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estado AL, cantidad total a pagar deberia retornar 0.4", () => {
        const sp = new SellPoint('AL', 5,2)
        expect(sp.getVerificarImpuesto(0.4)).toEqual(true);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estado AL, cantidad total a pagar deberia retornar 10.4", () => {
        const sp = new SellPoint('AL', 5,2)
        expect(sp.getTotalVerificarConImpuesto(10.4)).toEqual(true);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estado NV, cantidad total a pagar deberia retornar 0.8", () => {
        const sp = new SellPoint('NV', 5,2)
        expect(sp.getVerificarImpuesto(0.8)).toEqual(true);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estado NV, cantidad total a pagar deberia retornar 10.8", () => {
        const sp = new SellPoint('NV', 5,2)
        expect(sp.getTotalVerificarConImpuesto(10.8)).toEqual(true);
    });
  });


  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estado UT, cantidad total a pagar deberia retornar 0.665", () => {
        const sp = new SellPoint('UT', 5,2)
        expect(sp.getVerificarImpuesto(0.665)).toEqual(true);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, Estado UT, cantidad total a pagar deberia retornar 10.665", () => {
        const sp = new SellPoint('UT', 5,2)
        expect(sp.getTotalVerificarConImpuesto(10.665)).toEqual(true);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2 descuento deberia ser 0", () => {
        const sp = new SellPoint('UT', 5,2)
        expect(sp.getDescuento(sp.getPrecioNeto())).toEqual(0);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 5, Precio 2, descuento en base al precio neto deberia ser 0 $", () => {
        const sp = new SellPoint('UT', 5,2)  
        expect(sp.getPrecioNetoConDescuento()).toEqual(0);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 50, Precio 50, descuento deberia ser 0.03 $", () => {
        const sp = new SellPoint('UT', 50,50)
        expect(sp.getDescuento(sp.getPrecioNeto())).toEqual(0.03);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 50, Precio 50, descuento en base al precio neto deberia ser 75 $", () => {
        const sp = new SellPoint('UT', 50,50)  
        expect(sp.getPrecioNetoConDescuento()).toEqual(75);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 60, Precio 100, descuento deberia ser 0.05 $", () => {
        const sp = new SellPoint('UT', 60,100)
        expect(sp.getDescuento(sp.getPrecioNeto())).toEqual(0.05);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 60, Precio 100, descuento en base al precio neto deberia ser 300$", () => {
        const sp = new SellPoint('UT', 60,100)  
        expect(sp.getPrecioNetoConDescuento()).toEqual(300);
    });
  });


  describe("SellPoint", () => {
    it("Sea Cantidad 80, Precio 100, descuento deberia ser 0.07 ", () => {
        const sp = new SellPoint('UT', 80,100)
        expect(sp.getDescuento(sp.getPrecioNeto())).toEqual(0.07);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 80, Precio 100, descuento en base al precio neto deberia ser 560$", () => {
        const sp = new SellPoint('UT', 80,100)  
        expect(sp.getPrecioNetoConDescuento()).toEqual(560);
    });
  });


  describe("SellPoint", () => {
    it("Sea Cantidad 150, Precio 100, descuento deberia ser 0.1 ", () => {
        const sp = new SellPoint('UT', 150,100)
        expect(sp.getDescuento(sp.getPrecioNeto())).toEqual(0.1);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 150, Precio 100, descuento en base al precio neto deberia ser 1500$", () => {
        const sp = new SellPoint('UT', 150,100)  
        expect(sp.getPrecioNetoConDescuento()).toEqual(1500);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 200, Precio 200, descuento deberia ser 0.15 ", () => {
        const sp = new SellPoint('UT', 200,200)
        expect(sp.getDescuento(sp.getPrecioNeto())).toEqual(0.15);
    });
  });

  describe("SellPoint", () => {
    it("Sea Cantidad 200, Precio 200, descuento en base al precio neto deberia ser 6000$", () => {
        const sp = new SellPoint('UT', 200,200)  
        expect(sp.getPrecioNetoConDescuento()).toEqual(6000);
    });
  });
  

