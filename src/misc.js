export function random(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export function goofyGenerator() {
  const themeName = [
    "DMV-Appreication",
    "Fax Machine Coding",
    "We Just Don't Like Socks",
    "More Cream than Coffee",
    "Neo-Funk Bluegrass Ambient",
    "Unimaginative Creative",
    "Birds Aren't Real"
  ];

  const organizationName = [
    "Club",
    "Conspiracy",
    "Society",
    "Institute",
    "League",
    "Syndicate",
    "Order"
  ];

  return `The ${random(themeName)} ${random(organizationName)}`;
}
