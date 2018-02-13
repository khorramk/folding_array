//#Fold an array

/*In this kata you have to write a method that folds a given array of integers by the middle x-times.

An example says more than thousand words:

Fold 1-times:
[1,2,3,4,5] -> [6,6,3]

A little visualization (NOT for the algorithm but for the idea of folding):

 Step 1         Step 2        Step 3       Step 4       Step5
                     5/           5|         5\          
                    4/            4|          4\      
1 2 3 4 5      1 2 3/         1 2 3|       1 2 3\       6 6 3
----*----      ----*          ----*        ----*        ----*


Fold 2-times:
[1,2,3,4,5] -> [9,6]*/
/*As you see, if the count of numbers is odd, the middle number will stay. Otherwise the fold-point is between the middle-numbers, so all numbers would be added in a way.

The array will always contain numbers and will never be null. The parameter runs will always be a positive integer greater than 0 and says how many runs of folding your method has to do.

If an array with one element is folded, it stays as the same array.

The input array should not be modified!*/
/**
 * foldarraay:: (array and numberoftimetofold) -> simplified array of reducing numbers.
 * input = array from the user
 * output = return a folded number array
 * 
 * 
 * 
 * 
 * */


var numberfold = function(array, num){
//console.log(num);//needed to check num for regular recusrion
           
           var arr3 = [];//this is to store the foldnumber
           //evenfold() is for to get the actual output based on number of counts to turn
           var evenfold = function(arr, num2){
            if((arr.length > 0)&&(arr.length % 2 === 0)){
                   var second = Math.floor((arr.length + 1) / 2);
            var evarray =[],intoTwo=[],locked=0, arr6=[], lastnum=0, take=0;
            //needed this looping for copying into new array
            for (var l=0; l < arr.length; l++){
                //console.log(arr[l])
                evarray.push(arr[l]);
            }
             //intoTwo is anew array splitted from evarray
            intoTwo = evarray.splice(second);
            //reversed to get folding
            intoTwo.reverse();
//console.log(intoTwo);//regular checking was needed to complete the kata
//console.log(evarray);//same here
            // 
            for ( var s=0; s< evarray.length; s++){
                  locked = evarray[s] + intoTwo[s];
                  arr6.push(locked);

            }
            //some errors were faced during here arr3 was empty error
            //cheked for falsy values
               if(arr3[0] === undefined){
                    take = num2 - 1;
                    return numberfold(arr6, take);

               }else{
                arr6.push(arr3[0]);       
                take = num2 - 1;
              // console.log(arr3);//more debuging needed here
               
               //recursion starts here, taking arr6 arrays the new arrays and decreasing num by 1
                return numberfold(arr6, take);

               }
            
                
               

            }
           
        };

            
////this fold() function is to get the middle number and extract it from the normal array
          var fold = function(arr3){ 
              //note here:: no checking for arr3 instead check for the original array passed in numerfold() function in the outerscope
              //cheking the original array if it is odd
              //
            if(array.length % 2 === 1){
            //return array if the length is 1
                if(array.length === 1){
                    return array;
                } 
                //otherwise check
            if( array.length > 1){
                //some maths equation to get the middlenumber in the array of numbers
                var median = Math.floor((array.length + 1) / 2);
                //note here:: this vaiable is to get the index number not the value
                var middleNum = median - 1;
                //this is for to store the values that are not in those index matching middlenum
                var arr1=[];
                //iterating, checking and separating
                for (var i = 0 ; i < array.length; i++){
                    if(i !== middleNum){
                         arr1.push(array[i]);
                    }

                    if(i === middleNum){
                        //console.log(array[i]);
                            arr3.push(array[i]);//this should change the arr3. did face so many errors when debugging here
                    }

                }

                //errors faced here that is why needed the consol.log(arr3);
                //debugging arr3 the most here
                //returning evenfold with seperated array (arr1) and existing num
                return evenfold(arr1, num);

            }

            }
            
            if(array.length %2 === 0){
                return evenfold(array, num);
            }
            
        };
        //checking if number of counts of the number is 1 or not
            if(array.length === 1){
                return array;
            }
        //cheking if number of turns ended or not. if it has it should return the array, otherwise calls the fold with arr3 as parameter
        //arr3 will be changed each time fold() is called
            if(num === 0){
                return array;
            }else{
                return fold(arr3);

            }

        
        };
        


      
            
        

        
        
    
console.log(numberfold([1,2,3,4,5], 3));