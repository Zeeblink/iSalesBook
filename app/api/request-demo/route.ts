// app/api/request-demo/route.ts
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, company, phone, message } = await req.json();

  // Basic validation
  if (!name || !email || !phone || !message) {
    return NextResponse.json({ message: 'All fields except company are required.' }, { status: 400 });
  }
  
  // Create a transporter object
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT as string, 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const salesTeamEmail = process.env.SALES_TEAM_EMAIL as string;
  
  try {
    // Send email to sales team
    await transporter.sendMail({
      from: {
        name: 'iSalesBook Demo Request', // This will be displayed as the sender name
        address: salesTeamEmail // This email address will be hidden
      }, // sender address
      to: [salesTeamEmail, "davincin222@gmail.com", "eabiodun45@gmail.com"], // list of receivers
      subject: 'New Demo Request', // Subject line
      html: `<p>You have a new demo request from:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Phone:</strong> ${phone}</p>
             <p><strong>Company:</strong> ${company}</p>
             <p><strong>Message:</strong> ${message}</p>`
    });

    // Send confirmation email to the visitor
    // await transporter.sendMail({
    //   from: 'no-reply@example.com', // sender address
    //   to: email, // list of receivers
    //   subject: 'Your Demo Request Received', // Subject line
    //   html: `<p>Hi ${name},</p>
    //          <p>Thank you for requesting a demo. Our sales team will get back to you shortly.</p>
    //          <p>Best regards,</p>
    //          <p>The iSalesBook Team</p>`
    // });

    return NextResponse.json({ message: 'Your request has been sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
