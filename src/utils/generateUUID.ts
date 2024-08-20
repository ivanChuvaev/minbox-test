export function generateUUID(): string {
  const rnd = () => Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);

  return `${rnd()}${rnd()}-${rnd()}-${rnd()}-${rnd()}-${rnd()}${rnd()}${rnd()}`;
}
