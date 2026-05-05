import React from 'react';
import { ArrowLeft } from 'lucide-react';

const TermsPage = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-6 md:p-20">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-blue-400 mb-12 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" /> Voltar para o início
        </button>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-8">Termos de Uso</h1>
        <p className="text-gray-400 mb-12">Última atualização: 05 de Maio de 2026</p>

        <div className="space-y-12 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar a plataforma SeeK, você concorda em cumprir estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">2. Descrição do Serviço</h2>
            <p>
              A SeeK fornece um serviço de SaaS Assistido, que combina software de busca inteligente com consultoria humana para otimizar processos de aquisição e pesquisa para empresas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">3. Responsabilidades do Usuário</h2>
            <p>
              Você é responsável por fornecer informações precisas e manter a segurança de sua conta. O uso indevido da plataforma para atividades ilícitas resultará no cancelamento imediato dos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">4. Propriedade Intelectual</h2>
            <p>
              Todo o conteúdo, algoritmos e tecnologia da SeeK são de propriedade exclusiva da SeeK.br. O uso da plataforma não concede ao usuário qualquer direito de propriedade intelectual sobre a mesma.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">5. Limitação de Responsabilidade</h2>
            <p>
              Embora busquemos a excelência, a SeeK não garante resultados financeiros específicos decorrentes do uso de nossa assistência. O sucesso depende da implementação e do contexto de cada negócio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">6. Modificações</h2>
            <p>
              Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas aos usuários ativos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
