import classes from './container.module.css';
import data from '../data';
import { useState } from 'react';
import List from './List';
import Button from './Button';

const Container = () => {
    const [showList, setShowList] = useState(false);
    return (
        <main className={classes.main}>
            <section className={classes.section}>
                <h3>{data.length} person's have birthday today</h3>
                {showList && <List people={data} />}
                <div className={classes.buttonContainer}>
                    <Button onClick={() => setShowList(!showList)}>{showList ? "Hide List" : "Show List"}</Button>
                </div>
            </section>
        </main>
    )
}

export default Container;
