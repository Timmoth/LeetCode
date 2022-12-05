export function kWeakestRows(mat: number[][], k: number): number[] {
    var output : Array<[number, number]> = new Array(mat.length);

    for(let i = 0; i < mat.length; i++){
        output[i] = [i, mat[i].reduce(function(a, b){ return a + b; })];
    }    

    return output.sort((n1,n2) => n1[1] - n2[1]).map(function(a){return a[0]}).slice(0, k);
};