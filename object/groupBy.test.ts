import groupBy from "./groupBy.js";

describe("groupBy", () => {
  it("groups given data by the given selector", () => {
    const xs = [
      { name: "Tom", city: "Wroclaw" },
      { name: "John", city: "New York" },
      { name: "Alice", city: "Warsaw" },
      { name: "Bob", city: "Wroclaw" },
      { name: "Alex", city: "Sydney" },
      { name: "Maria", city: "Sydney" },
      { name: "Victor", city: "Moscow" },
      { name: "Abdul", city: "Berlin" }
    ];

    const byCity = ({ city }: { city: string }): string => city;

    expect(groupBy(byCity)(xs)).toEqual({
      Berlin: [{ name: "Abdul", city: "Berlin" }],
      Moscow: [
        {
          city: "Moscow",
          name: "Victor"
        }
      ],
      "New York": [
        {
          city: "New York",
          name: "John"
        }
      ],
      Sydney: [
        {
          city: "Sydney",
          name: "Alex"
        },
        {
          city: "Sydney",
          name: "Maria"
        }
      ],
      Warsaw: [
        {
          city: "Warsaw",
          name: "Alice"
        }
      ],
      Wroclaw: [
        {
          city: "Wroclaw",
          name: "Tom"
        },
        {
          city: "Wroclaw",
          name: "Bob"
        }
      ]
    });
  });

  it("groups given data by the given selector", () => {
    const xs = [1, 2, 3, 4, 5, 6, 7];
    const oddity = (x: number): string => (x % 2 === 1 ? "odd" : "even");

    expect(groupBy(oddity)(xs)).toEqual({
      odd: [1, 3, 5, 7],
      even: [2, 4, 6]
    });
  });
});
