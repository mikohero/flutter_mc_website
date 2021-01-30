# flutter_mc_website
This website is a website to flutter_mc app in my github.

I wanted a very simple website made in Bootstrap. Based on mostly html and a lot of javascript. Then on server side PHP and MySql. Fast and cheap.
I did not optimize this part of php to remove phishing. You can do this easily. 

When data is send from Flutter app to my database, I have each mc trip. one trip has many marks. So trip rid is linked in marks table.

In the trip i have marks, where I have lat, lng and url to images taken - all in database and linked to travels. 
In travel I have only id, no name from Phone because I do not want to type in name of travel. Phone keyboard no no.......
So I created the website.

I want to see my trips in a dropdown. Just name - which are empty first from Flutter mc. I use Jquery and JSon to get data from PHP/MySql.  
When I see an id with no text in selected dropdown, then I type a name in inputfield and click send button. 
Then I update MySQL and return data and update the view. 

Now when I select a dropdown with name, the change event will get all the marks from database using jquery post. 
In the website I have a Bing Map - thanks Microsoft for free stuff for developers. 
This is because of Google now wants to have creditcard for google maps, so they are out. 
Google what is going on with web? In flutter you can use for free........

Now I setup all the marks in Bing Map and make Infobox with iframe in php to show the images. Only way for me to make it really dynamic and great by the way.
Finally I set the view in map to show all marks. This is based on array with pin locations. Great and easy solution found online.

It was very interesting working with Bing Maps and data from Flutter app. Enjoy. Website took 2 days to build, so fun 2 days,

Write to me if you have any questions. mikommd@gmail.com.

