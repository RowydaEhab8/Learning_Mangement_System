import express from "express"
const app = express()

app.get("/", (request, response) => {
    response.send("<h1>Andrew Nazeh Aziz</h1>")
})

const studentsInfo = [
    {
        id: 200178,
        name: "Andrew Nazeh",
        city: "Mahalla"
    },
    {
        id: 200178,
        name: "Andrew Nazeh",
        city: "Mahalla"
    },
    {
        id: 200178,
        name: "Andrew Nazeh",
        city: "Mahalla"
    },
    {
        id: 200178,
        name: "Andrew Nazeh",
        city: "Mahalla"
    }

]

const students = (request, response) => {

    let items = "<ul>"
    studentsInfo.forEach(element => {
        items += "<li> ID:" + element.id + "</li>"
        items += "<li> Name:" + element.name + "</li>"
        items += "<li> City:" + element.city + "</li><br><br>"
    });
    items += "</ui>"

    response.send(items)
}
app.get("/students", students)


app.listen(5000)
