import React from "react";
import ImageGallery from 'react-image-gallery';
 
const images = [
  {
    original: './assets/Pictures/Before_after/walkway/walkway_before.jpeg',
    // thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/walkway/walkway_after.jpeg',
    // thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/walkway/walkway_perspective.jpeg',
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/walkway/walkway_pers_after.jpeg',
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: './assets/Pictures/Before_after/walkway/stairs_after.jpeg',
    // thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];
 
class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} />;
  }
}
export default MyGallery;