import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'brunobarreira7@hotmail.com',
      href: 'mailto:brunobarreira7@hotmail.com'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Suisse, Lausanne',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactez-<span className="text-purple-400">moi</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Prêt à donner vie à votre projet ? Discutons de vos idées !
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center space-x-4 p-6 bg-gray-900 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-purple-400 transition-colors duration-300">
                      {info.label}
                    </h3>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-white text-xl font-semibold mb-4">
                Pourquoi me choisir ?
              </h3>
              <div className="space-y-3">
                {[
                  'Réactivité et communication transparente',
                  'Code de qualité et bonnes pratiques',
                  'Respect des délais et du budget',
                  'Support et maintenance inclus'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;