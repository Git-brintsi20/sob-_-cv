# 📋 Placeholder Data Checklist

This document lists all the placeholder data in your portfolio that you may want to replace with real information.

## 🔴 High Priority (Must Replace)

### 1. Resume PDF
**File**: `bitcoin-developer-portfolio/public/resume.pdf`
**Current**: Placeholder PDF with basic text
**Action**: Replace with your actual resume PDF

### 2. Profile Photo (Optional but Recommended)
**File**: `bitcoin-developer-portfolio/components/About.tsx` (Line ~68)
**Current**: Gradient background with "HB" initials
**Action**: 
```tsx
// Replace the gradient div with an actual image:
<Image 
  src="/profile-photo.jpg" 
  alt="Harshita Bhanu"
  width={400}
  height={400}
  className="rounded-lg object-cover"
/>
```
Then add your photo to `public/profile-photo.jpg`

## 🟡 Medium Priority (Verify Accuracy)

### 3. Stats in About Section
**File**: `bitcoin-developer-portfolio/components/About.tsx` (Lines 10-15)
**Current Values**:
- Bitcoin Projects: **4**
- CGPA: **8.2**
- LeetCode Problems: **200+**
- SOB Applicant: **2026**

**Action**: Update with your actual numbers

### 4. Skills List
**File**: `bitcoin-developer-portfolio/components/About.tsx` (Lines 17-30)
**Current**: 
- Bitcoin Core RPC, Lightning Network, TypeScript, Node.js, React, Cryptography, ECDSA secp256k1, PostgreSQL, MongoDB, Docker, Smart Contracts, BIP32/39/44

**Action**: Add/remove skills based on your expertise

### 5. Bio Text
**File**: `bitcoin-developer-portfolio/components/About.tsx` (Lines 70-85)
**Current**: Generic text about IIIT Jabalpur student
**Action**: Customize with your personal story, achievements, goals

### 6. Timeline Events
**File**: `bitcoin-developer-portfolio/components/Timeline.tsx` (Lines 10-33)
**Current**: 
- JAN 2026: Started Bitcoin Development
- FEB 2026: Built Bitcoin Projects
- FEB 2026: Summer of Bitcoin Application

**Action**: Add real dates and milestones from your journey

## 🟢 Low Priority (Customize if Available)

### 7. Project Demo Links
**File**: `bitcoin-developer-portfolio/components/Projects.tsx`
**Current**: All demo links are `#` (placeholder)
**Action**: If you have live demos, replace with actual URLs

### 8. Technical Skills Details
**File**: `bitcoin-developer-portfolio/components/Skills.tsx` (Lines 11-28)
**Current**: Comprehensive list of Bitcoin/dev skills
**Action**: Fine-tune based on your actual skillset

### 9. Open Graph Image
**File**: `bitcoin-developer-portfolio/public/og-image.svg`
**Current**: Generic Bitcoin portfolio image
**Action**: Create a custom OG image with your branding (optional)

### 10. Metadata Description
**File**: `bitcoin-developer-portfolio/app/layout.tsx` (Lines 11-13)
**Current**: "Second-year Computer Science student at IIIT Jabalpur..."
**Action**: Update with your current status/achievements

## ✅ Already Correct (Verify Only)

### Contact Information
**File**: `bitcoin-developer-portfolio/components/Contact.tsx`
- Email: **shiki2hustle@gmail.com** ✓
- GitHub: **Git-brintsi20** ✓
- LinkedIn: **Salugu Harshita Bhanu** ✓

### Project GitHub Links
**File**: `bitcoin-developer-portfolio/components/Projects.tsx`
All links point to:
- https://github.com/Git-brintsi20/bitcoin-tx-parser
- https://github.com/Git-brintsi20/lightning-simulator
- https://github.com/Git-brintsi20/btc-address-tools
- https://github.com/Git-brintsi20/bitcoin-explorer

**Action**: Verify these repos exist (create them if they don't)

## 🎯 Quick Update Instructions

### To Update Stats (CGPA, LeetCode, etc.):

1. Open `bitcoin-developer-portfolio/components/About.tsx`
2. Find lines 10-15:
```tsx
const stats: StatCounter[] = [
  { label: 'Bitcoin Projects', value: '4' },
  { label: 'CGPA', value: '8.2' },          // <-- Change this
  { label: 'LeetCode Problems', value: '200', suffix: '+' },  // <-- And this
  { label: 'SOB Applicant', value: '2026' },
];
```
3. Update the values
4. Save and commit

### To Update Bio:

1. Open `bitcoin-developer-portfolio/components/About.tsx`
2. Find lines 70-85 (inside the bio paragraphs)
3. Rewrite with your story
4. Save and commit

### To Replace Resume:

```bash
cd bitcoin-developer-portfolio/public
# Remove placeholder
rm resume.pdf
# Add yours (must be named resume.pdf)
cp ~/Downloads/your-resume.pdf ./resume.pdf
# Commit
git add resume.pdf
git commit -m "chore: Update resume with actual PDF"
git push
```

## 📊 Data Sources to Prepare

Before updating, gather:
- [ ] Latest CGPA / academic performance
- [ ] Accurate skill inventory
- [ ] LeetCode/coding platform stats
- [ ] Real project completion dates
- [ ] Any certifications or achievements
- [ ] Updated resume PDF
- [ ] Professional photo (optional)

## 🚨 Critical for Summer of Bitcoin Application

Make sure these are accurate before submitting:
1. ✅ Resume PDF is current and professional
2. ✅ Project links work and showcase real code
3. ✅ Contact information is correct
4. ✅ Bio accurately represents your experience
5. ✅ Skills list matches your actual expertise

---

**Want help updating any of these?**
Just provide the real data and I'll help you update the files!
