class Navigator extends React.Component {
    render() {
        return <div className={style.navigator} onClick={this.props.click}>{this.props.label}</div>
    }
}

class Item extends React.Component {
    render() {
        return <div className={style.item}><h1>{this.props.title}</h1>{this.props.text}</div>
    }
}

class Carousel extends React.Component {
    values = [
        { title: 'First', text: 'First text' },
        { title: 'Second', text: 'Second text' },
        { title: 'Third', text: 'Third text' },
        { title: 'Fourth', text: 'Fourth text' },
        { title: 'Fifth', text: 'Fifth text' },
        { title: 'Sixth', text: 'Sixth text' }
    ];

    constructor(props) {
        super(props);

        this.leftClick = this.leftClick.bind(this);
        this.rightClick = this.rightClick.bind(this);

        this.state = {
            startIndex: 0,
            items: [],
            loading: true
        };

        this.loadData();
    }

    loadData() {
        this.state.loading = false;
        this.state.items = this.getNewItems(this.state.startIndex);
    }

    getNewItems(startIndex) {
        return [
            this.values[startIndex],
            this.values[this.getNext(startIndex)],
            this.values[this.getNext(this.getNext(startIndex))]
        ];
    }

    getNext(current) {
        if (current === this.values.length - 1) {
            return 0;
        } else {
            return current + 1;
        }
    }

    getPrev(current) {
        if (current === 0) {
            return this.values.length - 1;
        } else {
            return current - 1;
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div className={style.carousel}>
                    Loading...
                </div>
            );
        } else {
            return (
                <div className={style.carousel}>
                    <Navigator click={this.leftClick} label='<'/>
                    <Item title={this.state.items[0].title} text={this.state.items[0].text}/>
                    <Item title={this.state.items[1].title} text={this.state.items[1].text} />
                    <Item title={this.state.items[2].title} text={this.state.items[2].text} />
                    <Navigator click={this.rightClick} label='>' />
                </div>
            );
        }
    }

    leftClick() {
        this.setState((state, props) => {
            const newStartIndex = this.getPrev(state.startIndex);
            return {
                startIndex: newStartIndex,
                items: this.getNewItems(newStartIndex)
            };
        });
    }

    rightClick() {
        this.setState((state, props) => {
            const newStartIndex = this.getNext(state.startIndex);
            return {
                startIndex: newStartIndex,
                items: this.getNewItems(newStartIndex)
            };
        });
    }
}

ReactDOM.render(
    <Carousel />,
    document.getElementById('root')
);