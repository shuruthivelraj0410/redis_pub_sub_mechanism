import redis from 'redis';
import express from 'express';

const app = express()
const redisClient = redis.createClient({
    url : "redis://127.0.0.1:6379/1"
});
let redis_subscriber;
(async()=>{
try{
    redis_subscriber = redisClient.duplicate()
await redis_subscriber.connect()
console.log("connected to redis subscriber")
}catch(e){
    console.log(e)
}
})();

const topics = ["m3","m4","m5"]
topics.forEach((topic)=>{
    redis_subscriber.subscribe(topic,(data)=>{
        console.log(data)
    })
})


app.listen(3001,()=>{
    console.log('listening to 3001')
})
