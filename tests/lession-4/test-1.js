// //Quiz 01: 1. Khởi động Tàu Vũ trụ K11
// Để bắt đầu hành trình, bạn cần khởi động Tàu Vũ trụ K11 bằng cách tạo một chương trình
// JavaScript thực hiện các yêu cầu sau:
// - Hành tinh khởi đầu: Tạo một biến departurePlanet với giá trị "Trái Đất".
// - Nhiệm vụ: Tạo một biến mission với giá trị "Khám phá Vũ trụ K11".
// - Phi hành đoàn: Tạo một mảng crew chứa tên các thành viên phi hành đoàn: Tên các
// thành viên trong lớp.
// - Khởi động Tàu: Viết một hàm launchShip nhận mảng crew làm đầu vào và trả về
// một thông điệp "Chuẩn bị khởi động! Phi hành đoàn gồm: <danh sách
// tên thành viên phi hành đoàn> sẽ đồng hành cùng bạn trong chuyến
// phiêu lưu <mission>!".
// - Kết nối với Trung tâm Điều khiển: Gọi hàm launchShip và in thông điệp chào mừng ra
// console.


let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K11";
const crew = ["Thao", "Tien", "Dung", "Bernie"]

function launchShip(arr) {
    let arrToStr = arr.toString();
    let welcomeMessage = `Chuẩn bị khởi động! Phi hành đoàn gồm: ${arrToStr} sẽ đồng hành cùng bạn trong chuyến phiêu lưu ${mission} !`;
    return welcomeMessage;
};

console.log(launchShip(crew));

// Quiz 02: Tàu vũ trụ K11 của bạn đã cất cánh và đang trên đường đến một hành tinh bí ẩn. Để điều
// hướng chính xác, bạn cần viết một hàm calculateDistance để tính toán khoảng cách đến
// hành tinh đó.
// Hàm calculateDistance nhận hai tham số là speed (tốc độ tàu vũ trụ) và time (thời gian
// di chuyển) và trả về khoảng cách tính toán được.
// Sau đó, gọi hàm calculateDistance với tốc độ 1000km/h và thời gian 24 giờ và in kết
// quả ra console.

function calculateDistance(speed, time) {
    let distance = speed * time;
    return distance;
};

console.log(calculateDistance(1000, 24));

// //Quiz 03: Tàu vũ trụ K11 đã đến được hành tinh bí ẩn. Hành tinh này có một đặc điểm rất thú vị: thời gian
// trên hành tinh này được tính theo hệ thập lục phân (hexadecimal).
// Bạn cần viết một hàm convertTimeToHex để chuyển đổi thời gian từ hệ thập phân (decimal)
// sang hệ thập lục phân. Hàm này nhận một tham số là time (thời gian) và trả về giá trị thời
// gian đã được chuyển đổi sang hệ thập lục phân.
// Sau đó, gọi hàm convertTimeToHex với thời gian là 120 giây và in kết quả ra console.

function convertTimeToHex(timeDecimal) {
    let timeHexDecimal = timeDecimal.toString(16);
    return timeHexDecimal;
}

console.log(convertTimeToHex(120));

// Quiz 04: Hành tinh bí ẩn này ẩn chứa một kho báu vô giá. Để tìm được kho báu, bạn cần giải mã một
// dãy mật mã.
// Mật mã được tạo thành từ các chữ cái viết thường và chữ cái viết hoa, cách nhau bởi dấu
// cách.
// Bạn cần viết một hàm decryptCode để giải mã mật mã. Hàm này nhận một tham số là code
// (mật mã) và trả về mật mã đã được giải mã. Quy tắc giải mã như sau:
// - Chữ cái viết thường sẽ được chuyển thành chữ cái viết hoa.
// - Chữ cái viết hoa sẽ được chuyển thành chữ cái viết thường.
// - Ví dụ: Decrypt Code sẽ được giải mã thành dECRYPT cODE.

function decryptCode(code) {
    for (let character of code)
};