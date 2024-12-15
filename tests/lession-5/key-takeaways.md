
## DOM terminology

- Thẻ Mở Thẻ Đóng - dùng cho các phần tử chứa nội dung hoặc chứa các phần tử khác.

- Thẻ tự đóng - dùng khi không có nội dung trong thẻ 

Thuộc tính - giá trị thuộc tính


***Các thẻ html thường gặp***

![thẻ html thường gặp](<Ảnh màn hình 2024-12-14 lúc 21.03.34.png>)



## Selector

- Cách để chọn các phần tử trên trang

- 3 kiểu selector phổ biến:
    - Xpath selector
    - CSS selector
    - Playwright selector


**Xpath Selector**

- Có 2 loại Xpath:
    - Tuyệt đối: đi dọc theo cây DOM; bắt đầu bằng /
    - Tương đối: tìm dựa vào đặc tính; bắt đầu bằng //
        // tenthe[@thuoctinh='gia tri']

    - Nên lấy theo Xpath tương đối 



## Basic Playwright Syntax

- Test - đơn vị cơ bản; khao báo test: 
![Khai báo test](<Ảnh màn hình 2024-12-14 lúc 21.29.47.png>)

- Step - đơn vị nhỏ hơn của test, dùng để phai báo từng step:
![Khai báo step](<Ảnh màn hình 2024-12-14 lúc 21.34.28.png>)


**Basic action**
- Navigate 
![Khai báo navigate](<Ảnh màn hình 2024-12-14 lúc 21.37.24.png>)

- Click - có 4 kiểu click: single, double, phấn trái/phải, phấn kèm phím khác
![Khai báo 4 kiểu click](<Ảnh màn hình 2024-12-14 lúc 21.45.47.png>)

- Input 
    - Fill - copy/ paste vào ô 
    - pressSequentially - Nhập từng kí tự 
![Khái báo input](<Ảnh màn hình 2024-12-14 lúc 21.51.40.png>)

- Radio / Checkbox
    - gồm 2 step: 
        - check status hiện tại check/uncheck
        - action với phần tử uncheck / check
![Check/uncheck flow](<Ảnh màn hình 2024-12-14 lúc 22.02.21.png>)

- Select Option
![Khai báo Select Option](<Ảnh màn hình 2024-12-15 lúc 13.30.08.png>)

- Set input file 
![Khai báo input file](<Ảnh màn hình 2024-12-15 lúc 13.33.39.png>)