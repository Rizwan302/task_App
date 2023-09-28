import {MongoClient} from "mongodb";
import { NextResponse } from "next/server";


export async function GET(req){
    const url = "mongodb+srv://rizwanahmedg2020:rizwanahmedg2020@cluster0.cm5rke6.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(url);

    try{
        await client.connect();
        const database = client.db('todo_app');
        const collection = database.collection('tasks');
        const query = {};
        const cursor = await collection.find({}).toArray();

        if (cursor) {
            return NextResponse.json(cursor); // Return the found document as JSON
        } else {
            return NextResponse.json({ message: "Document not found" });
        }
    }
    catch(err){
        console.log(err)
    }
}