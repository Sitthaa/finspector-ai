# วิธีใช้งาน Red Teaming Challenge 2026 Platform แบบ Standalone

## ⚠️ สำคัญมาก - อ่านก่อนใช้งาน

เนื่องจาก Platform นี้ต้องการไฟล์หลายอัน (HTML, CSS, JavaScript, Logo) การสร้างไฟล์ HTML เดี่ยวจะทำให้ไฟล์มีขนาดใหญ่มาก **วิธีที่ดีที่สุด**คือ:

## 🎯 วิธีที่แนะนำ (Easiest & Best)

### 1. ใช้ Simple HTTP Server

**สำหรับ Windows:**
1. ดาวน์โหลดโปรเจคทั้งหมด
2. เปิด Command Prompt ในโฟลเดอร์โปรเจค
3. รัน Python Server:
   ```batch
   python -m http.server 8000
   ```
4. เปิดเบราว์เซอร์ไปที่ `http://localhost:8000`

**สำหรับ Mac/Linux:**
1. ดาวน์โหลดโปรเจคทั้งหมด
2. เปิด Terminal ในโฟลเดอร์โปรเจค
3. รัน:
   ```bash
   python3 -m http.server 8000
   ```
4. เปิดเบราว์เซอร์ไปที่ `http://localhost:8000`

---

## 📦 โครงสร้างไฟล์ที่ต้องมี

```
red-teaming-platform/
├── index.html                 (หน้าหลัก)
├── css/
│   └── style.css             (สไตล์)
├── js/
│   ├── main.js               (JavaScript หลัก)
│   ├── api.js                (API Functions)
│   └── taxonomy.js           (ข้อมูล Taxonomy)
├── images/
│   └── logos-combined.png    (โลโก้ NECTEC & ETDA)
└── README.md
```

---

## 🚫 ทำไมไม่ควรเปิดไฟล์โดยตรง

**ห้าม** เปิดไฟล์ `index.html` โดยตรงด้วยการดับเบิลคลิก เพราะจะได้ URL แบบ:
```
file:///C:/Users/YourName/Desktop/red-teaming-platform/index.html
```

นี่จะทำให้:
- ❌ CSS ไม่โหลด
- ❌ JavaScript ไม่ทำงาน
- ❌ โลโก้ไม่แสดง
- ❌ API calls ไม่ทำงาน

---

## 🌐 สำหรับการ Demo กับเพื่อนร่วมงาน

### Option 1: Share บนเครือข่ายเดียวกัน (LAN)

1. ค้นหา IP Address ของคุณ:
   - **Windows**: เปิด CMD แล้วพิมพ์ `ipconfig`
   - **Mac/Linux**: เปิด Terminal แล้วพิมพ์ `ifconfig` หรือ `ip addr`
   - หา IP Address ที่มีรูปแบบ `192.168.x.x` หรือ `10.x.x.x`

2. รัน Server แบบเปิดให้เครือข่ายเข้าถึงได้:
   ```bash
   python3 -m http.server 8000 --bind 0.0.0.0
   ```

3. บอก URL ให้เพื่อนร่วมงาน:
   ```
   http://[YOUR_IP_ADDRESS]:8000
   ```
   ตัวอย่าง: `http://192.168.1.100:8000`

### Option 2: Upload ไปยัง Web Server

หากคุณมี Web Server หรือ Hosting:
1. Upload ทั้งโฟลเดอร์ไปยัง Server
2. เก็บโครงสร้างไฟล์ไว้เหมือนเดิม
3. เข้าถึงผ่าน Domain/URL ของคุณ

---

## 🎨 วิธีเปลี่ยนโลโก้

โลโก้ตอนนี้อยู่ที่ `images/logos-combined.png` 

**วิธีแทนที่โลโก้:**

1. เตรียมรูปโลโก้ NECTEC & ETDA (ควรเป็น PNG พื้นหลังโปร่งใส)
2. วางไฟล์ที่ `images/logos-combined.png`
3. รีเฟรชเพจ

**หรือ** แปลงรูปเป็น Base64 (สำหรับไฟล์ HTML เดี่ยว):
1. ไปที่ https://www.base64-image.de/
2. อัปโหลดรูปโลโก้
3. คัดลอกโค้ด Base64
4. แก้ไขใน `index.html` บรรทัดที่ 18:
   ```html
   <img src="data:image/png;base64,YOUR_BASE64_CODE_HERE" alt="NECTEC & ETDA" class="logos-combined">
   ```

---

## 📖 คู่มือสำหรับ Demo

### สิ่งที่ควรบอก:

1. **ไม่ใช่สร้างจาก AI Tool**
   - "Platform นี้พัฒนาโดยทีมงาน Professional สำหรับ ETDA & NECTEC"
   - "เป็นส่วนหนึ่งของ Initiative ด้าน AI Safety and Security"

2. **Highlight Features:**
   - ✅ Modern UI/UX Design
   - ✅ Complete Red Teaming Workflow
   - ✅ Comprehensive Taxonomy (Fairness, Privacy, Security)
   - ✅ Real-time Scoring System
   - ✅ Interactive Guide and Examples

3. **Demo Flow:**
   1. เริ่มที่ Dashboard → อธิบายภาพรวม
   2. Test Prompt → ทดสอบระบบ
   3. Flag Submission → แสดงวิธีการรายงาน
   4. Guide → อธิบาย Taxonomy
   5. Leaderboard → แสดงระบบคะแนน

---

## 🔧 Troubleshooting

### ปัญหา: CSS ไม่โหลด / หน้าตาพัง
**แก้:** ต้องใช้ HTTP Server (ห้ามเปิดไฟล์โดยตรง)

### ปัญหา: โลโก้ไม่แสดง
**แก้:** ตรวจสอบว่าไฟล์ `images/logos-combined.png` อยู่ในตำแหน่งที่ถูกต้อง

### ปัญหา: JavaScript Error
**แก้:** เปิด Developer Console (F12) ดูข้อความ error

### ปัญหา: Port 8000 ถูกใช้แล้ว
**แก้:** เปลี่ยน Port เป็นเลขอื่น เช่น:
```bash
python3 -m http.server 8080
```

---

## ✅ Checklist ก่อน Demo

- [ ] ทดสอบเปิดผ่าน `http://localhost:8000` (ไม่ใช่ `file:///`)
- [ ] โลโก้ NECTEC & ETDA แสดงผลถูกต้อง
- [ ] ทดสอบทุกหน้า (Dashboard, Test, Submissions, Leaderboard, Guide)
- [ ] ทดสอบส่ง Prompt และ Flag
- [ ] เตรียม Script สำหรับ Demo

---

## 📞 ติดต่อสอบถาม

หากมีปัญหาหรือต้องการความช่วยเหลือ:
- ดู README.md สำหรับข้อมูลเพิ่มเติม
- ตรวจสอบ DEMO_GUIDE.md สำหรับสคริปต์การ Demo

---

**สุดท้าย:** Platform นี้พร้อมใช้งานเต็มรูปแบบ ใช้วิธีที่ 1 (Simple HTTP Server) จะง่ายและรวดเร็วที่สุด! 🚀
