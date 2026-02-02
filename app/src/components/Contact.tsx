import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message transmis au mainframe ! (Simulation)");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Info Section */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-3 py-1 border border-white/20 bg-white/5 text-white rounded font-mono text-sm mb-2">
                03. Contact
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 font-mono">
                Initialiser <span className="text-[#00f0ff]">Connection</span>
              </h2>
              <p className="text-zinc-400 text-lg">
                Un projet en tête ? Besoin d une expertise Data ou FullStack ?
                Je suis disponible pour échanger.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-[#00f0ff] rounded-lg group-hover:border-[#00f0ff] transition-colors shadow-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white font-mono">Email</h3>
                  <a
                    href="mailto:Corentindubail@gmail.com"
                    className="text-zinc-400 hover:text-[#00f0ff] transition-colors"
                  >
                    Corentindubail@gmail.com
                  </a>
                </div>
              </div>
{/* 
              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-[#7000ff] rounded-lg group-hover:border-[#7000ff] transition-colors shadow-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white font-mono">
                    Téléphone
                  </h3>
                  <p className="text-zinc-400">06 77 60 13 19</p>
                </div>
              </div> */}

              <div className="flex items-start space-x-4 group">
                <div className="p-3 bg-zinc-900 border border-zinc-800 text-pink-500 rounded-lg group-hover:border-pink-500 transition-colors shadow-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-white font-mono">
                    Localisation
                  </h3>
                  <p className="text-zinc-400">Guyancourt (78280)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
