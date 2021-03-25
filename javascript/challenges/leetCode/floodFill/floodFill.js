'use strict';
/*
Problem domain: write a function that takes in a matrix of integers, row, column and a new color and returns the matrix with touching numbers updated.

algorithm:
write a _helper function to call on each coordinate that is up/down or accross from coordinate
let oldColor as img[sr][sc];
- evaluate current coordinate if it is the same number as oldColor, change it to new color. 
- then call _helper with coordinates up/down  accross 
*/

function floodFill(img, sr, sc, newColor){
    let oldColor = img[sr][sc];
    function _helper(x,y){
       if(img[x][y] === oldColor){
         img[x][y] = newColor;
           //then call this _helper on appriate locations
         if(y+1 <= img[x].length && img[x][y+1] !== newColor){
             _helper(x, y+1);     
         } 
         if(x-1 >= 0 && img[x-1][y]!== newColor){
            _helper(x-1, y);         
         } 
         if( y-1 >= 0 && img[x][y-1] !== newColor){
            _helper(x, y-1);         
         } 
         if(x+1 <= img.length-1 && img[x+1][y] !== newColor){
            _helper(x+1, y);       
         }
      }
    }
    _helper(sr,sc);
    return img;
  }