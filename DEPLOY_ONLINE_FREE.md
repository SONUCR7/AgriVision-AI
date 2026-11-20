# How to Open This Website Live on Your Phone (Free 60-Second Setup)

### Method 1: Instant Vercel Cloud Deployment (No Terminal Needed)
1. Go to **[vercel.com](https://vercel.com/)** and sign in with your GitHub account.
2. Click **"Add New Project"** -> **"Deploy Project"**.
3. Drag and drop your `d:\TDPCL` folder directly into the browser window.
4. Click **Deploy**. In ~20 seconds, Vercel will give you a public URL like:
   `https://agrivision-crop-ai.vercel.app`
5. Open this link on your smartphone or show it on your mentor's laptop. It works 24/7!

---

### Method 2: GitHub Pages (100% Free Forever)
1. Go to **[github.com/new](https://github.com/new)** and create a new repository called `crop-disease-prediction`.
2. In your `d:\TDPCL` folder, open PowerShell or Git Bash and run:
   ```bash
   git init
   git add .
   git commit -m "AgriVision AI TD-PCL Working Model"
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/crop-disease-prediction.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings** -> **Pages** -> under *Branch* select **main** and click **Save**.
4. Your website is now live at:
   `https://<YOUR_GITHUB_USERNAME>.github.io/crop-disease-prediction/`

---

### Method 3: Instant Wi-Fi Phone Access (No Cloud Needed)
1. Make sure your laptop and smartphone are connected to the same Wi-Fi or mobile hotspot.
2. Double-click `run_server.bat` in `d:\TDPCL`.
3. It will display your phone link, for example:
   `http://192.168.x.x:3000`
4. Type that exact URL into Chrome or Safari on your phone. The website will open immediately!
