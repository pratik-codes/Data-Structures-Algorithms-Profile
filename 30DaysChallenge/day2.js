// question 1 - Rotate matrix
// problem link = https://leetcode.com/problems/rotate-image/

// this is the second and optimal solution

const rotate = (matrix) => {
  // Firstly Transpose The Matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      var Temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = Temp;
    }
  }

  // Secondly Make Reflected Image Of Matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length / 2; j++) {
      var Temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrix.length - j - 1];
      matrix[i][matrix.length - j - 1] = Temp;
    }
  }
};
