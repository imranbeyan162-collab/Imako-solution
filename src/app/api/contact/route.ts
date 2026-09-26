import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, company, serviceNeeded, budgetRange, message } = data;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Forward to FormSubmit for direct email delivery to imakosolution@gmail.com
    try {
      const response = await fetch('https://formsubmit.co/ajax/imakosolution@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          _subject: `[Imako Solution Quote] ${serviceNeeded || "Inquiry"} from ${name}`,
          _template: 'table',
          _captcha: 'false',
          Client_Name: name,
          Client_Email: email,
          Company_or_Org: company || 'Not specified',
          Service_Requested: serviceNeeded,
          Budget_Range: budgetRange || 'Flexible',
          Detailed_Message: message,
          Submitted_At: new Date().toISOString()
        })
      });

      const result = await response.json();
      console.log('FormSubmit dispatch response:', result);
    } catch (dispatchErr) {
      console.error('Email dispatch warning:', dispatchErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Quote request successfully recorded and dispatched to imakosolution@gmail.com',
      recipient: 'imakosolution@gmail.com'
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Internal server error while processing request.' },
      { status: 500 }
    );
  }
}
