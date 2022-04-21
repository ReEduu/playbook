const Spiderman =require("./../app/spiderman")
describe("Unit test for Spiderman Class", () => {
    test('1) Create Spiderman object', () => {
        //Codigo a usar
      const tobeyMaguire = new Spiderman("Spiderman Sony",43,"Tobey Maguire",5,"Sony")

      //Validacion
      expect(tobeyMaguire.name).toBe("Spiderman Sony");
      expect(tobeyMaguire.age).toBe(43);
      expect(tobeyMaguire.actor).toBe("Tobey Maguire");
      expect(tobeyMaguire.movies).toBe(5);
      expect(tobeyMaguire.studio).toBe("Sony");
      expect(tobeyMaguire.getActorAndStudio()).toBe("My name is Tobey Maguire and my studio is Sony");
    });
  })