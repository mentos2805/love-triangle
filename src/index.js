/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) { 
    var count = 0
    for (a = 0; a < preferences.length; a++) {
        var b = preferences[a]-1;
        var c = preferences[b]-1;
        var should_a = preferences[c]-1;
        if (a != b && b != c && should_a == a) {
            count++;
        }
    }
    return count/3
};
