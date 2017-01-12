Welcome to TETRIS!


A project by Felipe Suero and Alexa Anderson!

<h1>Tetris</h1>

This project has been deployed at: http://squeamish-zoo.surge.sh/

<h2> High Level Overview </h2>

This project attempts to used best practices in an object oriented manner within the constraints of the MVC organizational structure. Important to note however is that it deliberately does NOT use the very common Modlules as a way to organize code. 

<br>

The game itself can be played in any local system by cloning the repo and simply opening index.html in any browser. 

<br>

Play follows traditional tetris rules, the up key allows the player to rotate pieces, the down key will instantly drop the piece, and left and right allow the user to move the piece. Collisions with other pieces are detected, and locked pieces cannot be moved, further disallowed rotations are simply impeded. 

The code written here may not use the module system, but it is very modular, allowing the implementation or new featurs with ease. Of special note are how rotations are handeled, using a simple algorithm, as well as the wall collision adjustment system involved in rotations. 