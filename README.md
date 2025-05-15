---

### 🧩 HashMap

```markdown
# 🧩 HashMap Implementation

Este proyecto implementa una estructura de datos HashMap desde cero, incluyendo rehashing dinámico, colisiones mediante listas enlazadas y un HashSet derivado.

## 🧪 Funcionalidades

- `set(key, value)`
- `get(key)`
- `has(key)`
- `remove(key)`
- `clear()`
- `length()`
- `keys()`
- `values()`
- `entries()`

## ➕ Extra

También se implementó una estructura `HashSet`, basada en `HashMap`, pero sin valores (solo claves únicas).

## 📁 Estructura

src/
modules/
hashmap/
HashMap.js
HashSet.js
HashMap.test.js
index.js

## ✅ Tests

Se incluyen pruebas para:

- Inserciones
- Colisiones
- Rehash automático al superar el load factor
- Métodos de utilidad
```
