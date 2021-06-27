import React from 'react';
import {
  Text,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  dark: {
    backgroundColor: '#9D2235',
    color: 'white',
    fontSize: 25,
    marginHorizontal: 5,
    paddingHorizontal: 15,
  },
});

export const Talk = (props) => {
  switch(props.id) {
    case '1':
      return (
        <Text style={styles.dark}>
          ( - Labdien, Anna! ){'\n'}
          ( - Sveiks, Pēter! ){'\n'}
          ( - Anna, iepazīsties ){'\n'}
          ( ar manu draugu Juri! ){'\n'}
          ( - Ļoti patīkami. ){'\n'}
          ( Šī ir mana draudzene Ilze. ){'\n'}
          ( - Labdien, Ilze! ){'\n'}
          ( Priecājos iepazīties. ){'\n'}
          ( Kā tev iet? ){'\n'}
          ( - Paldies, labi. ){'\n'}
          ( Un tev? ){'\n'}
          ( - Paldies, var iztikt. ){'\n'}{'\n'}
        
          ( - Labrīt, Kalniņas kundze! ){'\n'}
          ( Kā jums klājas? ){'\n'}
          ( - Man klājas labi, paldies! ){'\n'}
          ( Šis ir mans vīrs Valdis Kalniņš. ){'\n'}
          ( Lūdzu, iepazīstieties. ){'\n'}
          ( - Priecājos iepazīties. ){'\n'}
          ( - Kā jūs sauc? ){'\n'}
          ( Mans vārds ir Juris Zariņš. ){'\n'}
          ( - Un kā tevi sauc? ){'\n'}
          ( - Mani sauc Mārīte Zariņa. ){'\n'}
          ( - Kā tev iet, Mārīt? ){'\n'}
          ( - Ļoti labi, paldies. ){'\n'}
          ( - Tas ir jauki. ){'\n'}{'\n'}

          ( - Sveiki! ){'\n'}
          ( Kas jauns? ){'\n'}
          ( - Nekas īpašs. ){'\n'}
          ( Un tev? ){'\n'}
          ( - Man tāpat, nekas īpašs. ){'\n'}
          ( - Atvaino, lūdzu, ){'\n'}
          ( bet man jāsteidzas. ){'\n'}
          ( Es tev piezvanīšu. ){'\n'}
          ( - Paldies, tas būtu jauki. ){'\n'}
          ( - Nav par ko. ){'\n'}
          ( Uz redzēšanos! ){'\n'}
          ( - Man arī jāiet. ){'\n'}
          ( Visu labu! ){'\n'}
          ( - Atā! )
        </Text>);
    case '2':
      return (
        <Text style={styles.dark}>
          ( - Labdien, Pēter! ){'\n'}
          ( Lūdzu, nāc iekšā! ){'\n'}
          ( Novelc mēteli! ){'\n'}
          ( - Sveika, Anna! ){'\n'}
          ( Kā tev iet? ){'\n'}
          ( - Paldies, labi. ){'\n'}
          ( Un tev? ){'\n'}
          ( - Man arī iet labi, paldies. ){'\n'}
          ( - Pēter, šī ir mana māsa Zaiga. ){'\n'}
          ( - Ļoti patīkami. ){'\n'}
          ( - Un tas ir mans brālis Jānis. ){'\n'}
          ( - Sveiks, Jāni! ){'\n'}
          ( Es viņu pazīstu. ){'\n'}
          ( Mēs ejam vienā skolā. ){'\n'}{'\n'}

          ( - Labvakar, Kalniņa kungs! ){'\n'}
          ( - Labvakar, Anna! ){'\n'}
          ( - Cik jauki jūs satikt. ){'\n'}
          ( Lūdzu, nāciet iekšā! ){'\n'}
          ( Vai jūs pazīstat manu māsu Zaigu? ){'\n'}
          ( - Priecājos iepazīties. ){'\n'}
          ( - Šie ir viņas bērni. ){'\n'}
          ( - Cik jums ir bērnu? ){'\n'}
          ( - Man ir trīs bērni - ){'\n'}
          ( viena meita un divi dēli. ){'\n'}
          ( - Man nav bērnu. ){'\n'}
          ( Jums ir jauka ģimene. ){'\n'}
          ( - Ivar, šis ir Kalniņa kungs. ){'\n'}
          ( - Cik tev gadu, Ivar? ){'\n'}
          ( - Man ir septiņi gadi. ){'\n'}{'\n'}

          ( - Labrīt, Ivar! ){'\n'}
          ( - Labrīt, Kalniņas kundze! ){'\n'}
          ( - Vai tavi vecāki ir mājās? ){'\n'}
          ( - Nē, viņu nav mājās. ){'\n'}
          ( - Kur ir tavi vecāki? ){'\n'}
          ( - Mamma ir darbā. ){'\n'}
          ( - Un kur ir tavs tētis? ){'\n'}
          ( - Viņš aizgāja uz veikalu. ){'\n'}
          ( - Vai viņš drīz būs mājās? ){'\n'}
          ( - Jā, vai jūs gribat viņu pagaidīt? Tad nāciet iekšā! ){'\n'}
          ( - Tur jau viņš nāk! ){'\n'}
          ( - Nē, tas ir mans vectēvs. Vectētiņ, es esmu te! )
        </Text>);
    case '3':
      return (
        <Text style={styles.dark}>
          ( - Lūk, kur tu esi, Ilze! ){'\n'}
          ( Lūdzu, iepazīsties ){'\n'}
          ( ar manu draugu Mārtiņu! ){'\n'}
          ( - Priecājos ar tevi iepazīties, Mārtiņ! ){'\n'}
          ( Kāds ir tavs uzvārds? ){'\n'}
          ( - Mans uzvārds ir Zaķis. ){'\n'}
          ( - Kur tu dzīvo? ){'\n'}
          ( - Es dzīvoju pavisam tuvu, Upes ielā. ){'\n'}
          ( - Kāda ir tava adrese? ){'\n'}
          ( - Mana adrese ir Upes iela 17. ){'\n'}
          ( - Es zinu. ){'\n'}
          ( Tas ir tepat kaimiņos. ){'\n'}
          ( Un kāds ir tavs telefona numurs? ){'\n'}
          ( - 964-583. ){'\n'}{'\n'}

          ( - Kur jūs dzīvojat? ){'\n'}
          ( - Mans draugs un es dzīvojam Siguldā. ){'\n'}
          ( - Kāda ir jūsu adrese? ){'\n'}
          ( - Mēs dzīvojam Rožu ielā 27, ){'\n'}
          ( skaistā, jaunā mājā. ){'\n'}
          ( Vasarā es dzīvoju laukos pie vecākiem. ){'\n'}
          ( - Vai jums patīk dzīvot pilsētā? ){'\n'}
          ( - Nē, man nepatīk pilsētas. ){'\n'}
          ( Man labāk patīk dzīvot laukos. ){'\n'}
          ( - Jā, man arī patīk lauki. ){'\n'}{'\n'}

          ( - Juri, vai tu gribi redzēt mūsu māju? ){'\n'}
          ( - Labprāt. ){'\n'}
          ( Jums ir liela māja. ){'\n'}
          ( Mūsu māja ir maza. ){'\n'}
          ( - Šī ir viesistaba. ){'\n'}
          ( - Man patīk jūsu gleznas. ){'\n'}
          ( Un jums ir daudz grāmatu. ){'\n'}
          ( - Šeit ir virtuve. ){'\n'}
          ( Augšā ir guļamistabas. ){'\n'}
          ( Lejā ir pagrabs. ){'\n'}
          ( - Parādi man arī dārzu! ){'\n'}
          ( - Labi, iesim ārā! ){'\n'}
          ( - Cik skaistas puķes! ){'\n'}
          ( Kas dzīvo tajā mājā? ){'\n'}
          ( - Tur dzīvo mana draudzene Ilze. )
          </Text>);
    case '4':
      return (
        <Text style={styles.dark}>
          ( - Labdien! ){'\n'}
          ( Lūdzu, iepazīsties. ){'\n'}
          ( Šī ir mana draudzene Jeļena. ){'\n'}
          ( - Vai tu esi latviete? ){'\n'}
          ( - Nē, es esmu krieviete. ){'\n'}
          ( Es mācos latviešu valodu. ){'\n'}
          ( - Tu labi runā. ){'\n'}
          ( - Paldies par komplimentu! ){'\n'}
          ( Es tikai nesen sāku mācīties. ){'\n'}
          ( Es vēl daudz ko nesaprotu. ){'\n'}
          ( - Tas tomēr ir jauki, ka tu mācies latviešu valodu. ){'\n'}
          ( - Ko tu teici? ){'\n'}
          ( Vai tu nevarētu atkārtot? ){'\n'}
          ( - Tas ir jauki, ka tu mācies... ){'\n'}
          ( - Lūdzu, runā lēnāk, ){'\n'}
          ( citādi es nesaprotu! ){'\n'}{'\n'}

          ( - Sveiki, Kalniņa kungs! ){'\n'}
          ( Šis ir Roberts. ){'\n'}
          ( Viņš mācās latviešu valodu. ){'\n'}
          ( - Kur jūs mācāties? ){'\n'}
          ( - Pie Kuriņas kundzes. ){'\n'}
          ( - Vai jums patīk mācīties latviešu valodu? ){'\n'}
          ( - Kā, lūdzu? ){'\n'}
          ( Lūdzu, nerunājiet tik ātri! ){'\n'}
          ( - Es prasīju, vai jums... ){'\n'}
          ( - Es saprotu! ){'\n'}
          ( Jā, man patīk mācīties valodas. ){'\n'}
          ( Bet man liekas, ka ){'\n'}
          ( latviešu valoda ir... ){'\n'}
          ( Kā to saka latviski? ){'\n'}
          ( - Diezgan grūta? ){'\n'}
          ( - Pareizi. Ļoti grūta! ){'\n'}{'\n'}

          ( - Vai tu mājās runā latviski? ){'\n'}
          ( - Jā, protams. ){'\n'}
          ( Es esmu latvietis. ){'\n'}
          ( Mājās mēs parasti runājam latviski. ){'\n'}
          ( Mani vecāki runā tikai latviski. ){'\n'}
          ( - Es runāju latviski ar vīramāti. ){'\n'}
          ( Ar māsām es dažreiz runāju angliski. ){'\n'}
          ( - Un tavs paziņa? ){'\n'}
          ( - Tas ir mans māsasvīrs. ){'\n'}
          ( Viņš slikti runā latviski. ){'\n'}
          ( Bet viņš arī mācās. )
        </Text>);
    case '5':
      return (
        <Text style={styles.dark}>
          ( - Labrīt! ){'\n'}
          ( Vai brokastis gatavas? ){'\n'}
          ( - Tūliņ būs. ){'\n'}
          ( Kamēr tu gaidi, ){'\n'}
          ( uzklāj, lūdzu, galdu! ){'\n'}
          ( - Labprāt. Kur ir trauki? ){'\n'}
          ( - Skapī, uz plaukta. ){'\n'}
          ( Uzliec tos uz galda! ){'\n'}
          ( Vai tu gribi tēju? ){'\n'}
          ( - Nē. Iedod man, lūdzu, apelsīnu sulu ){'\n'}
          ( un mīksti vārītu olu! ){'\n'}
          ( - Kādu maizi tu gribi, ){'\n'}
          ( rupjmaizi vai baltmaizi? ){'\n'}
          ( - Juri, ko tu ēd? ){'\n'}
          ( - Es ēdu maizi ar ievārījumu. ){'\n'}
          ( - Lūdzu, iedod man arī! ){'\n'}
          ( - Lūdzu. Labi ēstgribu! ){'\n'}{'\n'}

          ( - Vai jūs jau gribat ēst? ){'\n'}
          ( Lūdzu, pie galda! ){'\n'}
          ( - Labi. Man gribas ēst. ){'\n'}
          ( - Es esmu izsalcis ){'\n'}
          ( un man slāpst. ){'\n'}
          ( - Mums būs sakņu zupa ){'\n'}
          ( un sviestmaizes. ){'\n'}
          ( - Man garšo sakņu zupa. ){'\n'}
          ( - Man arī. ){'\n'}
          ( - Man labāk garšo vistas buljons. ){'\n'}
          ( Mamma, kur ir sviests? ){'\n'}
          ( - Sviests ir ledusskapī. ){'\n'}
          ( Aizej un paņem! ){'\n'}
          ( - Atnes arī maizi! ){'\n'}
          ( - Ivar, lūdzu, novāc galdu! ){'\n'}
          ( Un nomazgā traukus! ){'\n'}{'\n'}

          ( - Vakariņas ir gatavas! ){'\n'}
          ( Vai viss ir kārtībā? ){'\n'}
          ( - Jā. Piens ir šeit. ){'\n'}
          ( Sāls un pipari ir jau uz galda. ){'\n'}
          ( - Lūdzu, ēd, nekautrējies! ){'\n'}
          ( Kā tev garšo šis cālis? ){'\n'}
          ( - Man tas nemaz negaršo. ){'\n'}
          ( - Vai tu gribi kaut ko dzeramu? ){'\n'}
          ( Ko mēs dzersim, ){'\n'}
          ( vīnu vai sulu? ){'\n'}
          ( - Es gribētu kafiju. ){'\n'}
          ( - Es tūliņ atnesīšu. ){'\n'}
          ( Vai tu gribi ar cukuru un krējumu? ){'\n'}
          ( - Nē. Es dzeru melnu kafiju. )
        </Text>);
    case '6':
      return (
        <Text style={styles.dark}>
          ( - Drīz būs klāt ciemiņi. ){'\n'}
          ( Vai es varu jums palīdzēt? ){'\n'}
          ( - Lūdzu, uzliec uz galda sveces! ){'\n'}
          ( - Labi. Kur tās ir? ){'\n'}
          ( - Tur, blakus salvetēm. ){'\n'}
          ( - Esam klāt! Labvakar! Kā iet? ){'\n'}
          ( - Nāciet iekšā! ){'\n'}
          ( - Es jums atnesu ziedus. Lūdzu. ){'\n'}
          ( - Vai, cik tie skaisti! ){'\n'}
          ( Paldies! Tā nevajadzēja. ){'\n'}
          ( Ilze, jūties kā mājās! ){'\n'}
          ( Vai es varu piedāvāt kaut ko dzeramu? ){'\n'}
          ( Un pīrāgus? ){'\n'}
          ( - Paldies, tie ir ļoti garšīgi. ){'\n'}
          ( Vai tie ir pašcepti? ){'\n'}{'\n'}

          ( - Viss ir gatavs. ){'\n'}
          ( Iesim pie galda! ){'\n'}
          ( - Vispirms es gribu nomazgāt rokas. ){'\n'}
          ( Es tūliņ būšu. ){'\n'}
          ( - Viss izskatās brīnišķīgi! ){'\n'}
          ( Un smaržo tik labi! ){'\n'}
          ( - Juri, lūdzu, sēdi te, man blakus. ){'\n'}
          ( Mārtiņ, vai es drīkstu piedāvāt zivis? ){'\n'}
          ( - Nē, paldies! Es zivis neēdu. ){'\n'}
          ( - Pamēģini mazu gabaliņu! ){'\n'}
          ( - Ilze, pasniedz man sāli! ){'\n'}
          ( - Es gribu tikai salātus. ){'\n'}
          ( - Lūdzu, ņemiet vēl! ){'\n'}{'\n'}

          ( - Vai iesim viesistabā? ){'\n'}
          ( Tur būs ērtāk. ){'\n'}
          ( Valdi, ieslēdz mūziku! ){'\n'}
          ( Paņem latviešu kasetes! ){'\n'}
          ( - Ilze, tu izskaties lieliski! ){'\n'}
          ( Vai tā ir jauna kleita? ){'\n'}
          ( - Kurš vēlas kafiju? ){'\n'}
          ( - Man liekas, ka Juris grib alu. ){'\n'}
          ( Mārtiņ, ielej Jurim alu! ){'\n'}
          ( - Tūliņ. Lūdzu! ){'\n'}
          ( - Kalniņa kungs, vai es drīkstu smēķēt? ){'\n'}
          ( - Jā, lūdzu! Velta, kur ir pelnutrauks? ){'\n'}
          ( - Pacelsim glāzes! ){'\n'}
          ( Nu, Ilze, pastāsti, kas jauns! ){'\n'}{'\n'}

          ( - Ak, es nezināju, ka ir jau tik vēls! ){'\n'}
          ( Juri, mums jābrauc mājās! ){'\n'}
          ( - Vai tiešām? ){'\n'}
          ( Vēl jau nav tik vēls. ){'\n'}
          ( - Lūdzu, palieciet mazliet ilgāk! ){'\n'}
          ( - Man ļoti žēl, bet mums jābrauc. ){'\n'}
          ( Mēs gribam atvadīties. ){'\n'}
          ( Paldies par viesmīlību! ){'\n'}
          ( - Bija jauki jūs satikt. ){'\n'}
          ( - Jā. Bija patīkamas viesības. ){'\n'}
          ( Es ceru, ka mēs drīz atkal satiksimies. ){'\n'}
          ( - Noteikti. ){'\n'}
          ( Es jums piezvanīšu. ){'\n'}
          ( - Nu tad, ar labu nakti! ){'\n'}
          ( - Brauciet uzmanīgi! )
          </Text>);
    case '7':
      return (
        <Text style={styles.dark}>
          ( - Ko tu dari? ){'\n'}
          ( - Es gaidu Ilzi. ){'\n'}
          ( Cik ir pulkstenis? ){'\n'}
          ( - Divi. Pulkstenis ir divi. ){'\n'}
          ( - Paldies... ){'\n'}
          ( Cik tagad ir pulkstenis? ){'\n'}
          ( - Piecas minūtes pāri diviem. ){'\n'}
          ( - Labi... ){'\n'}
          ( Cik tagad ir pulkstenis? ){'\n'}
          ( - Tagad ir tieši divi un piecpadsmit minūtes. ){'\n'}
          ( Drīz būs divi trīsdesmit. ){'\n'}
          ( - Vai nu jau ir pustrīs? ){'\n'}
          ( Es nezinu, kas ir noticis. ){'\n'}
          ( Parasti Ilze ir laikā. ){'\n'}
          ( - Cik ilgi tu gaidīsi? ){'\n'}
          ( - Es gaidīšu līdz trijiem. ){'\n'}
          ( Tad es iešu mājās. ){'\n'}{'\n'}

          ( - Cikos ir koncerts? ){'\n'}
          ( - Koncerts ir pulksten astoņos, ){'\n'}
          ( un desmitos sākas balle. ){'\n'}
          ( Pašlaik ir tikai bez desmit minūtēm septiņi. ){'\n'}
          ( Mums ir daudz laika. ){'\n'}
          ( Mums nav jāsteidzas. ){'\n'}
          ( - Vai tu domā, ka izstāde ir atvērta? ){'\n'}
          ( - Jā. Izstāde ir atvērta ){'\n'}
          ( no sešiem līdz desmitiem. ){'\n'}
          ( - Cikos tev sākas skola? ){'\n'}
          ( - Pirmā stunda sākas deviņos. ){'\n'}
          ( Un tev? ){'\n'}
          ( - Es neeju skolā, es strādāju. ){'\n'}
          ( Darbs man sākas pusdeviņos. ){'\n'}{'\n'}

          ( - Juri, kāds šodien datums? ){'\n'}
          ( - Šodien ir piektais maijs. ){'\n'}
          ( Kāpēc tu jautā? ){'\n'}
          ( - Sestajā maijā būs referāts ){'\n'}
          ( "Latviešu gadalaiki". ){'\n'}
          ( Es negribu to palaist garām. ){'\n'}
          ( - Cikos būs referāts? ){'\n'}
          ( - Četros pēcpusdienā. ){'\n'}
          ( Vai tu gribi nākt līdzi? ){'\n'}
          ( - Jā, vai tu varēsi mani pēc tam aizvest mājās? ){'\n'}
          ( - Protams. ){'\n'}
          ( Es tevi aizvedīšu mājās. ){'\n'}
          ( Satiksimies rīt! )
        </Text>);
    case '8':
      return (
        <Text style={styles.dark}>
          ( - Labdien! ){'\n'}
          ( Šodien ir brīnišķīga diena. ){'\n'}
          ( - Ļoti jauka! Spīd saule. ){'\n'}
          ( - Jā. Ir silts un saulains. ){'\n'}
          ( Es ceru, ka arī rīt būs labs laiks. ){'\n'}
          ( Es vakar gribēju braukt zaļumos, ){'\n'}
          ( bet bija tik apmācies. ){'\n'}
          ( Un pirmdien lija. ){'\n'}
          ( - Jā. Es atceros. ){'\n'}
          ( Bija negaiss. ){'\n'}
          ( Es gribēju iet pastaigāties, ){'\n'}
          ( bet man nepatīk negaiss. ){'\n'}
          ( - Vai tev ir laiks? ){'\n'}
          ( Aiziesim uz pludmali! ){'\n'}
          ( Šodien ir tik jauki ārā. ){'\n'}{'\n'}

          ( - Celies! Ir jau rīts! ){'\n'}
          ( Ko tu šodien darīsi? ){'\n'}
          ( - Kāds ārā laiks? ){'\n'}
          ( - Ārā ir auksts un lietains. ){'\n'}
          ( Pašlaik līst. ){'\n'}
          ( - Jā. Visu nedēļu bija slikts laiks. ){'\n'}
          ( Rudenī un ziemā pie mums parasti līst. ){'\n'}
          ( - Tas ir tiesa. ){'\n'}
          ( - Tātad, ko mēs darīsim? ){'\n'}
          ( - Zini ko? Paliksim šodien mājās! ){'\n'}
          ( - Labi. Mēs varam lasīt vai mācīties. ){'\n'}
          ( Un skatīties televizoru. ){'\n'}{'\n'}

          ( - Es nekā neredzu. ){'\n'}
          ( Lūdzu, ieslēdz gaismu! ){'\n'}
          ( - Te ir karsti. ){'\n'}
          ( Atver arī logu! ){'\n'}
          ( - Acumirkli! ){'\n'}
          ( Te ir caurvējš, ){'\n'}
          ( un man salst. ){'\n'}
          ( Aizver durvis! ){'\n'}
          ( Taisi ciet logu! ){'\n'}
          ( - Paklausies, man ir garlaicīgi. ){'\n'}
          ( Juri, iesim ārā! ){'\n'}
          ( - Tādā laikā? ){'\n'}
          ( - Decembrī agri kļūst tumšs, ){'\n'}
          ( un man jāiet mājās šā vai tā. ){'\n'}
          ( - Nu, labi, labi. ){'\n'}
          ( Bet uzmanies! ){'\n'}
          ( Ielas ir slidenas. )
        </Text>);
    case '9':
      return (
        <Text style={styles.dark}>
          ( - Hallo! Klausos. ){'\n'}
          ( - Te Juris. ){'\n'}
          ( Vai es varētu runāt ar Ilzi? ){'\n'}
          ( - Labvakar, Juri! ){'\n'}
          ( Jā. Es viņu pasaukšu. ){'\n'}
          ( Ilze! Telefons! ){'\n'}
          ( Juris zvana. ){'\n'}
          ( - Labvakar, Juri! Kā klājas? ){'\n'}
          ( - Ko tu šovakar dari? ){'\n'}
          ( - Neko īpašu. Es lasu. ){'\n'}
          ( - Vai tu gribētu ar mani aiziet uz kino? ){'\n'}
          ( - Ar lielāko prieku! ){'\n'}
          ( Paldies, ka piezvanīji! ){'\n'}
          ( Un pasveicini savu tēvu! ){'\n'}{'\n'}

          ( - Kalniņas kundze, vai es drīkstu piezvanīt? ){'\n'}
          ( - Jā. Te ir telefons. ){'\n'}
          ( - Paldies. Es gribu piezvanīt draudzenei, ){'\n'}
          ( bet nezinu numuru. ){'\n'}
          ( Vai jums ir telefonu grāmata? ){'\n'}
          ( - Acumirkli, es pameklēšu. ){'\n'}
          ( Jā, te ir. ){'\n'}
          ( - Neviens neatbild. ){'\n'}
          ( Laikam Ievas nav mājās. ){'\n'}
          ( - Pamēģiniet vēl vienu reizi mazliet vēlāk. ){'\n'}
          ( - Noteikti. Tagad ir aizņemts. ){'\n'}{'\n'}

          ( - Labvakar! ){'\n'}
          ( Vai Mārtiņš ir mājās? ){'\n'}
          ( - Nē, Mārtiņa nav mājās. ){'\n'}
          ( Vai nodot viņam kādu ziņu? ){'\n'}
          ( - Jā, lūdzu! Pasakiet viņam, ){'\n'}
          ( ka biedrības sēde būs 1. septembrī ){'\n'}
          ( pulksten astoņos. ){'\n'}
          ( Kongress būs no 28. līdz 30. novembrim. ){'\n'}
          ( - Labi. Es pateikšu. ){'\n'}
          ( - Ja viņam būs kādi jautājumi, ){'\n'}
          ( lai viņš man piezvana. ){'\n'}
          ( - Kāds ir jūsu telefona numurs? ){'\n'}
          ( - Mans telefona numurs ir 7-965-364. )
        </Text>);
    case '10':
      return (
        <Text style={styles.dark}>
          ( - Ko tu šovakar darīsi? ){'\n'}
          ( - Es nezinu. ){'\n'}
          ( Ko tu gribētu? ){'\n'}
          ( - Man vienalga. ){'\n'}
          ( Mēs varētu iet peldēties ){'\n'}
          ( vai spēlēt bumbu. ){'\n'}
          ( - Es zinu, ko darīsim. ){'\n'}
          ( Teātrī ir jauna luga. ){'\n'}
          ( Es pusdienlaikā nopirkšu biļetes. ){'\n'}
          ( Pēc izrādes aiziesim uz kādu kafejnīcu. ){'\n'}
          ( Mēs būsim mājās ap pusnakti. ){'\n'}
          ( - Tas gan būtu jauki! ){'\n'}
          ( - Tad tiksimies vakarā. ){'\n'}
          ( - Norunāts. ){'\n'}{'\n'}

          ( - Ko tu darīsi nedēļas nogalē? ){'\n'}
          ( - Es nezinu. Laikam aiziešu uz volejbola spēlēm. ){'\n'}
          ( Vai tu gribi nākt līdzi? ){'\n'}
          ( - Es nevaru. Sestdienās es valodu kursos mācu latviešu valodu. ){'\n'}
          ( Svētdienās es dziedu baznīcas korī. ){'\n'}
          ( Pēcpusdienās es parasti braucu ciemos pie vecmāmiņas. ){'\n'}
          ( - Tad satiksimies pirmdien. ){'\n'}
          ( - Visu labu! ){'\n'}{'\n'}

          ( - Kur tu ej? ){'\n'}
          ( - Es eju nopirkt avīzi ){'\n'}
          ( un uz veikalu pēc piena. ){'\n'}
          ( - Iesim reizē! ){'\n'}
          ( Es gribu parunāties.{'\n'}
          ( Pēc tam aiziesim arī līdz pilsētas centram. ){'\n'}
          ( - Nē, tas ir pārāk tālu. ){'\n'}
          ( Tur jābrauc ar mašīnu. ){'\n'}
          ( Uz pilsētu es braukšu rīt. ){'\n'}
          ( - Kāpēc tu brauksi uz pilsētu?{'\n'}
          ( - Aiziešu uz restorānu un tad uz dejām. ){'\n'}
          ( Man rīt būs dzimšanas diena. ){'\n'}
          ( - Es tevi apsveicu! ){'\n'}
          ( Daudz laimes dzimšanas dienā! )
        </Text>);
    case '11':
      return (
        <Text style={styles.dark}>
          ( - Ko tu dari pēc darba? ){'\n'}
          ( - Es atpūšos. ){'\n'}
          ( Es paēdu mājās vakariņas ){'\n'}
          ( un pēc tam skatos televizoru vai lasu. ){'\n'}
          ( Galvenokārt vēstures grāmatas. ){'\n'}
          ( - Jā, man arī jāatpūšas. ){'\n'}
          ( Es pēc darba apsēžos un izskatu pastu. ){'\n'}
          ( Bet man patīk arī peldēt un skriet. ){'\n'}
          ( - Mani interesē valodas. ){'\n'}
          ( Es protu trīs valodas - ){'\n'}
          ( latviešu, angļu un vācu valodu. ){'\n'}
          ( - Man vislabāk patīk ceļot. ){'\n'}
          ( Uz Eiropu, Āziju, Austrāliju - vienalga, uz kurieni. ){'\n'}{'\n'}

          ( - Mans vaļasprieks ir fotografēšana. ){'\n'}
          ( Man ir labs fotoaparāts. ){'\n'}
          ( Mana sieva strādā rokdarbus. ){'\n'}
          ( Viņa ada un šuj. ){'\n'}
          ( - Es krāju pastmarkas. ){'\n'}
          ( Man ir gandrīz visas Latvijas pastmarkas. ){'\n'}
          ( Mans dēls ir sportists. ){'\n'}
          ( Mēs bieži ejam uz sporta spēlēm. ){'\n'}
          ( Mums patīk arī iet ciemos. ){'\n'}
          ( - Mums ir dārzs. ){'\n'}
          ( Mēs audzējam dārzeņus un puķes. ){'\n'}
          ( Pagājušajā gadā mums bija ļoti daudz tomātu. ){'\n'}
          ( Mēs ēdām paši un devām draugiem. ){'\n'}{'\n'}

          ( - Ko jūs darāt, Kalniņas kundze? ){'\n'}
          ( Es adu džemperi. ){'\n'}
          ( Tā būs Ziemassvētku dāvana. ){'\n'}
          ( - Jā, Ziemassvētki ir ļoti tuvu. ){'\n'}
          ( Man vēl jāpērk dāvanas. ){'\n'}
          ( Ko jūs darīsit svētkos? ){'\n'}
          ( - Ziemassvētkus mēs vienmēr svinam mājās. ){'\n'}
          ( Jaungadā mēs brauksim pie mana brāļa uz laukiem. ){'\n'}
          ( - Mēs iesim uz balli, ){'\n'}
          ( bet nezinām, kur atstāt bērnus. ){'\n'}
          ( - Bērni var braukt mums līdzi. ){'\n'}
          ( Tas mums darītu prieku. )
        </Text>);
    case '12':
      return (
        <Text style={styles.dark}>
          ( - Aija! Vai tiešām tā esi tu, Aija? ){'\n'}
          ( - Zaiga! Cik ilgi neredzēta! ){'\n'}
          ( Ko tu te dari? ){'\n'}
          ( - Es atnācu iepirkties. ){'\n'}
          ( Šie ir mani bērni. ){'\n'}
          ( Saki labdien, Ivariņ! ){'\n'}
          ( Vai tu te jau ilgi dzīvo? ){'\n'}
          ( - Divus gadus. ){'\n'}
          ( Kopš Andrītis sāka iet skolā. ){'\n'}
          ( Stāvi mierīgi, Andri! ){'\n'}
          ( Nejaucies starpā! ){'\n'}
          ( Savādi, ka mēs nekad neesam satikušās. ){'\n'}
          ( - Es te bieži nāku iepirkties. ){'\n'}
          ( Mans Ivariņš ātri aug! ){'\n'}
          ( Viņam nepārtraukti jāpērk jaunas drēbes. ){'\n'}{'\n'}

          ( - Labdien, Ivariņ. ){'\n'}
          ( Kā tu esi izaudzis! ){'\n'}
          ( Kurā klasē tu mācies? ){'\n'}
          ( - Es mācos otrajā klasē. ){'\n'}
          ( - Vai tu jau proti lasīt un rakstīt? ){'\n'}
          ( - Jā. Es taču esmu otrajā klasē. ){'\n'}
          ( - Ak, protams. Kā laiks skrien! ){'\n'}
          ( Kad tu atnāksi pie manis ciemos? ){'\n'}
          ( - Drīz. Māmiņ, kad mēs brauksim pie tantes Veltas ciemos? ){'\n'}
          ( - Mēs varētu braukt svētdien, ){'\n'}
          ( ja tu pabeigsi visus mājasdarbus. ){'\n'}
          ( - Es pabeigšu. Mums nav daudz uzdots. ){'\n'}{'\n'}

          ( - Un kā tev klājas, Mārīt? ){'\n'}
          ( Vai tas ir tavs sunītis? ){'\n'}
          ( - Jā, tas ir Kriksis. ){'\n'}
          ( - Vai tev ir vēl kādi mājdzīvnieki? ){'\n'}
          ( - Jā, mums ir arī kaķis Mincis. ){'\n'}
          ( Viņš ir liels un slinks. ){'\n'}
          ( - Un tu? ){'\n'}
          ( Vai tu palīdzi māmiņai? ){'\n'}
          ( - Mārīt! Laiks iet gulēt. ){'\n'}
          ( Saki ar labu nakti krusttēvam! ){'\n'}
          ( Tad ej mazgāties un gulēt! ){'\n'}
          ( - Vai lai es eju vannā vai dušā? ){'\n'}
          ( - Man vienalga. ){'\n'}
          ( Tikai neaizmirsti iztīrīt zobus! ){'\n'}
          ( Un nenomet dvieli zemē! )
        </Text>);
    case '13':
      return (
        <Text style={styles.dark}>
          ( - Kāds klauvē. ){'\n'}
          ( Paskaties, kas tur ir! ){'\n'}
          ( - Pēter! Nu tad beidzot! ){'\n'}
          ( - Mēs varam braukt. ){'\n'}
          ( Juri, kur ir tava mašīna? ){'\n'}
          ( Vai garāžā? ){'\n'}
          ( - Nē, garāžā ir manas māsas mašīna. ){'\n'}
          ( Mana mašīna ir uz ielas. ){'\n'}
          ( - Vai durvis ir aizslēgtas? ){'\n'}
          ( - Nē. Tās ir vaļā. ){'\n'}
          ( Kāp tikai iekšā! ){'\n'}
          ( - Es gribu sēdēt pie loga. ){'\n'}
          ( Man nepatīk sēdēt aizmugurē. ){'\n'}
          ( - Es labāk iešu kājām. ){'\n'}
          ( Man patīk staigāt. ){'\n'}
          ( - Kurp mēs brauksim? ){'\n'}
          ( - Mēs brauksim uz muzeju. ){'\n'}
          ( Tas nav tālu. ){'\n'}{'\n'}

          ( - Juri, vai tu esi gatavs? ){'\n'}
          ( - Jā, man tikai jāielej benzīns. ){'\n'}
          ( Kur ir benzīna uzpildes stacija? ){'\n'}
          ( - Tuvākā benzīna uzpildes stacija ir tepat aiz stūra. ){'\n'}
          ( Brauc līdz puķu veikalam ){'\n'}
          ( un tad pa labi. ){'\n'}
          ( - Cik tālu ir pasts? ){'\n'}
          ( - Pasts ir pavisam tuvu. ){'\n'}
          ( Pie baznīcas griezies pa kreisi ){'\n'}
          ( un brauc divus kvartālus. ){'\n'}
          ( - Tā, esam klāt. ){'\n'}
          ( Ilze, kur lai es atstāju mašīnu? ){'\n'}
          ( - Te ir brīva vieta. ){'\n'}
          ( Nē, tur ir vārti. ){'\n'}{'\n'}

          ( - Kalniņa kungs, vai jums ir karte? ){'\n'}
          ( Man jātiek uz Eleju. ){'\n'}
          ( Vai jūs zināt, kur tas ir? ){'\n'}
          ( - Jā, Eleja ir apmēram 26 kilometrus no Jelgavas. ){'\n'}
          ( - Kurā virzienā? ){'\n'}
          ( - Uz dienvidiem. ){'\n'}
          ( Jums jābrauc taisni pa šoseju, ){'\n'}
          ( līdz būsiet Elejā. ){'\n'}
          ( Pie kā jūs braucat? ){'\n'}
          ( - Pie Zariņiem. ){'\n'}
          ( - Ā! Viņi dzīvo centrā ){'\n'}
          ( pa labi no galvenās ielas, ){'\n'}
          ( tieši pie skolas. ){'\n'}
          ( - Paldies! Tad es atradīšu. )
        </Text>);
    case '14':
      return (
        <Text style={styles.dark}>
          ( - Vai tu kaut kur mācies? ){'\n'}
          ( - Jā, es mācos universitātē. ){'\n'}
          ( Mana māsa iet vidusskolā. ){'\n'}
          ( Viņa mācās interesantus priekšmetus. ){'\n'}
          ( - Vai viņa mācās desmitajā klasē? ){'\n'}
          ( - Nē, viņa ir pēdējā klasē. ){'\n'}
          ( Lienīt! Mēs tikko par tevi runājām. ){'\n'}
          ( Kur tu biji? ){'\n'}
          ( - Es biju iepirkties. ){'\n'}
          ( Kā tev patīk mana jaunā jaka? ){'\n'}
          ( Es to nopirku izpārdošanā. ){'\n'}
          ( - Tā ir glīta jaka. ){'\n'}
          ( Tev piestāv zila krāsa. ){'\n'}
          ( - Es nopirku arī somu un cimdus. ){'\n'}{'\n'}

          ( - Nāc, Mārīt! Iesim klasē! ){'\n'}
          ( - Vai visi ir klasē? ){'\n'}
          ( Labi, tad sāksim! ){'\n'}
          ( Ivar, ņem grāmatu un lasi! ){'\n'}
          ( Izlasi dzejoli desmitajā lappusē! ){'\n'}
          ( Tas jāiemācās no galvas. ){'\n'}
          ( Lasi lēnāk! Nesteidzies! ){'\n'}
          ( Lūdzu, aizveriet grāmatas! ){'\n'}
          ( - Es ceru, ka nebūs kontroldarba. ){'\n'}
          ( Es neesmu izmācījies. ){'\n'}
          ( Vai tev ir zīmulis? ){'\n'}
          ( - Te ir kontroldarbs. ){'\n'}
          ( Atbildiet uz visiem jautājumiem ){'\n'}
          ( un tad jūs varat iet! ){'\n'}
          ( Vai viss ir skaidrs? ){'\n'}{'\n'}

          ( - Klusu! Skolotājs nāk! ){'\n'}
          ( - Kas bija uzdots? ){'\n'}
          ( Ātri, parādi! ){'\n'}
          ( - Labrīt, bērni! ){'\n'}
          ( Lūdzu uzmanību! ){'\n'}
          ( Šodien būs filma par Latvijas ģeogrāfiju. ){'\n'}
          ( Par to stāstīs Kalniņa kungs. ){'\n'}
          ( Vai ir kādi jautājumi? ){'\n'}
          ( Tad varam sākt. ){'\n'}
          ( - Zvans! Cik ātri pagāja stunda! ){'\n'}
          ( Nāc, Gunti, mēs ejam pie Jāņa! ){'\n'}
          ( Visi citi jau aizgāja. ){'\n'}
          ( Gunti, vai tu mani dzirdi? ){'\n'}
          ( - Jā, es tevi dzirdu! Es nevaru. ){'\n'}
          ( Man jāmācās. ){'\n'}
          ( Es aiziešu vēlāk, pēc vakariņām. )
        </Text>);
    case '15':
      return (
        <Text style={styles.dark}>
          ( - Kā tu jūties? ){'\n'}
          ( - Ne sevišķi labi. ){'\n'}
          ( - Kas tev kaiš? ){'\n'}
          ( - Man sāp galva. ){'\n'}
          ( Man ir iesnas un klepus. ){'\n'}
          ( - Tu laikam esi saaukstējies. ){'\n'}
          ( Labāk ej mājās! ){'\n'}
          ( Izmēri temperatūru ){'\n'}
          ( un liecies gultā! ){'\n'}
          ( - Iedzer divus aspirīnus! ){'\n'}
          ( Es nopirkšu klepus zāles. ){'\n'}
          ( - Tu esi pārpūlējies. ){'\n'}
          ( Tev ir labi jāatpūšas. ){'\n'}
          ( Tad tu drīz būsi vesels. ){'\n'}{'\n'}

          ( - Kā tu tagad jūties? ){'\n'}
          ( Te ir karsta tēja un maizītes. ){'\n'}
          ( - Man negribas ēst. ){'\n'}
          ( Man sāp kakls ){'\n'}
          ( un ir slikta dūša. ){'\n'}
          ( Man gribas tikai gulēt. ){'\n'}
          ( - Piecelies sēdus ){'\n'}
          ( un iedzer zāles! ){'\n'}
          ( Tev tās jādzer trīsreiz dienā. ){'\n'}
          ( Manam tēvam arī bija gripa, ){'\n'}
          ( bet nu viņš ir vesels. ){'\n'}
          ( Dzer zāles un veseļojies! ){'\n'}
          ( Taisi acis ciet un guli! ){'\n'}{'\n'}

          ( - Kas tev kaiš, Mārīt? ){'\n'}
          ( - Es kritu un sasitu celi. ){'\n'}
          ( - Vai tu vari paiet? ){'\n'}
          ( Es tev palīdzēšu. ){'\n'}
          ( Vai kāja ļoti sāp? ){'\n'}
          ( - Es piezvanīšu ārstam. ){'\n'}
          ( Dakteris Zariņš drīz būs klāt. ){'\n'}
          ( Viņš pārsies kāju un, ja vajadzēs, ){'\n'}
          ( nosūtīs tevi uz rentgenu. ){'\n'}
          ( Pagaidām atlaidies. ){'\n'}
          ( Es tevi apsegšu. ){'\n'}
          ( Neuztraucies, viss būs labi! )
        </Text>);
    case '16':
      return (
        <Text style={styles.dark}>
          ( - Diez kur ir Mārtiņš? ){'\n'}
          ( Viņš kavējas. ){'\n'}
          ( Es ceru, ka viņam nekas nav noticis. ){'\n'}
          ( - Neuztraucies, ){'\n'}
          ( Mārtiņš nekad nav laikā! ){'\n'}
          ( Varbūt viņš šodien vispār neatnāks. ){'\n'}
          ( - Muļķības! ){'\n'}
          ( Gan jau viņš parādīsies. ){'\n'}
          ( Te viņš ir! ){'\n'}
          ( - Atvainojiet, man bija daudz darba. ){'\n'}
          ( - Nestāsti niekus! ){'\n'}
          ( Tu vienkārši aizmirsi. ){'\n'}
          ( - Izbeidziet strīdēties, ){'\n'}
          ( viss taču ir kārtībā! ){'\n'}
          ( Vai mēs varam braukt? ){'\n'}{'\n'}

          ( - Ilze, palīdzi man sakopt māju! ){'\n'}
          ( Te ir tāda nekārtība. ){'\n'}
          ( - Liec mani mierā! ){'\n'}
          ( Es šodien esmu sliktā omā. ){'\n'}
          ( - Tiešām! ){'\n'}
          ( Kas to būtu domājis? ){'\n'}
          ( Vai tu vismaz varētu iztīrīt virtuvi? ){'\n'}
          ( - Nekādā gadījumā! ){'\n'}
          ( Tas man ir par grūtu. ){'\n'}
          ( - Brīnišķīgi! ){'\n'}
          ( Tad man atkal viss jādara pašai. ){'\n'}
          ( - Patiesību sakot, tas mani nemaz neinteresē. ){'\n'}{'\n'}

          ( - Labrīt, bērni! ){'\n'}
          ( Atveriet, lūdzu, grāmatas piektajā lappusē! ){'\n'}
          ( - Es aizmirsu grāmatu mājās. ){'\n'}
          ( - Tas ir slikti. ){'\n'}
          ( Tad, lūdzu, noskaiti dzejoli par ziemu! ){'\n'}
          ( - Tas nav godīgi! ){'\n'}
          ( Es nezināju, kas bija uzdots. ){'\n'}
          ( - Es jums to vakar pateicu. ){'\n'}
          ( - To es neatceros. ){'\n'}
          ( - Es arī to nedzirdēju. ){'\n'}
          ( - Skolotāj, es nebiju skolā. ){'\n'}
          ( Lūdzu, atkārtojiet uzdevumu vēlreiz! )
        </Text>);
    case '17':
      return (
        <Text style={styles.dark}>
          ( - Labdien! Vai jūs stāvat rindā pēc biļetēm? ){'\n'}
          ( Cik tās maksā? ){'\n'}
          ( - Divus latus. ){'\n'}
          ( Skolēniem, studentiem un pensionāriem ir atlaide. ){'\n'}
          ( - Man, lūdzu, divas pieaugušo un divas skolēnu biļetes. ){'\n'}
          ( Cik man jāmaksā? ){'\n'}
          ( - Seši lati. Lūdzu! ){'\n'}
          ( Vai jūs vēlaties arī programmu? ){'\n'}
          ( Tā ir tur, par ziedojumiem. ){'\n'}
          ( - Šodien laikam būs labs koncerts. ){'\n'}
          ( Dzied zēnu koris. ){'\n'}
          ( - Jā. Tas visiem patīk. ){'\n'}
          ( Kur ir garderobe? ){'\n'}
          ( Es gribu novilkt mēteli. ){'\n'}{'\n'}

          ( - Iesim iekšā? ){'\n'}
          ( Es gribu dabūt labas vietas. ){'\n'}
          ( Vai šīs vietas ir aizņemtas? ){'\n'}
          ( - Jā, šīs divas ir aizņemtas, ){'\n'}
          ( bet tās vēl ir brīvas. ){'\n'}
          ( - Vai tās ir labas vietas? ){'\n'}
          ( - Jā, te var labi redzēt. ){'\n'}
          ( - Ko jūs darīsit pēc koncerta? ){'\n'}
          ( - Neko sevišķu. ){'\n'}
          ( Kāpēc tu jautā? ){'\n'}
          ( - Aizbrauksim pie mums iedzert kafiju un parunāties. ){'\n'}
          ( - Brīnišķīgi! Mēs būsim. ){'\n'}{'\n'}

          ( - Kā tev patika pagājušās nedēļas koncerts? ){'\n'}
          ( - Man patika koris 'Daina', ){'\n'}
          ( bet nepatika referāts pirms tā. ){'\n'}
          ( Man tas likās garlaicīgs. ){'\n'}
          ( - Es arī tā domāju. ){'\n'}
          ( Vai tu rītvakar iesi uz izrādi? ){'\n'}
          ( - Jā, vai iesim kopā? ){'\n'}
          ( - Sarunāsim, kur satikties, ){'\n'}
          ( aiziesim vakariņās un pēc tam uz izrādi. ){'\n'}
          ( - Vai tev neliekas, ka mēs pārāk daudz strādājam? ){'\n'}
          ( Mums nekad nav brīva laika, lai parunātos. )
        </Text>);
    case '18':
      return (
        <Text style={styles.dark}>
          ( - Starpbrīdis. ){'\n'}
          ( - Beidzot! Iziesim ārā! ){'\n'}
          ( Vai jūs gribat kaut ko ēdamu? ){'\n'}
          ( Te ir sviestmaizītes ){'\n'}
          ( par piecpadsmit santīmiem gabalā. ){'\n'}
          ( - Man neko, paldies! ){'\n'}
          ( - Šīs kūkas ir ļoti garšīgas. ){'\n'}
          ( - Es pārdomāju. ){'\n'}
          ( Es ņemšu vienu sviestmaizīti, kūku un kafiju. ){'\n'}
          ( - Acumirkli! Es jums uzlikšu. ){'\n'}
          ( - Paldies! Es varu paņemt pats. Vai jums ir siers? ){'\n'}
          ( - Jā, protams. Lūdzu. ){'\n'}
          ( Kurš ir nākamais? ){'\n'}
          ( - Juri, pasteidzies! Tava kārta. ){'\n'}{'\n'}

          ( - Rinda pēc kafijas ir ļoti gara. Vai te var dabūt ko citu? ){'\n'}
          ( - Bārā ir vīns un alus. ){'\n'}
          ( Pagaidiet tepat! ){'\n'}
          ( Es nopirkšu mums visiem. ){'\n'}
          ( Atvainojiet, es jūs pagrūdu. ){'\n'}
          ( - Tas nekas, neuztraucieties! ){'\n'}
          ( - Nu, vai iesim atpakaļ zālē? ){'\n'}
          ( - Nē, pagaidi mazliet! ){'\n'}
          ( Ar ko Anna runā? ){'\n'}
          ( - Ar mācītāju. ){'\n'}
          ( - Vai tas ir mācītājs Kļaviņš? ){'\n'}
          ( Es gribu viņu satikt. ){'\n'}
          ( Es tūlīt būšu atpakaļ. ){'\n'}{'\n'}

          ( - Juri, kur lai mēs sēžam? ){'\n'}
          ( - Tur ir daži galdiņi. ){'\n'}
          ( Vai šīs vietas ir brīvas? ){'\n'}
          ( - Jā. Paņemiet krēslus! ){'\n'}
          ( Pie tā galda ir vēl daži krēsli. ){'\n'}
          ( - Šovakar ir ļoti daudz cilvēku. ){'\n'}
          ( Parasti uz koncertiem tik daudz cilvēku nenāk. ){'\n'}
          ( - Atvaino, Juri, vai tu zini, kur ir telefons? ){'\n'}
          ( Man jāpiezvana uz mājām. ){'\n'}
          ( - Telefons ir otrajā stāvā aiz garderobes. )
        </Text>);
    case '19':
      return (
        <Text style={styles.dark}>
          ( - Vai jūs šogad brauksiet uz Dziesmu svētkiem? ){'\n'}
          ( - Jā, protams. Un jūs? ){'\n'}
          ( - Mēs arī. ){'\n'}
          ( Visa mūsu ģimene dzied korī. ){'\n'}
          ( Es pats dziedu jau divdesmit gadu. ){'\n'}
          ( Mums ir ļoti labs diriģents. ){'\n'}
          ( - Kādas dziesmas jūs dziedat? ){'\n'}
          ( - Visvairāk tautasdziesmu apdares un latviešu komponistu dziesmas. ){'\n'}
          ( - Cik bieži jums ir mēģinājumi? ){'\n'}
          ( - Divas reizes nedēļā. ){'\n'}
          ( - Vai tu arī dejo? ){'\n'}
          ( - Nē, visu nevar paspēt. ){'\n'}{'\n'}

          ( - Mamm, kur ir mana sakta? ){'\n'}
          ( - Rotaslietu kastītē. ){'\n'}
          ( - Man nav baltu zeķu. ){'\n'}
          ( - Tās nopirksim pa ceļam. ){'\n'}
          ( - Ko tu meklē, tēti? ){'\n'}
          ( - Es meklēju atslēgas. ){'\n'}
          ( - Cik ilgi mums jābrauc? ){'\n'}
          ( - Vismaz divas stundas. ){'\n'}
          ( Vai Arvīds jau ir kārtībā? ){'\n'}
          ( - Arvīds iznesa somas un gaida mašīnā. ){'\n'}
          ( - Es nevaru sagaidīt, kad mēs būsim galā! ){'\n'}
          ( Dziesmu svētkos es vienmēr satieku daudz draugu. ){'\n'}{'\n'}

          ( - Nāc, mamm, mums jāsteidzas! ){'\n'}
          ( Tūliņ sāksies gājiens. ){'\n'}
          ( Cik skaisti tautastērpi! ){'\n'}
          ( - Paskaties, tur iet Anna! ){'\n'}
          ( Vai tu viņu redzi? ){'\n'}
          ( - Cik milzīga estrāde! ){'\n'}
          ( - Klusu, Mārīt! ){'\n'}
          ( Nāk diriģents! ){'\n'}
          ( - Vispirms mēs dziedāsim "Dievs, svētī Latviju". ){'\n'}
          ( Tad dziedās koris, vai ne? ){'\n'}
          ( Redzi, tur stāv soliste skatuves priekšā. ){'\n'}
          ( - Tas nemaz nebija slikti. ){'\n'}
          ( - Nebija slikti? Tas bija brīnišķīgi! ){'\n'}
          ( Paklausies, kā skatītāji aplaudē! )
        </Text>);
    case '20':
      return (
        <Text style={styles.dark}>
          ( - Sveiks, veco zēn! ){'\n'}
          ( Kā tev iet pa darbu? ){'\n'}
          ( - Labi. ){'\n'}
          ( Tikai, kā vienmēr, darba ir pārāk daudz. ){'\n'}
          ( Un tev? ){'\n'}
          ( - Es tikko dabūju jaunu darbu. ){'\n'}
          ( Jauki cilvēki un lielāka atbildība. ){'\n'}
          ( Alga arī daudz lielāka. ){'\n'}
          ( - Kā tu satiec ar savu priekšnieku? ){'\n'}
          ( - Lieliski! ){'\n'}
          ( Pagājušo nedēļu viņš mani ielūdza vakariņās. ){'\n'}
          ( Vai tu dzirdēji, ka Albertu atlaida? ){'\n'}
          ( - Nē! Tas nevar būt! ){'\n'}
          ( Ķīmiķiem ir grūti atrast citu darbu. ){'\n'}{'\n'}

          ( - Vai jūs esat Siliņa kungs? ){'\n'}
          ( Es jums atnācu pretī. ){'\n'}
          ( - Cik jauki! Es tikko atbraucu. ){'\n'}
          ( Kā lai es tieku uz Kalna ielu? ){'\n'}
          ( Vai es varu braukt ar autobusu? ){'\n'}
          ( - Ar taksometru būs ātrāk. ){'\n'}
          ( Autobusi pie mums iet ļoti lēni. ){'\n'}
          ( Vai jūs te dzīvosit? ){'\n'}
          ( - Jā. Es strādāšu vidusskolā. ){'\n'}
          ( Es esmu vēstures skolotājs. ){'\n'}
          ( Es mācu vēsturi latviešu skolā. ){'\n'}
          ( - Vai jūs varat mazliet pagaidīt? ){'\n'}
          ( Man arī uz to pusi jābrauc. ){'\n'}
          ( Es jūs aizvedīšu. ){'\n'}{'\n'}

          ( - Kur jūs strādājat? ){'\n'}
          ( - Es strādāju ostā. ){'\n'}
          ( - Cik interesanti! ){'\n'}
          ( Mēs ar sievu nopirkām māju turpat tuvumā. ){'\n'}
          ( - Vai jums ir bērni? ){'\n'}
          ( - Jā, mums ir trīs bērni - divas meitas un dēls. ){'\n'}
          ( - Tajā rajonā ir laba skola. ){'\n'}
          ( Bērnudārzs ir turpat pie parka. ){'\n'}
          ( Vidusskola ir mazliet tālāk, ){'\n'}
          ( tieši aiz slimnīcas. ){'\n'}
          ( - Un cik tālu ir tirdzniecības centrs? ){'\n'}
          ( - Tikai dažas ielas tālāk, ){'\n'}
          ( aiz policijas iecirkņa. )
        </Text>);
    case '21':
      return (
        <Text style={styles.dark}>
          ( - Labrīt! Šeit runā Vilnis Krūmiņš. ){'\n'}
          ( Vai es varētu runāt ar Ozoliņa kungu? ){'\n'}
          ( - Vienu mirkli, lūdzu. ){'\n'}
          ( Es jūs savienošu. ){'\n'}
          ( Diemžēl Ozoliņa kunga nav kabinetā. ){'\n'}
          ( Vai es varu viņam nodot ziņu? ){'\n'}
          ( - Labrīt! Kā es varu jums palīdzēt? ){'\n'}
          ( - Es vēlētos satikt Ozoliņa kungu. ){'\n'}
          ( - Vai jums ir norunāta tikšanās? ){'\n'}
          ( - Jā, šorīt deviņos. ){'\n'}
          ( - Acumirkli, lūdzu! ){'\n'}
          ( Es piezvanīšu uz viņa kantori. ){'\n'}
          ( Diemžēl Ozoliņa kungs šobrīd ir aizņemts. ){'\n'}
          ( Lūdzu, apsēdieties! ){'\n'}
          ( Viņš būs šeit, cik ātri vien iespējams. ){'\n'}
          ( Vai jūs gribētu apskatīt telpas? ){'\n'}
          ( Poriņa kungs jums tās parādīs. ){'\n'}{'\n'}

          ( - Ozoliņa kungs tagad var jūs pieņemt. ){'\n'}
          ( Atvainojiet par aizkavēšanos. ){'\n'}
          ( - Kā jums klājas, Krūmiņa kungs? ){'\n'}
          ( Kā atbraucāt? ){'\n'}
          ( - Paldies. Ļoti labi. ){'\n'}
          ( - Kā es varu jums palīdzēt? ){'\n'}
          ( - Mana firma nodarbojas ar importu un eksportu. ){'\n'}
          ( Es gribētu iepirkt datorus ){'\n'}
          ( un domāju, ka jūs varētu palīdzēt nodibināt kontaktus. ){'\n'}
          ( - Jā, es pasaukšu asistentu, ){'\n'}
          ( redzēsim, ko varam darīt. ){'\n'}
          ( Vai jūs jau esat apskatījis mūsu rūpnīcu? ){'\n'}{'\n'}

          ( - Vai šis ir labs uzņēmums? ){'\n'}
          ( - Ļoti labs. ){'\n'}
          ( Algas ir labas, ){'\n'}
          ( ir arī apdrošināšana, ){'\n'}
          ( un darba laiks nav pārāk ilgs. ){'\n'}
          ( Es te strādāju jau vairāk nekā divdesmit gadu. ){'\n'}
          ( Nākamgad eju pensijā. ){'\n'}
          ( - Cik cilvēku te strādā? ){'\n'}
          ( - Apmēram simts birojos ){'\n'}
          ( un vairāki tūkstoši rūpnīcā. ){'\n'}
          ( Vai jūs bijāt uz interviju? ){'\n'}
          ( - Jā, mani tikko pieņēma darbā. ){'\n'}
          ( Es sākšu strādāt ar nākamo pirmdienu. )
        </Text>);
    case '22':
      return (
        <Text style={styles.dark}>
          ( - Šodien man ir brīvdiena. ){'\n'}
          ( Ko darīsim? ){'\n'}
          ( - Iesim iepirkties! ){'\n'}
          ( Mums jānopērk pārtika. ){'\n'}
          ( Es gribu paskatīties arī jaunas vasaras kurpes. ){'\n'}
          ( - Tad iesim uz universālveikalu! ){'\n'}
          ( Tur var nopirkt visu. ){'\n'}
          ( - Vispirms ieiesim pārtikas nodaļā. ){'\n'}
          ( - Ko jums, lūdzu? ){'\n'}
          ( - Man kukulīti rupjmaizes ){'\n'}
          ( un 300 gramu magoņu cepumu. ){'\n'}
          ( Cik maksā ķimeņu siers? ){'\n'}
          ( - Lats divdesmit kilogramā. ){'\n'}
          ( Cik jums, lūdzu? ){'\n'}
          ( - Vai varētu puskilogramu? ){'\n'}
          ( - Jā, protams. Viss kopā būs tieši divi lati. ){'\n'}
          ( Maksājiet kasē! ){'\n'}
          ( Nākamais, lūdzu! ){'\n'}{'\n'}

          ( - Labdien! Vai varu palīdzēt? ){'\n'}
          ( - Nē, es tikai gribu paskatīties. ){'\n'}
          ( Cik maksā šis gredzens? ){'\n'}
          ( - Sudraba gredzens maksā divdesmit latu. ){'\n'}
          ( Zelta - deviņdesmit latu. ){'\n'}
          ( - Tas ir dārgi! ){'\n'}
          ( Bet tie ir skaisti gredzeni. ){'\n'}
          ( Vai es drīkstu uzlaikot? ){'\n'}
          ( Šis gredzens man ir par lielu. ){'\n'}
          ( - Lūdzu, uzlaikojiet šo! ){'\n'}
          ( - Šis der. ){'\n'}
          ( Lūdzu, parādiet arī dzintara krelles! ){'\n'}
          ( Vai es drīkstu maksāt ar čeku? ){'\n'}
          ( - Protams. Var arī ar kredītkarti. ){'\n'}
          ( - Paldies! ){'\n'}
          ( - Paldies jums! ){'\n'}{'\n'}

          ( - Vai tev patīk šis uzvalks? ){'\n'}
          ( - Tas ir glīts, un šī krāsa tev piestāv. ){'\n'}
          ( - Es gribētu to nopirkt, ){'\n'}
          ( bet man laikam nav līdzi tik daudz naudas. ){'\n'}
          ( - Neuztraucies, ja vajadzēs, es tev aizdošu. ){'\n'}
          ( - Anna, vai tu drīz nāksi? ){'\n'}
          ( - Jā, man tikai jāsamaksā par šīm precēm. ){'\n'}
          ( - Es ņemšu šo uzvalku un kreklu. ){'\n'}
          ( Vai jums ir arī atbilstošas kaklasaites? ){'\n'}
          ( - Nē, šobrīd nav, bet jūs varat pasūtīt. )
        </Text>);
    case '23':
      return (
        <Text style={styles.dark}>
          ( - Anna, kur tu vakar biji? ){'\n'}
          ( - Es biju bibliotēkā. Mācījos. ){'\n'}
          ( - Es neticu! ){'\n'}
          ( Tu biji ar Juri uz kino. ){'\n'}
          ( - Mārtiņ, nerunā tā! ){'\n'}
          ( Es nekad nemeloju. ){'\n'}
          ( - Piedod, Anna! ){'\n'}
          ( Es esmu greizsirdīgs. ){'\n'}
          ( Tu zini, ka tu man ļoti patīc. ){'\n'}
          ( Lūdzu, nedusmojies! ){'\n'}
          ( Paskaties, cik ārā ir skaists mēness! ){'\n'}
          ( Iesim pastaigāties! ){'\n'}
          ( - Es tev piedodu, Mārtiņ. ){'\n'}
          ( Es jau nemaz nebiju dusmīga. ){'\n'}{'\n'}

          ( - Es šodien saņēmu ielūgumu uz Ilzes un Jura kāzām. ){'\n'}
          ( - Es arī. Es priecājos par viņiem. ){'\n'}
          ( - Es Juri pazīstu jau ļoti sen. ){'\n'}
          ( Kad viņi precēsies? ){'\n'}
          ( - Es piemirsu datumu. ){'\n'}
          ( Mēneša beigās, trīsdesmitajā? ){'\n'}
          ( Man liekas, ka būs lielas kāzas. ){'\n'}
          ( - Jā. Ilze ir mana labākā draudzene. ){'\n'}
          ( Vai tu zini, ka arī Anna un Mārtiņš ir saderinājušies? ){'\n'}
          ( - Tiešām! ){'\n'}
          ( Un ko tad mēs gaidām? ){'\n'}
          ( - Vai tas ir bildinājums? ){'\n'}{'\n'}

          ( - Cik žēl, ka jau jābrauc. ){'\n'}
          ( Bija tik jaukas kāzas! ){'\n'}
          ( Es tev piezvanīšu. ){'\n'}
          ( - Iedod man savu adresi! ){'\n'}
          ( Es apsolos rakstīt vēstules katru dienu. ){'\n'}
          ( - Es mēģināšu atbildēt. ){'\n'}
          ( - Tikai neaizmirsti! ){'\n'}
          ( - Pagaidiet mani! ){'\n'}
          ( Es arī braucu! ){'\n'}
          ( Kur ir mans mētelis un somiņa? ){'\n'}
          ( Uz redzēšanos nākamajās kāzās! ){'\n'}
          ( - Neaizmirsti pasveicināt Kristīni un viņas vecākus! )
        </Text>);
    default:
      return <Text>Nothing!</Text>
  }
}