import { Link } from "react-router-dom"

const PhotographyCard = ({ URI, URL, alt }) => {
    return (
        <div>
            <Link to={URI}>
                <img
                    src={URL}
                    alt={alt}
                    className="w-full h-[500px] lg:w-[500px] lg:h-[600px] rounded-xl object-cover ease-linear duration-300 hover:scale-105"
                />
            </Link>
        </div>
    )
}

export default PhotographyCard