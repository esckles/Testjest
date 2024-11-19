import {
  addUp,
  extract,
  newStudent,
  objData,
  viewName,
  zero,
  dataFN,
} from "../index";

describe("to add up 2 numbers, say 1 and 3", () => {
  test("1+3 to equal 4", () => {
    let res = addUp(1, 3);

    expect(res).toBe(4);
  });

  test("name will be Peter", () => {
    let res = viewName("Peter");

    expect(res).toBe("Peter");
    expect(res).not.toBe("Oti");
    expect(res).toBeDefined();
  });

  test("to always return 0", () => {
    let result = zero(8);

    expect(result).toBe(0);
    expect(result).not.toBeTruthy();
    expect(result).toBeFalsy();
    expect(result).not.toBeNull();
    expect(result).not.toBeUndefined();
    expect(result).not.toBeNaN();
    expect(result).not.toBeGreaterThan(0);

    expect(result).not.toBeLessThan(0);
  });

  test("Peter exit in the Object", () => {
    let obj = objData("Peter");

    expect(obj).toEqual({ name: "Peter", id: 3 });
  });

  test("Peter exit in the Object", () => {
    let obj = ["man", "bar", "boy"];

    expect(obj).toContain("man");
    expect(obj).toEqual(["man", "bar", "boy"]);
  });

  test("Check whether CodeLab is included", () => {
    let obj = extract("Peter");

    expect("CodeLab").not.toMatch(/I/);
  });

  test("testing for the increment of student list", () => {
    let obj = newStudent("Peter");
    let value = obj.length;
    expect(obj).toContain("Peter");
    expect(value).toBeGreaterThan(value - 1);
  });

  test("testing for the reverse of 492", () => {
    let input = 492;
    let obj = dataFN(input);

    expect(input).not.toBeNaN();
    expect(input).toBeTruthy();
    expect(input).not.toBeNull();

    expect(obj).toBe(294);
  });
});
