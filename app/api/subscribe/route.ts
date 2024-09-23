import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const response = await fetch(
      'https://api.resend.com/audiences/645b9502-9d7d-414d-80d5-112d5dd926ed/contacts',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: body.email,
          first_name: body.first_name,
          last_name: body.last_name,
          unsubscribed: body.unsubscribed,
        }),
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to create contact' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
  }
}
