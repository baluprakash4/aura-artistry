import React from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import {
  Mail,
  MessageCircle,
  Instagram,
  Send,
  MapPin,
  Phone,
} from "lucide-react";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs
      .send(
        "service_qkv59xn",
        "template_dqmv7uj",
        formData,
        "4NVT4jiLSC5BMp0oB",
      )
      .then(() => {
        alert("Message sent successfully!");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message");
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* CONTACT FORM */}

      <div className="lg:col-span-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl border border-brand-olive/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* NAME */}
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

              {/* EMAIL */}
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

            {/* SUBJECT */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">
                Subject
              </label>
              <input
                name="subject"
                required
                type="text"
                className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl"
              />
            </div>

            {/* MESSAGE */}
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold text-brand-olive/40 ml-1">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                className="w-full px-6 py-4 bg-brand-cream/50 border border-brand-olive/10 rounded-2xl resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full btn-primary flex items-center justify-center py-5"
            >
              Send Message <Send className="ml-2 w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
