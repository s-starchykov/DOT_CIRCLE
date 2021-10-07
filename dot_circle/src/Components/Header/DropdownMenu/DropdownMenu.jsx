import React from 'react';
import './DropownMenu.css'


class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            selected: this.props.initial || -1
        };
    }

    toggleDropdown() {
        this.setState({
            active: !this.state.active
        });
    }

    handleClick(i) {
        this.setState({
            selected: i
        });
    }

    renderOptions() {
        if (!this.props.options) return;


        return this.props.options.map((option, i) => <li
                    onClick={evt => this.handleClick(i)}
                    key={i}
                    className={"dropdown__list-item " + (i === this.state.selected ? 'active' : '')}
                >
                    {option}
                </li>

        )
    }

    render() {
        return (
            <div className="dropdown">
                <div
                    onClick={() => this.toggleDropdown()}
                    className="dropdown__toggle dropdown__list-item"
                >
                    {this.props.title}
                </div>
                <ul className={"dropdown__list " + (this.state.active ? 'dropdown__list--active' : '')}>{this.renderOptions()}</ul>
            </div>
        );
    }
}

export default Dropdown;
