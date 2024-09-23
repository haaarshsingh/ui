import { NextRequest, NextResponse } from 'next/server'

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json()
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer re_123456789',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: body.from,
        to: body.to,
        subject: body.subject,
        html: body.html,
      }),
    })

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
