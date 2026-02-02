import React from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { Button } from './ui/Button';
import { Card, CardContent } from './ui/Card';

const Contact: React.FC = () => {
  // NOTE: Ce formulaire est actuellement en mode simulation.
  // Pour recevoir les emails, remplacez onSubmit par action="https://formspree.io/f/VOTRE_ID" et method="POST"
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
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-block px-3 py-1 border border-white/20 bg-white/5 text-white rounded font-mono text-sm mb-4">
            03. Contact
          </div>
          <h2 className="text-3xl font-bold text-white mb-4 font-mono">Transmission de <span className="text-[#00f0ff]">Données</span></h2>
          <p className="text-zinc-400 text-base max-w-xl mx-auto font-mono">
            // Initialisation du protocole de communication. <br/>
            Remplissez les champs ci-dessous pour établir la connexion.
          </p>
        </div>

        {/* Form Section */}
        <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00f0ff] to-[#7000ff] rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            
            <Card className="relative border-white/5 bg-zinc-900/80 backdrop-blur-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-8 border-b border-dashed border-white/10 pb-4">
                  <MessageSquare className="w-5 h-5 text-[#00f0ff]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">Secure Channel</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6">
                    <div className="group relative">
                        <label htmlFor="name" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 group-focus-within:text-[#00f0ff] transition-colors">Identifiant</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full bg-zinc-950/50 border-b border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f0ff] focus:bg-zinc-900/50 transition-all placeholder:text-zinc-800"
                          placeholder="Ex: Neo Anderson"
                        />
                    </div>
                    
                    <div className="group relative">
                        <label htmlFor="email" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 group-focus-within:text-[#00f0ff] transition-colors">Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-zinc-950/50 border-b border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f0ff] focus:bg-zinc-900/50 transition-all placeholder:text-zinc-800"
                          placeholder="Ex: neo@matrix.com"
                        />
                    </div>
                  
                    <div className="group relative">
                      <label htmlFor="message" className="block text-xs font-mono text-zinc-500 uppercase tracking-wider mb-2 group-focus-within:text-[#00f0ff] transition-colors">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full bg-zinc-950/50 border-b border-zinc-800 px-4 py-3 text-sm text-white focus:outline-none focus:border-[#00f0ff] focus:bg-zinc-900/50 transition-all resize-none placeholder:text-zinc-800"
                        placeholder="Saisissez votre message ici..."
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button type="submit" variant="default" className="w-full md:w-auto gap-2 font-mono uppercase tracking-widest text-xs h-12 px-8">
                      Initialiser l'envoi <Send className="h-3 w-3" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
