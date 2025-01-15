export default function ButtonSlider({ direction, moveSlide }) {
    return (
        <button
            onClick={moveSlide}
            className={
                direction === "next" ? "btn-slide next" : "btn-slide prev"
            }></button>
    );
}
