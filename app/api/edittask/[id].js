import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';

export async function PUT(req) {
    try {
        const { id } = req.query; // Get the task ID from the route parameters
        const { title, description } = await req.json(); // Parse the updated task data from the request body

        // MongoDB connection URL
        const url = 'mongodb+srv://rizwanahmedg2020:rizwanahmedg2020@cluster0.cm5rke6.mongodb.net/?retryWrites=true&w=majority';

        // Create a new MongoClient
        const client = new MongoClient(url);

        // Connect to the MongoDB database
        await client.connect();

        // Get a reference to the tasks collection
        const database = client.db('todo_app');
        const collection = database.collection('tasks');

        // Construct the query to update the task by ID
        const query = { _id: new ObjectId(id) };

        // Define the updated task data
        const updateData = {
            $set: {
                title,
                description
            },
        };

        // Update the task in the database
        const result = await collection.updateOne(query, updateData);

        if (result.modifiedCount === 1) {
            // Task was updated successfully
            return NextResponse.json({ message: 'Task updated successfully' });
        } else {
            // Task with the provided ID was not found
            return NextResponse.json({ error: 'Task not found' });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Failed to update task' });
    } finally {
        // Close the MongoDB client
        client.close();
    }
}
