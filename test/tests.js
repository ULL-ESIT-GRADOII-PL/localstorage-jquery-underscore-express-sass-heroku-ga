var expect = chai.expect;

describe("CSV", function () {
    describe("funcion calculate", function() {
    it("deberia aceptar una cadena", function() {
      var cadena = '"CSV"';
      var r = calculate(cadena);
      expect(r[0].value[0]).to.equal('CSV');
    });
  });
});
