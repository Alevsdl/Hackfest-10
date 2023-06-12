import { Map, GeoJson } from 'pigeon-maps';

const geoJsonSample = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        coordinates: [
          [-91.54750548139828, 14.8366340329638],
          [-91.54713523804875, 14.837059038066883],
          [-91.54696508876458, 14.837235368265482],
          [-91.54681808037554, 14.837326158646476],
          [-91.54657987233847, 14.837397211961402],
          [-91.54643150276097, 14.837431422808663],
          [-91.54621779742581, 14.8374524745293],
          [-91.54607280040105, 14.837472731423759],
          [-91.54578757506117, 14.837554424687497],
          [-91.54561737887026, 14.837604348333713],
          [-91.54520919934778, 14.837802355571299],
          [-91.54503313432343, 14.837897664231093],
          [-91.54466573325045, 14.838114383418798],
          [-91.54447675679042, 14.838215365066432],
          [-91.54403345011221, 14.838389736299845],
          [-91.54390430299044, 14.83843848346929],
          [-91.54380821738991, 14.838474343098213],
          [-91.54357144766631, 14.838541519046672],
          [-91.54341647111994, 14.838584321409499],
          [-91.5432159876563, 14.838643172742607],
          [-91.54307074968042, 14.838685417300027],
          [-91.5430363104478, 14.838693145499676],
          [-91.54291208321587, 14.838683039391654],
          [-91.5426290589963, 14.838668492689735],
          [-91.54255403066833, 14.838666114781176],
          [-91.54228643090964, 14.838645640241737],
          [-91.54224420308643, 14.838645640241737],
          [-91.542226012639, 14.838450962241225],
          [-91.54220590616809, 14.838187309040677],
          [-91.54217557054784, 14.837866417166154],
          [-91.54216216627658, 14.8377164826734],
          [-91.54212901863127, 14.83742018778797],
          [-91.54210087585186, 14.837173974714261],
          [-91.54206348929013, 14.836965165731868],
          [-91.54200071579726, 14.836607775371235],
          [-91.54196862562193, 14.836398597615343],
          [-91.54196447155906, 14.83636781157766],
          [-91.5414562912535, 14.836426706601728],
          [-91.54087491177428, 14.836494971127564],
          [-91.54023053753627, 14.836578087467075],
          [-91.5398495517442, 14.836635376045564],
          [-91.53961531510927, 14.836683116323755],
          [-91.53929641589059, 14.836771777169915],
          [-91.53898880514004, 14.83689590229352],
          [-91.53874892299966, 14.836946370076618],
          [-91.5384822329458, 14.837011842625827],
          [-91.53836934826647, 14.837036394826256],
          [-91.5381239765882, 14.837028968072048],
          [-91.53797158227108, 14.837012599938419],
          [-91.53777544514098, 14.836998959825536],
          [-91.53759784755172, 14.8369825207361],
          [-91.53755755145278, 14.836979205624615],
          [-91.53740236860274, 14.837086946720106],
          [-91.53722806512559, 14.837220573992425],
          [-91.53718186503139, 14.837253500356098],
          [-91.53704811627647, 14.837299911851872],
          [-91.5368053702978, 14.837387565103256],
          [-91.53657032834661, 14.837478745969193],
          [-91.53653633317519, 14.83748951127474],
          [-91.53622275634538, 14.83741587396203],
          [-91.53604975543224, 14.837376646597846],
          [-91.53569045923768, 14.837297515587338],
          [-91.5356399116458, 14.837288568990758],
          [-91.53562209807922, 14.837466819317527],
          [-91.53561153972285, 14.837551871802773],
          [-91.53558338410515, 14.8376930588542],
          [-91.53557986464074, 14.83784785421858],
          [-91.53557634518867, 14.8379778178941],
          [-91.53556754696265, 14.838207685000555],
          [-91.5355534693985, 14.838308691257637],
          [-91.53555522912461, 14.838456681984269],
          [-91.53553795026889, 14.838656331882092],
          [-91.53554498917299, 14.83899313767489],
          [-91.53554674939856, 14.839614909854788],
          [-91.53553619140101, 14.839655253340823],
          [-91.53553645540303, 14.839739742269444],
          [-91.53560888783188, 14.8399996505118],
          [-91.53564231950075, 14.840161363186198],
          [-91.53566322051633, 14.840275851602925],
          [-91.53566554285146, 14.840374625873736],
          [-91.53565857584609, 14.840448706547235],
          [-91.53556035048675, 14.840922129580548],
          [-91.53552217602491, 14.841094334123383],
          [-91.53545456603003, 14.841396610292762],
          [-91.53542508882073, 14.841521983008946],
          [-91.53542312367341, 14.841662552331869],
          [-91.53544670544075, 14.841793623645557],
          [-91.53548207809197, 14.841896201139917],
          [-91.53557436684079, 14.842141589369348],
          [-91.53562546067008, 14.842238467958808],
          [-91.53575112622936, 14.842468465492786],
          [-91.53583955785717, 14.842603335471168],
          [-91.53608730974707, 14.843046253013782],
          [-91.53619237645526, 14.843245336091456],
          [-91.53623757484259, 14.84339730171196],
          [-91.53628866867186, 14.843613852536024],
          [-91.53635427136092, 14.843910857930027],
          [-91.53637789113944, 14.844024126243966],
          [-91.53638000866698, 14.844115211444361],
          [-91.5363719903466, 14.84424463640417],
          [-91.53646764280973, 14.845182299495022],
          [-91.53650663022417, 14.845456379894742],
          [-91.53653739734389, 14.84581653225186],
          [-91.53654143077816, 14.846136233112205],
          [-91.53654143077816, 14.846276589437792],
          [-91.53653336390911, 14.846311678504719],
          [-91.53653336390911, 14.846338969997063],
          [-91.5349159565961, 14.846112840381949],
          [-91.53429218939928, 14.846028692112228],
          [-91.53415101799679, 14.845919524412352],
          [-91.53398161373917, 14.845970208702468],
          [-91.53390094504563, 14.846102767559387],
          [-91.53377994200483, 14.846180743318811],
          [-91.53368313957166, 14.846192439680621],
          [-91.5335218021841, 14.846176844531414],
          [-91.5332959298411, 14.846133957866329],
          [-91.53308215780243, 14.846063779668157],
          [-91.53299745567362, 14.846009196610595],
          [-91.53291678698007, 14.845966309911262],
          [-91.53267881433273, 14.845892232867115],
          [-91.53214236751842, 14.845798661827132],
          [-91.53146561212573, 14.845717787076538],
          [-91.53052582184174, 14.84556963279148],
          [-91.52902164795499, 14.845357640617365],
          [-91.52800576096587, 14.845223404105397],
          [-91.52809046247049, 14.844548910189715],
          [-91.52816306429497, 14.844069355201427],
          [-91.52823817910374, 14.843567426048025],
          [-91.52829061375485, 14.843200935302292],
          [-91.52833901497118, 14.84287343240797],
          [-91.52842808109585, 14.842200045160254],
          [-91.52711927092888, 14.841382139812751],
          [-91.52663122655811, 14.841093622326326],
          [-91.52633275239063, 14.84094156599059],
          [-91.52600201074542, 14.840840195040656],
          [-91.52540102897618, 14.840742722928695],
          [-91.52446337794444, 14.84059356379943],
          [-91.52398340119571, 14.840488292084004],
          [-91.523842230981, 14.840445404290449],
          [-91.52373736167931, 14.840390819813408],
          [-91.52268866865833, 14.84031674085881],
          [-91.5218398147699, 14.840284376475694],
          [-91.52112993026368, 14.84026878090036],
          [-91.52081365302216, 14.84026253421851],
          [-91.52005133386481, 14.840180657428988],
          [-91.51933429238021, 14.840116170801139],
          [-91.51856735611179, 14.840057977698876],
          [-91.51799460776164, 14.840018985402267],
          [-91.51796524488967, 14.840015247532662],
          [-91.51788400525079, 14.840347908534028],
          [-91.51771922809611, 14.841065193529673],
          [-91.51765180397089, 14.841133320633887],
          [-91.51763737440808, 14.841168191102994],
          [-91.51769268773093, 14.841249555508625],
          [-91.51771433207452, 14.841263503688538],
          [-91.51766142367882, 14.841565714051143],
          [-91.51755926451966, 14.842273401755648],
          [-91.51745823402375, 14.842980105175442],
          [-91.51816287765892, 14.84305449486736],
          [-91.51903105948244, 14.843180025657475],
          [-91.51938149042303, 14.843234168783269],
          [-91.51927567397526, 14.844140789075936],
          [-91.52028032292876, 14.844274799057274],
          [-91.5207901674699, 14.84434453897532],
          [-91.52154344080294, 14.844443300752417],
          [-91.52257142851126, 14.844580226791606],
          [-91.52326885776971, 14.844654615871946],
          [-91.52433507674883, 14.844800910822642],
          [-91.5249387134469, 14.84488227386116],
          [-91.52598697815831, 14.845029732101423],
          [-91.52682761198459, 14.84511789113796],
          [-91.527878565427, 14.845268993658763],
          [-91.52869383567742, 14.845373603044564],
          [-91.52975187911629, 14.845517714327258],
          [-91.53011138666079, 14.845566781365505],
          [-91.53033023502557, 14.845578404617072],
          [-91.53086603167213, 14.845657369342675],
          [-91.53142725054882, 14.845741513942045],
          [-91.531646098913, 14.845769409723616],
          [-91.5318889965485, 14.84579730550044],
          [-91.53234160048942, 14.845867536369823],
          [-91.53257006856214, 14.845911704662683],
          [-91.53274562823917, 14.845944249714066],
          [-91.53278981932624, 14.845953688276538],
          [-91.5328357565213, 14.845865553346655],
          [-91.53284795932692, 14.845768820007748],
          [-91.53285358085571, 14.845712265829391],
          [-91.53288178426813, 14.845484278705001],
          [-91.53289460896004, 14.845399155317068],
          [-91.53290401373404, 14.845320643424003],
          [-91.53291913431877, 14.845208120728728],
          [-91.53254085581314, 14.845001802937531],
          [-91.53327040193705, 14.84397989117808],
          [-91.53406738870935, 14.843196185497689],
          [-91.53464590627435, 14.84275360694842],
          [-91.53481489461693, 14.84264410881994],
          [-91.53558085046829, 14.842212032189096],
          [-91.5356291071315, 14.842173654552127],
          [-91.53557812915844, 14.842062288281198],
          [-91.5355026892527, 14.841865595665524],
          [-91.5354761807067, 14.841802028109583],
          [-91.53545175834769, 14.841691452385774],
          [-91.53545430731836, 14.841531301391797],
          [-91.5354872239684, 14.841368490597276],
          [-91.5355220205655, 14.841223343386858],
          [-91.53558438600936, 14.84093987790068],
          [-91.53565785987202, 14.840593649423965],
          [-91.53569956535621, 14.840371713582854],
          [-91.53565910722882, 14.840115554380105],
          [-91.53563510576221, 14.840000838885032],
          [-91.5355709524569, 14.839792133866425],
          [-91.53554961782056, 14.839691596543801],
          [-91.53557228584523, 14.839612971150999],
          [-91.53558133653435, 14.83936352243083],
          [-91.53557733626816, 14.839190804074008],
          [-91.53557072367639, 14.838890814803335],
          [-91.5355681834462, 14.83869145153487],
          [-91.53557218369097, 14.838578024231609],
          [-91.53558018417887, 14.83848779792369],
          [-91.535585532036, 14.838379457682038],
          [-91.53560197693841, 14.838149991939346],
          [-91.53560731059767, 14.83799274004079],
          [-91.53560731059767, 14.837849666492758],
          [-91.5356183930908, 14.837685894262975],
          [-91.53564239455677, 14.837555710043816],
          [-91.5356490616305, 14.837447437958602],
          [-91.535659728949, 14.83737525654007],
          [-91.53566239577863, 14.837318542549454],
          [-91.53581307164951, 14.837343032683293],
          [-91.53597574825339, 14.837384279218696],
          [-91.53629164113896, 14.83745620031091],
          [-91.53645831798693, 14.837492291009653],
          [-91.53651832165252, 14.837507758450727],
          [-91.53653698945925, 14.837518070077422],
          [-91.53718368972983, 14.837277195720418],
          [-91.5375611112342, 14.837001692448283],
          [-91.5382007126907, 14.83705734734238],
          [-91.53829138489598, 14.83705734734238],
          [-91.53839763249516, 14.837053183503329],
          [-91.53897633451272, 14.836919132031738],
          [-91.53907696098396, 14.83688518768328],
          [-91.53931297540154, 14.836791093797984],
          [-91.53956765762518, 14.836724067991355],
          [-91.53968233129712, 14.836699577787456],
          [-91.53994249602687, 14.83664775485839],
          [-91.54023780356657, 14.836601408341906],
          [-91.54046581749527, 14.836560161658483],
          [-91.54087384241942, 14.83651375913007],
          [-91.54184090168908, 14.836405414547272],
          [-91.54198782524826, 14.836386542708567],
          [-91.54202446786972, 14.836621774296319],
          [-91.54207896204376, 14.836944195666177],
          [-91.54212682195669, 14.837190585664516],
          [-91.54213433839202, 14.837319553885948],
          [-91.54216424534935, 14.837528232645155],
          [-91.54219163889765, 14.837819172681876],
          [-91.54221716144492, 14.838141258714202],
          [-91.54225578345546, 14.838534862046174],
          [-91.54226517898898, 14.838670484667077],
          [-91.54267814235573, 14.83869496400844],
          [-91.54293558026019, 14.838711311983303],
          [-91.54303047525396, 14.838717669529629],
          [-91.54304163663393, 14.838716284949697],
          [-91.54386336184916, 14.838478476035206],
          [-91.5444220573109, 14.838258766117832],
          [-91.5445624277731, 14.838190285258705],
          [-91.54492117967735, 14.837996172266074],
          [-91.54530665903303, 14.837777918245308],
          [-91.54564389909112, 14.837620191754525],
          [-91.54579328824, 14.837576596931768],
          [-91.54610949799861, 14.837483898521782],
          [-91.54622788185253, 14.837472091583578],
          [-91.54637915011023, 14.837458468193958],
          [-91.54653253552085, 14.837426253782255],
          [-91.54665279848311, 14.837404456352019],
          [-91.54679185253447, 14.837361769708863],
          [-91.54691046143597, 14.83729170896406],
          [-91.54699408177723, 14.837227224854246],
          [-91.54710588875047, 14.837120054037939],
          [-91.54726083170753, 14.83693876841589],
          [-91.54740442960342, 14.836782515585583],
          [-91.54749462682535, 14.836668078713899],
          [-91.54751999479384, 14.836643556519846],
          [-91.54750778058668, 14.836629933077162],
        ],
        type: 'LineString',
      },
    },
  ],
};

export function Ruta19() {
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

export default Ruta19;
