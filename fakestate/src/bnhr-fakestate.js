// Anything exported from this file is importable by other in-browser modules.
export function sayHi(name) {
  return `hi ${name}`;
}

export function nope() {
  alert('nope, close me');
}
