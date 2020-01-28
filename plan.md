My technical plan:

1.	I need a full data set that contains the following data for all the testing products. Specifically, I need name, id, and image (the image data is a link)
So, I will generate a my api file which will consist of the required data in a full set array.
2.	I need a., 3 images to randomly be displayed in the browser, and they need to b., be displayed next to one another,
So, I will create a function that, one, randomly grabs three items from the array and, two. renders those items in the browser. The place holders, or elements, for those items on the page itself will need to be given IDs and be styled according to display specifications.
3.	I must be able to receive clicks on the image selection.
So, here I will need an event listener that captures the value of a given selection
4.	 When the image is selected, I need to be able to store the data, and compile that data (i.e., how many times each image is selected and increment accordingly), with each subsequent selection.
So, I will, one, need a function to send the captured value from the selections, and, two, since I will need to generate a place to store the values of the selection, I will prepare an empty array for the start of each survey.
5.	I need to track the total times each image is displayed, regardless of selection.
I will need to write a function that captures the value of each set displayed and push those values into another empty array, storing and incrementing values as needed.
6.	The survey ends at 25 sets.
Will need to condition the survey with a loop that will end the survey after 25 selections.
7.	Will need to disable or hide the images and display the results of the survey in list form showing i., how many times each item was viewed and b., the votes received.


