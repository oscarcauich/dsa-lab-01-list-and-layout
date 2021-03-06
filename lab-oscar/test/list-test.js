'use strict';

const expect = require('expect');
const List = require('../list.js');

describe('testing list', () => {
  it('should have a lenth of zero', () => {
    let list = new List()
    expect(list.length).toEqual(0);
  });

  describe('testing push', () => {
    it('should append a value to the list', () => {
      let list = new List();

      list.push('yeeeeee yaaaaww');
      expect(list[0]).toEqual('yeeeeee yaaaaww');
      expect(list.length).toEqual(1);

      list.push('booyeah');
      expect(list[1]).toEqual('booyeah');
      expect(list.length).toEqual(2);
    });
  });

  describe('test pop', () => {
    it('should remove a value', () => {
      let list = new List();
      list.push(1)
      list.push(2)
      list.push(3)

      let result = list.pop();
      expect(result).toEqual(3);
      expect(list.length).toEqual(2);
      expect(list[2]).toBe(undefined);

      list = new List();
      result = list.pop();
      // console.log('test',list);
      expect(result).toEqual(undefined);
      expect(list.length).toEqual(0);
    })
  });
  describe('test slice', ()=>{
    it('should return a new array with selected index as its values', () =>{

      let list = new List();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);

      let slice = list.slice();
      expect(slice[1]).toEqual(2);
    })
  })

  describe('test map', () =>{
    it('should return new array with values double', ()=>{
      let list = new List();
      list.push(1);
      list.push(2);
      list.push(3);

      let map = list.map((n)=>{
        return n * 2;
      })
      expect(map[2]).toEqual(6);
    })
  })

  describe('test filter', ()=>{
    it('should return [3,3]', ()=>{
      let list = new List();
      list.push(3);
      list.push(3);
      list.push(2);

      let filter = list.filter((n)=>{
        return n > 2;
      })
      expect(filter[0] + filter[1]).toEqual(6);
    })
  })

  describe('test reduce', ()=>{
    it('should return 6', ()=>{
      let list = new List();
      list.push(3);
      list.push(3);
      list.push(2);

      let reduce = list.reduce((a, b)=>{
        return a + b;
      },9)
      expect(reduce).toEqual(17);
    })
  })
});
