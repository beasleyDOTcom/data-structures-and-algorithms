'use strict'
/*
In this kata, we want to convert a URL query string into a nested object. The query string will contain parameters that may or may not have embedded dots ('.'), and these dots will be used to break up the properties into the nested object.

You will receive a string input that looks something like this:

user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue
Your method should return an object hash-map that looks like this:

{
  'user': {
    'name': {
      'firstname': 'Bob',
      'lastname': 'Smith'
    },
    'favoritecolor': 'Light Blue'
  }
}
You can expect valid input. You won't see input like:
// This will NOT happen
foo=1&foo.bar=2
All properties and values will be strings — and the values should be left as strings to pass the tests.
Make sure you decode the URI components correctly

*/

// Problem Domain:
// given a string, convert a string into a hashmap from the given url string


// Algorithm:
// decode the URI using the built in decodeURI method.
// use functional scope to build/modify a given object recursing until a & or end of string is reached. 
// create a function, modifyObj(decodedString, objToModify) that accepts a string and an object to modify seperated by '.'
    // iterate through string from back to front looking for a '.' or end of string. 
    // if a '.', 
 function urlToHashmap(query){ 
     let decoded = decodeURI(query);
     let uriHashMap = {};
     function modifyObj(keyAndValue, objToModify){
        // key and value = "user.name.firstname=Bob"
        let value = "";
        let currentIndex = keyAndValue.length-1;
        while(currentIndex >= 0 && keyAndValue[currentIndex] !== "=" ){
            value = keyAndValue[currentIndex] + value;
            currentIndex -= 1;
        }
        // now we should have "user.name.firstname="
        let fullKey = keyAndValue.substring(0, keyAndValue.length-1);
                // fullKey should equal: "user.name.firstname"
        let keyList = fullKey.split("."); // ["user", "name", "firstname"]
        let i = 0;
        function getOnWithIt(obj, i){
            if(i < keyList.length-1){ //2
                obj[i] = getOnWithIt(obj[keyList[i]], i+1)
            } else {
                obj[keyList[i]] = value;
                return obj; 
            }
        }
    }
        let objsToDefine = decoded.split("&");
        objsToDefine.forEach(valueAndKeyToAssign =>{
            modifyObj(valueAndKeyToAssign, uriHashMap)
        });
        return uriHashMap;
    
    
     return uriHashMap;
 } 
 module.exports = urlToHashmap
