function factorial() {
    num = parseInt(document.getElementById("num").value)
    messge = ""
    if (num) {
        res = 1
        for (let i = 2; i <= num; i++) {
            res *= i
        }
        message = "Factorial of " + num + " is " + res
    }
    document.getElementById("res").innerHTML = "<h2>" + message + "</h2>"
}
function digitsSum() {
    num = parseInt(document.getElementById("num").value)
    messge = "";
    s = 0;
    num1 = num
    if (num) {
        while(num!=0){
            s +=  parseInt(num % 10)
            num = parseInt(num / 10)
        }
        message = "Sum of digits of :"+num1+" is :"+s
    }
    document.getElementById("res").innerHTML="<h2>"+message+"</h2>";
}
function palindrome() {

}
function reverseOfNum() {

}