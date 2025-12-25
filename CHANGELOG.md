# 📝 CHANGELOG

## Version 2.5.1 - Bug Fixes & UX Improvements (2025-10-22)

### 🐛 Critical Bug Fixes
- ✅ **Prompt Display Fixed**: แก้ไขปัญหา Prompt ไม่แสดงในหน้า Flag Form
  - เปลี่ยนลำดับการ reset form ให้อยู่ก่อนการตั้งค่า prompt/output
  - ตอนนี้ Prompt ที่ทดสอบจะแสดงใน "Your Prompt" field อย่างถูกต้อง

### 🎨 UX/UI Improvements
- ✅ **Optional Fields**: เปลี่ยน Technical Reasoning และ Mitigation Recommendation เป็น optional
  - ลบดอกจันสีแดง (*) ออกจาก label
  - ลบ `required` attribute ออกจาก textarea
  - ผู้เข้าแข่งขันสามารถ submit flag ได้แม้ไม่กรอกฟิลด์เหล่านี้

### 📋 Why These Changes?
- **Prompt Display**: ป้องกันความสับสนเมื่อผู้ใช้ flag output - ต้องเห็น prompt ที่ใช้ทดสอบ
- **Optional Fields**: ลดอุปสรรคในการส่ง flag - บางครั้งข้อบกพร่องชัดเจนเองโดยไม่ต้องอธิบายมาก

---

## Version 2.5 - Context-Aware Mock LLM Responses (2025-10-22)

### 🧠 Enhanced Prompt Understanding
- ✅ **Smart Context Analysis**: ปรับปรุง `generateMockLLMResponse()` ให้วิเคราะห์ Prompt และสร้างคำตอบที่สอดคล้องกันมากขึ้น
- ✅ **Dynamic Topic Extraction**: ดึงคำสำคัญจาก Prompt (เช่น สินเชื่อ, ผู้จัดการ, สุขภาพ) และแทรกในคำตอบ
- ✅ **Expanded Keywords**: เพิ่มคำค้นหาภาษาไทยและอังกฤษให้ครอบคลุมมากขึ้น
  - Financial: สินเชื่อ, กู้, ผ่อน, loan, credit
  - HR: พนักงาน, ผู้จัดการ, บริหาร, employee, hiring, manager
  - Data/Privacy: ข้อมูล, ความเป็นส่วนตัว, สุขภาพ, data, privacy
  - Security: ระบบ, ความปลอดภัย, รหัสผ่าส, system, security, password
- ✅ **Better Bias Indicators**: เพิ่ม 🚩 flags พร้อมคำอธิบายในทุก response category
- ✅ **Improved Fallback**: สร้าง fallback response ที่วิเคราะห์คำสำคัญและให้คำตอบที่เกี่ยวข้อง

### 🎯 Response Quality Improvements
- ✅ **Personalized Responses**: ใช้ข้อมูลจาก Prompt สร้างคำตอบที่เฉพาะเจาะจง
- ✅ **Consistent Bias Patterns**: ทุก response category มี bias indicators ที่ชัดเจน
- ✅ **Professional Formatting**: ใช้ Markdown headings และ structure ที่สม่ำเสมอ

---

## Version 2.4 - Combined Logo Implementation (2025-10-22)

### 🖼️ Single Logo Solution
- ✅ **Combined Logo Image**: สร้างภาพรวม NECTEC + ETDA ในไฟล์เดียว (images/logos-combined.png)
- ✅ **Perfect Alignment by Design**: alignment สมบูรณ์แบบจากผู้ออกแบบต้นฉบับ
- ✅ **Better Performance**: ลด HTTP requests จาก 2 เป็น 1
- ✅ **Cleaner Implementation**: ลด HTML และ CSS complexity
- ✅ **Updated CSS Class**: `.logos-combined` with optimal sizing
- ✅ **Removed Old Logo Files**: ลบ logo-nectec.png และ logo-etda.png

### 🧹 Code Cleanup
- ✅ Simplified navigation structure
- ✅ Reduced CSS rules for logo handling
- ✅ Better maintainability

---

## Version 2.3 - Critical Alignment Fixes (2025-10-22)

### 🔧 Perfect Logo Alignment
- ✅ **Baseline Alignment**: ใช้ `align-items: flex-end` เพื่อให้โลโก้ทั้งสองตรงกันบนระนาบเดียว
- ✅ **Container Refinement**: ปรับ `.organizer-logos`ให้มี proper spacing และ alignment
- ✅ **Logo Height Consistency**: ตรึงความสูงที่ 42px สำหรับทั้งสองโลโก้

### 📝 No Text Wrapping
- ✅ **Brand Name Fix**: เพิ่ม `white-space: nowrap` ให้ "Red Teaming Challenge 2026" อยู่บรรทัดเดียวเสมอ
- ✅ **Subtitle Fix**: เพิ่ม `white-space: nowrap` ให้ "FinSpector AI" อยู่บรรทัดเดียวเสมอ
- ✅ **Mobile Compatibility**: ทำงานได้ดีบนทุกขนาดหน้าจอ

### 🎨 Professional Polish
- ✅ **Visual Consistency**: ทุกองค์ประกอบอยู่ในตำแหน่งที่ถูกต้อง
- ✅ **Typography Excellence**: ขนาดและน้ำหนักที่เหมาะสม
- ✅ **Clean Execution**: ดูเรียบร้อยและเป็นมืออาชีพ 100%

---

## Version 2.2 - Navigation Balance & Professional Design (2025-10-22)

### 🎨 Visual Balance Improvements
- ✅ **Perfect Proportions**: ปรับ ratio ของโลโก้:ข้อความ เป็น 40:60 สำหรับความสมดุลที่ดี
- ✅ **Enhanced Typography**:
  - Brand name: 17px, font-weight 700
  - Subtitle: 12px with opacity 0.75
  - Letter spacing: -0.02em for tightness
- ✅ **Refined Spacing**:
  - Logo container: padding 12px 20px
  - Divider: width 1px, height 32px
  - Icon to text gap: 8px

### 🎨 Design Enhancements
- ✅ **Subtle Gradients**: 
  - Navigation background: linear gradient white to gray-50
  - Accent line: gradient from primary to success colors
- ✅ **Accent Details**:
  - Bottom border gradient
  - Icon subtle shadow
  - Smoother transitions
- ✅ **Professional Look**: 
  - Cleaner borders
  - Better shadows
  - More polished overall appearance

### 📱 Responsive Refinements
- ✅ **Desktop (1200px+)**: Optimal spacing and sizing
- ✅ **Laptop (992-1199px)**: Slightly smaller but balanced
- ✅ **Tablet (768-991px)**: Compact but readable
- ✅ **Mobile (<768px)**: Vertical stack with proper spacing

---

## Version 2.1 - Logo Updates & Enhanced Design (2025-10-22)

### 🎨 Official Logo Integration
- ✅ **ETDA Logo**: โลโก้อย่างเป็นทางการของ Electronic Transactions Development Agency
- ✅ **NECTEC Logo**: โลโก้อย่างเป็นทางการของ National Electronics and Computer Technology Center
- ✅ **High Quality Images**: ความละเอียดสูงสำหรับการแสดงผลที่คมชัด
- ✅ **Proper Attribution**: แสดงชื่อหน่วยงานอย่างถูกต้อง

### ✨ Design Improvements
- ✅ **Gradient Backgrounds**: พื้นหลังไล่สีสวยงามในหลายส่วน
- ✅ **Logo Hover Effects**: เอฟเฟกต์เมื่อ hover บนโลโก้
- ✅ **Enhanced Shadows**: เงาที่ดูมีมิติมากขึ้น
- ✅ **Better Logo Container**: กล่องโลโก้ที่สวยงามและเป็นระเบียบ

### 📱 Responsive Logo Sizing
- ✅ Desktop (>1200px): 50px height
- ✅ Laptop (992-1199px): 45px height  
- ✅ Tablet (768-991px): 40px height
- ✅ Mobile (<768px): 35px height

---

## Version 2.0 - Welcome Experience & Branding Update (2025-10-22)

### ✨ Welcome Banner for First-time Users
- ✅ **Interactive Welcome Banner**: แสดงครั้งเดียวสำหรับผู้ใช้ใหม่
- ✅ **Quick Start Guide**: 3 ขั้นตอนการใช้งานแบบง่าย ๆ
  - Step 1: ส่ง Prompt และวิเคราะห์ Output
  - Step 2: Flag ข้อบกพร่องพร้อมหลักฐาน
  - Step 3: รับคะแนนและติดตาม Leaderboard
- ✅ **Call-to-Action Buttons**: ปุ่มไปยังแต่ละขั้นตอนได้ทันที
- ✅ **LocalStorage Tracking**: จดจำผู้ใช้ที่เคยเข้ามาแล้ว
- ✅ **Beautiful Design**: Gradient + glassmorphism effects

### 🏛️ Enhanced Branding
- ✅ **Organizer Logos**: แสดงโลโก้ ETDA และ NECTEC บน Navigation (ทุกหน้า)
- ✅ **Competition Title**: "Red Teaming Challenge 2026: FinSpector AI"
- ✅ **Organizer Section in Guide**: ส่วนแสดงผู้จัดในหน้า Guide
- ✅ **Professional Navigation**: 
  - Logo section ด้านซ้าย
  - Divider
  - Brand text + icon ด้านขวา

### 🎨 UI/UX Improvements
- ✅ **Better First Impression**: ผู้ใช้ใหม่รู้ทันทีว่าต้องทำอะไร
- ✅ **Visual Flow**: แสดงขั้นตอนด้วย numbered icons
- ✅ **Responsive Welcome Banner**: ทำงานดีบนทุกขนาดหน้าจอ
- ✅ **Smooth Animations**: fade-in และ slide-up effects

---

## Version 1.5 - Complete Guide System (2025-10-21)

### 📚 Comprehensive Guide Page
- ✅ **Competition Overview**: ภาพรวมการแข่งขัน เป้าหมาย วัตถุประสงค์ ข้อห้าม
- ✅ **Step-by-step Process**: ขั้นตอนการแข่งขันแบบละเอียด
- ✅ **Complete Taxonomy**: คำอธิบายทุก Category และ Sub-category
  - Fairness: 4 sub-categories
  - Privacy: 4 sub-categories
  - Security: 4 sub-categories
- ✅ **Scoring System**: เกณฑ์การให้คะแนน น้ำหนัก multiplier
- ✅ **Tips & Techniques**: เทคนิคการหา Flags ที่มีประสิทธิภาพ
- ✅ **Example Cases**: ตัวอย่าง Flags ที่ดีพร้อมคำอธิบาย
- ✅ **Beautiful Layout**: การ์ดสวยงาม responsive ทุกหน้าจอ

---

## Version 1.4 - Leaderboard & Filtering (2025-10-21)

### 🏆 Leaderboard Page
- ✅ **Ranking Display**: แสดงอันดับผู้เข้าแข่งขัน
- ✅ **Category Filters**: Overall, Fairness, Privacy, Security
- ✅ **Rank Badges**: Gold, Silver, Bronze สำหรับ Top 3
- ✅ **Statistics Display**:
  - Total Flags Submitted
  - Approved Flags
  - Approval Rate (%)
  - Total Score
- ✅ **Mock Data**: ข้อมูลตัวอย่าง 8 participants
- ✅ **Responsive Table**: ทำงานดีบนมือถือ

### 📝 My Submissions Enhancements
- ✅ **Status Filtering**: All, Pending, Approved, Rejected
- ✅ **Category Filtering**: All, Fairness, Privacy, Security
- ✅ **Sorting Options**: Newest, Oldest, Severity
- ✅ **Combined Filters**: ใช้หลาย filter พร้อมกันได้
- ✅ **Filter State Management**: เก็บสถานะ filter ไว้

---

## Version 1.3 - My Submissions Page (2025-10-21)

### 📝 Submissions Management
- ✅ **List All Flags**: แสดงรายการ Flags ทั้งหมดที่ส่ง
- ✅ **Status Indicators**: Pending (Yellow), Approved (Green), Rejected (Red)
- ✅ **Category Pills**: แสดง Main Category และ Sub-category
- ✅ **Severity Badges**: Critical, High, Medium, Low
- ✅ **Score Display**: แสดงคะแนนที่ได้รับ (ถ้า approved)
- ✅ **Reviewer Feedback**: แสดง feedback จากผู้ตรวจ
- ✅ **Expandable Cards**: คลิกเพื่อดูรายละเอียดเต็ม
- ✅ **Timestamps**: แสดงเวลาที่ส่งและตรวจ

---

## Version 1.2 - Flag Submission Form (2025-10-21)

### 🚩 Complete Flag Form
- ✅ **Text Selection**: เลือกข้อความจาก LLM Output ได้
- ✅ **Highlighting**: Highlight ข้อความที่เลือก
- ✅ **Dynamic Taxonomy**: 
  - 3 Main Categories (Fairness, Privacy, Security)
  - 12 Sub-categories (4 per main category)
  - Category descriptions
- ✅ **Severity Levels**: Critical, High, Medium, Low
- ✅ **Rich Text Fields**:
  - Technical Reasoning (required)
  - Mitigation Recommendation (required)
- ✅ **Character Counters**: แสดงจำนวนตัวอักษรที่พิมพ์
- ✅ **Form Validation**: ตรวจสอบข้อมูลก่อนส่ง
- ✅ **API Integration**: บันทึกลง Table API

---

## Version 1.1 - Test Prompt Interface (2025-10-21)

### 🧪 Prompt Testing
- ✅ **Prompt Input**: Text area สำหรับพิมพ์ Prompt
- ✅ **Character Counter**: แสดงจำนวนตัวอักษร
- ✅ **Submit Button**: ส่ง Prompt ไปทดสอบ
- ✅ **Mock LLM Response**: จำลองคำตอบจาก LLM ที่มีข้อบกพร่อง
- ✅ **Output Display**: แสดงผลลัพธ์ในกล่องสวยงาม
- ✅ **Copy Button**: คัดลอก Output
- ✅ **Flag Button**: ปุ่มไป Flag Form เมื่อพบข้อบกพร่อง
- ✅ **Example Prompts**: ตัวอย่าง Prompts แบ่งตาม Category
  - Financial Services (6 examples)
  - HR/Recruitment (6 examples)
  - Healthcare Data (6 examples)
  - System Security (6 examples)

---

## Version 1.0 - Initial Platform (2025-10-21)

### 🎯 Core Features
- ✅ **Single Page Application**: Navigation ด้วย JavaScript
- ✅ **Dashboard**: แสดงสถิติภาพรวม
- ✅ **Page Structure**: 6 หน้าหลัก (Dashboard, Test, Flag, Submissions, Leaderboard, Guide)
- ✅ **Navigation Bar**: เมนูสวยงามพร้อม active state
- ✅ **RESTful API Setup**: เชื่อมต่อกับ Table API
- ✅ **Database Schema**: 3 tables (prompts, flags, participants)
- ✅ **Taxonomy System**: 3 หมวดหมู่หลัก 12 หมวดหมู่ย่อย
- ✅ **Toast Notifications**: แจ้งเตือนสำเร็จ/ผิดพลาด
- ✅ **Loading States**: แสดงสถานะกำลังโหลด
- ✅ **Responsive Design**: รองรับ Desktop, Tablet, Mobile

### 🎨 Design System
- ✅ **Color Scheme**: 
  - Primary: Blue (#2563eb)
  - Fairness: Purple (#8b5cf6)
  - Privacy: Cyan (#06b6d4)
  - Security: Red (#ef4444)
- ✅ **Typography**: Sarabun (Thai) + Inter (English)
- ✅ **Icons**: Font Awesome 6.4.0
- ✅ **Animations**: Smooth transitions

---

---

## 📋 Version History Notes

- ทุก version รักษาความเข้ากันได้แบบย้อนหลัง (backward compatibility)
- ใช้ Mock data สำหรับการทดสอบและพัฒนา
- รองรับการแสดงผลแบบ responsive บนทุกอุปกรณ์
- ภาษาไทยเป็นภาษาหลักของ interface

---

**© 2026 Red Teaming Challenge - Organized by ETDA & NECTEC**
