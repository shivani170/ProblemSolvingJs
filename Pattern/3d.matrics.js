let matrix = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   const output = [
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1]
//   ]
//   indices = [
// 	 00, 01, 02
//   10, 11. 12,
//   20. 21, 22
// ]

for (i = 0; i < matrix.length; i++) {
  for (j = 0; j < matrix[i].length; j++) {
    `[ ${i === j ? matrix[i][j] += 1 : matrix[i][j]} ]`
  }
  console.log( matrix[i])


}
