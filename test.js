function twelveTo24(ih,im,ap){
    let h24,arr;
    if(ap == 'AM'){
        if(ih == 12){
            h24 = 0;
        } else{
            h24 = ih;
        }
    }
    else {
        if(ih == 12){
            h24 = ih;
        } else {
            h24 = ih + 12;
        }
    }
    arr = [h24,im]
    console.log(arr);
}
twelveTo24(4,30,'PM');