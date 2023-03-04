/*
Có 2 con kangaroo cùng nhảy theo chiều dương trên 1 trục toạ độ x.
Giả định cả 2 nhảy được số bước giống nhau trong các khoảng thời gian bằng nhau,
xuất phát tại cùng 1 thời điểm từ vị trí lần lượt là x1 và x2, mỗi lần nhảy xa tương ứng v1 và v2 đơn vị.
Hãy viết đoạn mã giả để kiểm tra xem có tồn tại thời điểm nào 2 chú kangaroo gặp nhau ở cùng 1 vị trí x hay không.
*/

const calculate = (x1, x2, v1, v2) => {
  let position1 = x1;
  let position2 = x2;
  let step = 0;

  while (position1 < position2) {
    step++;

    position1 += v1;
    position2 += v2;

    if (position1 == position2) {
      return {
        step,
        result: true,
      };
    }
  }

  return false;
};

console.log(calculate(0, 3, 4, 2));
