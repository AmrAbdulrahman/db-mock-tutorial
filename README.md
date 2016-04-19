# db-mock-tutorial
> This is a demo project to guide you and show you an example of how can
> you use [db-mock](https://www.npmjs.com/package/db-mock)

## run api mocks over db-mock
run **seed** script
```
./node_modules/.bin/db-mock seed
```

run api-mocks
```
node api-mocks/
```

## Implemented APIs
* GET /students
* GET /students/:id
* POST /students
* PUT /students/:id
* DELETE /students/:id
* GET courses/:courseID/students
* GET /courses
* GET /courses/:id
* POST /courses
* PUT /courses/:id
* DELETE /courses/:id
* GET students/:studentID/courses
