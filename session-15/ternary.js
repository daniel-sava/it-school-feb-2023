var examGrade = 5;

var examResult = examGrade >= 5 ? 'Passed' : 'Failed';

var examResultDetailed = examGrade >= 6 ? 'Passed' : examGrade < 5 ? 'Failed' : 'Retake';

console.log(examResult);
console.log(examResultDetailed);
