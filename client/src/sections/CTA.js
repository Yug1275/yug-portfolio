import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="py-12 sm:py-20 text-center px-4">

      <h2 className="text-3xl sm:text-4xl font-bold">
        Let's Work Together
      </h2>

      <p className="mt-4">
        Interested in collaborating or hiring me?
      </p>

      <Link to="/contact" className="inline-block mt-6 px-6 py-3 bg-black text-white rounded-lg">
        Contact Me
      </Link>

    </section>
  );
}

export default CTA;