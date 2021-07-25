import useCollapse from 'react-collapsed';
import styles from './collapsible.module.css'
import {Fragment} from 'react';
const Toggler=(props)=>{
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
    const rotationValue = "-90deg";
    const arrowStyle = {
      "--transform": rotationValue,
    };

    return (
       < div className={styles.container}>
        <button {...getToggleProps()} className={props.classname}>
        <div className={styles.arrow}>
        <span
          className={`${styles.leftPart} `}
          style={isExpanded ? arrowStyle : null}
        ></span>
        <span
          className={styles.rightPart}
          style={isExpanded ? arrowStyle : null}
        ></span>
      </div>
            {props.children}
        </button>
        < div {...getCollapseProps()} className={styles.itemList}>
           {props.collapsible}
        </div>
       </ div>

    )

}



export default Toggler;
