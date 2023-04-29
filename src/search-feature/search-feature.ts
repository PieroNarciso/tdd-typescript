export const cities = [
  "Paris",
  "Budapest",
  "Skopje",
  "Rotterdam",
  "Valencia",
  "Vancouver",
  "Amsterdam",
  "Vienna",
  "Sydney",
  "New York City",
  "London",
  "Bangkok",
  "Hong Kong",
  "Dubai",
  "Rome",
  "Istanbul",
] as const;

type City = (typeof cities)[number];

export function search(input: string): City[] {
  if (input === "*") return [...cities];
  if (input.length < 2) {
    return [];
  }

  return cities.filter((city) =>
    city.toLowerCase().includes(input.toLowerCase())
  );
}
