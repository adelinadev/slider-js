let offset = 0;
const slider_item = document.querySelector('.slider_item');

document.querySelector('.next_btn').addEventListener('click', function(){
    offset += 512;

    if (offset > 3072) {
        offset = 0;
    }
    slider_item.style.left = -offset + 'px';
});

document.querySelector('.prev_btn').addEventListener('click', function(){
    offset -= 512;

    if(offset < 0){
        offset = 3072;
    }
    slider_item.style.left = -offset + 'px';
});