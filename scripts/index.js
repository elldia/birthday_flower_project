const popup_wrap = document.querySelector('.popup_wrap');
const popup_bg = document.querySelector('.popup_bg');
const user_birthdayInput = document.querySelector('#user_birthday');
const birthday_result_btn = document.querySelector('#birthday_result_btn');

//function start
displayHide(popup_wrap);
displayHide(popup_bg);

//event
birthday_result_btn.addEventListener('click',()=>{
    if(user_birthdayInput.value == ''){ alert('숫자를 입력해주세요'); }
    else if(user_birthdayInput.value == 1 || user_birthdayInput.value == 2 || user_birthdayInput.value == 3) {
        displayShow(popup_wrap, 'flex');
        displayShow(popup_bg);
        popup_wrap.children[0].children[0].textContent = birthdayData[user_birthdayInput.value-1].month;
        popup_wrap.children[1].children[0].textContent = birthdayData[user_birthdayInput.value-1].contents;
        popup_wrap.children[2].children[1].textContent = birthdayData[user_birthdayInput.value-1].flower;
    }else{ alert('현재는 1~3월 생일만 가능합니다. 빠른 시간안에 준비하도록 노력하겠습니다.');}
})
popup_bg.addEventListener('click',()=>{
    displayHide(popup_bg); displayHide(popup_wrap);
    user_birthdayInput.value = '';
})

//function create
function displayHide(target) {return target.style.display = 'none';}
function displayShow(target, status='block') {target.style.display = status;}
const birthdayData = [{
    month:1,
    flower:'장미',
    contents:'장미의 뜻은..'
},{
    month:2,
    flower:'수선화',
    contents:'수선화의 뜻은..'
},{
    month:3,
    flower:'민들레',
    contents:'민들레의 뜻은..'
}]