import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";

function Contact() {
  const [state, handleSubmit] = useForm("xyknjkjk");

  if (state.succeeded) {
    return (
      <section className="py-24 text-center max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-panel p-12 rounded-3xl"
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Message Sent</h2>
          <p className="text-gray-400 text-lg">
            Thank you for contacting me. I will get back to you soon.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full filter blur-[150px] -z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-0 -translate-x-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full filter blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">Contact</h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Feel free to reach out for opportunities or collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* LEFT CONTACT INFO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                Let's work together.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Building something complex? I turn technical challenges
                into elegant, high-performance user experiences.
              </p>
            </div>

            <div className="space-y-4">
              {/* EMAIL CARD */}
              <div className="glass-panel p-6 group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Email</p>
                    <p className="font-medium text-white text-lg">yjpatel1275@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* PHONE CARD */}
              <div className="glass-panel p-6 group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-5">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold mb-1">Phone</p>
                    <p className="font-medium text-white text-lg">+91 9510303247</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-panel p-8 sm:p-10"
            >
              <div className="space-y-8">
                {/* NAME */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=" "
                    className="block w-full bg-transparent border-0 border-b-2 border-white/20 py-3 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent"
                    required
                  />
                  <label htmlFor="name" className="absolute left-0 top-3 text-gray-500 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white pointer-events-none -translate-y-1/2">
                    Your Name
                  </label>
                </div>

                {/* EMAIL */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    className="block w-full bg-transparent border-0 border-b-2 border-white/20 py-3 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent"
                    required
                  />
                  <label htmlFor="email" className="absolute left-0 top-3 text-gray-500 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-white pointer-events-none -translate-y-1/2">
                    Email Address
                  </label>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-2 absolute -bottom-6"
                  />
                </div>

                {/* MESSAGE */}
                <div className="relative pt-2">
                  <textarea
                    name="message"
                    id="message"
                    placeholder=" "
                    rows="4"
                    className="block w-full bg-transparent border-0 border-b-2 border-white/20 py-3 text-white focus:ring-0 focus:border-white transition-colors peer placeholder-transparent resize-none"
                    required
                  />
                  <label htmlFor="message" className="absolute left-0 top-5 text-gray-500 text-lg transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:top-5 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-white pointer-events-none -translate-y-1/2">
                    Tell me about your project
                  </label>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-400 text-sm mt-2 absolute -bottom-6"
                  />
                </div>

                {/* SUBMIT BUTTON */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <span>{state.submitting ? "Sending..." : "Send Message"}</span>
                    {!state.submitting && <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;