import chroma from 'chroma-js';

function generateCoolPalette(
  count: number = 5,
  minDistance: number = 30
): string[] {
  const palette: string[] = [];

  while (palette.length < count) {
    const color = chroma.random();
    const isDistinct = palette.every(
      (existing) => chroma.distance(existing, color, 'lab') >= minDistance
    );

    if (isDistinct) {
      palette.push(color.hex());
    }
  }

  return palette;
}

export { generateCoolPalette };
