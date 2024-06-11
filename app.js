// 2x2
/*
 * ->,
 v
 ,end

 generales 2 formas
 base tiene 1 forma de llegar
*/

/*

var uniquePaths = function(m, n) {
    if (m === 1 || n === 1) return 1
    return uniquePaths(m-1, n) + uniquePaths(m, n-1)
};


*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let memo = { }
    return upWithMemo({}, m, n)
};

function upWithMemo(memo, m, n){
    if (m === 1 || n === 1) return 1
    let path1 = memo[(m - 1)+ "-" + n] || upWithMemo(memo, m - 1, n)
    let path2 = memo[m + "-" + (n-1)] || upWithMemo(memo, m, n-1)

    memo[(m - 1)+ "-" + n] = path1
    memo[m + "-" + (n-1)] = path2

    return path1 + path2
}
