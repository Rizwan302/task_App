import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function DELETE(req) {
  // Parse the document ID from the request
  const { id } = req.query;

  const url = 'mongodb+srv://rizwanahmedg2020:rizwanahmedg2020@cluster0.cm5rke6.mongodb.net/?retryWrites=true&w=majority';
  const client = new MongoClient(url);

  try {
    await client.connect();
    const database = client.db('todo_app');
    const collection = database.collection('tasks');

    // Construct the query to find and delete the document by ID
    const query = { _id: new ObjectId(id) };
    
    // Delete the document
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 1) {
      // Document was deleted successfully
      return NextResponse.json({ message: 'Document deleted successfully' });
    } else {
      // Document with the provided ID was not found
      return NextResponse.json({ message: 'Document not found' });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to delete document' });
  } finally {
    client.close();
  }
}
