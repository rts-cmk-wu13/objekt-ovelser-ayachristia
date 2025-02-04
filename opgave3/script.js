"use strict";

let students = [
  { name: "Sofie", age: 25, course: "Webudvikler" },
  { name: "Lukas", age: 22, course: "Mediegrafiker" },
  { name: "Emil", age: 28, course: "Teknisk designer" },
];

let divEl = document.querySelector(".divEl");
students.forEach((student) => {
  const studentDiv = document.createElement("div");
  studentDiv.classList.add("student");

  const studentHeadline = document.createElement("h2");
  studentHeadline.textContent = student.name;

  const studentInfo = document.createElement("p");
  studentInfo.textContent = `Alder: ${student.age}, Uddannelse: ${student.course}`;
  studentDiv.append(studentHeadline, studentInfo);
  divEl.append(studentDiv);
});
