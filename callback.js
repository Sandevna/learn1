function  uploading(videodata,cb) {
    console.log("upload start");
    setTimeout(()=>{
        console.log("upload done--"+videodata.title)
        cb(videodata)
        ,3000
    })
 }

function publish(videodata,cb1) {
    console.log("publish start");
    setTimeout(()=>{
        console.log("publish done--"+videodata.title)
        cb1(videodata)
        ,2000
    })
}

function notification(videodata){
    console.log("Notification video--"+videodata.title)
}

// uploading();
// publish();
// notification();

const data ={
    title:"This is new video"
}

uploading(data,(uploaddata)=>{
    publish(uploaddata,(publishdata)=>{
        notification(publishdata);
    })

})