import * as math from "./index.js";
describe("add() tests", () => {
  test("return 5 if called with add(2, 3)", () => {
    const result = math.add(2, 3);
    expect(result).toBe(5);
  });

  test("return negative value if greater argument < 0", () => {
    const result = math.add(2, -3);
    expect(result).toBeLessThan(0);
  });

  test("return value close to 0.3 if called with add(0.1, 0.2)", () => {
    const result = math.add(0.1, 0.2);
    expect(result).toBeCloseTo(0.3);
  });
});

describe("subtract() tests", () => {
  test("return 10 if called with subtract(15, 5)", () => {
    const result = math.subtract(15, 5);
    expect(result).toBe(10);
  });

  test("return negative value if second argument > first argument", () => {
    const result = math.subtract(5, 10);
    expect(result).toBeLessThan(0);
  });
});

describe("multiply() tests", () => {
  test("return 8 if called with multiply(2, 4)", () => {
    const result = math.multiply(2, 4);
    expect(result).toBe(8);
  });

  test("return negative value if only first argument < 0", () => {
    const result = math.multiply(-2, 4);
    expect(result).toBeLessThan(0);
  });

  test("return negative value if only second argument < 0", () => {
    const result = math.multiply(2, -4);
    expect(result).toBeLessThan(0);
  });

  test("return positive value if both arguments < 0", () => {
    const result = math.multiply(-2, -4);
    expect(result).toBeGreaterThan(0);
  });
});

describe("divide() tests", () => {
  test("return 3 if called with divide(9, 3)", () => {
    const result = math.divide(9, 3);
    expect(result).toBe(3);
  });

  test("return 'You should not do this!' if second argument === 0", () => {
    const result = math.divide(9, 0);
    expect(result).toBe("You should not do this!");
  });
});
