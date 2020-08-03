import React, { Component } from 'react';

class EntryImage extends Component {
    render() {
        return (
                <a href={this.props.imgURL} target="_blank" rel="noopener noreferrer" className="entry_image">
                    <img alt={this.props.imgAlt} src={this.props.imgURL} />
                </a>
        );
    }
}

export default EntryImage;