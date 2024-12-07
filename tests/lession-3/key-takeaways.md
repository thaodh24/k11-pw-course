# **DAY 3 03/12/2024**

## **GIT**

### **GIT commands**

1. Git log - check lịch sử commit
2. Git commit --amend - Thay đổi message của commit -> Vào màn mới
   - Gõ i -> vào chế độ insert
   - Gõ esc để thoát insert
   - Gõ " :wq" -> write and quit
        git commit --amend -m "message"
3. Git restore --staged <fileName> - Đưa file từ vùng staging -> working directory
4. Git reset HEAD~<số lượng commit> - Đưa số commit gần nhất từ vùng repository -> working directory


### **Branching Model **

- Dùng branch để tạo ra vùng làm việc mới, không ảnh hưởng tới vùng làm việc đã ổn định.

*Git commands với branch*
- Git branch <Ten_branch> - tạo nhánh mới
- Git checkout <Ten_branch> - chuyển sang làm việc ở nhánh chỉ định
- Git checkout -b <Ten_branch> - tạo nhánh mới và gộp nhánh cũ vào nhánh mới.

*Tips* : Luôn tạo nhánh mới trước khi thực hiện một lệnh copy từ internet


***.gitignore file ***
- Dùng để bỏ qua các file k cần git theo dõi
- Khi ignore folder: gọi path của folder đó kèm dấu / để ignore toàn bộ file trong folder.




## **JAVASCRIPT ADVANCE**

**convention**
- snake_case: chưa dùng
- kebab-case: tên file
- camelCase: tên biến
- PascalCase: tên class


**Formatted console.log**
- console.log('toi ten la ${nameVariable} ')
- console log("toi ten la " + nameVariable + " ")


**Object**
- Đối tượng dùng để lưu trữ tập hợp các giá trị vào cùng 1 **biến** hoặc **hằng số**
- Khai báo:  
    let/const <ten_object> = {<thuoc_tinh>: <gia tri>} trong đó:
        - <thuoc_tinh>: giống quy tắc đặt tên biến
        - <gia_tri> có kiểu giống biến, hoặc là một object khác
- Sử dụng:
- Gán lại: 


**Logical operator**
- && - cả hai mệnh đề đều đúng
- || - một trong hai mệnh đề đúng
- ! - đảo ngược lại giá trị của mệnh đề


**Array**
- Tạo mảng
- Truy xuất mảng:
    - Độ dài mảng: length
    - Lấy theo index: [0], [1], [2]


**Function**
- Là một đoạn code được đặt tên và có thể tái sử dụng, thực hiện 1 nhiệm vụ hoặc tính toán cụ thể.
- Khai báo: 
    function <nameFunction> () {
        //code
    }
- Parameter
- Return value
