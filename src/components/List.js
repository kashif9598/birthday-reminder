import classes from "./list.module.css"

const List = ({ people }) => {
    return (
        <>
            {people.map((person) => {
                const { name, age, image } = person;
                return (
                    <article className={classes.personContainer}>
                        <img className={classes.imageContainer} src={image} alt="Person" />
                        <div className={classes.personDetail}>
                            <h3>{name}</h3>
                            <h4>{age}</h4>
                        </div>
                    </article>
                )
            })}
        </>
    )
}

export default List;