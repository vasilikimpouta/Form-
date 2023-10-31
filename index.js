const authorContainer = document.getElementById("writer");
const subject = document.getElementById("subject");
const titleIndex = document.getElementById("post");
const btnSubmit = document.getElementById("btnSubmit");
const btnAddUnit = document.getElementById("addUnit");
const listSubject = document.getElementById("unit-list");
const addBtn = document.getElementById("add-btn");
const removeBtn = document.getElementById("remove-btn");
const subjectSelect = document.getElementById("subject-select");
const submittedResult = document.getElementById("submitted-result");

btnAddUnit.addEventListener("click", showUnitsList);
btnSubmit.addEventListener("click", GetAuthorAndTittle);
addBtn.addEventListener("click", addToSubject);
removeBtn.addEventListener("click", removeFromSubject);

function addToSubject() {
  subject.value = subjectSelect.value;
}

function removeFromSubject() {
  subject.value = null;
}

function GetAuthorAndTittle() {
  const tittle = titleIndex.value;
  const author = authorContainer.value;
  const sub = subject.value;

  submittedResult.innerHTML = `
  <b> the form has been submitted! </b><br>
  <div> Your post:" ${tittle} "</div>
  <div> Name:${author}</div>
  <div> Related to subject:${sub}</div>

  `;
}

function showUnitsList() {
  listSubject.hidden = !listSubject.hidden;
}
