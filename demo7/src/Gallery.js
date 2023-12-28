

function Gallery (props) {
    const href = props.href;
    const image = props.image;

    return (
        <>
        <a target="_blank" href="img_5terre.jpg">
          <img src={image} alt="Cinque Terre" width="600" height="400" />
        </a>
        <div class="desc">Add a description of the image here</div>
        </>
    );
}

export default Gallery;