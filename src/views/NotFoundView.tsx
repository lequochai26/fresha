import Strings from "../Strings";

export default function NotFoundView() {
    return (
        <div className="--flex-1 h-full w-full flex flex-col justify-center items-center">
            <h1 className="mb-3 text-4xl">
                { Strings.NOT_FOUND_TITLE }
            </h1>

            <p className="mb-10">
                { Strings.NOT_FOUND_DESCRIPTION }
            </p>

            <img
                src={Strings.NOT_FOUND_IMG_SRC}
                alt="Not found"
                className="w-36 h-36"
            />
        </div>
    );
}