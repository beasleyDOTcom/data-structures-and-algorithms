// isDir(path) boolean
// listDir(path) ls
// getContents(path) returns contents of file as text

const { result } = require("../insertComman");


function getDuplicateFiles(dirName){
    let obj = {};

    function _helper(fileArray){
        fileArray.forEach(fileName => {

            if(isDir(fileName)){
                _helper(fileName)
            } else {
                let contents = getContents(fileName);
                if(obj[contents] === undefined){
                    obj[contents] = [fileName]
                } else {
                    obj[contents].push(fileName);
                }
            }

        })
    }

    _helper(dirName);
    
    let resultArray = [];
    let duplicates = Object.keys(obj);

    for(let i = 0; i < duplicates.length; i++){
        if(obj[duplicates[i]].length > 1){
            resultArray.push(obj[duplicates[i]]);
        }
    }
    return resultArray;
}

module.exports = getDuplicateFiles;