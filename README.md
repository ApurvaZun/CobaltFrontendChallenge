# CobaltFrontendChallenge
HighScoreApp


### Instructions

```bash
1. git clone git@github.com:ApurvaZun/CobaltFrontendChallenge.git

2. npm install (this will install all dependency)

3. npm start

```

## Explanation to few quetions from the assignment
```bash
###Write a couple unit tests, and note why you chose to cover these particular areas of code

Unit tests cover below areas -
1. App Components is rendered correctly with the heading
2. App component renders Score component.
3. Generate Score properly increases the number of times the button is clicked.
3. Input Component rendering and the input onChange and button onClick working correctly
4. ScoreBoard component gets the dummy user data and display it.

I have focused more on writing test cases that covers what user will see and use.
All the buttons are triggering events properly.
Components are displaying the results correctly.
Focused more on testing if the components are rendered and working correctly.


###What API parameters would you request be made available, to optimize data processing on the front end? Assume those parameters are made available to you, and ###incorporate them into your code.

1. Pagination parameters(page offset, upper limit etc) to get records in chunk and not overwhelm the loading time on frontend
2. Sorting parameters(sortBy totalPoints, averagePoints and sortingOrder true/false) to get the records in already sorted order which will help display the data faster on frontend


###How might this be hacked?

1.Since any player can view the leader board realtime and know who is leading or at top of the list, a hacker who wants himself/herself to be put on the top of the list can enter the name of the real leading player and then submit scores between 0 and      	-100(off course he has to keep trying multiple times before submission)


```
