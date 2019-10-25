var prevbtn = document.querySelector(".prev")
var nextbtn = document.querySelector(".next")
// 默认第一页是高亮的
var firstpage = document.querySelector(".page-item")
firstpage.classList.add("item-active")
prevbtn.onclick = function(){
    var items = document.querySelectorAll(".page-item")
    if(parseInt(items[0].innerHTML)-5 <= 0){
        return
    }
    for(let i=0,len=items.length;i<len;i++){
        items[i].innerHTML = parseInt(items[i].innerHTML) - 5
        items[i].classList.remove("item-active")
    }
    // 点击上一次按钮，那么默认会显示第一页
    items[0].classList.add("item-active")
}
nextbtn.onclick = function(){
    var items = document.querySelectorAll(".page-item")
    for(let i=0,len=items.length;i<len;i++){
        items[i].innerHTML = parseInt(items[i].innerHTML) + 5
        items[i].classList.remove("item-active")
    }
    items[0].classList.add("item-active")
}

var searchbtn = document.querySelector(".page-search")
var sub = document.querySelector(".page-sub")
sub.onclick = function(){
    if(searchbtn.value === ""){
        // 说明没有输入
        return
    }
    var num = parseInt(searchbtn.value)
    var yu = num%5
    var s = (num-yu)/5
    var items = document.querySelectorAll(".page-item")
    for(let i=0,len=items.length;i<len;i++){
        items[i].classList.remove("item-active")
    }
    var text
    if(yu === 0){
        for(let i=0,len=items.length;i<len;i++){
            text = 5*(s-1) + 1 + i
            items[i].innerHTML = text
            // 在相应的页码上面实现高亮效果
            if(text === num){
                items[i].classList.add("item-active")
            }
        }
    }else{
        for(let i=0,len=items.length;i<len;i++){
            text = 5*s + 1 + i
            items[i].innerHTML = text
            if(text === num){
                items[i].classList.add("item-active")
            }
        }
    }
    
}

// 点击每一页都会又高亮效果
var page = document.querySelector(".page")
page.onclick = function(event){
    var items = this.children
    for(let i=0,len=items.length;i<len;i++){
        items[i].classList.remove("item-active")
    }
    event.target.classList.add("item-active")
}