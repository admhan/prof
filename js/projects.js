// Données portfolio : liste des projets + projet mis en avant.
// Ajouter un objet dans `projects` suffit pour l'afficher automatiquement.
export const projectsPageData = {
  hero: {
    backLinkHref: 'index.html',
    backLinkLabel: 'Retour au CV',
    title: 'Ressources pédagogiques',
    subtitle: 'Supports de cours et exercices de mathématiques'
  },
  projects: [
    {
      title: 'Seconde',
      description: 'Fiches de synthèse, exercices progressifs et méthodes de résolution pour consolider les bases.',
      tags: ['Fonctions', 'Géométrie', 'Statistiques'],
      image: '',
      ctaLabel: 'Voir la ressource'
    },
    {
      title: 'Première',
      description: 'Ressources ciblées pour la spécialité mathématiques : approfondissement des notions et entraînement.',
      tags: ['Dérivation', 'Probabilités', 'Suites'],
      image: '',
      ctaLabel: 'Voir la ressource'
    },
    {
      title: 'Terminale',
      description: 'Supports de révision et sujets guidés pour préparer efficacement les évaluations finales.',
      tags: ['Intégration', 'Matrices', 'Algorithmes'],
      image: '',
      ctaLabel: 'Voir la ressource'
    }
  ],
  featured: {
    sectionTitle: 'Ressource mise en avant',
    number: '01',
    title: 'Parcours de révision complet',
    description: 'Un programme structuré pour réviser les chapitres essentiels avec méthode et régularité.',
    longDescription:
      'Cette ressource propose une progression hebdomadaire avec rappels de cours, exercices corrigés et auto-évaluations. Elle aide les élèves à identifier leurs points faibles, à s\'entraîner de manière autonome et à gagner en confiance avant les devoirs surveillés et examens.',
    metrics: [
      { value: '3', label: 'Niveaux' },
      { value: '40+', label: 'Fiches' },
      { value: '120+', label: 'Exercices' },
      { value: '100%', label: 'Corrigés' }
    ],
    techStackLabel: 'Thématiques',
    techTags: ['Algèbre', 'Analyse', 'Probabilités', 'Géométrie', 'Méthodologie'],
    ctaLabel: 'Lire le détail'
  },
  cta: {
    title: 'Restons en contact.',
    description: 'Téléphone : 07 81 11 43 94 · Email : adamhannachi8@gmail.com',
    buttonLabel: 'Contacter',
    buttonHref: 'mailto:adamhannachi8@gmail.com'
  },
  footer: {
    copyright: '© 2026 Adam Hannachi. Tous droits réservés.'
  }
};
