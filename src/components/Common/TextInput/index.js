import React from 'react';
import cx from 'classnames';
import classes from './style.module.css';

const TextInput = React.forwardRef(({ label, placeholder, onKeyDown }, ref) => {
    return (
        <div className={classes.wrapper}>
            <input
                type="email"
                className={cx(classes['text-input'])}
                id="floatingInput"
                placeholder={placeholder}
                ref={ref}
                onKeyDown={onKeyDown}
            />
            <label htmlFor="floatingInput" className={classes.label}>
                {label}
            </label>
        </div>
    );
});

export default TextInput;
