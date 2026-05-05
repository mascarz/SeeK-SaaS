import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-20">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-400 mb-12 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar para o início
        </button>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Política de Privacidade</h1>
        <p className="text-gray-400 mb-12">Última atualização: 05 de Maio de 2026</p>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Introdução</h2>
            <p>
              A SeeK valoriza a sua privacidade. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso SaaS Assistido. Nosso objetivo é fornecer uma experiência transparente e segura.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Coleta de Dados</h2>
            <p>
              Coletamos informações que você nos fornece diretamente, como:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Informações de contato (Nome, WhatsApp, E-mail).</li>
              <li>Dados de busca e preferências de serviço para nossa assistência.</li>
              <li>Informações de pagamento (processadas por parceiros seguros).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Uso das Informações</h2>
            <p>
              Utilizamos seus dados exclusivamente para:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Prestar o serviço de busca assistida contratado.</li>
              <li>Personalizar sua experiência na plataforma.</li>
              <li>Comunicar atualizações importantes e suporte técnico via WhatsApp.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Segurança</h2>
            <p>
              Implementamos medidas de segurança de nível empresarial, incluindo criptografia SSL e protocolos de acesso restrito, para garantir que seus dados permaneçam protegidos contra acesso não autorizado.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Seus Direitos</h2>
            <p>
              De acordo com a LGPD, você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Basta entrar em contato com nossa equipe de suporte.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
