import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

// Secret key used to sign JWT tokens


export async function POST(req) {
  const { title, description } = await req.json();
  const uri = 'mongodb+srv://rizwanahmedg2020:rizwanahmedg2020@cluster0.cm5rke6.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(uri);

  try {
    const db = client.db('todo_app');
    const collection = db.collection('tasks');
    // const authToken = req.headers.authorization;
    // const decodedToken = verifyAuthToken(authToken);
    // const userId = decodedToken.email;

    const result = await collection.insertOne({
      title,
      description,
      time: new Date().toLocaleTimeString(),
      day: new Date().toLocaleDateString(),
    });

    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    // Return an error response in case of an exception
    return NextResponse.error(err.message, 500); // You can use a different status code if needed
  } finally {
    // Make sure to close the MongoDB client
    client.close();
  }
}
