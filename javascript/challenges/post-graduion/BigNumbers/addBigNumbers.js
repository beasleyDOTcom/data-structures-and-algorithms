function add(a, b) {

    let result = '';
    let i = a.length - 1;
    let j = b.length - 1;
    let remainder = 0;
    while (i >= 0 || j >= 0) {
        if (i < 0 && j >= 0) {
            let sum = (parseInt(b[j]) + remainder).toString();
            if (sum.length > 1) {
                if (j === 0) {
                    return sum + result;
                }
                else {
                    remainder = parseInt(sum[0]);
                    result = sum[1] + result;
                }
            } else {
                result = sum + result;
                remainder = 0;
            }
        }
        else if (j < 0 && i >= 0) {
            let sum = (parseInt(a[i]) + remainder).toString();
            if (sum.length > 1) {
                if (i === 0) {
                    return sum + result;
                }
                remainder = parseInt(sum[0]);
                result = sum[1] + result;
            } else {
                result = sum + result;
                remainder = 0;
            }
        }
        else {
            let sum = (parseInt(a[i]) + parseInt(b[j]) + remainder).toString();
            if (i === 0 && j === 0) {
                return sum + result;
            }
            else if (sum.length > 1) {
                remainder = parseInt(sum[0]);
                sum = sum[1];
            }
            else {
                remainder = 0;
            }
            result = sum + result;
        }
        i--;
        j--;
    }
    return result;
}
module.exports = add;