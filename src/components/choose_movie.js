import React, { Component } from 'react';
import DropdownInput from 'react-dropdown-input';

class ChooseMovie extends Component {
    constructor(props) {
        super(props);

        this.state = { options: [] };
    }

    render() {
        return(
            <div>
                <DropdownInput
                    placeholder = 'Type a movie name'
                    options= {this.props.options}
                />
            </div>
        );
    }
}

export default ChooseMovie;