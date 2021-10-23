import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './feedback.module.css';

const Feedback = ({ options, onLeaveFeedback }) => {
	return (
		<>
			{options.map((option) => (
				<button key={shortid.generate()} type="button" className={styles.Feedback_button} name={option} onClick={onLeaveFeedback} >
					{option}
				</button>
			))}
		</>
	);
};
Feedback.propTypes = {
	options: PropTypes.array.isRequired,
	onLeaveFeedback: PropTypes.func.isRequired
};

export default Feedback;