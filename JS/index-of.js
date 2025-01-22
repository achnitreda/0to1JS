const indexOf = (arr, val, index) => {
    if (!index) {
        index = 0
    } else if (index < 0 && index >= -arr.length) {
        index = index + arr.length
    } else if (index >= arr.length) {
        return -1
    }

    for (let i = index; i < arr.length; i++) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}

const lastIndexOf = (arr, val, index) => {
    if (!index) {
        index = arr.length - 1
    } else if (index < 0 && index >= -arr.length) {
        index = index + arr.length
    } else if (index >= arr.length) {
        return arr.length - 1
    } else if (index < -arr.length) {
        return -1
    }

    for (let i = index; i >= 0; i--) {
        if (arr[i] === val) {
            return i
        }
    }
    return -1
}


const includes = (arr,val) => {
    if (!val) {
        return false
    }
    for (let i=0;i<arr.length; i++) {
        if (arr[i] === val){
            return true
        }
    }
    return false
} 



