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

*Your answer:*

---

**2. What is `express.json()` and what would happen if you left it out?**

*Your answer:*

---

**3. What is the difference between `req.body`, `req.params`, and `req.query`? Give a real example from your API for each one.**

*Your answer:*

---

**4. What are HTTP status codes? List every status code you used in your API and explain why you chose it for that situation.**

ที่ใช้อยู่ หลักๆจะมี 200 , 201 , 400 , 404 ครับ
---

**5. What is middleware? Describe what it does in your own words and give one example from your code.**

*Your answer:*

---

**6. Why does the order of middleware matter in Express? What could go wrong if it were in the wrong order?**

*Your answer:*

---

**7. Walk through what happens on the server, step by step, when a POST request is sent to `/products`.**

*Your answer:*

---

**8. What is CRUD? Map each operation to the HTTP method and route you used in your API.**

*Your answer:*

---

**9. How does your API respond when something goes wrong — for example, when a product with a given ID does not exist?**

เริ่มจากตั้งตัวแปร productmeeyuujingมา แล้วก็ใช้เป็น req.params.id แล้วก็เอาไปเช็คผ่านbuildin methodของmongoose ที่ชื่อว่า isValidObjectId มันจะเช็คว่า Returns true if Mongoose can cast the given value to an ObjectId, or false otherwise. คือถ้า id นี้มีvalue อยู่ค่าของ productmeeyuujing ก็จะเป็น true จากนั้นเราก็เอาไปเข้า condition if else ว่าถ้า !product มีอยู่จริงไหม ถ้าเข้าเงื่อนไขก็ return res.status(404) ไปครับ แล้วผมก็ .json({message : ""}) ใน message ผมก็ใส่ไปว่า product not found ครับ เอาไว้ดักเคส product with a given ID does not exist
---

**10. What was the hardest part of building this API and what did you do to get past it?**

สร้างAPIใหม่จาก 0 แรกๆอาจจะยากแต่ถ้าทำบ่อยๆ น่าจะเซียนเองครับ5555
