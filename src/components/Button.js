import classes from './button.module.css'

const Button = ({className, onClick, children}) => {
    return (
        <button type='submit' className={classes.button} onClick={onClick}>{children}</button>
    )
}

export default Button;