export function generateTimestamp() {
  return new Date().toISOString().slice(0, 23).replace("T", " ");
}
