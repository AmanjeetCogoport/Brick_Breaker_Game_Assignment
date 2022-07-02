# How This Game Work and How its get build ( used OOPS concept for each object).

 1. for every object of game like ball, pad and brick => i have seperatly defined class for each object and set all the functionality and attributes relate to that object.

 2. padding of the game is controlled by left and right arrow key.

 3. Ball will move based on the gobal variable speed ball and will increase when ball touches any corner of the pad then the speed of ball gets increased and also when it touches the center of the pad then speed of ball decreses.

 4. i have defined brick in a manner that different color brick is having different spficity. like when the ball touches the red brick => it brick will not get wiped out at one touch it will just change the color from red to yellow and => if that brick again gets hitted by the ball the again this brick will change the color from yellow to green. and then => if ball gets hitted then it will get wipe out from the canvas. these thing has been followed for each color brick. based on this only score of game increase and decrease.

 5. i have alseo defined random size brick i.e different brick can have different width and height.

5. for Live, => if ball touchs 3 times at the ground then at the ground then only each time live of user decrease and ball will get bounce back from the ground. after that game will over and user will lost the game.

6. when all the brick will gets wiped out from the canvas then user wins the game and the score will get refelected on the screen.


# Brick_Breaker_Game_Assignment
 This Repo is for Assignment purpose which i am doing during the training period,  This assignment Contain a simple brick breaker game project. and game has been developed with the help of p5js javascript game  library.



