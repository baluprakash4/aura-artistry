import React from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { Upload, Send, CheckCircle2 } from "lucide-react";

export const CustomOrder = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qkv59xn",
        "template_dqmv7uj",
        e.currentTarget,
        "4NVT4jiLSC5BMp0oB",
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send request");
      });
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white p-12 rounded-[40px] shadow-xl"
        >
          <CheckCircle2 className="w-20 h-20 text-brand-olive mx-auto mb-6" />

          <h2 className="text-4xl font-serif font-bold text-brand-olive mb-4">
            Request Received!
          </h2>

          <p className="text-brand-olive/60 mb-8 leading-relaxed">
            Thank you for your interest in a custom piece. I'll review your
            request and get back to you within 2–3 business days.
          </p>

          <button onClick={() => setSubmitted(false)} className="btn-primary">
            Send Another Request
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE CONTENT */}

        <div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-olive mb-8">
            Custom Art <br />
            <span className="italic text-brand-clay">Requests</span>
          </h1>

          <p className="text-brand-olive/60 text-lg mb-12 leading-relaxed">
            Whether it's a portrait of a loved one, a landscape of a special
            place, or a unique gift for a celebration, I'd love to help bring
            your vision to life.
          </p>
        </div>

        {/* FORM */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-brand-olive/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* NAME + EMAIL */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">
                  Name
                </label>

                <input
                  name="name"
                  required
                  type="text"
                  className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">
                  Email
                </label>

                <input
                  name="email"
                  required
                  type="email"
                  className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl"
                />
              </div>
            </div>

            {/* PHONE */}

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">
                Phone (Optional)
              </label>

              <input
                name="phone"
                type="tel"
                className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl"
              />
            </div>

            {/* DESCRIPTION */}

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">
                Description of Gift
              </label>

              <textarea
                name="description"
                required
                rows={4}
                placeholder="Describe what you have in mind..."
                className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl resize-none"
              ></textarea>
            </div>

            {/* FILE UPLOAD */}

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">
                Reference Image (Optional)
              </label>

              <label className="border-2 border-dashed border-brand-olive/10 rounded-2xl p-8 text-center block cursor-pointer hover:bg-brand-olive/5">
                <Upload className="w-8 h-8 text-brand-olive/30 mx-auto mb-2" />

                <p className="text-sm text-brand-olive/40">
                  Click to upload image
                </p>

                <input
                  type="file"
                  name="reference_image"
                  accept="image/*"
                  className="hidden"
                />
              </label>
            </div>

            {/* SUBMIT */}

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center py-5"
            >
              Submit Order Request
              <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
