const AIAssistant = () => {
  return (
    <section
      id="ai-assistant"
      className="scroll-mt-28 py-16 px-6"
    >
      <div className="max-w-5xl mx-auto">

        <div className="glass-panel rounded-3xl p-10 text-center">

          <div className="text-6xl mb-4">
            🤖
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI Assistant
          </h2>

          <p className="text-lg text-gray-400 leading-8 max-w-3xl mx-auto mb-10">
            I built this AI Assistant using
            <span className="font-semibold text-white"> n8n</span>,
            <span className="font-semibold text-white"> Google Gemini</span>,
            and
            <span className="font-semibold text-white"> SerpAPI</span>.
            It can answer questions, search the web, provide intelligent responses,
            and demonstrate workflow automation.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">

            <span className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
              Google Gemini
            </span>

            <span className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20">
              n8n
            </span>

            <span className="px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20">
              SerpAPI
            </span>

            <span className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              AI Agent
            </span>

          </div>

          <a
            href="https://mahimapatel409.app.n8n.cloud/webhook/e3377301-1d2d-437b-b0bc-b39613843609/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl text-lg font-semibold"
          >
            🚀 Try My AI Assistant
          </a>

        </div>

      </div>
    </section>
  );
};

export default AIAssistant;