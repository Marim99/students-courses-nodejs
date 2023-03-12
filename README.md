
# students-courses-nodejs

[Site](https://studentscourses.onrender.com/) 

## technology

- node js
- express 
- mongoose Atlas
- dotenv


### use API
```
npm install
```
```
npm run start
```

### API Endpoints (REST API)
| Courses | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/courses | get all courses |
| GET | /api/v1/courses/:id | get a course by id |
| POST | /api/v1/courses | add course  |
| PATCH | /api/v1/courses/:id | update a course by id  |
| DELETE | /api/v1/courses/:id | delete a course by id |

| Students | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/students | get all students |
| GET | /api/v1/students/:id | get a student by id |
| POST | /api/v1/students | add student  |
| PATCH | /api/v1/students/:id | update a student by id  |
| DELETE | /api/v1/students/:id | delete a student by id |

### student body 

```
{
     "name":"Mariam",
     "address":"alex",
     "age":23
}
```
### Course body
```
{
    "name":"Node js",
    "instructorName":"Hager",
    "duration":15
}
```
### Demo video


https://user-images.githubusercontent.com/78925756/224539116-adfd164a-e379-463c-86c3-fbccc1560aea.mp4


### future plan

- update Student and course on the client side
- student can add course 
- Better handling error


