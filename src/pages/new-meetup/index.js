import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
import Head from 'next/head';

const NewMeetupPage = () => {

    const router = useRouter();

    async function addMeetupHandler(meetupData) {
        const res = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json();
        console.log(data);   

        router.push('/');
    }

    return (
        <>
        <Head>
            <title>Add a New Meetup</title>
            <meta
                name="description"
                content="Add your own meetups and create amazing networking opportunities."
            />
        </Head>
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
        </>
    );
};

export default NewMeetupPage;