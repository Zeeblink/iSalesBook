import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
    const { name, email, phone, message } = await req.json()

    if (!name || !email || !phone || !message) {
        return NextResponse.json({ message: "All fields are required" }, { status: 400 })
    }

    // Transporter object
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT as string, 10),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    try {
        await transporter.sendMail({
            from: 'no-reply',
            to: 'info@isalesbook.com',
            subject: `New Contact Message`,
            html: `<p>'You have a new contact message from:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Email:</strong> ${phone}</p>
             <p><strong>Message:</strong> ${message}</p>`
        })

        return NextResponse.json({ message: 'Your request has been sent successfully!' }, { status: 200 });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
    }
}