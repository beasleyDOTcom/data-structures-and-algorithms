'use strict'
const Animal = require('../fifo-animal-shelter.js');
const Stack = require('../stack.js');

it('expect AnimalShelter and Stack to be a class', () => {
    const stack = new Stack;
    const animal = new Animal;
    expect(stack).toBeDefined();
    expect(animal).toBeDefined();
});

it('expect AnimalShelter and Stack to enqueue multiple and dequeue multiple animals coinciding with their "preference"', () => {
    const animal = new Animal;
    animal.enqueue('cat');
    animal.enqueue('dog');
    animal.enqueue('cat');
    animal.enqueue('dog');
   expect(animal.dequeue('cat')).toBe('cat');
    expect(animal.dequeue('cat')).toBe('cat');
});

it('should enqueue multiple animals and dequeue one', () => {
    const animal = new Animal;
    animal.enqueue('dog');
    animal.enqueue('dog');
    animal.enqueue('dog');
    animal.enqueue('dog');
    expect(animal.dequeue('dog')).toBe('dog');
});

it('should sift through all the other dogs and find the cat', () => {
    const animal = new Animal;
    animal.enqueue('dog');
    animal.enqueue('dog');
    animal.enqueue('dog');
    animal.enqueue('cat');
    animal.enqueue('dog');
    expect(animal.dequeue('cat')).toBe('cat');
});

it('should sift through all the other dogs and find the cat', () => {
    const animal = new Animal;
    animal.enqueue('cat');
    animal.enqueue('dog');
    expect(animal.dequeue('cat')).toBe('cat');
});