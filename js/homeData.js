// Données de la page d'accueil (index).
// Ajouter/modifier du contenu ici met automatiquement à jour le rendu.
export const homeData = {
  hero: {
    name: 'Adam Hannachi',
    subtitle: 'Professeur de Mathématiques',
    description:
      'Professeur de mathématiques, je propose un accompagnement clair et progressif pour aider chaque élève à reprendre confiance et réussir.',
    cvButtonLabel: 'Télécharger le CV',
    cvButtonActionMessage: 'Le téléchargement du CV serait déclenché ici',
    portfolioCtaLabel: 'Voir les ressources',
    portfolioCtaHref: 'portfolio.html'
  },
  about: {
    title: 'À propos',
    image: 'photos/adhannachi.JPG',
    paragraphs: [
      "Je suis professeur de mathématiques et j'accompagne des élèves du collège au lycée avec une approche structurée, bienveillante et adaptée à leur niveau.",
      'Mon parcours mêle enseignement en classe et cours particuliers : remise à niveau, préparation aux contrôles, méthodologie et entraînement régulier pour progresser durablement.',
      "Je suis également engagé bénévolement dans l'aide aux devoirs afin de rendre les mathématiques plus accessibles, avec une attention particulière à la confiance en soi et à l'autonomie."
    ]
  },
  expertise: {
    title: 'Expertise',
    items: [
      {
        title: 'Niveaux accompagnés',
        icon: 'code',
        skills: ['Seconde', 'Première (spécialité maths)', 'Terminale (spécialité maths)', 'Remise à niveau collège']
      },
      {
        title: 'Méthodes',
        icon: 'ml',
        skills: ['Cours particuliers', 'Exercices progressifs', 'Préparation aux évaluations', 'Suivi personnalisé']
      },
      {
        title: 'Objectifs',
        icon: 'data',
        skills: ['Compréhension des notions', 'Rigueur de raisonnement', 'Autonomie', 'Confiance en mathématiques']
      }
    ]
  },
  experience: {
    title: 'Expériences',
    timeline: [
      {
        date: '2023 - Aujourd\'hui',
        role: 'Professeur de Mathématiques',
        company: 'Accompagnement scolaire',
        description:
          'Suivi hebdomadaire d\'élèves de Seconde, Première et Terminale : explications de cours, entraînement ciblé et préparation aux évaluations.'
      },
      {
        date: '2021 - 2023',
        role: 'Intervenant en cours particuliers',
        company: 'Soutien individualisé',
        description:
          'Mise en place de plans de progression personnalisés avec bilans réguliers pour consolider les bases et améliorer les résultats.'
      },
      {
        date: '2019 - 2021',
        role: 'Bénévole en aide aux devoirs',
        company: 'Association locale',
        description:
          'Animation de séances d\'aide aux devoirs en mathématiques pour accompagner des élèves en difficulté et favoriser leur autonomie.'
      }
    ]
  },
  footer: {
    socialLinks: [
      { href: 'https://github.com', label: 'GitHub', icon: 'github' },
      { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
      { href: 'mailto:adamhannachi8@gmail.com', label: 'Email', icon: 'email' }
    ],
    copyright: '© 2026 Adam Hannachi. Tous droits réservés.'
  }
};
