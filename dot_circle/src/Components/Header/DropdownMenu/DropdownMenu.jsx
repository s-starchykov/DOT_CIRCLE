import React from 'react';
import style from './DropownMenu.module.css'
import {NavLink} from "react-router-dom";


class Dropdown extends React.Component {

    // Define component constructor
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            current: '',
            selected: this.props.initial || -1
        };
    }

    // Item onClick event
    itemClick(el) {
        this.setState({
            selected: el
        });
    }

    // Hide menu dropped list when mouse leave
    mouseLeave(el) {
        this.setState({
            active: !this.state.active
        });
    }

    // Render dropped menu list item
    menuItems() {
        // Check is menu items exists
        if (!this.props.content) return;
        // Map items array from props into list item
        return this.props.content.map((content, el) =>
            <li onClick={evt => this.itemClick(el)}
                className={`${style.listItem} ${el === this.state.selected ? style.activeItem : ''}`}>
                <NavLink to={`${content.path}`} activeClassName={style.activeLink}>{content.title}</NavLink>
            </li>
        )
    }

    // Map props to element
    render() {
        const path = this.props.path.pathname;
        return (
            <div onMouseLeave={el => this.mouseLeave(el)}
                 onMouseEnter={el => this.mouseLeave(el)}
                 className={`${style.dropdown} ${path === '/' ? style.current : ''}`}>

                <div className={style.listItem}>{this.props.title}</div>

                <ul className={`${style.list} ${this.state.active ? style.droppedList : ''}`}>{this.menuItems()}</ul>
            </div>
        );
    }
}

export default Dropdown;
