# Quick Sort
Quick sort is another sorting method based on the principle of "divide and conquer."
To start, you choose a position (or index) of an array to be the crux of your calculation. 
(you pick a index, and will compare all the other values in the array with the value at that index) 

The way I sorted [3,6,2,9] is with three basic functions:
I have a sorting function which I call recursively using the values on either side of my dividing point/fulcrum(which the partition function creates/ puts values to either side of based on their value in comparison to the fulcrum)
the partition calls the swap function whenever it finds a value that is less than value of the fulcrum. 
then calls the swap function after all the values in the array passed into it have been evaluated in order to have the put the value that was being used as a weight on the scale to be placed where the weights determined it should go(swapping places with the fulcrum);
this gets called recursively so the group gets smaller and smaller and that's how it gets sorted out.

I have a video coming soon. 