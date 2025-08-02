"use client";
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

const TestNewsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleTest = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus('error');
      setMessage('Veuillez entrer un email de test');
      return;
    }

    setStatus('loading');
    setMessage('Test en cours...');

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus('success');
        setMessage('Test réussi ! Vérifiez votre email.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Erreur lors du test.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Erreur de connexion. Vérifiez votre configuration.');
    }
  };

  const getStatusIcon = () => {
    switch (status) {
      case 'loading':
        return <Loader2 className="h-4 w-4 animate-spin" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Test Newsletter</h2>
      
      <form onSubmit={handleTest} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Email de test
          </label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="test@example.com"
            disabled={status === 'loading'}
            required
          />
        </div>
        
        <Button
          type="submit"
          disabled={status === 'loading'}
          className="w-full"
        >
          {status === 'loading' ? 'Test en cours...' : 'Tester l\'inscription'}
        </Button>
      </form>

      {message && (
        <div className={`mt-4 p-3 rounded-md flex items-center gap-2 ${
          status === 'success' ? 'bg-green-50 text-green-700' :
          status === 'error' ? 'bg-red-50 text-red-700' :
          'bg-blue-50 text-blue-700'
        }`}>
          {getStatusIcon()}
          <span className="text-sm">{message}</span>
        </div>
      )}

      <div className="mt-6 p-4 bg-gray-50 rounded-md">
        <h3 className="font-semibold mb-2">Instructions de test :</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Entrez un email valide</li>
          <li>• Vérifiez que les variables d'environnement sont configurées</li>
          <li>• Vérifiez votre boîte email pour la confirmation</li>
          <li>• Consultez le dashboard Resend pour voir l'abonné</li>
        </ul>
      </div>
    </div>
  );
};

export default TestNewsletter; 