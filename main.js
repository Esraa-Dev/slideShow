var i =0;
var images = [
               "images/US-True-success-is-provided-by-failures-lesson-success-3195027-1920x960.webp",
              'images/images (1).jfif', 
              "images/istockphoto-1350192262-170667a.jpg",
               "images/images (2).jfif",
               "images/images.jfif",
               "images/download.jfif"]
var myfunc= function(){
    document.slideShow.src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0
    }
    setTimeout("myfunc()", 1000)
}
    
myfunc()