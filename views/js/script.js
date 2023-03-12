const allStudents = document.querySelector("#all-stu");
const student = document.querySelector("#stu");
const createStudents = document.querySelector("#create-stu");
const allCourses = document.querySelector("#all-cour");
const course = document.querySelector("#cour");
const createCourse = document.querySelector("#create-cour");
const sideDataContainer = document.querySelector(".side-data-container");
/**---------------------students--------------------------- */

sideDataContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-icon")) {
    let id = e.target.parentElement.parentElement.dataset.id;
    if (
      e.target.parentElement.parentElement.classList.contains(
        "course-contanier-card"
      )
    )
      deleteData(`/api/v1/courses/${id}`);
    else if (
      e.target.parentElement.parentElement.classList.contains(
        "student-contanier-card"
      )
    ) {
      deleteData(`/api/v1/students/${id}`);
    }
  }
});

/** */
allStudents.addEventListener("click", getAllStudents);
student.addEventListener("click", () => {
  getID();
  document
    .querySelector(".form-container-search")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      let id = document.querySelector("#sID").value;
      getStudents(id);
    });
});
createStudents.addEventListener("click", () => {
  createStudent();

  document.querySelector(".form-container").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#sname").value;
    let age = +document.querySelector("#sage").value;
    let address = document.querySelector("#saddress").value;
    console.log(name, age, address);
    postData("/api/v1/students", { name, age, address });
  });
});

function getID() {
  let html = `
<div class="form-container-search">
<form method="POST">
<label for="sname">Student ID:</label><br>
  <input id="sID" name="sname" type="text" required>
  <br>
  <input class="search-btn" type="submit" value="Search">
</form>
</div>
`;
  sideDataContainer.innerHTML = "";
  sideDataContainer.insertAdjacentHTML("afterbegin", html);
}
function getStudents(id) {
  fetchData(`/api/v1/students/${id}`).then((data) => {
    let student = data.data.student;
    if (student) {
      let html = `
    <div class="student-contanier-card" data-id=${student._id}>
    <div class="icons">

    <span class="delete-icon">🗑️</span>
    </div>
     <h4>Student Name: ${student.name}</h4>
     <p>Student ID: ${student._id}</p>
        <p>Age: ${student.age}</p>
        <span>Address ${student.address}</span>  
    </div>
    `;
      sideDataContainer.insertAdjacentHTML("afterbegin", html);
    }
  });
  sideDataContainer.innerHTML = "";
}
function getAllStudents() {
  fetchData("/api/v1/students").then((data) => {
    data.data.students.forEach((stu) => {
      let html = `
    <div class="student-contanier-card" data-id=${stu._id}>
    <div class="icons">
    <span class="delete-icon">🗑️</span>
    </div>
     <h4>Student Name: ${stu.name}</h4>
     <p>Student ID: ${stu._id}</p>
        <p>Age: ${stu.age}</p>
        <span>Address ${stu.address}</span>  
    </div>
    `;
      sideDataContainer.insertAdjacentHTML("afterbegin", html);
    });
  });
  sideDataContainer.innerHTML = "";
}
function createStudent() {
  let html = `
    <div class="form-container">
    <form method="POST">
    <label for="sname">Student name:</label><br>
      <input id="sname" name="sname" type="text"required>
      <br>
      <label for="sage">Student age:</label><br>
      <input id="sage" name="sage" type="text" required>
      <br>
      <label for="saddress">Student Address:</label><br>
      <input id="saddress" name="saddress" type="text"required>
      <br>
      <input class="submit-btn" type="submit" value="ADD">
    </form>
    </div>
    `;
  sideDataContainer.innerHTML = "";
  sideDataContainer.insertAdjacentHTML("afterbegin", html);
}

/**---------------------Course--------------------------- */

allCourses.addEventListener("click", getAllCourses);
course.addEventListener("click", () => {
  getCourseID();
  document
    .querySelector(".form-container-search")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      let id = document.querySelector("#cID").value;
      getCourse(id);
    });
});
createCourse.addEventListener("click", () => {
  createCourseSec();

  document.querySelector(".form-container").addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.querySelector("#cname").value;
    let instructorName = document.querySelector("#cinstructorName").value;
    let duration = +document.querySelector("#cduration").value;

    postData("/api/v1/courses", { name, instructorName, duration });
  });
});

function getCourseID() {
  let html = `
<div class="form-container-search">
<form method="POST">
<label for="cname">Course ID:</label><br>
  <input id="cID" name="cname" type="text" required>
  <br>
  <input class="search-btn" type="submit" value="Search">
</form>
</div>
`;
  sideDataContainer.innerHTML = "";
  sideDataContainer.insertAdjacentHTML("afterbegin", html);
}
function getCourse(id) {
  fetchData(`/api/v1/courses/${id}`).then((data) => {
    let course = data.data.course;
    console.log(course);
    if (course) {
      let html = `
    <div class="course-contanier-card" data-id=${course._id}>
    <div class="icons">
    <span class="delete-icon">🗑️</span>
    </div>
     <h4>course Name: ${course.name}</h4>
     <p>course ID: ${course._id}</p>
        <p>InstructorName: ${course.instructorName}</p>
        <span>Duration ${course.duration}</span>  
    </div>
    `;
      sideDataContainer.insertAdjacentHTML("afterbegin", html);
    }
  });
  sideDataContainer.innerHTML = "";
}
function getAllCourses() {
  fetchData("/api/v1/courses").then((data) => {
    data.data.courses.forEach((course) => {
      let html = `
    <div class="course-contanier-card" data-id=${course._id}>
    <div class="icons">
    <span class="delete-icon">🗑️</span>
    </div>
     <h4>Course Name: ${course.name}</h4>
     <p>Course ID: ${course._id}</p>
        <p>InstructorName: ${course.instructorName}</p>
        <span>Duration ${course.duration}</span>  
    </div>
    `;
      sideDataContainer.insertAdjacentHTML("afterbegin", html);
    });
  });

  sideDataContainer.innerHTML = "";
}
function createCourseSec() {
  let html = `
    <div class="form-container">
    <form method="POST">
    <label for="cname">Course name:</label><br>
      <input id="cname" name="cname" type="text"required>
      <br>
      <label for="cduration">Course Duration:</label><br>
      <input id="cduration" name="cduration" type="text" required>
      <br>
      <label for="cinstructorName">Cousre InstructorName:</label><br>
      <input id="cinstructorName" name="cinstructorName" type="text"required>
      <br>
      <input class="submit-btn" type="submit" value="ADD">
    </form>
    </div>
    `;
  sideDataContainer.innerHTML = "";
  sideDataContainer.insertAdjacentHTML("afterbegin", html);
}

async function fetchData(url) {
  let response = await fetch(url); //fetch data by url
  let fetchedData = await response.text();
  let data = JSON.parse(fetchedData);
  return data;
}

async function postData(url, data) {
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((response) => {
      location.reload();
    });
}
async function deleteData(url) {
  await fetch(url, {
    method: "delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    // .then((response) => response.json())
    .then((response) => {
      location.reload();
    });
}
