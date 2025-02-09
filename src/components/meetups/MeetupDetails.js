import styles from './MeetupDetails.module.css';
import Card from '../ui/Card';

const MeetupDetails = ({id, image, title, address, description}) => {
    console.log(id, image, title, address, description);

    return (
        <div className={styles.details}>
            <Card>
                <img src={image} alt={title} />
                <h1>{title}</h1>
                <address>{address}</address>
                <p>{description}</p>
            </Card>
        </div>
    );
};
export default MeetupDetails;