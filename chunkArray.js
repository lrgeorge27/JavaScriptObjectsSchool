function chunkArrayInGroups(arr, size) {
    var newArr = []; //Create var to hold new array
    while (arr.length > 0) { //condition to only use + integers
        newArr.push(arr.splice(0, size)); //Splice (start at front, into specified chunks) and push new arrays to var
    }
    return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
