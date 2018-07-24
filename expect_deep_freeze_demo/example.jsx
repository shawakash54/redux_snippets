//deep freeze helps in removing mutation from the code
const addCounter = (list)=>{
    return [...list, 0];    //removes mutation
    // list.push(0);        //supports mutation
};

const removeCounter = (list, index) => {
    //list.splice(index, 1)         //splice is a mutating method
    
    // return list
    //     .slice(0, index)
    //     .concat(list.slice(index + 1));

    return [
        ...list.slice(0, index), 
        ...list.slice(index + 1)
    ];
};

const incrementCounter = (list, index)=>{
    //mutation is occuring below
    /*
    list[index]++;
    return list;
    */

    //without mutation with the help of ES6 spread operator
    return [
        ...list.slice(0, index), 
        list[index]+1, 
        ...list.slice(index + 1)
    ]
};
const testAddCounter = ()=>{
    const listBefore = [];
    const listAfter = [0];
    //checking for mutation
    deepFreeze(listBefore);
    expect(
        addCounter(listBefore)
    ).toEqual(listAfter);
    //expect passes if we remove mutation and fails otherwise.
};

const testRemoveCounter = ()=> {
    const listBefore = [10,20,30];
    const listAfter = [10,30];

    deepFreeze(listBefore);
    expect(
        removeCounter(listBefore, 1)
    ).toEqual(listAfter);
};

const testIncrementCounter = () =>{
    const listBefore = [10,20,30];
    const listAfter = [10,21,30];
    deepFreeze(listBefore);
    expect(
        incrementCounter(listBefore, 1)
    ).toEqual(listAfter);
};
testAddCounter();
console.log(`All tests passed`);