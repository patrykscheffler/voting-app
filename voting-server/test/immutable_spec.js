import { expect } from 'chai';
import { List } from 'immutable';

describe('immutability', () => {

  describe('a number', () => {

    function increment(currentState) {
      return currentState + 1;
    }

    it('is immutable', () => {
      let state = 42;
      let nextState = increment(state);

      expect(nextState).to.equal(43);
      expect(state).to.equal(42);
    })

  })

  describe('a List', () => {

    function addMovie(currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('Film A', 'Film B');
      let nextState = addMovie(state, 'Film C');

      expect(nextState).to.equal(List.of('Film A', 'Film B', 'Film C'));
      expect(state).to.equal(List.of('Film A', 'Film B'));
    })

  })

})
