let num = document.querySelectorAll(".num")
console.log(num);
let interval = 2000;
num.forEach((nums) => {
    let start = 0
    let end = parseInt(nums.getAttribute("data-val"))
    let dur = Math.floor(interval / end)

    let count = setInterval(function(){
        start += 1;
        nums.textContent = start;
        if (start == end) {
            clearInterval(count)
        }
    }, dur);
})