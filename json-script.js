console.clear()

const peopleData = {
    "people": [
      {
        "name": "Олег",
        "age": 25,
        "subject": "математика",
        "grade": 65
      },
      {
        "name": "Марія",
        "age": 25,
        "subject": "математика",
        "grade": 55
      },
      {
        "name": "Іван",
        "age": 25,
        "subject": "математика",
        "grade": 89
      }
    ]
  }

for(let i = 0; i < peopleData.people.length; i++){
    console.log(`Ім'я - ${peopleData.people[i].name} , предмет - ${peopleData.people[i].subject}, оцінка - ${peopleData.people[i].grade} ` )
}
