/**
 * toán tử And này được hiểu xét từ trái qua phải nếu không thuộc trong 6 giá trị false(null,'',0,false,NaN,underfine), 
 * thì nó sẽ in ra giá trị bên phải cuối
 * còn nếu mà nó thuộc một trong 6 giá trị false thì in ra giá trị đó lun(giá trị mà ta nhập thuộc 6 giá trị false)
 */
var result = 'A' && 'B' && 'C';
console.log(result);


if (rseult){
    console.log('Dieu kien dung');
} else{
    console.log('Dieu kien sai');
}