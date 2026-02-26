public class PolymorphismExample {
  public static void main(String[] args) {
    Shape circle = new Circle(2.0);
    Shape rectangle = new Rectangle(3.0, 4.0);

    printArea(circle);
    printArea(rectangle);
  }

  private static void printArea(Shape shape) {
    System.out.println("Área: " + shape.area());
  }
}

