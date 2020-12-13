module.exports = {
    COMMANDS: {
        AUTOROLE: {
            description: 'Vous permets de configurer un rôle qui sera attribué aux nouveaux membres.',
            OFF: {
                noRoleConfigured: '[❌] - Aucun rôle n\'a été configuré.',
                removed: '[✅] - Le rôle ne sera plus attribué aux nouveaux membres.'
            },
            added: (role) => `[✅] - Le rôle ${role} sera désormais attribué aux nouveaux membres.`,
            notFound: '[❌] - Le rôle n\'a pas été trouvé.'
        },
        BALANCE: {
            description: "Affiche votre porte monnaie!",
            output: (bal) => `Vous avez <a:coin:784930553748520961> **${bal}** pièces!`
        },
        DAILY: {
            description: "Vous donne des pièces tous les jours",
            notReady: (time) => `Vous avez déjà collecté votre récompense journalière! Revenez dans ${time.hours}:${time.minutes}:${time.seconds} !`,
            success: (amount) => `Vous avez récupéré votre récompense journalière de ${amount} pièces !`
        },
        HELP: {
            TYPES: {
                administration: "Administration",
                economy: "Economie",
                general: "Général",
                info: "Infos",
                levels: "Niveaux",
                music: "Musique"
            },
            description: `Affiche la liste des commandes, triées par catégorie et par alphabet.\nEn spécifiant une commande, vous aurez plus d'informations sur celle ci.`,
            helpEmbedTitle: (command) => `Commande: \`${command.name}\``,
            helpEmbedUsage: 'Utilisation',
            helpEmbedType: 'Catégorie',
            helpEmbedAliases: 'Aliases',
            helpEmbedExamples: 'Exemples',
            helpEmbedNotes: 'Notes',
            embedTitle: 'Commandes d\'Helixus',
            embedDescription: (prefix) => `**Pour plus d'informations:** \`${prefix}help [command]\``
        },
        IGNORE: {
            description: "Vous permets de configurer dans quels salons les commandes pourront être exécutées",
            noChanSpecified: "[❌] - Vous n'avez spécifié aucun salon.",
            noRowsIgnored: (chan) => `[✅] - Le bot ne répondra plus aux commandes dans le salon ${chan}.`,
            notIgnored: (chan) => `[✅] - Le bot répondra de nouveau aux commandes dans le salon ${chan}.`,
            ignored: (chan) => `[✅] - Le bot ne répondra plus de nouveau aux commandes dans le salon ${chan}.`
        },
        JOINMESSAGE: {
            description: "Vous permets de configurer un message qui sera affiché dès l'arrivée d'un membre.",
            notes: 'Voici la liste des tags que vous pouvez utiliser:\n\n{user} - mentionne le membre\n{username} - affiche le pseudo du membre\n{server} - affiche le nom du serveur\n\nVous pouvez indiquer des rôles ainsi que des emotes comme vous le feriez dans un message classique.',
            ON: {
                enabled: `[✅] - Les messages de join ont été activés. Si ce n'est pas déjà fait, faites \`am!help joinmessage\` pour voir comment configurer le message de join.`
            },
            OFF: {
                notEnabled: '[❌] - Les messages de join sont déjà désactivés.',
                disabled: `[✅] - Les messages de join ont été désactivés.`
            },
            CHANNEL: {
                noChanSpecified: '[❌] - Veuillez indiquer un ID, un nom ou une mention de salon!',
                noValidChan: '[❌] - Le salon que vous avez indiqué n\'est pas valide.',
                notEnabled: '[❌] - Les messages de join ne sont pas désactivés.',
                success: (chan) => `[✅] - Les messages de join seront envoyés dans ${chan}.`
            },
            noContent: '[❌] - Vous n\'avez indiqué aucun contenu pour le message de join. Faites `am!help joinmessage` pour voir quels tags vous pouvez utiliser.',
            notEnabled: '[❌] - Les messages de join sont désactivés.',
            success: `[✅] - Le message de join a bien été configuré.`
        },
        LANG: {
            description: 'Change la langue du bot sur le serveur.',
            success: `[V] - La langue du bot sur ce serveur a bien été mis en **Français** !`
        },
        LEAVEMESSAGE: {
            description: "Vous permets de configurer un message qui sera affiché dès le départ d'un membre.",
            notes: 'Voici la liste des tags que vous pouvez utiliser:\n\n{username} - affiche le pseudo du membre\n{server} - affiche le nom du serveur\n\nVous pouvez mentionner des rôles ou des emotes comme vous le feriez sur un message classique.',
            ON: {
                enabled: `[✅] - Les messages de leaves ont été activés. Si ce n'est pas déjà fait, faites \`am!help leavemessage\` pour voir comment configurer le message de leave.`
            },
            OFF: {
                notEnabled: '[❌] - Les messages de leaves sont déjà activés.',
                disabled: `[✅] - Les messages de leaves ont été désactivés.`
            },
            CHANNEL: {
                noChanSpecified: '[❌] - Veuillez indiquer un ID, un nom ou une mention de salon!',
                noValidChan: '[❌] - Le salon que vous avez indiqué n\'est pas valide.',
                notEnabled: '[❌] - Les messages de leaves ne sont pas désactivés.',
                success: (chan) => `[✅] - Les messages de leaves seront envoyés dans ${chan}.`
            },
            noContent: '[❌] - Vous n\'avez indiqué aucun contenu pour le message de leave. Faites `am!help leavemessage` pour voir quels tags vous pouvez utiliser.',
            notEnabled: '[❌] - Les messages de leave sont désactivés.',
            success: `[✅] - Le message de leave a bien été configuré.`
        },
        LOGS: {
            description: 'Vous permets de configurer le système de logs.',
            ON: {
                alreadyEnabled: '[❌] - Les logs sont déja activés sur ce serveur !',
                enabled: `✅ - Les logs sont désormais activés sur ce serveur!`
            },
            CHANNEL: {
                noChanSpecified: '[❌] - Veuillez indiquer un ID, un nom ou une mention de salon!',
                notEnabled: '[❌] - Les logs ne sont pas activés.',
                success: (channel) => `✅ - Les logs seront désormais envoyés dans ${channel}`
            },
            IGNORE: {
                noChanSpecified: '[❌] - Veuillez indiquer un ID, un nom ou une mention de salon!',
                ignored: '[✅] - Le channel sera désormais ignoré pour les évenements de logs.',
                notIgnored: '[✅] - Le channel ne sera désormais plus ignoré pour les évenements de logs.'
            },
            TOGGLE: {
                notValidEvent: (logsEventList) => `[❌] - Veuillez indiquer un évenement valide.\nListe des évenements valides: \`${logsEventList}\``,
                notEnabled: `[❌] - Les logs ne sont pas activés sur ce serveur.`,
                eventEnabled: '[✅] - Cet evénement sera désormais log sur ce serveur.',
                eventDisabled: '[✅] - Cet evénement ne sera plus log sur ce serveur.'
            },
            noChanSpecified: '[❌] - Veuillez indiquer un ID, un nom ou une mention de salon!',
        },
        PING: {
            description: 'Affiche la **latence de message** ainsi que le **heartbeat** du bot.',
            latency: "Latence",
        },
        SERVERINFO: {
            description: "Affiche des informations à propos du serveur.",
            owner: "👑 | Propriétaire",
            members: "👥 | Membres",
            serverID: "🔑 | ID du serveur",
            language: "📙 | Langue",
            region: "🚩 | Région",
            channelCount: "🗨️ | Nombre de salons",
            channelCountValue: (channelsSize) => `**${channelsSize}** salons`,
            emojiCount: "👀 | Nombre d'emojis",
            emojiCountValue: (emojisSize) => `**${emojisSize}** emojis`,
            createdOn: "⏱️ | Créé le",
            joinedOn: "🔗 | Rejoins le",
            verificationLevel: "🚥 | Niveau de vérification",
            mfaLevel: "🔒 | Niveau de l'Authentification a Double Facteurs",
            boostsCount: "🚀 | Nombre de boosts",
            boostLevel: "🚀 | Niveau de boost",
            verifiedServer: "<:verified:786313097857335376> | Serveur vérifié",
            verified: "Verifié",
            notVerified: "Non Verifié",
            partner: "<:partnerowner:776628269356417036> | Serveur Partenaire",
            partnered: "Partenaire",
            notPartnered: "Non Partenaire",
            moreRole: (rolesLeft) => `et ${rolesLeft} autres rôles.`,
            moreEmotes: (emotesLeft) => `et ${emotesLeft} autres emotes.`
        },
        STATS: {
            description: 'Affiche les statistiques a propos du bot.',
            license: "Ce bot est sous la license Open-Source MIT, pour plus d'informations, visionnez la license entière **[ici](https://github.com/chocololat/Helixus/blob/master/LICENSE)**",
            developer: "• __Developpeur__",
            statistics: "• __Statistiques__",
            statisticsValue: (guildsCache, usersCache, channelsSize) => `**Serveurs**: ${guildsCache}\n**Utilisateurs**: ${usersCache}\n**Salons**: ${channelsSize}`,
            using: "• __Utilise__",
            uptime: "• __En ligne depuis__",
            ram: "• __RAM__",
            cpu: (percent) => `• __CPU (${percent.toFixed(2)}%)__`,
            links: "• __Liens__",
            supportServer: "Serveur de support",
            invitationLink: "Lien d'invitation",
            website: "Site Internet (en developpement)"
        },
        TRANSLATE: {
            description: 'Permets de traduire du texte.',
            embedAuthor: "Traduction",
            embedTranslatedFrom: (translatedFrom) => `Traduit de ${translatedFrom}`,
            embedTranslatedTo: (target) => `vers ${target}`
        },
        USERINFO: {
            description: "Affiche des informations a propos d'un utilisateur __**étant sur le serveur**__.",
            username: "Nom d'utilisateur",
            bot: "Bot",
            user: "Utilisateur",
            none: "Aucun",
            currentStatus: "Statut",
            accountCreated: "Compte créé le",
            accountCreatedAgo: (time) => `Il y a ${time.replace("days", "jours")}`,
            joined: "Rejoins le",
            joinedAgo: (time) => `Il y a ${time.replace("days", "jours")}`,
            currentlyActiveOn: "Connecté sur",
            offline: "Hors-Ligne",
            nitroBoostStatus: "Statut Nitro Boost",
            nitroBoostStatusAgo: (time) => `Il y a ${time.replace("days", "jours")}`,
            noNitroBoostStatus: "Aucun Nitro Boost d'actif",
            moreRoles: (rolesSize) => `et ${rolesSize} autres rôles.`
        }
    }
}