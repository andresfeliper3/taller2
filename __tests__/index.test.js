const {maxList,minList,sumAll,average,last,pop,invert,up,push,nthFibo,fiboList,preserveNumbers, insert,existsIn,removeX,greaterThan,mapeo,search,removeN,searchPlace,orderIndex,orderInsert,index,even,square} = require('../src/index');


test('maxList to [1,2,3] => 3',() => {
    expect(maxList([1,2,3])).toBe(3);
});

test('maxList to [-1,-2,-3] => -1',() => {
    expect(maxList([-1,-2,-3])).toBe(-1);
});
test('minList to [1,2,3] => 1',() => {
    expect(minList([1,2,3])).toBe(1);
});

test('sumAll to [1,3,2] => 6',() => {
    expect(sumAll([1,3,2])).toBe(6);
});
test('sumAll to [1,-1] => 0',() => {
    expect(sumAll([1,-1])).toBe(0);
});

test('average to [1,2,3] => 2',() => {
    expect(average([1,2,3])).toBe(2);
});
test('average to [1,2,3,4,5] => 3',() => {
    expect(average([1,2,3,4,5])).toBe(3);
});

test('last to [5,8,1,3,0] => 0',() => {
    expect(last([5,8,1,3,0])).toBe(0);
});

test('pop to [1,2,3] gives [1,2]',() => {
    expect(pop([1,2,3])).toStrictEqual([1,2]);
});
test('pop to [4,0,5,9,7] gives [4,0,5,9]',() => {
    expect(pop([4,0,5,9,7])).toStrictEqual([4,0,5,9]);
});

test('invert to [1,2,3] gives [3,2,1]',() => {
    expect(invert([1,2,3])).toStrictEqual([3,2,1]);
});
test('invert to [3,2,1] gives [1,2,3]',() => {
    expect(invert([3,2,1])).toStrictEqual([1,2,3]);
});

test('removeX to [1,1,2,2,2,3],2 gives [1,1,2,2,3]',() => {
    expect(removeX([1,1,2,2,2,3],2)).toStrictEqual([1,1,2,2,3]);
});


test('up to [4,3,1,2] gives [1,2,3,4]',() => {
    expect(up([4,3,1,2])).toStrictEqual([1,2,3,4]);
});
test('up to [2,1,0,3] gives [0,1,2,3]',() => {
    expect(up([2,1,0,3])).toStrictEqual([0,1,2,3]);
});

test('nthFibo to 3 => 2',() => {
    expect(nthFibo(3)).toBe(2);
});
test('push to 3,[1,2] gives [1,2,3]',() => {
    expect(push(3,[1,2])).toStrictEqual([1,2,3]);
});

test('fiboList to 5 gives [1,1,2,3,5]',() => {
    expect(fiboList(5)).toStrictEqual([0,1,1,2,3]);
});
test('fiboList to 3 gives [1,1,2,3,5]',() => {
    expect(fiboList(3)).toStrictEqual([0,1,1]);
});

test('preserveNumbers to [1,"a","b",2] gives [1,2]',() => {
    expect(preserveNumbers([1,"a","b",2])).toStrictEqual([1,2]);
});
test('preserveNumbers to [5,1,2,true] gives [5,1,2]',() => {
    expect(preserveNumbers([5,1,2,true])).toStrictEqual([5,1,2]);
});

test('insert to [1,2,3],4,0 gives [4,1,2,3]',() => {
    expect(insert([1,2,3],4,0)).toStrictEqual([4,1,2,3]);
});
test('insert to [1,2,3],4,3 gives [1,2,3,4]',() => {
    expect(insert([1,2,3],4,3)).toStrictEqual([1,2,3,4]);
});
test('existsIn to [1,2,3],0 => false',() => {
    expect(existsIn([1,2,3],0)).toBe(false);
});

test('searchPlace to [1,3,5],3,0 => 1',() => {
    expect(searchPlace([1,3,5],3,0)).toBe(1);
});

test('orderIndex to [1,2,3],3 => 2',() => {
    expect(orderIndex([1,2,3],3)).toBe(2);
});
test('orderIndex to [3,2,1],4 => 3',() => {
    expect(orderIndex([3,2,1],4)).toBe(3);
});

test('orderInsert to [1,2,4],3 gives [1,2,3,4]',() => {
    expect(orderInsert([1,2,4],3)).toStrictEqual([1,2,3,4]);
});
test('orderInsert to [4,1,2],3 gives [1,2,3,4]',() => {
    expect(orderInsert([4,1,2],3)).toStrictEqual([1,2,3,4]);
});

test('index to [1,2,3],2 => 1',() => {
    expect(index([1,2,3],2)).toBe(1);
});
test('index to [1,0,0,2,2,3],0 => 1',() => {
    expect(index([1,0,0,2,2,3],0)).toBe(1);
});

test('removeN to [1,2,3],0 => [2,3]',() => {
    expect(removeN([1,2,3],0)).toStrictEqual([2,3]);
});
test('removeN to [1,2,3],1 => [1,3]',() => {
    expect(removeN([1,2,3],1)).toStrictEqual([1,3]);
});


test('greaterThan to [1,2,3,4,5],2 => [3,4,5]',() => {
    expect(greaterThan([1,2,3,4,5],2)).toStrictEqual([3,4,5]);
});
test('greaterThan to [10,20,30,40,50],15 => [20,30,40,50]',() => {
    expect(greaterThan([10,20,30,40,50],15)).toStrictEqual([20,30,40,50]);
});


test('search to [0,1,2,3,4],even => [0,2,4]',() => {
    expect(search([0,1,2,3,4],even)).toStrictEqual([0,2,4]);
});
test('search to [1,1,10,10],even => [10,10]',() => {
    expect(search([1,1,10,10],even)).toStrictEqual([10,10]);
});

test('mapeo to [1,2,3,4],square => [1,4,9,16]',() => {
    expect(mapeo([1,2,3,4],square)).toStrictEqual([1,4,9,16]);
});
test('mapeo to [-1,-10],square => [1,100]',() => {
    expect(mapeo([-1,-10],square)).toStrictEqual([1,100]);
});

