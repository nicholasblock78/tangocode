describe("Assignment 2", function() {
  beforeEach(function() {
    var Rect1 = new Rectangle(20,30,40,11);
    var Rect2 = new Rectangle(50,22,26,36);
    var Rect3 = new Rectangle(10,10,30,20);
    var Rect4 = new Rectangle(45,10,12,4);
  });

  describe("Find all 4 corners of rectangle", function() {
    it("Rectangle 1 has these 4 corners", function() {
      var Rect1 = new Rectangle(20,30,40,11);
      expect(Rect1.findCorners()).toEqual([[20,30],[20,41],[60,30],[60,41]]);
    });
    it("Rectangle 4 has these 4 corners", function() {
      var Rect4 = new Rectangle(45,10,12,4);
      expect(Rect4.findCorners()).toEqual([[45,10],[45,14],[57,10],[57,14]]);
    });
  });
});
