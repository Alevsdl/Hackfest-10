import { Map, GeoJson } from 'pigeon-maps';

const geoJsonSample = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.55753805574453, 14.86907817200371],
          [-91.55747913568874, 14.868155626999183],
          [-91.55736718758259, 14.868121458590778],
          [-91.55690761114646, 14.868127153325872],
          [-91.55658307847455, 14.86815847595166],
          [-91.55654053863552, 14.868137255018098],
          [-91.55652132709513, 14.868033802940928],
          [-91.55651034907238, 14.867883929970773],
          [-91.55657347270436, 14.867836182808006],
          [-91.55660777902632, 14.867756604179547],
          [-91.55672304828596, 14.86774068847241],
          [-91.55699794044223, 14.867746812597375],
          [-91.55743151892312, 14.86775350191786],
          [-91.55752757662451, 14.867749522986031],
          [-91.55781163296984, 14.86774554405413],
          [-91.55808386322032, 14.867758078857634],
          [-91.55833361324372, 14.867815110211012],
          [-91.55850949748928, 14.867860291100342],
          [-91.5587729700411, 14.867915996116693],
          [-91.5588854947766, 14.867935890762126],
          [-91.55889977139235, 14.867662211172217],
          [-91.5589062200053, 14.867294951970393],
          [-91.55892482617504, 14.867068138859452],
          [-91.55892757068072, 14.866907654691786],
          [-91.5589240777381, 14.866567146784021],
          [-91.55892723076767, 14.866347409456381],
          [-91.55892991786514, 14.866095409689947],
          [-91.55892827101798, 14.865778363673087],
          [-91.55892615662233, 14.865420455236105],
          [-91.55893367089513, 14.86515304781156],
          [-91.55894327372283, 14.864908354337288],
          [-91.5586345168263, 14.864796942738934],
          [-91.55823032532044, 14.864656022696906],
          [-91.55794403880971, 14.864538016406442],
          [-91.55760520448943, 14.864416909897557],
          [-91.55721500045046, 14.864254275427328],
          [-91.5569885787263, 14.864116336832026],
          [-91.55672084998145, 14.863960900652103],
          [-91.55627925158589, 14.863710732151276],
          [-91.55593890743626, 14.863515267039375],
          [-91.55544352877708, 14.863268391520307],
          [-91.55519088155623, 14.863151000401572],
          [-91.55498367137187, 14.863031629857531],
          [-91.55472285893738, 14.86287463849878],
          [-91.55462954574168, 14.862810974135726],
          [-91.554549955075, 14.862745983412196],
          [-91.55448134243107, 14.862673034617131],
          [-91.5544087972287, 14.862562038777398],
          [-91.55436076837773, 14.862438688877944],
          [-91.55429812705383, 14.862280184396354],
          [-91.55426258441565, 14.862070078261524],
          [-91.55423925611646, 14.86195601250634],
          [-91.55414562261659, 14.8617419000323],
          [-91.55402898112227, 14.861621202360539],
          [-91.55382247479456, 14.861515299024049],
          [-91.55359193631156, 14.861454286959571],
          [-91.55319521155042, 14.861340275873786],
          [-91.5526143758687, 14.861154682880084],
          [-91.55221505028155, 14.861022047711614],
          [-91.55186291770848, 14.860909529151598],
          [-91.55149038717832, 14.860789891964814],
          [-91.55084725276974, 14.860584188337384],
          [-91.55034583088589, 14.860403626208395],
          [-91.54982030367874, 14.860235207927673],
          [-91.54928539115541, 14.860067387696247],
          [-91.54881950368635, 14.859893821579348],
          [-91.54808803022769, 14.859653970526963],
          [-91.54755143174575, 14.85946043198517],
          [-91.54702430807231, 14.859300786453673],
          [-91.54682670365816, 14.859254363755781],
          [-91.54662635473831, 14.859217225589788],
          [-91.54634027228737, 14.85917057152021],
          [-91.54602053736751, 14.859121496066308],
          [-91.54531104065057, 14.859032697703853],
          [-91.54474918357838, 14.858967962932411],
          [-91.54449394454363, 14.858933477447565],
          [-91.54395206037162, 14.858898413455961],
          [-91.54352534606511, 14.858821718779268],
          [-91.54318091059348, 14.858748768659552],
          [-91.54299238607469, 14.858701517652804],
          [-91.54261089977541, 14.858603366520654],
          [-91.54225262804536, 14.858511543833714],
          [-91.54210030797654, 14.858491648319784],
          [-91.54162616625301, 14.858426047940725],
          [-91.54151638602319, 14.858394215106316],
          [-91.54121050819187, 14.858238573601554],
          [-91.54090943604525, 14.858072158139748],
          [-91.54070085360834, 14.857942173820504],
          [-91.54043148765116, 14.857794087633309],
          [-91.54010149769069, 14.857606788398883],
          [-91.53986030499203, 14.85747604386404],
          [-91.53934538396761, 14.85716433138009],
          [-91.5390654443811, 14.857003839850805],
          [-91.53885274518538, 14.856864570245932],
          [-91.53848599874361, 14.856649722411149],
          [-91.53824846818793, 14.856507519566463],
          [-91.53789937487977, 14.856306697835123],
          [-91.53776047292892, 14.856223282637842],
          [-91.5374887074575, 14.856060375119156],
          [-91.53717474003996, 14.855872318138196],
          [-91.53699918946798, 14.855722070089044],
          [-91.53691734402308, 14.855631453481124],
          [-91.53686526055758, 14.855537960116365],
          [-91.53682508188446, 14.855483302437264],
          [-91.53677299841958, 14.85537686376108],
          [-91.53677002222165, 14.855261794861264],
          [-91.53678645848493, 14.854886838458668],
          [-91.53679092278216, 14.854649508249636],
          [-91.5368013394911, 14.85436002314826],
          [-91.53680090723492, 14.853920277152298],
          [-91.53680814095658, 14.853418004320389],
          [-91.53681558111244, 14.853097983410393],
          [-91.53682736764624, 14.852699279979873],
          [-91.53682687063893, 14.852356796677157],
          [-91.5368288315667, 14.851859564608333],
          [-91.53682965230387, 14.85147839559059],
          [-91.536823612959, 14.851120253252773],
          [-91.53680724507781, 14.850539051822494],
          [-91.53681125193052, 14.850150955728182],
          [-91.53679740196766, 14.849715288108086],
          [-91.53678095578515, 14.84935476637537],
          [-91.53676325233678, 14.848898243948298],
          [-91.53675468967182, 14.848456350546584],
          [-91.5367158609844, 14.847312691171808],
          [-91.53671053761687, 14.846831574071828],
          [-91.53667186699886, 14.846445684984886],
          [-91.53666122026378, 14.846360781704703],
          [-91.53633383315253, 14.846317043637441],
          [-91.53594140677548, 14.846267513665595],
          [-91.53558553795091, 14.84621818418033],
          [-91.53521225252473, 14.846161096681442],
          [-91.53487090485704, 14.846113099769227],
          [-91.53439941178347, 14.846052446670626],
          [-91.53430167529031, 14.846032871011161],
          [-91.5342407372895, 14.846006427767705],
          [-91.53420199489551, 14.845966425323311],
          [-91.53416413301063, 14.845945998539918],
          [-91.53410249736821, 14.845933231788862],
          [-91.53404614479564, 14.845934934020534],
          [-91.5340036422798, 14.845975857556112],
          [-91.53398691260996, 14.846003944378808],
          [-91.53394552868937, 14.84603628677553],
          [-91.53389631212531, 14.846112777547674],
          [-91.53381611999498, 14.846164791410018],
          [-91.53372374575426, 14.846196658869104],
          [-91.53357614063579, 14.846188166152032],
          [-91.5334552648182, 14.846178420134763],
          [-91.5332571792269, 14.846130662607635],
          [-91.53312259104305, 14.846076374805975],
          [-91.53292982142868, 14.845983836421127],
          [-91.53279510252727, 14.845927218255838],
          [-91.53266565518123, 14.845898909163878],
          [-91.53250412991233, 14.845868718523747],
          [-91.53225413714556, 14.845827562810669],
          [-91.53206677783085, 14.845799355684917],
          [-91.53183905458675, 14.845773141715],
          [-91.53173100166384, 14.845760655882614],
          [-91.53155313940826, 14.845732886419356],
          [-91.53131123434656, 14.84570343838341],
          [-91.53058449138703, 14.845589126936503],
          [-91.53006495571132, 14.84552133080524],
          [-91.52969522874977, 14.845457344141465],
          [-91.529121829855, 14.845386712220986],
          [-91.5287449379814, 14.845323927883925],
          [-91.52822989131178, 14.845260867930051],
          [-91.52777268287898, 14.845199934109601],
          [-91.52716544964636, 14.84511607701441],
          [-91.52655801909397, 14.845038798667986],
          [-91.52603012267991, 14.844969020728414],
          [-91.52541519992663, 14.844872621321556],
          [-91.52463193913583, 14.844784365993533],
          [-91.52434616466546, 14.844739680704976],
          [-91.52390889189178, 14.844689990237725],
          [-91.52315349230335, 14.84459658756441],
          [-91.5225768881387, 14.844513916272106],
          [-91.52230792380688, 14.844474647359661],
          [-91.52187913202907, 14.844417173902244],
          [-91.52143566576686, 14.844355562903104],
          [-91.52079263834203, 14.84427865152503],
          [-91.52029092743197, 14.844209190332279],
          [-91.52037830243289, 14.843538820642593],
          [-91.5204034856062, 14.843268749584823],
          [-91.52045101922086, 14.842935931096903],
          [-91.52051622203483, 14.842483642504078],
          [-91.52055633982931, 14.842183360040806],
          [-91.5206204791817, 14.841823610876332],
          [-91.5206694079658, 14.841517874206161],
          [-91.52071809896108, 14.841062950815314],
          [-91.52075547982706, 14.840758221856788],
          [-91.52078334115139, 14.84052623862489],
          [-91.52080701569973, 14.840287754536917],
          [-91.52046865217271, 14.840239964536607],
          [-91.52007305292501, 14.840197993119986],
          [-91.51977662351274, 14.840167896693359],
          [-91.51935327147756, 14.840124323885348],
          [-91.51890561103289, 14.840096757369466],
          [-91.51833491030058, 14.840051896731609],
          [-91.51795781963177, 14.840027559288586],
          [-91.51757912904576, 14.839988514635323],
          [-91.5173670800202, 14.839966319768749],
          [-91.51719014739288, 14.839915402125982],
          [-91.51686232557458, 14.839841476286225],
          [-91.51669619799351, 14.839789253033445],
          [-91.51644355376118, 14.839720504670197],
          [-91.51635171087061, 14.839703532105005],
          [-91.51629768564106, 14.839669586970615],
          [-91.51627067302627, 14.839646086489722],
          [-91.51635306150102, 14.839498555634293],
          [-91.51649024124166, 14.839287778506716],
          [-91.51660774611601, 14.839141552992501],
          [-91.51679240351629, 14.838902680966228],
          [-91.5170204527393, 14.83859045780548],
          [-91.51713597408873, 14.838381868721072],
          [-91.5172729781135, 14.838058993737235],
          [-91.51732924602557, 14.837948173988892],
          [-91.51739067033922, 14.837754510977803],
          [-91.51745414998402, 14.837592617289786],
          [-91.51762717072204, 14.8370585889989],
          [-91.51775338351855, 14.836630339501212],
          [-91.51787905932437, 14.836220133178713],
          [-91.5179911439588, 14.83591173116254],
          [-91.51802941315377, 14.83558096622916],
          [-91.51811437441957, 14.835409690165307],
          [-91.51827513655289, 14.835031424617839],
          [-91.51836518171721, 14.83481163918573],
          [-91.51851910739738, 14.834444291507367],
          [-91.51867587840434, 14.834032443175602],
          [-91.51877042582676, 14.833817008937473],
          [-91.51884246195863, 14.833610278912033],
          [-91.51848721117518, 14.833486173034714],
          [-91.51837690584884, 14.83346441195583],
          [-91.5183206276209, 14.833629796103878],
          [-91.51824183810189, 14.83383870221536],
          [-91.51816079745379, 14.834058488635947],
          [-91.51787040179882, 14.833954035711088],
          [-91.51758014746544, 14.83384682238922],
          [-91.51727702749064, 14.833742083708657],
          [-91.51660286089906, 14.833488676732088],
          [-91.51616295408309, 14.833311141386417],
          [-91.51559986676975, 14.833062117575025],
          [-91.51494500754944, 14.832779830899383],
          [-91.51455105995528, 14.832636207265963],
          [-91.51413890738384, 14.832506905782154],
          [-91.51353756445413, 14.832316756260695],
          [-91.51337372916043, 14.83226653942181],
          [-91.51329913748198, 14.832260101365804],
          [-91.51294707261798, 14.832318044112128],
          [-91.51267227323972, 14.832388107622435],
          [-91.51259368557885, 14.832420297887154],
          [-91.5125572176558, 14.83255967211447],
          [-91.51252995680449, 14.832806145045126],
          [-91.51248986746786, 14.833111315387484],
          [-91.51246636602667, 14.833309897604252],
          [-91.51243652234308, 14.833501937301392],
          [-91.5124244892384, 14.833657426776497],
          [-91.51241404291243, 14.833920489489827],
          [-91.51241976063659, 14.834141575933529],
          [-91.51241018200805, 14.834353622160208],
          [-91.512416663059, 14.834548429499364],
          [-91.51241809249036, 14.834660354215117],
          [-91.51267967837704, 14.834472431202329],
          [-91.51298700605832, 14.834269308351153],
          [-91.51313995518392, 14.834164292380478],
          [-91.51327826870022, 14.834057112584105],
          [-91.51348267734396, 14.83388991591633],
          [-91.51362994323934, 14.833807749186974],
          [-91.51371060991688, 14.833781072412052],
          [-91.51405709304174, 14.833670427485146],
          [-91.51445785934054, 14.833562813569046],
          [-91.51475366303755, 14.833479797082475],
          [-91.51501447920062, 14.833409079309249],
          [-91.51512262248727, 14.83337525775761],
          [-91.51537389659582, 14.83345519959876],
          [-91.51561244796432, 14.833535141410394],
          [-91.51598483538154, 14.833675696260343],
          [-91.51632617099811, 14.833805027258364],
          [-91.51683942883194, 14.834001265091302],
          [-91.51733177376805, 14.834235472941344],
          [-91.5177729963522, 14.834452967944614],
          [-91.51795824382273, 14.834527581723435],
          [-91.51797196585761, 14.834547478727004],
          [-91.51789706352154, 14.834764042975905],
          [-91.51787991097802, 14.834803836937027],
          [-91.51804286014169, 14.834868502108137],
          [-91.51824620132203, 14.834947673598322],
          [-91.51830108946123, 14.834964254402692],
          [-91.51832760973393, 14.834914907219385],
          [-91.51859518941308, 14.835019366279468],
          [-91.5187804368836, 14.83508403138687],
          [-91.51914264747577, 14.835199945298484],
          [-91.51946476971072, 14.835299227353588],
          [-91.51934339031817, 14.835678303873294],
          [-91.51916132122858, 14.8362063022049],
          [-91.51897329820505, 14.836769915841117],
          [-91.51876531976993, 14.837396101112347],
          [-91.51862859460208, 14.83781881011609],
          [-91.51848732404738, 14.838374868823522],
          [-91.51840325121837, 14.838676250250657],
          [-91.51829347316865, 14.839004197298024],
          [-91.51818641734734, 14.839349159064241],
          [-91.51809690751686, 14.839638829564478],
          [-91.51800782030317, 14.839939175470548],
          [-91.51794156417431, 14.840200595437764],
          [-91.51784511868344, 14.840626169480615],
          [-91.51773971909834, 14.841071213452238],
          [-91.5176950481865, 14.841101599862284],
          [-91.51767353996982, 14.841107997001345],
          [-91.51765368623099, 14.841130386984034],
          [-91.51764045040484, 14.841154376249733],
          [-91.5176487227961, 14.841178365512036],
          [-91.51766030414367, 14.841202354771667],
          [-91.51768015788255, 14.841224744745304],
          [-91.51770662953409, 14.84125513113446],
          [-91.51767985682325, 14.841441087451258],
          [-91.51762879275695, 14.841804039808991],
          [-91.51757302819539, 14.842217914929279],
          [-91.51752100249924, 14.842588594085598],
          [-91.51746984611957, 14.842948257815735],
          [-91.51742513284125, 14.843268166647576],
          [-91.51737357212254, 14.843568205449088],
          [-91.5173387697683, 14.843790501405024],
          [-91.51732453806008, 14.843894677106192],
          [-91.51768376994656, 14.843941640346472],
          [-91.51824696141374, 14.844005670143844],
          [-91.5186327463303, 14.844052779367857],
          [-91.51902023451872, 14.844097216301265],
          [-91.52001980720131, 14.844231961450475],
          [-91.52056623958384, 14.844308299392594],
          [-91.52114568128826, 14.844386990379846],
          [-91.52191953877622, 14.844504806071114],
          [-91.52277546848579, 14.84459218210236],
          [-91.52362972454978, 14.844699640842933],
          [-91.52426892192821, 14.844794067843353],
          [-91.52553308193625, 14.84496108243458],
          [-91.52704425181615, 14.845148903727917],
          [-91.52797557768739, 14.845271355995123],
          [-91.52863521274828, 14.845360157127331],
          [-91.52927115740741, 14.845443379095315],
          [-91.52992561124223, 14.845536074297215],
          [-91.53017107794948, 14.84556734590123],
          [-91.5305098341563, 14.845602016916146],
          [-91.53095407631606, 14.845673584976609],
          [-91.53138727294447, 14.845736532899409],
          [-91.5319714247351, 14.845816745153456],
          [-91.53248836900384, 14.845886161791867],
          [-91.53278955911601, 14.845949621152798],
          [-91.53300111564539, 14.846031801318873],
          [-91.53322609846745, 14.846133698147952],
          [-91.53335865631445, 14.846175981941016],
          [-91.53347795837705, 14.846205452459188],
          [-91.53375168692416, 14.846211185427336],
          [-91.53389484939929, 14.846168901641164],
          [-91.53398101199998, 14.846158651025164],
          [-91.53406850017883, 14.84616762031392],
          [-91.53414140699512, 14.84617402694903],
          [-91.53416659298578, 14.846162495005942],
          [-91.5342251443458, 14.846135530780913],
          [-91.5343444464084, 14.846144500070622],
          [-91.53475643685583, 14.846205170380983],
          [-91.53520959888326, 14.846265698428155],
          [-91.53569602682828, 14.846336525128237],
          [-91.53600886334732, 14.846380090207589],
          [-91.53606851437863, 14.846381371533596],
          [-91.53632943935598, 14.846420554956893],
          [-91.53645990639153, 14.846445947763812],
          [-91.53648134303074, 14.846465133872996],
          [-91.53650436756946, 14.846497366531452],
          [-91.53652024656112, 14.846538041070247],
          [-91.53653157629896, 14.846611364291874],
          [-91.53654110369395, 14.846701922641245],
          [-91.53653951545746, 14.846802776123837],
          [-91.5365542538898, 14.84693664227784],
          [-91.53657410262953, 14.84697117719405],
          [-91.53659871506709, 14.847004177220313],
          [-91.53661697590798, 14.84703257258748],
          [-91.53663444279911, 14.847075549351857],
          [-91.53664713465646, 14.847297245979348],
          [-91.53664508080972, 14.84765011313445],
          [-91.53666417720817, 14.848423133370773],
          [-91.53667369947237, 14.848924539804102],
          [-91.5366916209222, 14.849402906235397],
          [-91.53670135103793, 14.849948687488023],
          [-91.53671680936678, 14.850471924236146],
          [-91.53673539171866, 14.851169576943548],
          [-91.53674784214734, 14.851686008761106],
          [-91.53674709054381, 14.852286511350314],
          [-91.53673398474385, 14.852808149864885],
          [-91.5367251312553, 14.853339058468933],
          [-91.5367263182935, 14.853779304929844],
          [-91.5367184194911, 14.854227244326893],
          [-91.53670645014212, 14.8545717122052],
          [-91.53668653146644, 14.854798469482418],
          [-91.5366887446526, 14.85496746767646],
          [-91.53664808168364, 14.855227955298844],
          [-91.53663258938023, 14.85534133362367],
          [-91.53657800307417, 14.855403794225083],
          [-91.5365672803634, 14.855452851971805],
          [-91.53657871792169, 14.85547012582343],
          [-91.53661042337583, 14.855513236343413],
          [-91.53663043910176, 14.85553189209817],
          [-91.53665974784403, 14.855558148341956],
          [-91.53676555381068, 14.85565074754929],
          [-91.53696827392817, 14.855803033761276],
          [-91.53720210305738, 14.85597658195718],
          [-91.53739026888395, 14.85606751997598],
        ],
        type: 'LineString',
      },
      id: 0,
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.53739047975648, 14.856067679243736],
          [-91.53742736013001, 14.856088905750582],
          [-91.53748717563919, 14.856127760135664],
          [-91.53766599386162, 14.856229577780525],
          [-91.53793872674049, 14.856385905131873],
          [-91.53819261524188, 14.856532447693596],
          [-91.53836487963301, 14.856643133571055],
          [-91.53854026446747, 14.856749855915538],
          [-91.53870332680157, 14.856854706913367],
          [-91.53917524975326, 14.857121267995112],
          [-91.5393105819988, 14.85720993711547],
          [-91.53946215308198, 14.857311424194165],
          [-91.5396217329842, 14.857414848285359],
          [-91.53992858689291, 14.85762186691332],
          [-91.54010388771779, 14.857703836231835],
          [-91.54047821053601, 14.857922907072947],
          [-91.54067863253363, 14.858033328520762],
          [-91.5408427684524, 14.858125440197938],
          [-91.54106021252798, 14.858250018433381],
          [-91.5414145317795, 14.858443192531396],
          [-91.5414977276853, 14.858478932096219],
          [-91.5416201614467, 14.858525819766399],
          [-91.54177375388757, 14.858556060925523],
          [-91.54204575458337, 14.858599504509016],
          [-91.54224973480123, 14.858626866012827],
          [-91.54232210081943, 14.858633479722982],
          [-91.54245005593106, 14.858675194898836],
          [-91.54271246553078, 14.858743692322491],
          [-91.5428942375072, 14.858779619056648],
          [-91.54326841753529, 14.858879591764847],
          [-91.54349412842032, 14.8589224335269],
          [-91.54367670258794, 14.858962752552259],
          [-91.54401876454696, 14.859009270608809],
          [-91.54418088990165, 14.859011332501922],
          [-91.54442791552695, 14.8590236375927],
          [-91.54464969751308, 14.859031884987687],
          [-91.54485942567008, 14.85906642570589],
          [-91.54503138065787, 14.859080099422584],
          [-91.54538209752022, 14.859124992876986],
          [-91.54560772434712, 14.85914450529097],
          [-91.54583015038972, 14.859170563517182],
          [-91.54594036718768, 14.859188433240178],
          [-91.54610367526942, 14.859247280658394],
          [-91.54622171390494, 14.85930157710061],
          [-91.54650694556842, 14.85933935407327],
          [-91.54661431806197, 14.859341415963257],
          [-91.54698240511242, 14.859368841235309],
          [-91.54716918330982, 14.859434194680873],
          [-91.54747891423348, 14.85953228932631],
          [-91.54764176556634, 14.859594294402271],
          [-91.54801940264542, 14.859724116013837],
          [-91.54823450464406, 14.859798143481328],
          [-91.54846063708386, 14.85987153988171],
          [-91.54865698291998, 14.859934915968964],
          [-91.54883220034088, 14.859990244669987],
          [-91.54898632772255, 14.860043854337448],
          [-91.54922535784065, 14.86012113863292],
          [-91.54937376328904, 14.860177985634834],
          [-91.54959228374932, 14.86024543644156],
          [-91.5498870396948, 14.860339347296815],
          [-91.55009396284493, 14.860405327447978],
          [-91.55041440281808, 14.860510660473594],
          [-91.55065759084984, 14.860598633935012],
          [-91.55093422486662, 14.860694202359042],
          [-91.55131418587709, 14.860822217470371],
          [-91.5515813221531, 14.86091109304681],
          [-91.55185424621438, 14.861002076921679],
          [-91.55224782574082, 14.861128123946287],
          [-91.55309169702625, 14.86138726666124],
          [-91.55346328890423, 14.861504208990382],
          [-91.55366986394556, 14.861560436432825],
          [-91.55386575407145, 14.861643056321924],
          [-91.55401239693265, 14.861775516854607],
          [-91.55412079635782, 14.861916217974752],
          [-91.55415631837447, 14.862128619994323],
          [-91.55419424383989, 14.862367391778704],
          [-91.55424545009272, 14.862580566695641],
          [-91.55430955958843, 14.862688431034798],
          [-91.55439741334172, 14.862759575570209],
          [-91.55462948161366, 14.862947460059345],
          [-91.5548480501432, 14.863085992467305],
          [-91.5550737209316, 14.8631893397625],
          [-91.5555116209, 14.863420913184783],
          [-91.55586140745186, 14.863613426659299],
          [-91.55636475320114, 14.863871947632902],
          [-91.5566873977031, 14.864059858531647],
          [-91.55691341864393, 14.86419589341844],
          [-91.55713186581431, 14.864319821727406],
          [-91.55727076972795, 14.864392113198164],
          [-91.55737524446121, 14.864421947770154],
          [-91.5576196665395, 14.864516975914356],
          [-91.55782117122907, 14.86459394663963],
          [-91.5580582229535, 14.864679409680235],
          [-91.558342815255, 14.864785507193176],
          [-91.5586492639094, 14.864894333926927],
          [-91.55893535591609, 14.864994365512587],
          [-91.55892833950863, 14.8650651315252],
          [-91.5589266513414, 14.865152003719686],
          [-91.55892119306436, 14.865272791690714],
          [-91.55893594502875, 14.865346798741712],
          [-91.55893914807824, 14.865551072166866],
          [-91.55893800119028, 14.86574282523182],
          [-91.55893814514044, 14.865961526140666],
          [-91.5589353800902, 14.866216819195103],
          [-91.55893091199316, 14.866555278437247],
          [-91.55891866181567, 14.866759894997926],
          [-91.55891358383943, 14.866990159734854],
          [-91.55890264020032, 14.867121451788918],
          [-91.55889620579572, 14.867291615066833],
          [-91.55889087574025, 14.867421442084563],
          [-91.55888678351674, 14.867545267304564],
          [-91.55887979811763, 14.867742135120437],
          [-91.558845615306, 14.868506659305922],
          [-91.55882199369047, 14.869120925493092],
          [-91.55881943721657, 14.869405075264964],
          [-91.55878198491425, 14.869843830065136],
          [-91.55875641958565, 14.870143131618363],
          [-91.55874875016393, 14.87039268808175],
          [-91.55875386311175, 14.870461872001215],
          [-91.55853144987677, 14.870432221752566],
          [-91.55828347190163, 14.870405042354832],
          [-91.55804571982269, 14.870377862953731],
          [-91.55768270051948, 14.870318562429262],
          [-91.5575344250295, 14.870313620718377],
          [-91.5575318685556, 14.870170311049066],
          [-91.5575318685556, 14.869854041096858],
          [-91.557532664451, 14.86959513581887],
          [-91.55754033387272, 14.869313457164736],
          [-91.55753592504404, 14.869132785390164],
          [-91.55753784933773, 14.869077476116672],
        ],
        type: 'LineString',
      },
    },
  ],
};

export function Santafe() {
  return (
    <Map
      height={300}
      defaultCenter={[14.844623950713178, -91.52317425152974]}
      defaultZoom={14}
    >
      <GeoJson
        data={geoJsonSample}
        styleCallback={(feature: any, hover: any) => {
          if (feature.geometry.type === 'LineString') {
            return { strokeWidth: '1', stroke: 'black' };
          }
          return {
            fill: '#d4e6ec99',
            strokeWidth: '1',
            stroke: 'white',
            r: '20',
          };
        }}
      />
    </Map>
  );
}

export default Santafe;
