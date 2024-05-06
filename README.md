REDIS PUBLISHER SUBSCRIBER:



Here we use redis as message store
Here 2 processors act as a publishers .where publishers are responsible to publish the request data in redis server by creating a unique channel
Other 2 processors are programmed in such a way to act as a subscriber where they receive the data for further work processing.
To create a redis publisher we have to first connect with the server (redis.createClient())
Example :
Const redis = require(‘redis’);
Const client = redis.createClient({
Host:’localhost’,
Port: 6379
})
client.publish(“channel_for_processor1”,data)
Here the client is one of the processor’s name
Here each and every processor (publisher and subscriber must have get connected with redis server
Then client.publish() method is used to create a publisher and this method takes two parameters 1. Channel name to create a new channel between the processor and server 2. Data which has to be stored inside the redis server.
Subscriber not only uses the datas in server also listens to the messages left on channels
As soon as publishers publishes the message the subscriber receives the message

to start : 
node sub.js in one terminal
parallely start
node pub.js in other terminal
