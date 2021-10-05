"use strict";

const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2020-01-24",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-01-24",
    passed: true,
  },
];
// console.log(submissions);

// 2
const addSubmission = (array, newName, newScore, newDate) => {
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60,
  };
  array.push(newSubmission);
};
// addSubmission(submissions, "Sara", 100, "2020-20-12");
// console.log(submissions);

// // 3
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};
// deleteSubmissionByIndex(submissions, 3);
// console.log(submissions);

// // 4
const deleteSubmissionByName = (array, name) => {
  let index = array.findIndex((item) => {
    return item.name === name;
  });
  array.splice(index, 1);
};
// deleteSubmissionByName(submissions, "Sara");
// console.log(submissions);

// 5
const editSubmission = (array, index, score) => {
  array[index].score = score;
  array[index].passed = score >= 60;
};
// editSubmission(submissions, 1, 88);
// console.log(submissions);

// 6
const findSubmissionByName = (array, name) => {
  return array.find((item) => {
    return item.name === name;
  });
};
// console.log(findSubmissionByName(submissions, "Jill"));

// 7!!!!!! undefined
const findLowestScore = (array) => {
  let currentLowest = array[0];
  array.forEach((item) => {
    if (item.score < currentLowest.score) {
      currentLowest = item;
    }
    return currentLowest;
  });
};

// console.log(findLowestScore(submissions));

// 8
const findAverageScore = (array) => {
  let sum = 0;
  array.forEach((item) => {
    sum += item.score / array.length;
  });
  return sum;
};
// console.log(findAverageScore(submissions));

// 9
const filterPassing = (array) => {
  return array.filter((item) => {
    return item.passed;
  });
};

// console.log(filterPassing(submissions));

// 10
const filter90AndAbove = (array) => {
  return array.filter((item) => {
    return item.score >= 90;
  });
};
// console.log(filter90AndAbove(submissions));

// const filterByNameLength = (array, length) => {
//   return array.filter((item) => {
//     return (item.name.length = length);
//   });
// };

// console.log(filterByNameLength(submissions, 4));
