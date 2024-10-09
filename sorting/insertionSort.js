function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let nti = arr[i];
        let j = i - 1
        while (j >= 0 && arr[j]>nti){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=nti
    }
    return arr
}

const arr = [8, -2, 20, 4, -6]
console.log(insertionSort(arr))
