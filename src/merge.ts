function mergeTwoSortedCollection(collection_1: number[], collection_2: number[], isCol1Asc: boolean, isCol2Asc: boolean, asc: boolean): number[] {
    let temp: number[] = []

    if(isCol1Asc != asc){
        collection_1.reverse()
    }
    if(isCol2Asc != asc){
        collection_2.reverse()
    }

    let i: number = 0;
    let lenCol1: number = collection_1.length;
    let j: number = 0;
    let lenCol2: number = collection_2.length;

    while(i<lenCol1 && j<lenCol2){
        if(collection_1[i]!<=collection_2[j]!){
            temp.push(collection_1[i]!);
            i++;
        }
        else{
            temp.push(collection_2[j]!);
            j++;
        }
    }
    while(i<lenCol1){
        temp.push(collection_1[i]!);
        i++;
    }
    while(j<lenCol2){
        temp.push(collection_2[j]!);
        j++;
    }

    return temp;
}


export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    return mergeTwoSortedCollection(mergeTwoSortedCollection(collection_1, collection_2, true, true, true), collection_3, true, false, true)
}