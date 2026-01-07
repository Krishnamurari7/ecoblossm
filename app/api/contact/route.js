import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { companyName, contactPerson, email, phone, destination, incoterms, productRequirements } = body;

    // Validate required fields
    if (!companyName || !contactPerson || !email || !phone || !productRequirements) {
      return NextResponse.json(
        { error: 'Please fill in all required fields' },
        { status: 400 }
      );
    }

    // Create transporter - Update these with your email service credentials
    // For Gmail, you'll need to use an App Password
    // For other services, update the host and credentials accordingly
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASSWORD, // Your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER || 'info@ecoblossomcreations.com',
      to: process.env.CONTACT_EMAIL || 'info@ecoblossomcreations.com', // Where to receive the contact form submissions
      replyTo: email,
      subject: `New RFQ from ${companyName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <h2 style="color: #052C16; border-bottom: 2px solid #052C16; padding-bottom: 10px;">
            New Request for Quotation (RFQ)
          </h2>
          
          <div style="background-color: white; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <h3 style="color: #052C16; margin-top: 0;">Company Information</h3>
            <p><strong>Company Name:</strong> ${companyName}</p>
            <p><strong>Contact Person:</strong> ${contactPerson}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone/WhatsApp:</strong> ${phone}</p>
            
            <h3 style="color: #052C16; margin-top: 30px;">Logistics Details</h3>
            <p><strong>Destination:</strong> ${destination || 'Not specified'}</p>
            <p><strong>Required Incoterms:</strong> ${incoterms || 'Not specified'}</p>
            
            <h3 style="color: #052C16; margin-top: 30px;">Product Requirements & Volume</h3>
            <p style="white-space: pre-wrap; background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
              ${productRequirements}
            </p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e9; border-radius: 4px; border-left: 4px solid #052C16;">
            <p style="margin: 0; color: #052C16; font-size: 14px;">
              <strong>Action Required:</strong> Please respond to this inquiry within 24 hours as per company policy.
            </p>
          </div>
          
          <p style="margin-top: 20px; color: #666; font-size: 12px; text-align: center;">
            This email was sent from the Eco Blossom Creations contact form.
          </p>
        </div>
      `,
      text: `
        New Request for Quotation (RFQ)
        
        Company Information:
        - Company Name: ${companyName}
        - Contact Person: ${contactPerson}
        - Email: ${email}
        - Phone/WhatsApp: ${phone}
        
        Logistics Details:
        - Destination: ${destination || 'Not specified'}
        - Required Incoterms: ${incoterms || 'Not specified'}
        
        Product Requirements & Volume:
        ${productRequirements}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully! We will contact you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later or contact us directly.' },
      { status: 500 }
    );
  }
}







