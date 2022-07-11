// khai náo biến
// đặt biến tên fullname, sau đó đưa giá trị Tran Ca Phu vào
// var fullname = 'Tran Ca Phu'; //khai báo tên
// var age = '23'; //khai báo tuoi

// Gọi hàm thông báo
// alert này tại 1 thời điểm nó sẽ hiển thị một cái thôi khi mà tắt 1 cái đầu đi nó sẽ hiển thị 1 cái alert kế tiếp
// alert(fullname); //thông báo tên
// alert(age); //thông báo tuổi

// Ví dụ console
// var fullname = 'Tran Ca Phu';

// in ra dòng chữ thông báo trên devtool
// console.log(fullname)

// in ra cảnh báo trên devtool
// console.warn(fullname)

// in ra lỗi trên devtool
// console.error(fullname)

// Ví dụ confirm
// confirm tạo ra nút cancel và oke trên màn hình
// confirm('Xac nhan ban du tuoi');

// Ví dụ prompt
// sẽ mỡ ra hộp thoại có dòng input để ta nhập vào(còn có 2 nút cancel và ok)
// prompt('Xac nhan ban du tuoi');

// Ví dụ setTimeout
/**
 * Đối tượng truyền vào là 1 function
 * Cho một đoạn code được chạy trong một khoảng thời gian(1000ms = 1s)
 * Nếu mà cho thời gian lâu thì thời hiên thị sẽ lâu theo
 * setTimeout(function () {
    alert('Thông báo')
}, 1000)
 */

// Ví dụ setInterval
// nó cũng như setTimeout khác ở chỗ nó xuất ra 1 thông báo trong một giây và xuất ra nhiều thông báo
setInterval(function () {
    console.log('Đây là log' + Math.random())
}, 1000)