function findMatching(arr, str){
    return arr.filter(item => item.toUpperCase() === str.toUpperCase())
}


function fuzzyMatch(arr, str){
    return arr.filter(item => item.toUpperCase().startsWith(str.toUpperCase()) );
};

function matchName(arr, str){
    return arr.filter( item => item.name.toUpperCase() === str.toUpperCase())
};
