import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, service, currency, budget, description, visitorId } = body

    if (!name || !email || !service || !description) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const serviceLabels: Record<string, string> = {
      "web-dev": "Web Development",
      hosting: "Hosting & DevOps",
      "video-edit": "Video Editing",
      "photo-edit": "Photo Editing",
    }

    // Build email content for mailto fallback
    const subject = `New Booking: ${serviceLabels[service] || service} from ${name}`
    const emailBody = `
New Booking Request
===================

Name: ${name}
Email: ${email}
Service: ${serviceLabels[service] || service}
Currency: ${currency}
Budget: ${budget || "Not specified"}
Visitor ID: ${visitorId}

Description:
${description}

---
Sent from Samuel Mensah Portfolio
    `.trim()

    // Log the booking (in production, you'd send an email or save to DB)
    console.log("=== NEW BOOKING REQUEST ===")
    console.log(`From: ${name} (${email})`)
    console.log(`Service: ${serviceLabels[service] || service}`)
    console.log(`Currency: ${currency}`)
    console.log(`Budget: ${budget || "N/A"}`)
    console.log(`Visitor: ${visitorId}`)
    console.log(`Description: ${description}`)
    console.log("===========================")

    return NextResponse.json({
      success: true,
      message: "Booking request received",
      mailto: `mailto:alphariansamuel@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`,
    })
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
