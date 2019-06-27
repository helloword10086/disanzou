// ali  14.6  2.6
//  meituan 16 4
// 51信用卡
// S  5
// A  3
// B  2
// c  1
let stratigies = {
    's':function(salary){
        return salary * 5;
    },
    'A':function(salary){
        return salary * 3;
    },
    'B':function(salary){
        return salary * 2;
    },
    'C':function(salary){
        return salary * 1;
    }
}
function calculate(level,salary) {
    return  stratigies[level](salary);//变量使用[]访问常量使用.
    // this.level = level;
    // this.salary = salary;
    // if(level == S)
    // return salary *5;
    // if(level == A)
    // return  salary*3;
    // if(level == B )
    // return salary * 2;
}