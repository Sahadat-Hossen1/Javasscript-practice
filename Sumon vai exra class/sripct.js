const students = [
  { id: 1, name: "Alice Johnson", subject: "Mathematics", score: 88 },
  { id: 2, name: "Bob Smith", subject: "Physics", score: 76 },
  { id: 3, name: "Charlie Davis", subject: "Chemistry", score: 92 },
  { id: 4, name: "Diana Evans", subject: "History", score: 85 },
  { id: 5, name: "Ethan Harris", subject: "Biology", score: 64 },
  { id: 6, name: "Fiona Clark", subject: "English", score: 95 },
  { id: 7, name: "George Lewis", subject: "Mathematics", score: 72 },
  { id: 8, name: "Hannah Walker", subject: "Physics", score: 89 },
  { id: 9, name: "Ian Robinson", subject: "Chemistry", score: 81 },
  { id: 10, name: "Julia Martinez", subject: "History", score: 78 },
];

const test=students.flatMap(student=>{
  const subject=student.subject.split(' ');
  return subject.map((sub)=>`${student.name}:${sub}`)
})
// console.log(test);
/* */
//name-sub
/* 
 student.name.map(n=>`${n}={student.subject}`)*/

