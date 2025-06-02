// 🚗 QUESTIONNAIRE BRUZ STATIONNEMENT - EXACT COPY FROM EXCEL
// ONLY the 14 questions from the original Excel file - NO additional questions

export const templateSurveyQuestions = [
    // 🏢 Question poste de travail (pour le suivi de localisation de l'enquête)    // 👤 Q1
    {
        id: "Q1",
        text: "Le genre",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Homme", next: "Q2" },
            { id: 2, text: "Femme", next: "Q2" }
        ]
    },

    // 🎂 Q2
    {
        id: "Q2",
        text: "L'âge",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 18 ans", next: "end" },
            { id: 2, text: "18–24 ans", next: "Q3" },
            { id: 3, text: "25–34 ans", next: "Q3" },
            { id: 4, text: "35–44 ans", next: "Q3" },
            { id: 5, text: "45–54 ans", next: "Q3" },
            { id: 6, text: "55–64 ans", next: "Q3" },
            { id: 7, text: "65 ans et plus", next: "Q3" }
        ]
    },

    // 🏠 Q3
    {
        id: "Q3",
        text: "Quelle est votre commune de résidence ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bruz", next: "Q3_RUE_BRUZ" },
            { id: 2, text: "Autre commune", next: "Q3_COMMUNE" }
        ]
    },

    // 🏠 Q3 - Autre commune
    {
        id: "Q3_COMMUNE",
        text: "Quelle est votre commune de résidence ?",
        type: 'commune',
        next: "Q4"
    },

    // 🏘️ Q3 - Nom de la rue pour les résidents de Bruz
    {
        id: "Q3_RUE_BRUZ",
        text: "Quel est le nom de votre rue ?",
         type: 'street',
        next: "Q3_QUARTIER_BRUZ"
    },

    // 🏘️ Q3 - Quartier de Bruz si pas de nom de rue
    {
        id: "Q3_QUARTIER_BRUZ",
        text: "Si vous ne souhaitez pas donner le nom de la rue, pouvez-vous indiquer votre quartier ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Bois de Carcé", next: "Q4" },
            { id: 2, text: "Centre-ville", next: "Q4" },
            { id: 3, text: "Cicé", next: "Q4" },
            { id: 4, text: "Haye de Pan", next: "Q4" },
            { id: 5, text: "Ker Lann", next: "Q4" },
            { id: 6, text: "Les Hameaux", next: "Q4" },
            { id: 7, text: "Les Louvrais", next: "Q4" },
            { id: 8, text: "Orguenais", next: "Q4" },
            { id: 9, text: "Vau Gaillard", next: "Q4" },
            { id: 10, text: "Vert Buisson", next: "Q4" },
            { id: 11, text: "Autre", next: "Q3_AUTRE" },
        ]
    },

    // 🏘️ Q3 - Autre repère si pas de quartier dans la liste
    {
        id: "Q3_AUTRE",
        text: "Pouvez-vous indiquer un repère (emplacement, commerce, etc.) ?",
        type: 'freeText',
        freeTextPlaceholder: "Repère, commerce proche, lieu-dit...",
        next: "Q4"
    },

    // 🚶 Q4
    {
        id: "Q4",
        text: "De manière générale, quelle mode utilisez-vous le plus fréquemment pour venir en centre ville ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "A pied", next: "Q6" },
            { id: 2, text: "En voiture – en tant que conducteur", next: "Q5" },
            { id: 3, text: "En voiture – en tant que passager", next: "Q6" },
            { id: 4, text: "En bus/car", next: "Q6" },
            { id: 5, text: "A vélo / Trotinette", next: "Q6" },
            { id: 6, text: "En 2 roues Motorisé (Moto, scooter…)", next: "Q6" },
            { id: 7, text: "En Train", next: "Q5" },
            { id: 8, text: "En Taxi/VTC", next: "Q6" },
            { id: 9, text: "Autre : Précisez", next: "Q4_AUTRE" }
        ]
    },

    // 📝 Q4 - Précision autre mode de transport
    {
        id: "Q4_AUTRE",
        text: "Précisez votre mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez votre mode de transport...",
        next: "Q6"
    },

    // 🅿️ Q5
    {
        id: "Q5",
        text: "Où stationnez-vous votre véhicule ? (parking, emplacement..)",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez où vous vous garez (nom du parking, rue, etc.)...",
        next: "Q6"
    },

    // 🤔 Q6
    {
        id: "Q6",
        text: "Quelles est la principale raison pour laquelle vous choisisez ce mode de déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Il est plus rapide que les autres modes", next: "Q7" },
            { id: 2, text: "Il est plus pratique au quotidien", next: "Q7" },
            { id: 3, text: "Il est facilement accessible (proximité, disponibilité, facilité d'usage)", next: "Q7" },
            { id: 4, text: "Il est économique", next: "Q7" },
            { id: 5, text: "Il est plus écologique", next: "Q7" },
            { id: 6, text: "Autre : Précisez", next: "Q6_AUTRE" }
        ]
    },

    // 📝 Q6 - Précision autre raison
    {
        id: "Q6_AUTRE",
        text: "Précisez la raison :",
        type: 'freeText',
        freeTextPlaceholder: "Expliquez votre choix...",
        next: "Q7"
    },

    // 🎯 Q7
    {
        id: "Q7",
        text: "Selon vous, comment évaluriez-vous l'accessibilité du secteur avec ce mode de déplacement ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Très facile", next: "Q8" },
            { id: 2, text: "Plutôt facile", next: "Q8" },
            { id: 3, text: "Plutôt difficile", next: "Q8" },
            { id: 4, text: "Très difficile", next: "Q8" },
            { id: 5, text: "Je ne sais pas", next: "Q8" }
        ]
    },

    // 📅 Q8
    {
        id: "Q8",
        text: " A quelle fréquence vous rendez-vous dans le centre ville ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Tous les jours", next: "Q9" },
            { id: 2, text: "Toutes les semaines", next: "Q9" },
            { id: 3, text: "Tous les mois", next: "Q9" },
            { id: 4, text: "Tous les deux à quatres mois", next: "Q9" },
            { id: 5, text: "Une a deux fois par an", next: "Q9" }
        ]
    },

    // 🛍️ Q9
    {
        id: "Q9",
        text: "A quelle fréquence vous rendez-vous dans le centre ville pour des motifs commerciaux (achats, services, etc…)  ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Toutes les semaines", next: "Q10" },
            { id: 2, text: "Plusieurs fois par semaine", next: "Q10" },
            { id: 3, text: "Tous les mois", next: "Q10" },
            { id: 4, text: "Tous les deux à quatre mois", next: "Q10" },
            { id: 5, text: "Une a deux fois par an", next: "Q10" }
        ]
    },

    // 🎯 Q10
    {
        id: "Q10",
        text: "Quel est le principal motif de votre visite aujourd'hui  ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Loisirs / Achats / services marchands (banque, agence immobilière)", next: "Q11" },
            { id: 2, text: "Soins / santé", next: "Q12" },
            { id: 3, text: "Travail / études", next: "Q12" },
            { id: 4, text: "Famille", next: "Q12" },
            { id: 5, text: "RDV chez un professionnel", next: "Q12" },
            { id: 6, text: "C'est mon lieu de domicile", next: "Q12" },
            { id: 7, text: "Visite de la ville", next: "Q12" },
            { id: 8, text: "Autre : Précisez", next: "Q10_AUTRE" }
        ]
    },

    // 📝 Q10 - Précision autre motif
    {
        id: "Q10_AUTRE",
        text: "Précisez le motif de votre visite :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez le motif de votre visite...",
        next: "Q12"
    },

    // 🛒 Q11
    {
        id: "Q11",
        text: "Dans quel secteur avez-vous effectué des achats aujourd'hui ?",
        type: 'multipleChoice',
        options: [
            { id: 1, text: "Culture" },
            { id: 2, text: "Sport, loisirs" },
            { id: 3, text: "Restauration" },
            { id: 4, text: "Commerce alimentaire" },
            { id: 5, text: "Commerce non alimentaire" },
            { id: 6, text: "Commerce non sédentaire" },
            { id: 7, text: "Services marchands (banque, agence immo, ect.)" },
            { id: 8, text: "Autre : Précisez", next_if_selected: "Q11_AUTRE" }
        ],
        next: "Q13"
    },

    // 📝 Q11 - Précision secteur d'achat autre
    {
        id: "Q11_AUTRE",
        text: "Précisez le secteur d'achat :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez le type de commerce...",
        next: "Q13"
    },

    // 🚌 Q12
    {
        id: "Q12",
        text: "Quel est le dernier mode de transport que vous avez utilisé pour effectuer des achats en centre-ville ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "A pied", next: "Q13" },
            { id: 2, text: "En voiture – en tant que conducteur", next: "Q13" },
            { id: 3, text: "En voiture – en tant que passager", next: "Q13" },
            { id: 4, text: "En bus/car", next: "Q13" },
            { id: 5, text: "A vélo / Trotinette", next: "Q13" },
            { id: 6, text: "En 2 roues Motorisé (Moto, scooter…)", next: "Q13" },
            { id: 7, text: "En Train", next: "Q13" },
            { id: 8, text: "En Taxi/VTC", next: "Q13" },
            { id: 9, text: "Autre : Précisez", next: "Q12_AUTRE" }
        ]
    },

    // 📝 Q12 - Précision dernier mode transport autre
    {
        id: "Q12_AUTRE",
        text: "Précisez le mode de transport :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez votre mode de transport...",
        next: "Q13"
    },

    // 💰 Q13
    {
        id: "Q13",
        text: "Quel est le montant approximatif de vos dépenses lors de votre dernière visite en centre-ville ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Moins de 10 €", next: "Q14" },
            { id: 2, text: "Entre 10 € et 30 €", next: "Q14" },
            { id: 3, text: "Entre 30 € et 60 €", next: "Q14" },
            { id: 4, text: "Plus de 60 €", next: "Q14" }
        ]
    },

    // 🔧 Q14
    {
        id: "Q14",
        text: "Selon vous, que faudrait il faire en priorité pour améliorer les conditions d'accès au centre ville ?",
        type: 'singleChoice',
        options: [
            { id: 1, text: "Plus de places de stationnement", next: "end" },
            { id: 2, text: "Mettre à disposition d'avantage de transport en commun", next: "end" },
            { id: 3, text: "Développer des pistes cyclables et zones piétonnes", next: "end" },
            { id: 4, text: "Réduire la circulation automobile en centre ville", next: "end" },
            { id: 5, text: "Autre : Précisez", next: "Q14_AUTRE" }
        ]
    },

    // 📝 Q14 - Précision amélioration autre
    {
        id: "Q14_AUTRE",
        text: "Précisez les améliorations souhaitées :",
        type: 'freeText',
        freeTextPlaceholder: "Décrivez vos suggestions d'amélioration...",
        next: "end"
    }
];

/*
🎯 QUESTIONNAIRE BRUZ STATIONNEMENT - EXACTEMENT 14 QUESTIONS DE L'EXCEL :

📋 QUESTIONS AVEC IDs SIMPLES :
✅ Q1 (2 options)
✅ Q2 (7 options) 
✅ Q3 + rue/quartier Bruz
✅ Q4 (9 options)
✅ Q5 (conditionnel Q4=2 ou 7)
✅ Q6 (6 options)
✅ Q7 (5 options)
✅ Q8 (5 options)
✅ Q9 (5 options)
✅ Q10 (8 options)
✅ Q11 (conditionnel Q10=1, 8 options)
✅ Q12 (conditionnel Q10≠1, 9 options)
✅ Q13 (4 options)
✅ Q14 (5 options)

AUCUNE QUESTION INVENTÉE - SEULEMENT LES 14 QUESTIONS EXCEL ORIGINALES !
*/