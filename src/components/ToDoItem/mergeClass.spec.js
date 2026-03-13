import mergeClass from "./mergeClass";

describe("./mergeClass.js", () => {
  it.each([
    { input: true, output: "todo-item completed" },
    { input: false, output: "todo-item" },
  ])(
    "should return $output classes when completed is $input",
    ({ input, output }) => {
      expect(mergeClass(input)).toBe(output);
    },
  );
});
