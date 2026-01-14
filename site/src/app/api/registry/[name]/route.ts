import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name } = await params

  // Get token from Authorization header.
  const authHeader = request.headers.get('authorization')
  const token = authHeader?.replace('Bearer ', '')

  // Or from query parameters.
  const queryToken = request.nextUrl.searchParams.get('token')

  // Check if token is valid.
  if (!isValidToken(token || queryToken)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Check if token can access this component.
  if (!hasAccessToComponent(token, name)) {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }

  // Return the component.
  const component = await getComponent(name)
  if (!component) {
    return NextResponse.json({ error: 'Component not found' }, { status: 404 })
  }
  return NextResponse.json(component)
}

async function getComponent(name: string) {
  try {
    const filePath = join(process.cwd(), 'public', 'r', `${name}.json`)
    const content = await readFile(filePath, 'utf-8')
    return JSON.parse(content)
  } catch {
    return null
  }
}

function isValidToken(token: string | null) {
  // Add your token validation logic here.
  // Check against database, JWT validation, etc.
  return token === process.env.VALID_TOKEN
}

function hasAccessToComponent(
  token: string | undefined,
  componentName: string
): boolean {
  //todo: implement generated tokens or some shit
  return token !== undefined // Your logic here.
}
