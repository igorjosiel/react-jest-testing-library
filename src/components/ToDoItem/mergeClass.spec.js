import mergeClass from "./mergeClass";

describe("./mergeClass.js", () => {
    it("should return 'todo-item' class when the item is not completed", () => {
        expect(mergeClass(false)).toBe("todo-item");
    });

    it("should return 'todo-item' and completed classes when the item is completed", () => {
        expect(mergeClass(true)).toBe("todo-item completed");
    });
});
