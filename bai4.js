/* 
Cho 1 chuỗi chỉ bao gồm các ký tự la tinh viết thường (a-z). 
Hãy viết đoạn mã giả mô tả thuật toán tìm ra một chuỗi khác 
bằng cách thay đổi vị trí các ký tự trên chuỗi cũ sao cho chuỗi mới lớn hơn chuỗi cũ theo thứ tự từ điển. 
Trong trường hợp có nhiều kết quả, thì chỉ chọn chuỗi nhỏ nhất trong các kết quả có thể.
*/

/* Thuật toán
B1: lấy ra phần tử đầu tiên trong chuỗi
B2: Chuyển chuỗi thành mảng sau đó sắp xếp mảng
B3: Lọc ra mảng mới những giá trị trong mảng lớn hơn kí tự đầu tiên
B4: Kiểm tra mảng mới có rỗng hay không. Nếu rỗng thì quay lại bước 1 với chuỗi mới ( chuỗi cũ sau khi remove kí tự đầu )
    Nếu mảng không rỗng thì sang B5
B5: Chuyển mảng mới thành set để loại bỏ giá trị trùng lặp và lấy ra giá trị đầu tiên (lowest)
B6: lấy chuỗi cũ remove đi lowest và trả về lowest + chuỗi vừa remove
*/

const text = Math.random()
  .toString(36)
  .replace(/[^A-Za-z]+/g, "")
  .toLowerCase();

const findResult = (text) => {
  const firstChar = text.charAt(0);
  const arrText = text.split("").sort();
  const filterArr = arrText.filter((element) => {
    return element > firstChar;
  });

  if (filterArr.length === 0) {
    return firstChar + findResult(text.replace(firstChar, ""));
  }

  const setText = Array.from(new Set(filterArr));
  const lowest = setText[0];
  const restString = arrText.join("").replace(lowest, "");

  return lowest + restString;
};

console.log("text: ", text);
console.log("result: ", findResult(text));