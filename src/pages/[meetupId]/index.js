import MeetupDetails from "@/components/meetups/MeetupDetails";
import connectDB from "@/database/db-connect";
import { ObjectId } from 'mongodb';
import Head from 'next/head';

const MeetupDetailsPage = ({meetupData}) => {
    return (
        <>
        <Head>
            <title>{meetupData.title}</title>
            <meta name="description" content={meetupData.description} />
        </Head>
        <div>
           <MeetupDetails
           id={meetupData.id}
           image={meetupData.image}
           title={meetupData.title}
           address={meetupData.address}
           description={meetupData.description}
           />
        </div>
        </>
    );
};

export default MeetupDetailsPage;

export async function getStaticPaths() {
    const [db, client] = await connectDB();
    const meetups = await db.collection('meetups').find({}, { _id: 1 }).toArray();
    client.close();

    return {
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() }
        })),
        fallback: "blocking"
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const [db, client] = await connectDB();
    const meetups = await db.collection('meetups').findOne({ _id: new ObjectId(meetupId) });
    client.close();

    return {
        props: {
            meetupData: {
                id: meetups._id.toString(),
                title: meetups.title,
                image: meetups.image,
                address: meetups.address,
                description: meetups.description
            }
        }
    };
}