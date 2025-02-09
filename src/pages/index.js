import connectDB from "@/database/db-connect";
import MeetupList from "@/components/meetups/MeetupList";

const meetupsList = [
  {
    id: 0,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bharat_Mandapam_Pragati_Maidan.jpg/768px-Bharat_Mandapam_Pragati_Maidan.jpg",
    title: "Bharat Mandapam Pragati Maidan",
    address: "New Delhi, India"
  },
  {
    id: 1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Yasho_Bhoomi_International_Convention_Centre_Main.jpg/640px-Yasho_Bhoomi_International_Convention_Centre_Main.jpg",
    title: "Yashobhoomi",
    address: "New Delhi, India"
  }
]

export default function Home({meetups}) {

  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  const [db, client] = await connectDB();
  const meetups = await db.collection('meetups').find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
      }))
    },
    revalidate: 10
  }
}