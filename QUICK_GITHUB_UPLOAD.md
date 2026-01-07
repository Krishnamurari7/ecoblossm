# ⚡ Quick Start: Upload to GitHub (5 Minutes)

## 🚀 Fastest Method

### Step 1: Open Terminal in Project Folder
```bash
cd "D:\Krishna murari\ecobloosom"
```

### Step 2: Initialize Git
```bash
git init
```

### Step 3: Add All Files
```bash
git add .
```

### Step 4: First Commit
```bash
git commit -m "Initial commit: Eco Blossom Creations website"
```

### Step 5: Create Repository on GitHub
1. Go to https://github.com/new
2. Repository name: `ecoblossom-creations`
3. Choose **Public** or **Private**
4. **DON'T** check "Initialize with README"
5. Click **Create repository**

### Step 6: Connect and Push
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/ecoblossom-creations.git
git branch -M main
git push -u origin main
```

**When asked for password:** Use Personal Access Token (not GitHub password)

---

## 🔑 Get Personal Access Token

1. GitHub → Settings → Developer settings
2. Personal access tokens → Tokens (classic)
3. Generate new token → Select `repo` scope
4. Copy token and use as password

---

## ✅ Done!

Your code is now on GitHub! 🎉

For detailed guide, see `GITHUB_UPLOAD_GUIDE.md`

