import { useState } from "react";

const IMAGE_1_URL = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const IMAGE_2_URL = "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const IMAGE_3_URL = "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fCVFRCU5MiU4RCVFQSVCMiVCRHxlbnwwfHwwfHx8MA%3D%3D"

export  default function Carousel() {
    const [activeImage, setActiveImage] = useState(1);
    return (
        <div>
            <div className="carousel">
                <ul className="carousel__slides">
                    <input type="radio" name="radio-buttons" id="img-1" checked={activeImage === 1} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img alt="scenery 1" src={IMAGE_1_URL} />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={() => setActiveImage(3)} className="carousel__prev">
                                <span>&lsaquo;</span>
                            </label>
                            <label onClick={() => setActiveImage(2)} className="carousel__slide-next">
                                <span>&lsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-2" checked={activeImage === 2} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img alt="scenery 2" src={IMAGE_2_URL} />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={() => setActiveImage(1)} className="carousel__prev">
                                <span>&lsaquo;</span>
                            </label>
                            <label onClick={() => setActiveImage(3)} className="carousel__slide-next">
                                <span>&lsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input type="radio" name="radio-buttons" id="img-3" checked={activeImage === 3} readOnly />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img alt="scenery 3" src={IMAGE_3_URL} />
                        </div>
                        <div className="carousel__controls">
                            <label onClick={() => setActiveImage(2)} className="carousel__prev">
                                <span>&lsaquo;</span>
                            </label>
                            <label onClick={() => setActiveImage(1)} className="carousel__slide-next">
                                <span>&lsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className="carousel__dots">
                        <label onClick={() => setActiveImage(1)}
                        className="carousel__dot"
                        id="img-dot-1"></label>
                        <label onClick={() => setActiveImage(2)}
                        className="carousel__dot"
                        id="img-dot-2"></label>
                        <label onClick={() => setActiveImage(3)}
                        className="carousel__dot"
                        id="img-dot-3"></label>
                    </div>
                </ul>
            </div>
        </div>
    )
}