# ![https://lh5.googleusercontent.com/-ztamhm3a418/UErxfswzhqI/AAAAAAAAAY0/OUwj0zJ2k4w/s960/logo.jpg](https://lh5.googleusercontent.com/-ztamhm3a418/UErxfswzhqI/AAAAAAAAAY0/OUwj0zJ2k4w/s960/logo.jpg) #



## Getting IP Address Of Arduino Ethernet Shield: ##

Now you have basic idea how to use Arduino IDE software. Mount your Arduino Ethernet shield on Arduino Uno as shown:


https://lh4.googleusercontent.com/-zrdGqw4khXU/UEdtEaN5U1I/AAAAAAAAAU4/kEFWXliXr2U/s949/IMG_1793.JPG

https://lh6.googleusercontent.com/-yeblAR21HSQ/UEdtJpib-OI/AAAAAAAAAVI/Jagkk0fSuRU/s711/IMG_1795.JPG


Now connect your Uno Board to PC with USB cable and open Arduino IDE. After Opening up you will find blank Arduino window. Now go to File--> Example --> Ethernet --> dhcp address printer sketch. Your Ethernet shields MAC address is printed on back of it as follow you will need this in DHCP ADDRESS PRINTER code to get the IP address of your Ethernet shield.


https://lh3.googleusercontent.com/-3XTa7dIZ6Gc/UEdtPqCq64I/AAAAAAAAAVY/97kEJNLNpEg/s533/IMG_1797.JPG


In DHCP address printer sketch put your MAC address as given on back of the Ethernet shield and upload it to the Arduino board.


![https://lh6.googleusercontent.com/-eSIr4zgW0-E/UEdtCJCZDtI/AAAAAAAAAUw/Vy0G5dOXH68/s988/dhcp+mac.jpg](https://lh6.googleusercontent.com/-eSIr4zgW0-E/UEdtCJCZDtI/AAAAAAAAAUw/Vy0G5dOXH68/s988/dhcp+mac.jpg)


After finished uploading connect Arduino Ethernet shield to internet with Ethernet cable once connected then open up you serial monitor of Arduino IDE the IP address allotted to your Ethernet shield will be displayed e.g. (xxx.xxx.x.xxx) note it down somewhere because you are going to need this in further codes.


## Project By: ##
**Dhiraj Jadhao**