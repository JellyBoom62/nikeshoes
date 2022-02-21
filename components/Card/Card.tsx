import { CardProps } from "./Card.props";
import styles from './Card.module.css';

export const Card = ({ imageurl, title, ...props }: CardProps): JSX.Element => {

	return (
		<div className={styles.card}
			{...props}>
			<div className={styles.cardbox}>
				<img src={imageurl} alt="shoe" />
				<span className={styles.title}>{title ? title : 'Nike BRO'}</span>
			</div>
		</div>
	)
}