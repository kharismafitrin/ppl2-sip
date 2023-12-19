import request from 'supertest';
import app from '../index.js';

const userApi = describe('User API', () => {
//   it('should get all users', async () => {
//     const response = await request(app).get('/users')
//     expect(response.status).toBe(200)
//     expect(response.body).toEqual([
//         {
//             "_id": "654bab4e1d8047f787a1736e",
//             "name": "Admin User",
//             "email": "admin@example.com",
//             "no_telp": "9876543210",
//             "roles": "admin",
//             "__v": 0,
//             "createdAt": "2023-11-08T15:37:50.903Z",
//             "updatedAt": "2023-11-29T05:05:25.380Z"
//         },
//         {
//             "_id": "65521297ffe27231eab2ce59",
//             "name": "John Doe",
//             "email": "johndoe@example.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-13T12:12:07.307Z",
//             "updatedAt": "2023-11-13T12:12:07.307Z",
//             "__v": 0
//         },
//         {
//             "_id": "6552140effe27231eab2ce63",
//             "name": "Jane Doe",
//             "email": "janedoe@example.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-13T12:18:22.208Z",
//             "updatedAt": "2023-11-13T12:18:22.208Z",
//             "__v": 0
//         },
//         {
//             "_id": "655216c2ffe27231eab2ce6e",
//             "name": "sauscabe",
//             "email": "sauscabe@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-13T12:29:54.371Z",
//             "updatedAt": "2023-11-13T12:29:54.371Z",
//             "__v": 0
//         },
//         {
//             "_id": "655219c3ffe27231eab2ce73",
//             "name": "fruittea",
//             "email": "fruittea@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-13T12:42:43.346Z",
//             "updatedAt": "2023-11-13T12:42:43.346Z",
//             "__v": 0
//         },
//         {
//             "_id": "65521b8dffe27231eab2ce79",
//             "name": "goodday",
//             "email": "goodday@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-13T12:50:21.553Z",
//             "updatedAt": "2023-11-13T12:50:21.553Z",
//             "__v": 0
//         },
//         {
//             "_id": "65521cd9ffe27231eab2ce7b",
//             "name": "supakatsu",
//             "email": "supakatsu@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-13T12:55:53.922Z",
//             "updatedAt": "2023-11-13T12:55:53.922Z",
//             "__v": 0
//         },
//         {
//             "_id": "65521d13ffe27231eab2ce7d",
//             "name": "lemonilo",
//             "email": "lemonilo@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-13T12:56:51.664Z",
//             "updatedAt": "2023-11-13T12:56:51.664Z",
//             "__v": 0
//         },
//         {
//             "_id": "65521dd8ffe27231eab2ce80",
//             "name": "airputih",
//             "email": "airputih@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-13T13:00:08.199Z",
//             "updatedAt": "2023-11-13T13:00:08.199Z",
//             "__v": 0
//         },
//         {
//             "_id": "6552f01a6444c5f49dacab2e",
//             "name": "mouse",
//             "email": "mouse@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T03:57:14.369Z",
//             "updatedAt": "2023-11-14T03:57:14.369Z",
//             "__v": 0
//         },
//         {
//             "_id": "6552fe8c6444c5f49dacab33",
//             "name": "pancong",
//             "email": "pancong@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T04:58:52.411Z",
//             "updatedAt": "2023-11-14T04:58:52.411Z",
//             "__v": 0
//         },
//         {
//             "_id": "6553230529e026ca0e96884f",
//             "name": "cappucino",
//             "email": "cappucino@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T07:34:29.554Z",
//             "updatedAt": "2023-11-14T07:34:29.554Z",
//             "__v": 0
//         },
//         {
//             "_id": "6553260029e026ca0e968855",
//             "name": "latte",
//             "email": "latte@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T07:47:12.150Z",
//             "updatedAt": "2023-11-14T07:47:12.150Z",
//             "__v": 0
//         },
//         {
//             "_id": "6553272829e026ca0e968857",
//             "name": "ayam",
//             "email": "ayam@gmail.com",
//             "no_telp": "123456789",
//             "roles": "user",
//             "createdAt": "2023-11-14T07:52:08.525Z",
//             "updatedAt": "2023-11-14T07:52:08.525Z",
//             "__v": 0
//         },
//         {
//             "_id": "6553280529e026ca0e968859",
//             "name": "kipas",
//             "email": "kipas@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T07:55:49.717Z",
//             "updatedAt": "2023-11-14T07:55:49.717Z",
//             "__v": 0
//         },
//         {
//             "_id": "655329be29e026ca0e96885b",
//             "name": "kunci",
//             "email": "kunci@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:03:10.423Z",
//             "updatedAt": "2023-11-14T08:03:10.423Z",
//             "__v": 0
//         },
//         {
//             "_id": "655329ff29e026ca0e96885d",
//             "name": "angin",
//             "email": "angin@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:04:15.229Z",
//             "updatedAt": "2023-11-14T08:04:15.229Z",
//             "__v": 0
//         },
//         {
//             "_id": "655331c329e026ca0e96885f",
//             "name": "mukena",
//             "email": "mukena@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:37:23.978Z",
//             "updatedAt": "2023-11-14T08:37:23.978Z",
//             "__v": 0
//         },
//         {
//             "_id": "6553346c8b2caff59cfbe487",
//             "name": "kopi",
//             "email": "kopi@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:48:44.444Z",
//             "updatedAt": "2023-11-14T08:48:44.444Z",
//             "__v": 0
//         },
//         {
//             "_id": "655334a98b2caff59cfbe48b",
//             "name": "cape",
//             "email": "cape@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:49:45.719Z",
//             "updatedAt": "2023-11-14T08:49:45.719Z",
//             "__v": 0
//         },
//         {
//             "_id": "655334cd8b2caff59cfbe491",
//             "name": "kuda",
//             "email": "kuda@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:50:21.137Z",
//             "updatedAt": "2023-11-14T08:50:21.137Z",
//             "__v": 0
//         },
//         {
//             "_id": "655335778b2caff59cfbe493",
//             "name": "paket",
//             "email": "paket@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:53:11.209Z",
//             "updatedAt": "2023-11-14T08:53:11.209Z",
//             "__v": 0
//         },
//         {
//             "_id": "655335e28b2caff59cfbe499",
//             "name": "pedes",
//             "email": "pedes@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:54:58.482Z",
//             "updatedAt": "2023-11-14T08:54:58.482Z",
//             "__v": 0
//         },
//         {
//             "_id": "655335fb8b2caff59cfbe49d",
//             "name": "pusing",
//             "email": "pusing@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:55:23.945Z",
//             "updatedAt": "2023-11-14T08:55:23.945Z",
//             "__v": 0
//         },
//         {
//             "_id": "655336db8b2caff59cfbe4a1",
//             "name": "kucing",
//             "email": "kucing@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T08:59:07.072Z",
//             "updatedAt": "2023-11-14T08:59:07.072Z",
//             "__v": 0
//         },
//         {
//             "_id": "655337998b2caff59cfbe4a3",
//             "name": "sampah",
//             "email": "sampah@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T09:02:17.650Z",
//             "updatedAt": "2023-11-14T09:02:17.650Z",
//             "__v": 0
//         },
//         {
//             "_id": "655339628b2caff59cfbe4b7",
//             "name": "makan",
//             "email": "makan@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T09:09:54.385Z",
//             "updatedAt": "2023-11-14T09:09:54.385Z",
//             "__v": 0
//         },
//         {
//             "_id": "65533cfc8b2caff59cfbe4c2",
//             "name": "stress",
//             "email": "stress@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T09:25:16.237Z",
//             "updatedAt": "2023-11-14T09:25:16.237Z",
//             "__v": 0
//         },
//         {
//             "_id": "65533f5a6fe504bd203099e2",
//             "name": "hujan",
//             "email": "hujan@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-14T09:35:22.708Z",
//             "updatedAt": "2023-11-14T09:35:22.708Z",
//             "__v": 0
//         },
//         {
//             "_id": "65537ca91863592ffc5986e4",
//             "name": "nandaraihan",
//             "email": "nandaraihansukma@gmail.com",
//             "no_telp": "082215491219",
//             "roles": "user",
//             "createdAt": "2023-11-14T13:56:57.275Z",
//             "updatedAt": "2023-11-14T13:56:57.275Z",
//             "__v": 0
//         },
//         {
//             "_id": "6556465986aea44408bf3037",
//             "name": "begel",
//             "email": "begel@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-16T16:42:01.482Z",
//             "updatedAt": "2023-11-16T16:42:01.482Z",
//             "__v": 0
//         },
//         {
//             "_id": "6557575a532f710f9da3b7f6",
//             "name": "nugetpisang",
//             "email": "nugetpisang@gmail.com",
//             "no_telp": "1234567890",
//             "roles": "user",
//             "createdAt": "2023-11-17T12:06:50.453Z",
//             "updatedAt": "2023-11-17T12:06:50.453Z",
//             "__v": 0
//         },
//         {
//             "_id": "65575879532f710f9da3b7fe",
//             "name": "coklat",
//             "email": "coklat@gmail.com",
//             "no_telp": "123412341234",
//             "roles": "admin",
//             "createdAt": "2023-11-17T12:11:37.093Z",
//             "updatedAt": "2023-11-29T05:12:27.735Z",
//             "__v": 0
//         },
//         {
//             "_id": "65578d2257b74e95ff74526d",
//             "name": "botol",
//             "email": "botol@gmail.com",
//             "no_telp": "123456789101",
//             "roles": "user",
//             "createdAt": "2023-11-17T15:56:18.404Z",
//             "updatedAt": "2023-11-17T15:56:18.404Z",
//             "__v": 0
//         },
//         {
//             "_id": "655b8ece7ef47be2b33d3fa8",
//             "name": "jus",
//             "email": "jus@gmail.com",
//             "no_telp": "123412341234",
//             "roles": "user",
//             "createdAt": "2023-11-20T16:52:30.038Z",
//             "updatedAt": "2023-11-20T16:52:30.038Z",
//             "__v": 0
//         },
//         {
//             "_id": "6566afb7a39ddd89038e4470",
//             "name": " bantal",
//             "email": "bantal@gmail.com",
//             "no_telp": "123412341234",
//             "roles": "user",
//             "createdAt": "2023-11-29T03:27:51.603Z",
//             "updatedAt": "2023-11-29T03:27:51.603Z",
//             "__v": 0
//         },
//         {
//             "_id": "6566bbf5a39ddd89038e479c",
//             "name": "laptop",
//             "email": "laptop@gmail.com",
//             "no_telp": "123412341234",
//             "roles": "user",
//             "createdAt": "2023-11-29T04:20:05.967Z",
//             "updatedAt": "2023-11-29T04:20:05.967Z",
//             "__v": 0
//         },
//         {
//             "_id": "6566bd13a39ddd89038e4913",
//             "name": "sarung",
//             "email": "sarung@gmail.com",
//             "no_telp": "123412341234",
//             "roles": "admin",
//             "createdAt": "2023-11-29T04:24:51.784Z",
//             "updatedAt": "2023-11-29T04:24:51.784Z",
//             "__v": 0
//         },
//         {
//             "_id": "6566bda7a39ddd89038e49dc",
//             "name": "plastik hitam",
//             "email": "plastik.hitam@gmail.com",
//             "no_telp": "123412341234",
//             "roles": "admin",
//             "createdAt": "2023-11-29T04:27:19.499Z",
//             "updatedAt": "2023-11-29T12:17:43.380Z",
//             "__v": 0
//         },
//         {
//             "_id": "6566c05ba39ddd89038e4dae",
//             "name": "kotak",
//             "email": "kotak@gmail.com",
//             "no_telp": "123412341234",
//             "roles": "admin",
//             "createdAt": "2023-11-29T04:38:51.309Z",
//             "updatedAt": "2023-11-29T12:18:09.881Z",
//             "__v": 0
//         },
//         {
//             "_id": "6566c175a39ddd89038e5069",
//             "name": "hp",
//             "email": "hp@gmail.com",
//             "no_telp": "123412341234",
//             "roles": "admin",
//             "createdAt": "2023-11-29T04:43:33.478Z",
//             "updatedAt": "2023-11-29T13:53:16.604Z",
//             "__v": 0
//         },
//         {
//             "_id": "6575f26c1902feb86832cf71",
//             "name": "admin",
//             "email": "admin@gmail.com",
//             "no_telp": "082119017826",
//             "roles": "admin",
//             "createdAt": "2023-12-10T17:16:28.274Z",
//             "updatedAt": "2023-12-10T17:16:28.274Z",
//             "__v": 0
//         },
//         {
//             "_id": "6575f34d1902feb86832cf74",
//             "name": "kharisma",
//             "email": "kharisma@gmail.com",
//             "no_telp": "028192018732",
//             "roles": "admin",
//             "createdAt": "2023-12-10T17:20:13.237Z",
//             "updatedAt": "2023-12-10T17:20:13.237Z",
//             "__v": 0
//         },
//         {
//             "_id": "6579db5c35a7a6b2eb11b9f1",
//             "name": "testing user",
//             "email": "testing@gmail.com",
//             "no_telp": "081234567891",
//             "roles": "user",
//             "createdAt": "2023-12-13T16:27:08.327Z",
//             "updatedAt": "2023-12-13T16:27:08.327Z",
//             "__v": 0
//         }
//     ])
//   })

//   it('should get a user by ID', async () => {
//     const response = await request(app).get('/users/6579db5c35a7a6b2eb11b9f1')
//     expect(response.status).toBe(200)
//     expect(response.body).toEqual(
//         {
//             "_id": "6579db5c35a7a6b2eb11b9f1",
//             "name": "testing user",
//             "email": "testing@gmail.com",
//             "no_telp": "081234567891",
//             "roles": "user",
//             "createdAt": "2023-12-13T16:27:08.327Z",
//             "updatedAt": "2023-12-13T16:27:08.327Z",
//             "__v": 0
//         }
//     )
//   })

//   it('should not get a user by wrong ID', async () => {
//       const response = await request(app).get('/users/6579db5c35a7a6b2eb11b9f3')
//       expect(response.status).toBe(404)
//       expect(response.body).toEqual(
//         {
//             "message": "User not found."
//         }
//       )
//   });

//   it('should not get a user by invalid ID', async () => {
//       const response = await request(app).get('/users/6579db5c35a7a6b2eb11b9f')
//       expect(response.status).toBe(500)
//       expect(response.body).toEqual(expect.objectContaining({
//         "message": expect.stringContaining("Cast to ObjectId failed for value \"6579db5c35a7a6b2eb11b9f\" (type string) at path \"_id\" for model \"Users\"")
//       })
//       )
//   });


  // it('should save a new user', async () => {
  //   const newUser = {
  //     "name": "Test Save User",
  //     "email": "test@gmail.com",
  //     "password": "test1234",
  //     "no_telp": "012345678910"
  //   }
  //   const response = await request(app)
  //     .post('/users')
  //     .send(newUser)

  //   expect(response.status).toBe(201)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "email": expect.stringContaining("test@gmail.com")
  //   }))
  // })

  // it('should not save a duplicate user', async () => {
  //   const newUser = {
  //     "name": "Test Save User",
  //     "email": "test@gmail.com",
  //     "password": "test1234",
  //     "no_telp": "012345678910"
  //   }
  //   const response = await request(app)
  //     .post('/users')
  //     .send(newUser)

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "message": expect.stringContaining("E11000 duplicate key error collection: sip_db.users index: email_1 dup key: { email: \"test@gmail.com\" }")
  //   }))
  // })
  
  // it('should not save a new user without name', async () => {
  //   const newUser = {
  //     "email": "test@gmail.com",
  //     "password": "test1234",
  //     "no_telp": "012345678910"
  //   }
  //   const response = await request(app)
  //   .post('/users')
  //   .send(newUser)

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "message": expect.stringContaining("Users validation failed: name: Path `name` is required.")
  //   }))
  // })

  // it('should not save a new user without email', async () => {
  //   const newUser = {
  //       "name": "Test Save User",
  //       "password": "test1234",
  //       "no_telp": "012345678910"
  //   }
  //   const response = await request(app)
  //     .post('/users')
  //     .send(newUser)

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "message": expect.stringContaining("Users validation failed: email: Path `email` is required.")
  //   }))
  // })

  // it('should not save a new user with invalid email', async () => {
  //   const newUser = {
  //       "name": "Test Save User",
  //       "email": "testgmail.com",
  //       "password": "test1234",
  //       "no_telp": "012345678910"
  //   }
  //   const response = await request(app)
  //     .post('/users')
  //     .send(newUser)

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "message": expect.stringContaining("Users validation failed: email: Invalid email address")
  //   }))
  // })

  // it('should not save a new user without password', async () => {
  //   const newUser = {
  //       "name": "Test Save User",
  //       "email": "test@gmail.com",
  //       "no_telp": "012345678910"
  //   }
  //   const response = await request(app)
  //     .post('/users')
  //     .send(newUser)

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "message": expect.stringContaining("Users validation failed: password: Path `password` is required.")
  //   }))
  // })

  // it('should not save a new user with weak password', async () => {
  //   const newUser = {
  //       "name": "Test Save User",
  //       "email": "test@gmail.com",
  //       "password": "123",
  //       "no_telp": "012345678910"
  //   }
  //   const response = await request(app)
  //     .post('/users')
  //     .send(newUser)

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "message": expect.stringContaining("Users validation failed: password: Password is not strong enough")
  //   }))
  // })

  // it('should not save a new user without phone number', async () => {
  //   const newUser = {
  //       "name": "Test Save User",
  //       "email": "test@gmail.com",
  //       "password": "test1234"
  //   }
  //   const response = await request(app)
  //     .post('/users')
  //     .send(newUser)

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "message": expect.stringContaining("Users validation failed: no_telp: Path `no_telp` is required.")
  //   }))
  // })

  // it('should not save a new user with invalid phone number', async () => {
  //   const newUser = {
  //       "name": "Test Save User",
  //       "email": "test@gmail.com",
  //       "password": "test1234",
  //       "no_telp": "01234567"
  //   }
  //   const response = await request(app)
  //     .post('/users')
  //     .send(newUser)

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //       "message": expect.stringContaining("Users validation failed: no_telp: Invalid phone number")
  //   }))
  // })


  // ----------------------------------------------------------------------------


  it('should update a user by ID', async () => {
    const updatedUserData = {
      "name": "Update Test Name",
      "email": "updatetest@gmail.com"
    }
    const response = await request(app)
      .patch('/users/658023c986c22b19152e362f')
      .send(updatedUserData)

    expect(response.status).toBe(200)
    expect(response.body).toEqual(
      {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
      }
    )
  })

  it('should delete a user by ID', async () => {
    const response = await request(app).delete('/users/65805e71b88127c7e9929a1a')
    expect(response.status).toBe(200)
  })

  it('should not delete a user by invalid ID', async () => {
    const response = await request(app).delete('/users/6579db5c35a7a6b2eb11b9f')
    expect(response.status).toBe(400)
    expect(response.body).toEqual(expect.objectContaining({
      "message": expect.stringContaining("Cast to ObjectId failed for value \"6579db5c35a7a6b2eb11b9f\" (type string) at path \"_id\" for model \"Users\"")
    }))
  })

  // it('should not delete a user by unregistered ID', async () => {
  //   const response = await request(app).delete('/users/6579db5c35a7a6b2eb11b9f')
  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual(expect.objectContaining({
  //     "message": expect.stringContaining("???")
  //   }))
  // })
})
