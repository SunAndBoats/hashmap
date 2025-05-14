export class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity;
    this.loadFactor = loadFactor;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.count = 0;
  }
  _hash(key) {
    let hashCode = 0;
    const prime = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (prime * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    const existing = bucket.find((entry) => entry[0] === key);
    if (existing) {
      existing[1] = value; // update
    } else {
      bucket.push([key, value]);
      this.count++;
      if (this.count / this.capacity > this.loadFactor) this._resize();
    }
  }

  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const entry = bucket.find((e) => e[0] === key);
    return entry ? entry[1] : null;
  }

  has(key) {
    const index = this._hash(key);
    return this.buckets[index].some((e) => e[0] === key);
  }

  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];
    const i = bucket.findIndex((e) => e[0] === key);
    if (i !== -1) {
      bucket.splice(i, 1);
      this.count--;
      return true;
    }
    return false;
  }

  length() {
    return this.count;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.count = 0;
  }

  keys() {
    return this.buckets.flat().map(([key]) => key);
  }

  values() {
    return this.buckets.flat().map(([_, value]) => value);
  }

  entries() {
    return this.buckets.flat();
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.count = 0;

    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }
}
