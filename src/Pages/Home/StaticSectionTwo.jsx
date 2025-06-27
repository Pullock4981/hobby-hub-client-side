

import { Link } from "react-router";


const StaticSectionTwo = () => (
    <section className="bg-base-200 py-10 px-4 md:px-8 text-center mt-6 text-base-content transition-colors duration-300">
        <h3 className="md:text-2xl text-xl font-semibold mb-4">Start Your Own Group</h3>
        <p className="max-w-2xl mx-auto">
            Can’t find your favorite hobby group? Start one yourself and gather people who share your passion!
        </p>
        <Link
            to={'/createGroup'}
            className="btn mt-4 px-6 py-2 bg-[#6C8EA7] text-white rounded-lg transition"
        >
            Create Group
        </Link>
    </section>
);

export default StaticSectionTwo;
