import connectDB from '../../database/db-connect';

export default async function newMeetupHandler(req, res) {

    if (req.method === 'POST') {
        const data = req.body;

        const newMeetup = {
            ...data,
            id: Date.now().toString(),
        };

        console.log(newMeetup);

        //connect to mongodb database server
        const [db, client] = await connectDB();

        //insert new meetup
        const result = await db.collection('meetups').insertOne(newMeetup);
        console.log(result);
        
        client.close();
    }

    res.status(200).json({ message: 'Meetup Created!' });
}