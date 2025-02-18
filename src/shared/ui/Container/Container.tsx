import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = {
    children: React.ReactNode;
    className?: string
}
export const Container: React.FC<ContainerProps> = ({ children, className }) => {
    return (
        <div className={` ${className} ${styles.container} `}>{children}</div>
    );
};