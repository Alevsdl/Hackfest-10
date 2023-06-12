import { Map, GeoJson } from 'pigeon-maps';

const geoJsonSample = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.5073440025776, 14.83863069811298],
          [-91.5075748861334, 14.8387133587659],
          [-91.50781859655311, 14.838928276315357],
          [-91.50822050535713, 14.83924651919925],
          [-91.50857538193348, 14.839527564490098],
          [-91.5090670758776, 14.839932598156352],
          [-91.50945188180349, 14.84024670657864],
          [-91.5103967864986, 14.840986506328477],
          [-91.51086282923107, 14.841387405833714],
          [-91.51141865291108, 14.841800697798675],
          [-91.5118077344583, 14.842098271639614],
          [-91.51242769342282, 14.842581822784254],
          [-91.51297924858315, 14.842933123922123],
          [-91.51341963758738, 14.843189366744468],
          [-91.51399257076176, 14.843404280088436],
          [-91.51434744733761, 14.843499337737683],
          [-91.51465956770002, 14.84354893301726],
          [-91.5153180131686, 14.843610927676167],
          [-91.5154206280821, 14.843627459428106],
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
          [-91.51542490370342, 14.843648124117223],
          [-91.51536076938251, 14.84402835403553],
          [-91.51530091068291, 14.844482975887246],
          [-91.51522822438369, 14.84495412830104],
          [-91.5151683656841, 14.845334355923185],
          [-91.51515981444149, 14.845396349493214],
          [-91.51527098059765, 14.845425279820319],
          [-91.5156643377666, 14.845495539169633],
          [-91.5162458220689, 14.845557532596928],
          [-91.5167674478797, 14.845640190602538],
          [-91.51740024001498, 14.845731114156123],
          [-91.51779787280525, 14.845776576026068],
          [-91.51822971056684, 14.845842702365701],
          [-91.51885395239712, 14.845917094284388],
          [-91.5192644120518, 14.845962556115182],
          [-91.52025206656789, 14.846098938563486],
          [-91.52109436398366, 14.846218792359906],
          [-91.52170150033105, 14.846317981645441],
          [-91.52189817891555, 14.846334513190357],
          [-91.52196231323644, 14.846338646076404],
          [-91.52200079382908, 14.845946021540684],
          [-91.52209058139778, 14.845441808892389],
          [-91.52213333761172, 14.845028518173393],
          [-91.52222312566136, 14.844528435346163],
          [-91.52300128875622, 14.844631758338522],
          [-91.52400605814904, 14.844755745483397],
          [-91.52480132372915, 14.844863201282308],
          [-91.52563934103263, 14.844983053591804],
          [-91.52639185039924, 14.845065711816204],
          [-91.52711442129788, 14.845152498386085],
          [-91.52800375054933, 14.845280618519851],
          [-91.52895293595103, 14.845400470962062],
          [-91.52965413786063, 14.84548312902686],
          [-91.53069738600742, 14.84562777871865],
          [-91.53145844661663, 14.84573110118555],
          [-91.53239052438894, 14.845863349590061],
          [-91.53284801587881, 14.8459501403713],
          [-91.53310027754114, 14.846069994250215],
          [-91.5335021847337, 14.846189846771509],
          [-91.53372024142516, 14.84620637832721],
          [-91.53390836876703, 14.846152650767834],
          [-91.53405801551582, 14.846165049437076],
          [-91.53417773291501, 14.846165049437076],
          [-91.53426324534288, 14.846131986319065],
          [-91.53453260949138, 14.84615678365735],
          [-91.53501147644295, 14.846222908207764],
          [-91.53543903858281, 14.846293167297873],
          [-91.53576398580911, 14.846342761936384],
          [-91.53630698972685, 14.846408888101934],
          [-91.53645236085481, 14.84644608406154],
          [-91.53651959392562, 14.846495299470064],
          [-91.5365335976619, 14.84659005307482],
          [-91.5365335976619, 14.84671864718699],
          [-91.53653826557384, 14.846817912764465],
          [-91.53654526732866, 14.846917178428427],
          [-91.5365686068888, 14.846993883581334],
          [-91.53661761996503, 14.847036748213156],
        ],
        type: 'LineString',
      },
      id: 1,
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.53661761996503, 14.847036748213156],
          [-91.53664095952514, 14.8471495498369],
          [-91.53663862556917, 14.847469906126761],
          [-91.53664329319129, 14.847943671584531],
          [-91.53665496343513, 14.848485115911359],
          [-91.53666896807226, 14.848934061632605],
          [-91.53668530576451, 14.849378495786155],
          [-91.53669230839184, 14.849865791711863],
          [-91.5367063121281, 14.850161327971051],
          [-91.53671798203534, 14.850468143599713],
          [-91.53673198577161, 14.85084940679667],
          [-91.53672965194225, 14.851235180525904],
          [-91.53673432052685, 14.8517901519713],
          [-91.53673665541129, 14.852489503710714],
          [-91.53673432234233, 14.853161781596967],
          [-91.536724986934, 14.853667117161336],
          [-91.53671945992188, 14.854232268550732],
          [-91.53669612091677, 14.854685713562773],
          [-91.53668678509293, 14.85491130876531],
          [-91.5366447741322, 14.855233908510499],
          [-91.536626102484, 14.855342193962457],
          [-91.53657708940777, 14.855412128287568],
          [-91.53659109314356, 14.855500110148867],
        ],
        type: 'LineString',
      },
      id: 2,
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.53658875918761, 14.855495598259537],
          [-91.53671012490067, 14.855601627636219],
          [-91.53697619377506, 14.855815940479019],
          [-91.53735662860552, 14.856057326073994],
          [-91.53842323828454, 14.856684470256113],
          [-91.5390090595352, 14.857029626242024],
          [-91.53952486151046, 14.857349965732865],
          [-91.53988662272677, 14.857577812244386],
          [-91.5401036806363, 14.857699632051649],
          [-91.54047944362105, 14.857918453017191],
          [-91.54076185229904, 14.858076367320095],
          [-91.54105126077093, 14.858252326668307],
          [-91.54129866010896, 14.858387681582471],
          [-91.54152271988642, 14.858480174057803],
          [-91.5417771161883, 14.858550103959345],
          [-91.54216922079907, 14.858615525421612],
          [-91.54256599332174, 14.858692226421326],
          [-91.54297443512414, 14.858802765368637],
          [-91.543511182832, 14.858917815406599],
          [-91.54390328744277, 14.858999028115193],
          [-91.54450311424135, 14.859023843987401],
          [-91.54501658487882, 14.859071218634426],
          [-91.54547637421399, 14.859134384032643],
          [-91.54589415207002, 14.859190782697837],
          [-91.54609720624332, 14.859247180344141],
          [-91.54625591525277, 14.859294554355941],
          [-91.54640762239387, 14.859308089785571],
          [-91.54651498437066, 14.859328392928887],
          [-91.54658967096296, 14.859400581867675],
          [-91.54658266909507, 14.859590077715907],
          [-91.5465499937106, 14.859723175891531],
          [-91.54650331533892, 14.85998711556202],
          [-91.54645430226219, 14.860282637974223],
          [-91.5464029562501, 14.860591694251525],
          [-91.54629559692171, 14.861180478542053],
          [-91.54619523887378, 14.861744446898754],
          [-91.54609488120904, 14.86231743701822],
          [-91.54601319501222, 14.862815982537356],
          [-91.54592091261549, 14.863302571871401],
          [-91.54584156245231, 14.863805624004769],
          [-91.54578554881915, 14.864116931277692],
          [-91.54573187010652, 14.864416958001627],
          [-91.54567119008985, 14.864870381257731],
          [-91.54564318261777, 14.865102733353183],
          [-91.54561284306004, 14.865330572222888],
          [-91.54558950555572, 14.865558410752001],
          [-91.54557550181948, 14.86566443518764],
          [-91.54556849995157, 14.865822343825315],
          [-91.54555683017126, 14.865957693993778],
          [-91.54553815852354, 14.86599829902788],
          [-91.54550548313908, 14.866005066533134],
          [-91.54526975358134, 14.865977996511816],
          [-91.54486597919075, 14.86591708895206],
          [-91.54442019359135, 14.865856181375122],
          [-91.54424047897822, 14.865842646356043],
          [-91.54422414128597, 14.865894530591817],
        ],
        type: 'LineString',
      },
      id: 3,
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.54422414128597, 14.865896786428294],
          [-91.5442031356823, 14.866000554862339],
          [-91.54418679799006, 14.866160719087858],
          [-91.54420080172584, 14.866208091581683],
          [-91.54427548831865, 14.866228394076188],
          [-91.5443851842514, 14.866246440736816],
          [-91.54447854249193, 14.866280278220145],
          [-91.54459990820499, 14.86630960403484],
          [-91.54472594182948, 14.86633892984652],
          [-91.54477728886216, 14.866343441509272],
          [-91.54480296237824, 14.86632088319358],
          [-91.54482630193839, 14.866205835749383],
          [-91.54484263963063, 14.866086276575828],
          [-91.54487064710267, 14.865977996511816],
          [-91.54488931875088, 14.865939647309958],
          [-91.54505269567179, 14.865966717335155],
          [-91.5451903990771, 14.865984764017682],
          [-91.54535844390993, 14.866002810697793],
          [-91.545510151051, 14.86602311321154],
          [-91.54554516039144, 14.86600957820285],
          [-91.5455614980837, 14.865984764017682],
          [-91.54557660920429, 14.86587996850065],
          [-91.54561561100832, 14.86553626541685],
          [-91.545677555443, 14.864947535315636],
          [-91.54576817781395, 14.864303368226189],
          [-91.54585650545653, 14.863806658232434],
          [-91.54592762635623, 14.863360948797549],
          [-91.54601595415448, 14.862876433019267],
          [-91.54608707516655, 14.862462875030403],
          [-91.5461639316593, 14.862017162971355],
          [-91.54622816990074, 14.861667910371423],
          [-91.54628781976628, 14.861315330858801],
          [-91.546346322094, 14.860986034875523],
          [-91.54640138355383, 14.860703305003042],
          [-91.54644841439422, 14.860406162175778],
          [-91.54648282780617, 14.86020215265961],
          [-91.54653100599914, 14.859956011242588],
          [-91.54656083095671, 14.85975089255166],
          [-91.54660442034107, 14.859521382143072],
          [-91.54660786168246, 14.859451530794189],
          [-91.54659409631739, 14.85937280940594],
          [-91.54656771277055, 14.85928632648509],
          [-91.54654018204039, 14.859234215106355],
          [-91.5464702081025, 14.85919319124622],
          [-91.54635090827313, 14.859177668703467],
          [-91.54620751905544, 14.859152167379364],
          [-91.54594827057664, 14.859123339563851],
        ],
        type: 'LineString',
      },
      id: 4,
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.54594941769058, 14.859123339563851],
          [-91.5456752575064, 14.859082315682684],
          [-91.54533800605859, 14.85904461802977],
          [-91.54505925741903, 14.85899250659368],
          [-91.54469103446256, 14.858950374092302],
          [-91.54435951859111, 14.858925981495986],
          [-91.54373663625698, 14.858861673691976],
          [-91.54347050586902, 14.858806235946815],
          [-91.5430107574941, 14.858709424498443],
          [-91.54274233287823, 14.858635137863374],
          [-91.54228004505957, 14.858526479667589],
          [-91.54201506178559, 14.858485455673076],
          [-91.54166290148447, 14.858435561887703],
          [-91.54137382882124, 14.858321359890269],
          [-91.54102625516056, 14.85814839406548],
          [-91.54041369769101, 14.857792482569138],
          [-91.53985734847554, 14.857463180997215],
          [-91.53926199643743, 14.857113920770104],
          [-91.53864026062676, 14.85674691972396],
          [-91.53808506084188, 14.856424270089391],
          [-91.53746103662995, 14.856046182953875],
          [-91.53709281458309, 14.855822212295706],
          [-91.53700907527964, 14.8557235317095],
          [-91.53692418886318, 14.85561487213451],
          [-91.53682783160014, 14.855482928592295],
          [-91.53678653550537, 14.855370942579384],
          [-91.53679800664253, 14.855241216134928],
        ],
        type: 'LineString',
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.53679915378999, 14.8552445424816],
          [-91.53679227110717, 14.854887517169644],
          [-91.53679341819021, 14.854542687998304],
          [-91.53679571238304, 14.854231121841607],
          [-91.53680374197185, 14.853752129513168],
          [-91.53680718331323, 14.853522611723932],
          [-91.53681177218394, 14.853297499353573],
          [-91.53682209628916, 14.852859529667981],
          [-91.5368163607208, 14.852577897945892],
          [-91.5368220965401, 14.852296266114465],
          [-91.53683356789699, 14.852024612707268],
          [-91.53683815593133, 14.851663147373046],
          [-91.53682553768023, 14.851413669090462],
          [-91.53682209656813, 14.851134253114196],
          [-91.53681750871293, 14.850788308876872],
          [-91.53681177390042, 14.850463431394871],
          [-91.53680144986124, 14.850062046429727],
          [-91.53678653722898, 14.849536474765884],
          [-91.53677736066811, 14.849088517759753],
          [-91.53675556558149, 14.848683803740698],
          [-91.53673950547565, 14.848138270882046],
          [-91.53672459303624, 14.847688093698792],
          [-91.53671426918636, 14.847188018921003],
          [-91.53670623953798, 14.84682100081325],
          [-91.53667870876137, 14.84654934075445],
          [-91.53667297319254, 14.84641628255801],
          [-91.53665232514517, 14.84637192980766],
          [-91.53657088006963, 14.846353079885247],
          [-91.53631163237141, 14.846324251075671],
          [-91.53603288373186, 14.846282115944561],
          [-91.53562106942289, 14.846212260500948],
          [-91.53497295026325, 14.846123554894731],
          [-91.53454622409274, 14.846067005077984],
          [-91.53434777341525, 14.846043719846918],
          [-91.53424682744831, 14.846012673100589],
          [-91.53420553135356, 14.845964993804898],
          [-91.53408852575211, 14.845936164457171],
          [-91.53403690563367, 14.84592064096195],
          [-91.53389007480786, 14.845798670751236],
          [-91.533720301974, 14.84569222383044],
          [-91.5335672572042, 14.845591741667377],
          [-91.53335848250303, 14.845474206410884],
          [-91.53314741347818, 14.845359997577546],
          [-91.53302696653535, 14.845287924000829],
          [-91.53296158105181, 14.845284597527765],
          [-91.53292028495706, 14.845305665191574],
          [-91.53290078402365, 14.845391044648451],
          [-91.53287669477493, 14.845585088950529],
          [-91.53284113424901, 14.845785785804509],
          [-91.53283310445275, 14.845858968035955],
          [-91.53281245660352, 14.845918844005638],
          [-91.5326013876749, 14.84588447054584],
          [-91.53206102316875, 14.845795569167436],
          [-91.53145878983294, 14.845712407914107],
          [-91.53076708336866, 14.84561483230641],
          [-91.53005128567293, 14.845507276802408],
          [-91.52925047836473, 14.845401924074352],
          [-91.528558769763, 14.845308783118512],
          [-91.52798210769326, 14.845241513059946],
          [-91.52720321758297, 14.845119542248838],
          [-91.52660557086949, 14.845045250671461],
          [-91.52568329396235, 14.844928824614001],
          [-91.52495258259634, 14.84482570358496],
          [-91.52414845772473, 14.844724800838023],
          [-91.52333526076585, 14.844619820395081],
          [-91.52257013804194, 14.844514482469819],
          [-91.52181613197895, 14.844429661954294],
          [-91.52074857580138, 14.844272192592598],
          [-91.51947305192907, 14.844104672193978],
          [-91.51865158824688, 14.843997458863129],
          [-91.51657193566194, 14.843732775769126],
          [-91.5152271015581, 14.84355520367518],
          [-91.51433631604628, 14.8434379387933],
          [-91.51404516328269, 14.843387682379912],
          [-91.51383373170208, 14.843307272120256],
          [-91.51345939382168, 14.843139750648604],
          [-91.51323409787545, 14.842988981214148],
          [-91.51261366782154, 14.842600330790006],
          [-91.51211455064755, 14.842295440619182],
          [-91.51137974057383, 14.841732566739196],
          [-91.51082863787276, 14.841307063771055],
          [-91.51006263165456, 14.84069727935146],
          [-91.50882870531801, 14.839688788669164],
          [-91.50817014938596, 14.83917616573224],
          [-91.50774382013334, 14.838821013273488],
          [-91.50753585464415, 14.83864008632581],
          [-91.50749772763794, 14.838516117773821],
          [-91.50741454144234, 14.838408901671201],
          [-91.50728629605734, 14.838341891580413],
          [-91.50718231331255, 14.838368695619366],
          [-91.50714072021495, 14.838449107715547],
          [-91.50715111848916, 14.838559674299873],
          [-91.50722390641054, 14.838609931819676],
          [-91.50735561788694, 14.83863338532423],
        ],
        type: 'LineString',
      },
    },
  ],
};

export function VistaBella() {
  return (

    <Map height={500} defaultCenter={[14.844623950713178, -91.52317425152974]} defaultZoom={14}>
      <GeoJson
        data={geoJsonSample}
        styleCallback={(feature: any, hover: any) => {
          if (feature.geometry.type === "LineString") {
            return { strokeWidth: "3", stroke: "orange" };
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

export default VistaBella;
