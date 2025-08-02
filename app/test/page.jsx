import TestNewsletter from '../../components/TestNewsletter';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Test du Système de Newsletter
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cette page vous permet de tester le système de newsletter. 
            Assurez-vous d'avoir configuré les variables d'environnement avant de tester.
          </p>
        </div>
        
        <TestNewsletter />
        
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Configuration Requise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Variables d'Environnement</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• RESEND_API_KEY</li>
                  <li>• RESEND_AUDIENCE_ID</li>
                  <li>• EMAIL_FROM</li>
                  <li>• ADMIN_EMAIL (optionnel)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Étapes de Configuration</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Créer un compte Resend</li>
                  <li>• Vérifier votre domaine</li>
                  <li>• Créer une audience</li>
                  <li>• Configurer les variables</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 