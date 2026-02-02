"use client";
import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2, Terminal } from "lucide-react";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const Contact: React.FC = () => {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "CONNECTION_FAILED");
        setStatus("error");
      }
    } catch {
      setErrorMessage("NETWORK_ERROR");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-[#00f0ff] rounded font-mono text-sm mb-2">
            03. Contact
          </div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4 font-mono">
            Établir une <span className="text-[#7000ff]">Connexion</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Initialisez le protocole de communication pour établir un canal sécurisé.
          </p>
        </div>

        {/* Terminal Window */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900/80 border-b border-zinc-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <div className="flex-1 text-center">
                <span className="text-zinc-500 text-xs font-mono">contact@portfolio ~ /send-message</span>
              </div>
              <Terminal className="w-4 h-4 text-zinc-600" />
            </div>

            {/* Terminal Body */}
            <div className="p-6 font-mono text-sm">
              {/* Welcome message */}
              <div className="mb-6 text-zinc-500 text-xs">
                <p>$ ./init_connection.sh</p>
                <p className="text-[#00f0ff]">[OK] Secure channel established</p>
                <p className="text-[#00f0ff]">[OK] Encryption: AES-256</p>
                <p className="text-zinc-400 mt-2">Waiting for input...</p>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="mb-6 p-3 bg-emerald-500/10 border border-emerald-500/30 rounded flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <p className="text-emerald-400">[SUCCESS] Message transmitted</p>
                    <p className="text-emerald-400/70">Response ETA: 24-48h</p>
                  </div>
                </div>
              )}

              {status === "error" && (
                <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-red-500 mt-0.5 shrink-0" />
                  <div className="text-xs">
                    <p className="text-red-400">[ERROR] {errorMessage}</p>
                    <p className="text-red-400/70">Please retry transmission</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="flex items-center gap-2 text-zinc-500 text-xs mb-2">
                    <span className="text-[#7000ff]">const</span>
                    <span className="text-white">username</span>
                    <span className="text-zinc-600">=</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00f0ff]">&quot;</span>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      disabled={status === "submitting"}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded px-6 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/50 transition-all disabled:opacity-50 autofill:bg-zinc-900 autofill:text-white [&:-webkit-autofill]:bg-zinc-900 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_rgb(24_24_27)_inset]"
                      placeholder="John Doe"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00f0ff]">&quot;;</span>
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="flex items-center gap-2 text-zinc-500 text-xs mb-2">
                    <span className="text-[#7000ff]">const</span>
                    <span className="text-white">email</span>
                    <span className="text-zinc-600">=</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#00f0ff]">&quot;</span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      disabled={status === "submitting"}
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded px-6 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/50 transition-all disabled:opacity-50 autofill:bg-zinc-900 autofill:text-white [&:-webkit-autofill]:bg-zinc-900 [&:-webkit-autofill]:[-webkit-text-fill-color:white] [&:-webkit-autofill]:[box-shadow:0_0_0_1000px_rgb(24_24_27)_inset]"
                      placeholder="john@example.com"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00f0ff]">&quot;;</span>
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="flex items-center gap-2 text-zinc-500 text-xs mb-2">
                    <span className="text-[#7000ff]">const</span>
                    <span className="text-white">message</span>
                    <span className="text-zinc-600">=</span>
                    <span className="text-[#00f0ff]">`</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === "submitting"}
                    className="w-full bg-zinc-900/50 border border-zinc-800 rounded px-4 py-3 text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff]/50 transition-all resize-none disabled:opacity-50"
                    placeholder="Votre message ici..."
                  />
                  <div className="text-xs text-[#00f0ff] mt-1">`;</div>
                </div>

                {/* Submit */}
                <div className="pt-4 border-t border-zinc-800/50">
                  <div className="flex items-center gap-3">
                    <span className="text-zinc-600 text-xs">$</span>
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-700 rounded text-white hover:border-[#00f0ff] hover:text-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span className="text-xs">transmitting...</span>
                        </>
                      ) : (
                        <>
                          <span className="text-xs">./send_message.sh</span>
                          <Send className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Cursor blink effect */}
                  <div className="mt-4 flex items-center gap-2 text-zinc-600 text-xs">
                    <span>Ready for input</span>
                    <span className="w-2 h-4 bg-[#00f0ff] animate-pulse"></span>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
