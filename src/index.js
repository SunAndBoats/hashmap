import { HashMap } from './modules/hashmap/hashmap.js';

const test = new HashMap(16, 0.75);

// --- 1. Insertar claves únicas ---
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

// --- 2. Sobrescribir antes del resize ---
test.set('apple', 'green');
test.set('banana', 'gold');

console.log('--- Después de sobrescribir ---');
console.log('apple:', test.get('apple')); // green
console.log('banana:', test.get('banana')); // gold
console.log('Length:', test.length()); // 12

// --- 3. Disparar resize ---
test.set('moon', 'silver'); // 13º elemento (supera el loadFactor)

console.log('--- Después de resize ---');
console.log('Capacity:', test.capacity); // 32
console.log('Length:', test.length()); // 13
console.log('Entries:', test.entries());

// --- 4. Sobrescribir después del resize ---
test.set('hat', 'gray');
test.set('lion', 'white');

console.log('--- Después de sobrescribir tras resize ---');
console.log('hat:', test.get('hat')); // gray
console.log('lion:', test.get('lion')); // white
console.log('Length:', test.length()); // 13

// --- 5. Probar todos los métodos ---
console.log('--- Probar métodos ---');
console.log('jacket:', test.get('jacket')); // blue
console.log('has kite?', test.has('kite')); // true
console.log('remove banana:', test.remove('banana')); // true
console.log('has banana?', test.has('banana')); // false
console.log('Length after remove:', test.length()); // 12
console.log('Keys:', test.keys());
console.log('Values:', test.values());
console.log('Entries:', test.entries());

// --- 6. clear() ---
test.clear();
console.log('--- Después de clear() ---');
console.log('Length:', test.length()); // 0
console.log('Entries:', test.entries()); // []
