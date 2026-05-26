# My Understanding

## Submission Links

**Loom Video (must be set to public — anyone with the link):**
[paste your Loom video URL here]

---

## Questions

Answer each question in your own words. There are no trick questions.

The goal is not a perfect answer — it is an honest one. Write as if you are explaining to a friend who has never used Express. Completing this will prepare you for your video walkthrough.

Do not copy from documentation, your code comments, or AI output. If you are unsure about something, write what you do understand and note where the gap is.

---

**1. What does each HTTP method in your API mean — GET, POST, PUT or PATCH, and DELETE? Why do we use different methods instead of just using POST for everything?**

GET ของผมเอาไว้ส่งข้อมูลของ product
POST --> create new product
PUT ---> update product data like name,price,quantity
DELETE ----> delete product by id
---

**2. What is `express.json()` and what would happen if you left it out?**

ในความเข้าใจผมนะครับคือ ไอ้ express.json คือถ้าเราประกาศว่า ให้appเรา เป็น app.use(express.json()) คือจะทำให้apiของเราไปยุ่งกับไอ้พวก format เกี่ยวกับ json ได้แล้วไอ้json นี่ตัวสำคัญเลยกับdataประเภทนี้ ทีนี้ผมลอง comment out ตัว app.use(express.json()) ออกแล้วไปลองยิง api ที่ Content-Type: application/json มันกลายเป็นว่า api ของเรา หา payload ที่เป็น format นี้ไม่เจอแล้วมันก็พ่นerror ออกมาว่า xxx not found ก็คือเหมือนมันมองpayloadตัวนี้ไม่ออกครับ อาจจะเพราะ format ไม่ตรงกันด้วย เราเลยจำเป็นต้องใช้ app.use(express.json()) มา แล้วก็ประโยชน์อีกที่คือ ตอนเอาไว้ส่ง res ด้่วยครับ 

---

**3. What is the difference between `req.body`, `req.params`, and `req.query`? Give a real example from your API for each one.**

อันนี้เป็น IMO ล้วนนะครับ5555 req.body เหมือนประกาศว่า ไอ้ method ตัวนี้ใช้ body ที่ user ส่งมานะเป็น name,price,qty งี้ครับ เหมือนส่วนใหญ่จะเก็บ ไว้ในตัวแปรสักตัวเพื่อเอามาใช้ต่ออีกที
req.params คือ เหมือนว่าเราประกาศว่าเราจะส่งparameterอะไรกลับไปใน http method นั้นๆด้วย เช่นแบบ get localhost3000/product/{parameter} งี้ครับ แล้วเราเอาไอ้ตัว req.params เพื่อเอาไอ้ใน {}มาใช้กับ function ที่เราเขียนต่ออีกที
ส่วน req.query เหมือนที่ไปอ่านมาผ่านๆ ประมาณว่าจะทำให้เราสามารถ query ข้อมูลผ่าน url ได้ครับ แล้วก็ไอ้พวกที่เป็น req ส่วนใหญ่ จะเป็นฟีลแบบให้เราเป็นคนส่งอะไรเข้าไปที่serverหมดเลย


---

**4. What are HTTP status codes? List every status code you used in your API and explain why you chose it for that situation.**

ที่ใช้อยู่ หลักๆจะมี 200 , 201 , 400 , 404 ครับ
200 เอาไว้ตอน status ok อะไรงี้ ส่วน 201 เอาไว้ใช้กับตอนที่เราสร้างข้อมูลใหม่สำเร็จ ส่วน 400 เอาไว้ใช้ตอนที่ user ส่งpayload มาไม่ตรงกับที่เราตั้งไว้ครับหรือผิดsyntax ส่วน 404 เอาไว้ตอน not found some thing

จริงๆก็มี 500 ด้วยแต่มันอยู่ใน middle ware ตอนรันserverไม่ได้ Internal Server Error
---

**5. What is middleware? Describe what it does in your own words and give one example from your code.**

ตามชื่อมันเลยครับ middleware เอาไว้คั่นกลางระหว่าง api route หน้าที่หลักๆน่าจะเอาไว้เช็คอะไรก่อนที่เราจะไปถึงขั้นตอนหลัก อย่างเช่น แบบข้อมูลนี้สามารถเข้าถึงได้แค่สมาชิกเท่านั้น
เราก็ทำ middleware มาตัวหนึ่ง แล้วเอามายัด เช่น router.get('/', {middleware เอาไว้เช็คว่าคนนี้เป็น user มั้ย},getUserData) ประมาณนี้ครับ

---

**6. Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?**

ตาม use case ข้อ5เลยครับ middleware สามารถทำให้ backend เรามีความflexมากขึ้นแล้วก็ ถ้าใส่ผิดที่บางที่ไอ้functionที่เราเขียนใน middleware นั้นก็อาจจะไม่ได้ทำงานเลยก็ได้ครับเช่นแบบ ตัวอย่างข้างบน
ที่จะเช็ค ว่าคนนั้นเป็น user ก่อนไหมแล้วค่อย res.send(userData) ให้ แต่ถ้าเราเอา middleware มาไว้หลัง getUserData มันก็จะส่งdataให้ก่อนที่จะcheck userครับ แล้วไอ้ที่เราเขียน middlewareมาอย่างดีก็ไม่ได้ใช้เลย หรือบางทีcodeอาจจะเกิดerrorขึ้นด้วยครับ
---

**7. Walk through what happens on the server, step by step, when a POST request is sent to `/products`.**

POST /products ---> ส่ง HTTPS request ไปที่server ด้วย method POST แล้ว ในนั้นก็มี request เราอยู่ จากนั้นก็รอ server ประมวลผลกับ request ที่เราส่งไป ผ่าน function ที่เราเขียนใน controller 
หลังจากนั้น ก็ ส่ง response กลับมาหาเราที่เป็น user ตาม controller function ที่เซ็ตไว้ครับ

---

**8. What is CRUD? Map each operation to the HTTP method and route you used in your API.**

CRUD = create , read ,update,delete ใน api ผมใช้ทุกอันเลยครับในCRUD 
C คือ post /products
R คือ get /products กับ /products/:id
U คือ put /products/:id
D คือ delete /products/:id
---

**9. How does your API respond when something goes wrong — for example, when a product with a given ID does not exist?**

เริ่มจากตั้งตัวแปร productmeeyuujingมา แล้วก็ใช้เป็น req.params.id แล้วก็เอาไปเช็คผ่านbuildin methodของmongoose ที่ชื่อว่า isValidObjectId มันจะเช็คว่า Returns true if Mongoose can cast the given value to an ObjectId, or false otherwise. คือถ้า id นี้มีvalue อยู่ค่าของ productmeeyuujing ก็จะเป็น true จากนั้นเราก็เอาไปเข้า condition if else ว่าถ้า !product มีอยู่จริงไหม ถ้าเข้าเงื่อนไขก็ return res.status(404) ไปครับ แล้วผมก็ .json({message : ""}) ใน message ผมก็ใส่ไปว่า product not found ครับ เอาไว้ดักเคส product with a given ID does not exist
---

**10. What was the hardest part of building this API and what did you do to get past it?**

สร้างAPIใหม่จาก 0 แรกๆอาจจะยากแต่ถ้าทำบ่อยๆ น่าจะเซียนเองครับ5555
