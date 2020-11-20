<template>
  <div>
    <h3 class="title">Impressum</h3>
    <br/>    
    <h5 class="title is-5">Angaben gem&auml;&szlig; &sect; 5 TMG</h5>
    <p>Stefan Leun, geb. Otte<br />
    70771 Leinfelden-Echterdingen</p>
    <br/>

    <h5 class="title is-5">Kontakt</h5>
    <p> E-Mail: <a href="mailto:kontakt@stefanleun.com">kontakt@stefanleun.com</a></p>
    <br/>
  
    <h5 class="title is-5">Haftung f&uuml;r Inhalte</h5> <p>Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.</p> <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

    <br/>
    <h5 class="title is-5">Haftung f&uuml;r Links</h5>
    <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p> <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
    
    <br/>
    <h5 class="title is-5">Urheberrecht</h5> <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p> <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

    <br/>
    <h5 class="title is-5">Google Analytics</h5>
    <p>
    Diese Website nutzt den Dienst „Google Analytics“, welcher von der Google Inc. (1600 Amphitheatre Parkway Mountain View, CA 94043, USA) angeboten wird, zur Analyse der Websitebenutzung durch Nutzer. Der Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert werden. Die durch die Cookies gesammelten Informationen werden im Regelfall an einen Google-Server in den USA gesandt und dort gespeichert.
    <br/>
    Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der Nutzer wird innerhalb der Mitgliedsstaaten der EU und des Europäischen Wirtschaftsraum gekürzt. Durch diese Kürzung entfällt der Personenbezug Ihrer IP-Adresse. Im Rahmen der Vereinbarung zur Auftragsdatenvereinbarung, welche die Websitebetreiber mit der Google Inc. geschlossen haben, erstellt diese mithilfe der gesammelten Informationen eine Auswertung der Websitenutzung und der Websiteaktivität und erbringt mit der Internetnutzung verbundene Dienstleistungen.
    <br/>
    Sie haben die Möglichkeit, die Speicherung des Cookies auf Ihrem Gerät zu verhindern, indem Sie in Ihrem Browser entsprechende Einstellungen vornehmen. Es ist nicht gewährleistet, dass Sie auf alle Funktionen dieser Website ohne Einschränkungen zugreifen können, wenn Ihr Browser keine Cookies zulässt.
    <br/>
    Alternativ verhindern Sie mit einem Klick auf  <a onclick="alert('Google Analytics wurde deaktiviert');" @click="gaOptout"> diesen Link</a>, dass Google Analytics innerhalb dieser Website Daten über Sie erfasst. Mit dem Klick auf obigen Link laden Sie ein „Opt-Out-Cookie“ herunter. Ihr Browser muss die Speicherung von Cookies also hierzu grundsätzlich erlauben. Löschen Sie Ihre Cookies regelmäßig, ist ein erneuter Klick auf den Link bei jedem Besuch dieser Website vonnöten.
    <br/>
    Weiterhin können Sie durch ein Browser-Plugin verhindern, dass die durch Cookies gesammelten Informationen (inklusive Ihrer IP-Adresse) an die Google Inc. gesendet und von der Google Inc. genutzt werden. <a href="https://tools.google.com/dlpage/gaoptout?hl=de"> Dieser Link </a> führt Sie zu dem entsprechenden Plugin.
    <a href="https://support.google.com/analytics/answer/6004245?hl=de"> Hier</a> finden Sie weitere Informationen zur Datennutzung durch die Google Inc.: 
    </p>


  </div>
</template>

<script>
import { disableStr } from '~/plugins/ga.js'

export default {
  mounted () {
    this.$store.commit('background/false');
  },
  methods: {
    gaOptout: function() {
      document.cookie = disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';
      window[disableStr] = true;
    }
  }
}
</script>