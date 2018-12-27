export const forEach = (array, fn) => {
    for (const value of array) {
        fn(value)
    }
}