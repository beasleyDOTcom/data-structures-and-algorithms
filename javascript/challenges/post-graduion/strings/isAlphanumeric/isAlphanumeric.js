module.exports = (string) => {
    if(string.length < 1){return false}
    let regex = /[^a-zA-Z\d]/g;
    return !regex.test(string);
}