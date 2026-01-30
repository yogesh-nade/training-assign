use TestDB

db.createCollection("images")
db.createCollection("students")


db.images.insertMany(
[{name:'Sparrow',ext:'jpg',category:'birds',quality:'H',price:2000},
 {name:'Eagle',ext:'png',category:'birds',quality:'M',price:1000},
 {name:'HondaCity',ext:'bmp',category:'cars',quality:'L',price:800},
 {name:'Mango',ext:'jpg',category:'fruits',quality:'H',price:5600},
 {name:'Banana',ext:'png',category:'fruits',quality:'H',price:6000},
 {name:'Maruti800',ext:'jpg',category:'cars',quality:'M',price:2700},
 {name:'Duster',ext:'bmp',category:'cars',quality:'H',price:8400},
 {name:'i20',ext:'png',category:'cars',quality:'M',price:4300},
 {name:'Peacock',ext:'jpg',category:'birds',quality:'L',price:2200},
 {name:'Apple',ext:'bmp',category:'fruits',quality:'L',price:1750}
 
]);


db.students.insertMany(
[{rollNo:10,name:'Mahesh',dob:new Date(Date.UTC(2000,1,20)),email:'mahesh@gmail.com',
    courses:[
                {cid:100,name:'MBA',fee:50000},
                {cid:101,name:'FrenchLang',fee:10000}
            ]    
},
{rollNo:11,name:'Gita',dob:new Date(Date.UTC(2010,4,13)),email:'gita@gmail.com',
    courses:[
                {cid:102,name:'Btech',fee:60000},
                {cid:101,name:'FrenchLang',fee:10000}
            ]    
},

{rollNo:12,name:'Suresh',dob:new Date(Date.UTC(2002,6,25)),email:'suresh@yahoo.com',
    courses:[
                {cid:103,name:'MCA',fee:45000},
                {cid:104,name:'Painting',fee:30000}
            ] 
},
{rollNo:13,name:'Anand',dob:new Date(Date.UTC(2010,4,13)),email:'gita@gmail.com',
    courses:[
               { cid: 102, name: 'Btech', fee: 60000 },
               { cid: 104, name: 'Painting', fee: 30000 }
            ] 
}
]);





// 1. Find total number of images with png extension  
db.images.countDocuments({ ext: "png" })


// 2. Find the total price of all the Medium quality images (quality: 'M') 
db.images.aggregate([
  { $match: { quality: "M" } },
  { $group: { _id: null, totalPrice: { $sum: "$price" } } }
])


// 3. Find the total price of images extension-wise
db.images.aggregate([
  { $group: { _id: "$ext", totalPrice: { $sum: "$price" } } }
])


// 4. Find the costliest image of lowest quality (quality: 'L')
db.images.aggregate([
  { $match: { quality: "L" } },
  { $sort: { price: -1 } },
  { $limit: 1 }
])


// 5. Display total images extension-wise
db.images.aggregate([
  { $group: { _id: "$ext", totalImages: { $sum: 1 } } }
])


// 6. Display name, ext, quality, price in descending order of price
db.images.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      ext: 1,
      quality: 1,
      price: 1
    }
  },
  { $sort: { price: -1 } }
])


// 7. Display names of images for cars or birds category
db.images.find(
  { category: { $in: ["cars", "birds"] } },
  { _id: 0, name: 1 }
)


// 8. Display sum of price category-wise where sum > 10000
db.images.aggregate([
  { $group: { _id: "$category", totalPrice: { $sum: "$price" } } },
  { $match: { totalPrice: { $gt: 10000 } } }
])


// 9. Display the month in which the student Mahesh was born
db.students.aggregate([
  { $match: { name: "Mahesh" } },
  { $project: { month: { $month: "$dob" } } }
])


// 10. Display the year in which Anand was born
db.students.aggregate([
  { $match: { name: "Anand" } },
  { $project: { year: { $year: "$dob" } } }
])


// 11. Display Email of Gita or Mahesh
db.students.find(
  { name: { $in: ["Gita", "Mahesh"] } },
  { _id: 0, name: 1, email: 1 }
)


// 12. Display names of students paying fee ≥ 50000
db.students.find(
  { "courses.fee": { $gte: 50000 } },
  { _id: 0, name: 1 }
)


// 13. Display course names for Suresh and Anand
db.students.aggregate([
  { $match: { name: { $in: ["Suresh", "Anand"] } } },
  { $unwind: "$courses" },
  {
    $project: {
      _id: 0,
      studentName: "$name",
      courseName: "$courses.name"
    }
  }
])


// 14. Display names of students enrolled in ‘Painting’
db.students.find(
  { "courses.name": "Painting" },
  { _id: 0, name: 1 }
)


// 15. Display name and total fee paid by each student
db.students.aggregate([
  { $unwind: "$courses" },
  {
    $group: {
      _id: "$name",
      totalFeePaid: { $sum: "$courses.fee" }
    }
  }
])
