# blog-image

This is simple blog application which is used to create the blog along with its image and the related links of the blog.

# To run and use this repository do the following things:

QUICK NOTE: The current working directory (i.e. cwd) should always be the root directory while doing the below mentiooned steps.

1. First make the empty folder and open the folder in the terminal and clone this repository by using the folowing command :-

   git clone https://github.com/venu-RAW/blog-image.git

2. After cloning the repository use the following command to install all the dependencies this repo use

   npm install

3. After installing the dependencies you need to create a new file named as ( config.env ) in the root folder. You can get the detailed description about this in the ( sample.config.env ) file, that I have created for your reference.

4. After doing the above steps run the application server by using the following command :-

   node index.js

5. Now open the Mongodb ( you can use mongodb compass or mongodb atlas cloud ).

6. For the installation you can refer this guide https://docs.mongodb.com/manual/installation/

7. After installing create the database. NOw get the connection string for your database and paste it in the config.env file.

8. Then you need to open the POSTMAN, if you dont know what the POSTMAN is it is basically a S/W application which helps us to test the Rest API's.

9. For the installation and usage you can refer this guide https://www.postman.com/downloads/

10.   Click on Add request to make a request to the server.

11.   Now to test the blog application therse are several request you can perform.

     11.A.] To GET all the blogs [ GET REQUEST ]

           http://localhost:5000/blogs

Note: Replace the Port 5000 with your port number and make the request.

      11.B.] To get the blog with the QUERY [ GET REQUEST ]

         http://localhost:5000/blogs?blogTitle=Frida

      11.C.] To GET the blog specify the id of the blog [ GET REQUEST ]

         http://localhost:5000/blogs/16082939113615rnahoykiu8o476

      11.D.] To POST the blog ( Creation of the blog ) [ POST REQUEST ]

         http://localhost:5000/blogs/

Note: To post the task you need to send the data as the FORM DATA because we are also sending the image of the blog

Here is the example of how to send the data
![form-data_example](https://user-images.githubusercontent.com/73871063/102726329-ed6ac780-4343-11eb-9a0c-225f842a9868.png)


      11.E.] To DELETE the blog specify the id of the task [ DELETE REQUEST ]

         http://localhost:5000/blogs/16082955456835rnaiivkiu9n590

# Technologies and tools used

-  JavaScript
-  Nodejs
-  Express
-  POSTMAN
-  MongoDb
-  Git and Github
