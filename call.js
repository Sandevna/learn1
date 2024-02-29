function upload(videodata,cb){
    console.log("uplod start");
    setTimeout(() => {
        console.log("upload finished--"+videodata.title)
        cb();
    }, 3000);
}

function publish(videodata,cb1){
    console.log("publish start");
    setTimeout(() => {
        console.log("publish finished--"+videodata.title);
        cb1();
    }, 1500);
}

function notifiy(videodata){
    console.log("notificy send--"+videodata.title);
}
 const data={
    title:"callback function video"
 }

upload(data,()=>{
  publish(data,()=>{
    notifiy(data);
  })
});