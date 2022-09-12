// set initial count
let count = 0

// select value and buttons
const value = document.querySelector('#value')
const btn = document.querySelectorAll('.btn')

btn.forEach(function(btns) {
    btns.addEventListener('click',function(e) {
        const styles = e.currentTarget.classList
        console.log(styles);
        if (styles.contains('decrease')) {
            count--
        }
        else if (styles.contains('increase')){
            count++
        }
        else{count = 0}

        if (count > 0 ) {
            value.style.color = 'green'
        } else if(count < 0){
            value.style.color = 'red'
        }
        else if(count === 0){
            value.style.color = '#000'
        }
        if (count === 10) {
            alert('pls check my blogpage')
        }
        else if(count === 20){
            alert('i hope you have visited my blogpage')
        }
        value.textContent = count;
    })
})



