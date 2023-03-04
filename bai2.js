/*
Viết chương trình giả mã để thực hiện sắp xếp lại mảng a[1..n] 
theo thứ tự tăng dần mà không dùng hàm sắp xếp mặc định của ngôn ngữ/framework.
*/
const swap = (arr, fristIndex, secondIndex) => {
  let temp = arr[fristIndex];
  arr[fristIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

const sort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

console.log("sort array: ", sort([2, 1, 4, 5, 0, 141, 54]));
