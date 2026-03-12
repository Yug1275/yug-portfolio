import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {

  const [state, handleSubmit] = useForm("xyknjkjk");

  if (state.succeeded) {
    return (
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold">Message Sent ✅</h2>
        <p className="text-gray-600 mt-4">
          Thank you for contacting me. I will get back to you soon.
        </p>
      </section>
    );
  }

  return (
    <section className="py-8 bg-white">

      <div className="max-w-6xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-2">Contact</h1>

        <p className="text-gray-600 text-center mt-4 mb-10">
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* LEFT CONTACT INFO */}

          <div className="space-y-6">

            <h2 className="text-3xl font-bold">
              Let's work together.
            </h2>

            <p className="text-gray-600">
              Building something complex? I turn technical challenges
              into elegant, high-performance user experiences.
            </p>

            {/* EMAIL CARD */}

            <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-6 shadow-xl">

              <p className="text-sm text-gray-500">Email</p>

              <p className="font-semibold">
                yjpatel1275@gmail.com
              </p>

            </div>

            {/* PHONE CARD */}

            <div className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-6 shadow-xl">

              <p className="text-sm text-gray-500">Phone</p>

              <p className="font-semibold">
                +91 9510303247
              </p>

            </div>

          </div>


          {/* CONTACT FORM */}

          <form
            onSubmit={async (e) => {
              await handleSubmit(e);

              const formData = new FormData(e.target);

              await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  name: formData.get("name"),
                  email: formData.get("email"),
                  message: formData.get("message")
                })
              });
            }}
            className="bg-gradient-to-br from-white via-gray-100 to-gray-200 border border-gray-300 rounded-2xl p-8 shadow-xl space-y-6"
          >

            {/* NAME */}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
              required
            />

            {/* EMAIL */}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
              required
            />

            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            {/* MESSAGE */}

            <textarea
              name="message"
              placeholder="Tell me about your project"
              rows="4"
              className="w-full border-b border-gray-400 bg-transparent py-2 focus:outline-none"
              required
            />

            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            {/* SUBMIT BUTTON */}

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;