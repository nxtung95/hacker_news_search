import React from 'react';
// import PreviewURLAPI from '../.././service/PreviewURLAPI';
import '../.././assets/css/result/StoryImage.css';

export default class StoryImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: '',
        }
    }

    // async componentDidMount() {
    //     const result = await PreviewURLAPI.previewImageURL(this.props.imgURL);
    //     if (result.status === 200) {
    //         this.setState({
    //             imageURL: result.data.image,
    //         });
    //     }
    // }

    render() {
        return (
            <div className="story-image">
                <img loading="lazy" alt="thumbnail for result" src={this.state.imageURL} />
            </div>
        );
    }
}