function Resume() {

  const resumeFile = "/assets/Yug Patel Resume.pdf"; // put resume in public/assets

  return (
    <section className="py-8 px-4 sm:px-8 max-w-7xl mx-auto">

<div className="max-w-4xl mx-auto px-4 sm:px-6">

        <h1 className="text-4xl font-bold text-center mb-2">Resume</h1>

        <p className="text-gray-600 text-center mt-4 mb-10">
          View or download my resume below.
        </p>

        {/* RESUME CARD */}
        <div className="mt-12 bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-8 shadow-xl space-y-6 card-hover">

          {/* PDF PREVIEW */}
          <div className="w-full h-[60vh] min-h-[300px] rounded-xl overflow-hidden border border-gray-300">

            <iframe
              src={resumeFile}
              title="Resume Preview"
              className="w-full h-full"
            ></iframe>

          </div>

          {/* DOWNLOAD BUTTON */}
          <div className="flex justify-center">

            <a
              href={resumeFile}
              download
              className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Download Resume
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Resume;