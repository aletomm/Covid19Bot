require("dotenv").config();
const axios = require("axios");
const Telegraf  = require("telegraf");

const tokenBot = process.env.BOT_TOKEN;
const bot = new Telegraf(tokenBot);

bot.start((message) =>{
   console.log("started", message.from.id);
   const firstName = message.from.first_name;
   return message.reply("Ciao "+firstName+", benvenuto/a! " +
       "Per vedere la lista dei comandi che puoi utilizzare usa il comando /info"
   );
});

bot.command("info", ({ replyWithMarkdown }) =>
    replyWithMarkdown(`
Ecco la lista dei comandi disponibili:
- Aggiornamento giornaliero in Italia: /ultimeNews
- Lista delle regioni: /regioni
- Lista comandi: /info`
    )
);

bot.command("ultimeNews", (message) => {
        axios
            .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json")
            .then((res) => {
                const data = res.data[0];
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Italia:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `
                );
            }).catch((err) => {
                console.log(err.response.status);
        });
    });

bot.command("regioni", ({ replyWithMarkdown }) =>
    replyWithMarkdown(`
Ecco la lista delle regioni:
/Abruzzo
/Basilicata
/PABolzano
/Calabria
/Campania
/EmiliaRomagna
/FriuliVeneziaGiulia
/Lazio
/Liguria
/Lombardia
/Marche
/Molise
/Piemonte
/Puglia
/Sardegna
/Sicilia
/Toscana
/PATrento
/Umbria
/ValleDAosta
/Veneto`
    )
);

bot.command("Abruzzo", (message) => {
   axios
       .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
       .then((res) => {
           const data = res.data[0];
           if(data.denominazione_regione==="Abruzzo"){
               const ricoveratiConSintomi = data.ricoverati_con_sintomi;
               const terapiaIntensiva = data.terapia_intensiva;
               const totaleOspedalizzati = data.totale_ospedalizzati;
               const isolamentoDomiciliare = data.isolamento_domiciliare;
               const totalePositivi = data.totale_positivi;
               const nuoviPositivi = data.nuovi_positivi;
               const dimessiGuariti = data.dimessi_guariti;
               const deceduti = data.deceduti;
               const totaleCasi = data.totale_casi;
               const tamponi = data.tamponi;

               return message.replyWithMarkdown(
                   `
    Ecco gli ultimi dati ad oggi su Covid19 in Abruzzo:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);
           }
       }).catch((err) => {
           console.log(err.response.status);
   });
});

bot.command("Basilicata", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[1];
            if(data.denominazione_regione==="Basilicata"){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Basilicata:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);
            }
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("PABolzano", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[2];
            if(data.codice_regione===4){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 nella P.A. di Bolzano:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Calabria", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[3];
            if(data.codice_regione===18){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Calabria:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Campania", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[4];
            if(data.codice_regione===15){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Campania:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("EmiliaRomagna", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[5];
            if(data.codice_regione===8){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Emilia Romagna:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("FriuliVeneziaGiulia", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[6];
            if(data.codice_regione===6){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Friuli Venezia Giulia:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Lazio", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[7];
            if(data.codice_regione===12){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Lazio:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Liguria", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[8];
            if(data.codice_regione===7){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Liguria:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Lombardia", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[9];
            if(data.codice_regione===3){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Lombardia:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Marche", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[10];
            if(data.codice_regione===11){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 nelle Marche:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Molise", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[11];
            if(data.codice_regione===14){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Molise:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Piemonte", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[12];
            if(data.codice_regione===1){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Piemonte:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Puglia", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[13];
            if(data.codice_regione===16){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Puglia:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Sardegna", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[14];
            if(data.codice_regione===20){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Sardegna:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Sicilia", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[15];
            if(data.codice_regione===19){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Sicilia:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Toscana", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[16];
            if(data.codice_regione===9){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Toscana:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("PATrento", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[17];
            if(data.codice_regione===4){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 nella P.A. di Trento:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Umbria", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[18];
            if(data.codice_regione===10){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Umbria:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("ValleDAosta", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[19];
            if(data.codice_regione===2){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Valle d'Aosta:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});

bot.command("Veneto", (message) => {
    axios
        .get("https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json")
        .then((res) => {
            const data = res.data[20];
            if(data.codice_regione===5){
                const ricoveratiConSintomi = data.ricoverati_con_sintomi;
                const terapiaIntensiva = data.terapia_intensiva;
                const totaleOspedalizzati = data.totale_ospedalizzati;
                const isolamentoDomiciliare = data.isolamento_domiciliare;
                const totalePositivi = data.totale_positivi;
                const nuoviPositivi = data.nuovi_positivi;
                const dimessiGuariti = data.dimessi_guariti;
                const deceduti = data.deceduti;
                const totaleCasi = data.totale_casi;
                const tamponi = data.tamponi;

                return message.replyWithMarkdown(
                    `
    Ecco gli ultimi dati ad oggi su Covid19 in Veneto:
    
*Ricoverati con sintomi:* ${ricoveratiConSintomi}
*Persone in terapia intensiva:* ${terapiaIntensiva}
*Totale ospedalizzati:* ${totaleOspedalizzati}
*Persone in isolamento domiciliare:* ${isolamentoDomiciliare}
*Totale casi positivi:* ${totalePositivi}
*Nuovi casi positivi:* ${nuoviPositivi}
*Dimessi guariti:* ${dimessiGuariti}
*Totale deceduti:* ${deceduti}
*Casi in totale:* ${totaleCasi}
*Tamponi effettuati:* ${tamponi}
    `);}
        }).catch((err) => {
        console.log(err.response.status);
    });
});


bot.launch();
console.log("Bot avviato");