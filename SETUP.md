# Configuration du Système de Newsletter

## Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```env
# Configuration Resend
RESEND_API_KEY=your_resend_api_key_here
RESEND_AUDIENCE_ID=your_audience_id_here
EMAIL_FROM=noreply@votre-domaine.com

# Email de l'administrateur (optionnel)
ADMIN_EMAIL=admin@votre-domaine.com

# Configuration de l'application
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Configuration Resend

### 1. Créer un compte Resend
- Allez sur [resend.com](https://resend.com)
- Créez un compte et vérifiez votre domaine

### 2. Obtenir votre API Key
- Dans le dashboard Resend, allez dans "API Keys"
- Créez une nouvelle clé API
- Copiez la clé dans `RESEND_API_KEY`

### 3. Créer une Audience
- Dans le dashboard Resend, allez dans "Audiences"
- Créez une nouvelle audience pour vos abonnés
- Copiez l'ID de l'audience dans `RESEND_AUDIENCE_ID`

### 4. Configurer l'Email From
- Utilisez un domaine vérifié dans `EMAIL_FROM`
- Format recommandé : `newsletter@votre-domaine.com`

## Fonctionnalités

### ✅ Collecte d'Emails
- Formulaire d'inscription dans le composant Hero
- Validation d'email côté client et serveur
- Gestion des états de chargement et d'erreur

### ✅ Stockage des Contacts
- Les emails sont automatiquement ajoutés à votre audience Resend
- Gestion des doublons automatique

### ✅ Emails de Confirmation
- Email de bienvenue personnalisé envoyé à chaque nouvel abonné
- Template responsive et professionnel
- Informations sur ce que l'abonné va recevoir

### ✅ Notification Admin (Optionnel)
- Email de notification envoyé à l'administrateur pour chaque nouvel abonné
- Configurez `ADMIN_EMAIL` pour activer cette fonctionnalité

## Utilisation

1. Les utilisateurs s'inscrivent via le formulaire sur la page d'accueil
2. L'email est validé et ajouté à votre audience Resend
3. Un email de confirmation est envoyé à l'utilisateur
4. Une notification est envoyée à l'administrateur (si configuré)

## Gestion des Abonnés

Vous pouvez gérer vos abonnés directement depuis le dashboard Resend :
- Voir la liste des abonnés
- Envoyer des campagnes d'email
- Gérer les désabonnements
- Analyser les statistiques

## Sécurité

- Validation d'email côté client et serveur
- Gestion des erreurs robuste
- Protection contre les soumissions multiples
- Respect du RGPD avec désabonnement facile 