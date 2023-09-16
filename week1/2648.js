/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    var res = [0, 1]
    yield res[0];
    yield res[1];
    for(var i = 2; i <= 50; i++){
        yield res[i] = res[i - 1] + res[i - 2];
    }
    
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */