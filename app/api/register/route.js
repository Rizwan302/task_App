const { MongoClient } = require('mongodb');
const { NextResponse } = require('next/server');
// import jwt from 'jsonwebtoken';



export async function POST(req) {
  const { name, email, password, confirmpassword } = await req.json();
  const uri = 'mongodb+srv://rizwanahmedg2020:rizwanahmedg2020@cluster0.cm5rke6.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    const db = client.db('todo_app');
    const collection = db.collection('register');
    const existingUser = await collection.findOne({ email });


    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' });
    }

    if (password === confirmpassword) {
      // const token = jwt.sign(name, 'your-secret-key',{expiresIn: '1h'})
      const result = await collection.insertOne({
        name,
        email,
        password,
        confirmpassword,
      });

      return NextResponse.json(result);
    } else {
      return NextResponse.json({ error: 'Password does not match' });
    }
  } catch (err) {
    console.error(err);
    console.log(err)
  } 
}

