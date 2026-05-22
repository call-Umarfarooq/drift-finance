import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { googleCredentials } from '@/config/googleCredentials';

export async function POST(request) {
  try {
    const body = await request.json();
    const { sheetName, values } = body;

    // Validate request body
    if (!sheetName || !Array.isArray(values)) {
      return NextResponse.json(
        { success: false, error: 'Invalid parameters. Please provide sheetName and an array of values.' },
        { status: 400 }
      );
    }

    const { clientEmail, privateKey: rawPrivateKey, spreadsheetId } = googleCredentials;

    // Clean up private key to ensure it parses newlines correctly
    const privateKey = rawPrivateKey.replace(/\\n/g, '\n');

    // Authenticate with Google API using object configuration
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Format a readable timestamp (e.g. 5/22/2026, 11:46:22 AM UTC)
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'UTC',
      dateStyle: 'short',
      timeStyle: 'medium',
    }) + ' UTC';

    const rowData = [timestamp, ...values];

    // Append to sheet
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json({
      success: true,
      data: appendResponse.data,
    });

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit form data.' },
      { status: 500 }
    );
  }
}
