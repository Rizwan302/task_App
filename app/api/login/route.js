import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';


const secretKey = 'your-secret-key';

// Function to generate JWT tokens
function generateAuthToken(email) {
  const payload = { email };
  
  const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

  return token;
}


export async function POST(req) {
    const { email, password } = await req.json();
    const url = "mongodb+srv://rizwanahmedg2020:rizwanahmedg2020@cluster0.cm5rke6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    try {
        const db = client.db("todo_app");
        const collection = db.collection("register");
        const check_user_email = await collection.findOne({ email })
        if (check_user_email) {
            if (password === check_user_email.password) {
                const authToken = generateAuthToken(email)
                console.log(authToken)
                return NextResponse.json({ success: "User Login successfully...", authToken })
            }
            else {
                return NextResponse.json({ error: "Password does not match" })
            }
        }
        else {
            return NextResponse.json({ error: "User not found" })
        }
    }
    catch (err) {
        console.log(err)
    }
}