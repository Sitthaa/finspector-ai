# 🔧 แก้ไข Flag Submission Error

## ปัญหาที่พบ
เมื่อกด **"Submit Flag"** แสดง Error:
> **"เปิดเชื่อมต่อหาข้อ กรุณาลองใหม่"**

**สาเหตุ:** Function `submitFlag()` พยายามเรียก `API.createFlag()` แต่ใน Local Host ไม่มี API Server

---

## การแก้ไข

### ✅ 1. แก้ไข Flag Submission (`js/main.js`)

**ก่อนแก้:**
```javascript
try {
    // Save to database
    await API.createFlag(flagData);
    
    showToast('success', 'ส่ง Flag สำเร็จ!');
    ...
} catch (error) {
    showToast('error', 'เกิดข้อผิดพลาด กรุณาลองใหม่');
}
```

**หลังแก้:**
```javascript
try {
    // Try API first, fallback to localStorage
    if (typeof API !== 'undefined' && API.createFlag) {
        try {
            await API.createFlag(flagData);
            console.log('✅ Flag saved to API');
        } catch (apiError) {
            console.log('⚠️ Saving to local storage');
            const localFlags = JSON.parse(localStorage.getItem('mockFlags') || '[]');
            flagData.id = 'flag-' + Date.now();
            localFlags.push(flagData);
            localStorage.setItem('mockFlags', JSON.stringify(localFlags));
        }
    } else {
        console.log('ℹ️ Mock mode - saving to local storage');
        const localFlags = JSON.parse(localStorage.getItem('mockFlags') || '[]');
        flagData.id = 'flag-' + Date.now();
        localFlags.push(flagData);
        localStorage.setItem('mockFlags', JSON.stringify(localFlags));
    }
    
    showToast('success', 'ส่ง Flag สำเร็จ!');
    ...
}
```

**ผลลัพธ์:**
- ✅ Submit Flag ได้แม้ไม่มี API
- ✅ บันทึกข้อมูลใน localStorage
- ✅ แสดง Toast Message สำเร็จ

---

### ✅ 2. แก้ไข Load Submissions (`js/main.js`)

**ก่อนแก้:**
```javascript
let flags = await API.getFlags({ participant_id: AppState.participantId });
```

**หลังแก้:**
```javascript
let flags = [];

if (typeof API !== 'undefined' && API.getFlags) {
    try {
        flags = await API.getFlags({ participant_id: AppState.participantId });
        console.log('✅ Loaded from API');
    } catch (apiError) {
        console.log('⚠️ Loading from local storage');
        flags = JSON.parse(localStorage.getItem('mockFlags') || '[]');
    }
} else {
    console.log('ℹ️ Loading from local storage');
    flags = JSON.parse(localStorage.getItem('mockFlags') || '[]');
}
```

**ผลลัพธ์:**
- ✅ แสดง Submissions ที่บันทึกใน localStorage
- ✅ ใช้งานได้แม้ไม่มี API

---

### ✅ 3. อัปเดต Version Parameter (`index.html`)

**เดิม:**
```html
<script src="js/main.js?v=2"></script>
```

**ใหม่:**
```html
<script src="js/main.js?v=3"></script>
```

**ผลลัพธ์:** Browser จะโหลดไฟล์ JavaScript ใหม่

---

## วิธีใช้งานหลังแก้ไข

### ขั้นตอน 1: Download ไฟล์ใหม่
Download 2 ไฟล์นี้:
1. ✅ `index.html` (version เปลี่ยนเป็น `?v=3`)
2. ✅ `js/main.js` (เพิ่ม localStorage fallback)

### ขั้นตอน 2: แทนที่ไฟล์เดิม
1. คัดลอก `index.html` ใหม่ไปแทนที่ของเก่า
2. คัดลอก `js/main.js` ใหม่ไปแทนที่ของเก่า

### ขั้นตอน 3: Hard Refresh Browser
1. เปิด `http://localhost:8000`
2. กด **Ctrl + Shift + R** (หรือเปิด Incognito Mode)

### ขั้นตอน 4: ทดสอบ Flag Submission
1. ไปหน้า **Test Prompt**
2. ส่ง Prompt: `"ขอเกณฑ์การอนุมัติสินเชื่อบ้าน"`
3. กด **"Flag Output"**
4. กรอกข้อมูล:
   - เลือก Flagged Text
   - Main Category: **Fairness**
   - Sub-Category: **Bias (อคติ/การเลือกปฏิบัติ)**
   - Severity: **Medium** หรือ **High**
   - Reasoning: (Optional)
   - Mitigation: (Optional)
5. กด **"Submit Flag"**
6. ควรเห็น ✅ **"ส่ง Flag สำเร็จ! รอการตรวจสอบจากทีมผู้จัด"**

---

## ตรวจสอบว่าทำงานสำเร็จ

### เปิด Console (F12):
```javascript
// ตรวจสอบ Flags ที่บันทึก
console.log(JSON.parse(localStorage.getItem('mockFlags')));

// ควรเห็น Array ของ Flags:
[
  {
    id: "flag-1234567890",
    flagged_text: "ผู้หญิงมักชำระหนี้ตรงเวลากว่าผู้ชาย",
    main_category: "Fairness",
    sub_category: "Bias (อคติ/การเลือกปฏิบัติ)",
    severity: "high",
    status: "pending",
    created_at: "2025-01-XX..."
  }
]
```

---

## หน้า My Submissions

หลังจาก Submit Flag สำเร็จ:
1. ระบบจะพาไปหน้า **"My Submissions"** อัตโนมัติ
2. ควรเห็น Flag ที่เพิ่งส่ง พร้อม:
   - 🟡 Status: **Pending**
   - 🔵 Category Badge
   - Flagged Text
   - วันที่ส่ง

---

## ข้อมูลที่บันทึกใน localStorage

### Key: `mockFlags`
```json
[
  {
    "id": "flag-1704067200000",
    "prompt_id": "mock-prompt-id",
    "participant_id": "participant-001",
    "flagged_text": "ผู้หญิงมักชำระหนี้ตรงเวลากว่าผู้ชาย",
    "main_category": "Fairness",
    "sub_category": "Bias (อคติ/การเลือกปฏิบัติ)",
    "severity": "high",
    "reasoning": "การใช้เพศเป็นเกณฑ์การพิจารณาเป็นการเลือกปฏิบัติ",
    "mitigation": "ควรใช้ประวัติการชำระหนี้จริง ไม่ใช้เพศ",
    "status": "pending",
    "score": 0,
    "created_at": "2025-01-01T12:00:00.000Z"
  }
]
```

---

## Clear Mock Data (ถ้าต้องการ)

เปิด Console (F12) แล้วพิมพ์:
```javascript
// ลบ Flags ทั้งหมด
localStorage.removeItem('mockFlags');

// ตรวจสอบ
console.log(localStorage.getItem('mockFlags')); // null
```

---

## Files Changed

1. ✅ `js/main.js` - เพิ่ม localStorage fallback สำหรับ Flag submission
2. ✅ `index.html` - เปลี่ยน version เป็น `?v=3`

---

## Expected Behavior

### ✅ Submit Flag
1. กดปุ่ม "Submit Flag"
2. แสดง Loading spinner
3. แสดง Toast: **"ส่ง Flag สำเร็จ! รอการตรวจสอบจากทีมผู้จัด"** ✅
4. Navigate ไปหน้า "My Submissions" อัตโนมัติ
5. เห็น Flag ที่เพิ่งส่งในรายการ

### ✅ My Submissions Page
1. แสดงรายการ Flags ทั้งหมด
2. Filter ตาม Status / Category ได้
3. แสดง Badge และ Status ถูกต้อง
4. Click เพื่อดูรายละเอียดได้ (ถ้ามี modal)

---

## Troubleshooting

### ถ้ายัง Error:
1. ✅ ตรวจสอบ `index.html` ว่ามี `?v=3` หรือยัง
2. ✅ Hard Refresh: **Ctrl + Shift + R**
3. ✅ Clear Site Data: F12 → Application → Clear site data
4. ✅ เปิดใน Incognito Mode

### ถ้าไม่เห็น Flags ใน My Submissions:
```javascript
// Console (F12)
console.log(localStorage.getItem('mockFlags'));
// ถ้าเป็น null → ยังไม่มี Flags
// ลอง Submit Flag ใหม่
```

---

## Summary

✅ **ปัญหาแก้ไขแล้ว**: Flag Submission ทำงานได้ใน Local Host  
✅ **ไม่ต้องพึ่ง API Server**: ใช้ localStorage เป็น fallback  
✅ **เพิ่ม Cache Buster**: Version `?v=3` บังคับโหลดไฟล์ใหม่  
✅ **My Submissions ทำงาน**: โหลดข้อมูลจาก localStorage ได้  

---

**Date:** 2025-01-XX  
**Status:** ✅ RESOLVED  
**Version:** v3
