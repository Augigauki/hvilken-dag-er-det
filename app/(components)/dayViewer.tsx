import styles from './dayViewer.module.css'

const DayViewer = ({days, day, children}: {days: number, day: string, children: React.ReactNode}) => {
    return(
        <div className={styles.content}>
				<h6 className={styles.tag}>{children}</h6>
				{/* <h1 className={styles.heading}>
					Det er <span className={styles.days}>{days}</span> {day}
				</h1> */}
                <div className={styles.numbers}>
                    <p className={styles.zeroes}>0000</p>
                    <p className={styles.days}>{days}</p>
                </div>
				{/* <h3>Kos deg!</h3> */}
			</div>
    )
};

export default DayViewer;