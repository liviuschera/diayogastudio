$(document).ready(function() {
  var power = "Presupune miscarea continua si rapida dintr-o postura in alta si reprezinta o abordare mai intensa a variantei Flow Yoga. Se adreseaza doar avansatilor.";
  var hatha =
    "Set de exercitii fizice cunoscute ca si asane sau posturi, executate fiecare separat, fara legatura intre ele. Se adreseaza atat incepatorilor cat si celor de nivel mediu sau avansat care doresc sa aprofundeze pozitiile. este o clasa in care se folosesc foarte des accesorii: blocuri pentru yoga si curele.";
  var flow =
    "Presupune miscarea continua, aproape ca un dans, dintr-o postura in alta, in care respiratia se sincronizeaza cu miscarea. Este o clasa de nivel mediu si avansat, dar poate fi o varianta si pentru incepatorii care doresc mai mult.";
  var fit = "Este o clasa in care exercitiile cu greutatea corpului si cele pentru intarirea spatelui si abdomenului se combina armonios cu pozitiile de yoga.";
  var senior = "Pozitii de yoga special adaptate pentru persoanele peste 55 de ani, pentru imbunatatirea mobilitatii, fortei, posturii, a respiratiei si a starii de bine.";
  var partener = "Este un concept nou, in care doua sau mai multe persoane, contribuie la realizarea unei posturi, componenta principala fiind contactul fizic cu ceilalti, atingi si esti atins. Partenerii au ocazia de a realiza mai bine, mai correct si mai profund posturile, dar si de a se reconecta unul cu celalalt, de a petrece timp de calitate impreuna.";
  var dani = "<figure><img class='dani img-responsive' src='images/dani.jpg' alt='Dani' /><figcaption class='text-center bold'>Dani</figcaption></figure><p>International Hatha Yoga Teacher, certificated at Rishikesh Yog Peeth School in India, registered with Yoga Alliance USA</p><p>Aerobic and Group Fitness Instructor, certificated at Move On Fitness Education, specialized in Aerobic, Step and Body Conditioning</p>";

  $(".power").attr("title", power);
  $(".hatha").attr("title", hatha);
  $(".flow").attr("title", flow);
  $(".fit").attr("title", fit);
  $(".senior").attr("title", senior);
  $(".partener").attr("title", partener);
  $(".dani").attr("title", dani);


  $(function() {
    $(document).tooltip({
      track: true,
      items: "[data-geo], [title]",
      content: function() {
        var element = $(this);
        if (element.is("[data-geo]")) {
          var text = element.text();
          return "<img class='map' alt='" + text +
            "' src='http://maps.google.com/maps/api/staticmap?" +
            "zoom=16&scale=1&size=400x350&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x84a603%7Clabel:D%7C" +
            text + "'>";
        }
        if (element.is("[title]")) {
          return element.attr("title");
        }
      }
    });
  });

});
