import React from "react";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi pour la démo
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    console.log("Données saisies:", Object.fromEntries(formData));
    alert("Message simulé ! Pour le recevoir réellement, il faut connecter un service backend (voir explications).");
    form.reset();
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
            {/* Decorative glow effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            
            <Card className="relative shadow-2xl border-white/10 bg-zinc-900/90 backdrop-blur-xl">
              <CardContent className="p-6 md:p-10">
                <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
                  <div className="p-2 bg-[#00f0ff]/10 rounded border border-[#00f0ff]/30">
                    <MessageSquare className="w-5 h-5 text-[#00f0ff]" />
                  </div>
                  <span className="font-mono text-sm uppercase tracking-widest text-zinc-400">Terminal de communication</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">Identifiant / Nom</label>
                        <input
                        type="text"
                        id="name"
                        required
                        className="flex h-12 w-full rounded bg-black/60 border border-zinc-800 px-4 py-2 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all hover:border-zinc-700"
                        placeholder="John Doe"
                        />
                    </div>
                    
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">Email / Contact</label>
                        <input
                        type="email"
                        id="email"
                        required
                        className="flex h-12 w-full rounded bg-black/60 border border-zinc-800 px-4 py-2 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all hover:border-zinc-700"
                        placeholder="john@example.com"
                        />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">Données / Message</label>
                    <textarea
                      id="message"
                      required
                      rows={6}
                      className="flex w-full rounded bg-black/60 border border-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all hover:border-zinc-700 resize-none"
                      placeholder="Initialisation du protocole d'échange..."
                    />
                  </div>

                  <Button type="submit" variant="default" className="w-full gap-2 font-bold tracking-widest h-12 md:h-14 text-sm md:text-base">
                    Envoyer un message <Send className="h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
