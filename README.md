# ARTAE USA — site vitrine bilingue

Site vitrine bilingue (EN / FR) pour ARTAE USA LLC, société d'investissement
immobilier clé en main basée à Lauderhill, Floride — branche américaine du
groupe Artae.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — tokens de design dans `src/app/globals.css` (`@theme`)
- [next-intl](https://next-intl.dev) — routing par locale (`/en`, `/fr`), chaînes dans `src/messages/*.json`
- [Zod](https://zod.dev) — validation des formulaires

## Démarrer en local

```bash
npm install
npm run dev
```

Le site est accessible sur [http://localhost:3000/en](http://localhost:3000/en)
(ou `/fr` pour la version française — `/` redirige automatiquement vers la
locale par défaut).

Autres commandes utiles :

```bash
npm run build   # build de production
npm run start   # sert le build de production
npm run lint    # ESLint
npx tsc --noEmit  # vérification TypeScript
```

## Structure du projet

```
src/
├── app/
│   ├── [locale]/            # pages (home, services, about, contact) — EN + FR
│   ├── api/                 # routes API (contact, newsletter)
│   └── globals.css          # tokens de design (couleurs, polices)
├── components/
│   ├── layout/               # Header, Footer, LocaleSwitcher
│   ├── sections/              # blocs de page (Hero, FAQ, Testimonials...)
│   ├── forms/                 # ContactForm, NewsletterForm (client components)
│   └── ui/                    # Button, Card, Input, SectionTitle...
├── lib/
│   ├── types/                 # Client, Project, Lead — types partagés
│   ├── data/                  # couche d'accès aux données (voir ci-dessous)
│   └── validation/             # schémas Zod des formulaires
├── i18n/                       # config next-intl (routing, navigation, request)
└── messages/
    ├── en.json
    └── fr.json
```

## Couche de données (`src/lib/data`)

Toutes les données (clients, projets, leads, newsletter) passent par des
fonctions `async` dans `src/lib/data/*.ts`. Aujourd'hui elles sont adossées à
des tableaux en mémoire ; le jour où une base de données est branchée
(Postgres via Prisma, Supabase...), seul le corps de ces fonctions change —
aucun composant ni page n'a besoin d'être modifié.

Les types associés (`Client`, `Project`, `ContactLead`,
`NewsletterSubscriber`) sont dans `src/lib/types/`.

Variables d'environnement prévues pour la suite : voir `.env.example`.

## Contenu à remplacer

Le contenu (textes, projets, témoignages, numéro de téléphone) est un
placeholder à valider/remplacer — voir `src/messages/en.json`,
`src/messages/fr.json` et `src/lib/data/projects.ts`.
