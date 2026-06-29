import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const companyCount = await prisma.company.count();

    return NextResponse.json({
      setupRequired: companyCount === 0,
    });
  } catch (error) {
    console.error('Setup status error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
