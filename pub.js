import redis from 'redis';
import express from 'express';
const app = express();
const redis_publisher = redis.createClient({
    url: "redis://127.0.0.1:6379/0"
});

(async () => {
    try {
        await redis_publisher.connect()
        console.log("connected to publisher")
    } catch (e) {
        console.log(e)
    }
})();
const topic = ["m3","m4","m5"]
const message = ['shuruthi','pooja','deivanai']
redis_publisher.publish(topic[0],message[0]).then((data)=>{
    console.log("m3 : ",data)
}).catch((e)=>{
    console.log("m3------>",e)
})

redis_publisher.publish(topic[1],message[1]).then((data)=>{
    console.log("m4 : ",data)
}).catch((e)=>{
    console.log("m4------>",e)
})

redis_publisher.publish(topic[2],message[2]).then((data)=>{
    console.log("m5 : ",data)
}).catch((e)=>{
    console.log("m5------>",e)
})

app.listen(3000,()=>{
    console.log("listening to port 3000")
})