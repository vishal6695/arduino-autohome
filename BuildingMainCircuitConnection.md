# ![https://lh3.googleusercontent.com/-1WyENL3Mcrs/UEWW6bgXvTI/AAAAAAAAAO4/zxcY3bhmKEY/s960/Logo-001.jpg](https://lh3.googleusercontent.com/-1WyENL3Mcrs/UEWW6bgXvTI/AAAAAAAAAO4/zxcY3bhmKEY/s960/Logo-001.jpg) #




## Building Main Circuit Connection ##


Now we are ready with our Relay controller board. So, it’s time to move on to the Main Circuit Connections. Here I have given the pin configuration for the whole Autohome Project.



| **Arduino Digital Pin No.** |   **Pin Usage**   |
|:----------------------------|:------------------|
|4                            |will be used for Infrared Receiver|
|5                            |used as Output Pins to control Relays|
|6                            |used as Output Pins to control Relays|
|7                            |used as Output Pins to control Relays|
|8                            |used as Output Pins to control Relays|
|9                            |used as Output Pins to control Relays|
|10                           |will be used by Arduino Ethernet Shield|
|11                           |will be used by Arduino Ethernet Shield|
|12                           |will be used by Arduino Ethernet Shield|
|13                           |will be used by Arduino Ethernet Shield|




**Note:** For relays it is recommended to power it from separate source not from Arduino (I have powered it from Arduino only but since here we are working with single board. As board number increases Arduino won’t be able to supply sufficient power to the boards.)

**Here is the connection diagram:**


![https://lh4.googleusercontent.com/-6t2bzEPbFbY/UEpa_w1HBKI/AAAAAAAAAWw/VQlKKrykvPI/s902/uno+main+connection.jpg](https://lh4.googleusercontent.com/-6t2bzEPbFbY/UEpa_w1HBKI/AAAAAAAAAWw/VQlKKrykvPI/s902/uno+main+connection.jpg)


In this way you can do necessary soldering work to make following connection.


You can also make your own protoshield which can easily fit on top Arduino like this:

https://lh6.googleusercontent.com/-fSORPLKws24/UEpeNsaRS5I/AAAAAAAAAX0/CrXhXoayncY/w399-h299-n-k/IMG_1805.JPG



https://lh6.googleusercontent.com/-BY91A3ixtEY/UEpeRdjKcdI/AAAAAAAAAX8/lv3ds0_O4EE/w399-h299-n-k/IMG_1806.JPG




https://lh5.googleusercontent.com/-CtwI9yteHwA/UEpeUhk07qI/AAAAAAAAAYI/GP51yCa099Q/w400-h299-n-k/IMG_1807.JPG


So build it and test all connection properly before proceeding.
