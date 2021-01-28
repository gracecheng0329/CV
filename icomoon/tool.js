function bubbleSort(arr){
    for ( var i=0 ; i<arr.length-1; i++){
        for ( var j=0 ; j<arr.length - (i+1);j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        
    }
}
function changeSort (arr){
    for(var i = 0; i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var temp = arr[i]
                arr[j] = arr[i]
                arr[j] = temp;
            }
        }

    }
}
function limitDrag(node){
    node.onmousedown = function(event){
    var event = event|| window.event;
    var offsetX = event.clientX - node.offsetLeft;
    var offsetY = event.clientY - node.offsetTop;
    document.onmousemove = function(event){
        event = event || window.event;
        var l = event.clientX - offsetX;
        var t = event.clientY - offsetY;
        
        if (l<=0){
            l=0
        }
        var windowWidth = document.documentElement.clientWidth||document.body.clientWidth;
        if(l>=windowWidth - node.offsetWidth){
            l = windowWidth - node.offsetWidth;
        }

        if(t<=0){
            t=0
        }
        var windowHeight = document.documentElement.clientHeight||document.body.clientHeight;
        if(t>=windowHeight - node.offsetHeight){
            t = windowHeight - node.offsetHeight;
        }
        node.style.left = l +'px';
        node.style.top = t +'px';
    }
    document.onmouseup = function(){
        document.onmousemove = null;
    
    
    }
    
    }
}
