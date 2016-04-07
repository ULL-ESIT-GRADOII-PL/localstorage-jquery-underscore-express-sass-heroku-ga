var expect = chai.expect;

describe("CSV", function () {
    describe("Funcion Calculate", function() {
        
    it("Debería aceptar una cadena", function() {
      var cadena = '"CSV"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('CSV');
    });
     it('Debería reconocer un número con coma', function() {
      var cadena = '"3,4"';
      var r = calculate(cadena);
     expect(r[0].value[0]).to.equal('3,4');
    });
    it("Cadena con una coma a la derecha", function() {
      var cadena = '"CSV,"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('CSV,');
    });
    it("Cadena una coma a la izquierda", function() {
      var cadena = '",CSV"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal(',CSV');
    });
    it("Cadena con espacios", function() {
      var cadena = '" CSV"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal(' CSV');
    });
    it("Cadenas separadas con comas", function() {
      var cadena = '"CSV","CSS"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('CSV');
      expect(r[0].value[1]).to.equal('CSS');
    });
    it("Cadenas separadas con comas y espacios", function() {
      var cadena = ' ,"CSV"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal(' ');
      expect(r[0].value[1]).to.equal('CSV');
    });
  });
});
