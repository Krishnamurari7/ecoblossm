# Email Setup Guide for Contact Form

This guide will help you configure email functionality for the contact form on your Eco Blossom Creations website.

## Step 1: Create Environment Variables File

1. In your project root directory (`D:\Krishna murari\ecobloosom\`), create a new file named `.env.local`
2. **Important:** This file should NOT be committed to Git (it's already in `.gitignore`)

## Step 2: Gmail Setup (Recommended)

### Option A: Using Gmail with App Password (Most Common)

#### Step 2.1: Enable 2-Step Verification
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **2-Step Verification**
3. Follow the prompts to enable 2-Step Verification (you'll need your phone)

#### Step 2.2: Generate App Password
1. Go back to [Google Account Security](https://myaccount.google.com/security)
2. Under "Signing in to Google", click **App passwords**
   - If you don't see this option, make sure 2-Step Verification is enabled first
3. Select **Mail** as the app
4. Select **Other (Custom name)** as the device
5. Type "Eco Blossom Contact Form" and click **Generate**
6. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)

#### Step 2.3: Configure .env.local
Add these lines to your `.env.local` file:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=abcdefghijklmnop
CONTACT_EMAIL=info@ecoblossomcreations.com
```

**Replace:**
- `your-email@gmail.com` with your actual Gmail address
- `abcdefghijklmnop` with the 16-character App Password (remove spaces if any)
- `info@ecoblossomcreations.com` with the email where you want to receive contact form submissions

### Option B: Using Gmail with OAuth2 (Advanced)
If you prefer OAuth2 instead of App Passwords, you'll need to set up OAuth credentials in Google Cloud Console. This is more complex but more secure for production.

---

## Step 3: Alternative Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
CONTACT_EMAIL=info@ecoblossomcreations.com
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_USER=your-email@yahoo.com
SMTP_PASSWORD=your-app-password
CONTACT_EMAIL=info@ecoblossomcreations.com
```
*Note: Yahoo also requires App Password (similar to Gmail)*

### Custom SMTP Server
If you have your own email server or use a service like SendGrid, Mailgun, etc.:

```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_USER=your-username
SMTP_PASSWORD=your-password
CONTACT_EMAIL=info@ecoblossomcreations.com
```

**Common SMTP Ports:**
- `587` - TLS/STARTTLS (recommended)
- `465` - SSL (secure)
- `25` - Standard (often blocked by ISPs)

---

## Step 4: Verify Your Setup

1. Make sure your `.env.local` file is in the project root
2. Restart your Next.js development server:
   ```bash
   npm run dev
   ```
3. Go to your contact page and submit a test form
4. Check the email inbox specified in `CONTACT_EMAIL`

---

## Step 5: Troubleshooting

### Error: "Invalid login" or "Authentication failed"
- **Gmail:** Make sure you're using an App Password, not your regular password
- **Other providers:** Verify your username and password are correct
- Check that 2-Step Verification is enabled (for Gmail)

### Error: "Connection timeout"
- Check your internet connection
- Verify the SMTP_HOST and SMTP_PORT are correct
- Some networks block SMTP ports - try a different network or use port 465 with SSL

### Error: "Email not received"
- Check your spam/junk folder
- Verify `CONTACT_EMAIL` is correct
- Check server logs for errors (in terminal where `npm run dev` is running)

### Gmail App Password not showing
- Make sure 2-Step Verification is enabled first
- Try refreshing the page
- Make sure you're using a personal Gmail account (not Google Workspace)

---

## Security Notes

1. **Never commit `.env.local` to Git** - It contains sensitive credentials
2. **Use App Passwords** instead of your main email password
3. **For production**, consider using:
   - Environment variables in your hosting platform (Vercel, Netlify, etc.)
   - Email services like SendGrid, Mailgun, or AWS SES
   - These services are more reliable and have better deliverability

---

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Go to your hosting platform's dashboard
2. Navigate to Environment Variables / Settings
3. Add each variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `CONTACT_EMAIL`
4. Redeploy your application

---

## Example .env.local File

Here's a complete example for Gmail:

```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ecoblossom@gmail.com
SMTP_PASSWORD=abcd efgh ijkl mnop
CONTACT_EMAIL=info@ecoblossomcreations.com
```

**Remember:** 
- Remove spaces from App Password if copying from Google
- Keep this file private and never share it publicly

---

## Need Help?

If you're still having issues:
1. Check the terminal/console for error messages
2. Verify all environment variables are set correctly
3. Test with a different email provider
4. Check your email provider's documentation for SMTP settings








