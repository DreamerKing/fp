export const sortBy = (property) => {
    return (a, b) => (a[property] < b[property] ? -1 : (a[property] > b[property] ? 1 : 0));
}