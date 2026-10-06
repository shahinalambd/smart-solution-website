/* =========================================================
   Smart Solution for Premium Services – demo website
   Edit CONFIG below with the company's real details.
   ========================================================= */
const CONFIG = {
  phone: "+000 0000 0000",          // shown on the site
  email: "hello@example.com",
  mapQuery: "Muscat, Oman",          // address or Google Maps place name
  address: { en: "Muscat, Sultanate of Oman", ar: "مسقط، سلطنة عُمان" },
  hours: { en: "Sat – Thu, 8:00 am – 8:00 pm", ar: "السبت – الخميس، 8 صباحاً – 8 مساءً" }
};

/* ---------- Arabic translations for static text ---------- */
const AR = {
  nav_home:"الرئيسية", nav_services:"الخدمات", nav_about:"من نحن", nav_projects:"أعمالنا", nav_contact:"تواصل معنا",
  top_area:"نخدم مسقط والمناطق المجاورة", brand_sub:"مكافحة الحشرات والقوارض",
  cta_book:"احجز فحصاً مجانياً", cta_plan:"خطّط لمعالجتك", cta_wa:"تواصل معنا",
  map_title:"موقعنا", map_text:"نغطي مسقط والمناطق المجاورة. اتصل بنا قبل الزيارة وسنرشدك.", map_btn:"احصل على الاتجاهات",
  ft_about:"مكافحة الحشرات للمنازل والمنشآت في مسقط: الحشرات والنمل الأبيض والقوارض وغيرها.",
  ft_pages:"الصفحات", ft_services:"الخدمات", ft_contact:"التواصل", ft_rights:"جميع الحقوق محفوظة.", ft_by:"تصميم",
  h_title:"منازل ومنشآت خالية من الحشرات في جميع أنحاء مسقط",
  h_lead:"نعالج الحشرات والنمل الأبيض والقوارض في الفلل والشقق والمكاتب والمطاعم والمباني، بخطة واضحة قبل البدء ومتابعة بعد الانتهاء.",
  h_pick:"ما الذي تواجهه؟",
  pl_title:"أماكن نحميها", pl_lead:"من تراسات المطاعم إلى مواقف السراديب، لكل مكان نقاط ضعفه. نحن نعالج حيث تعيش الحشرات فعلاً.",
  pl_1:"المطاعم والمقاهي", pl_2:"المكاتب", pl_3:"المعارض والمحلات", pl_4:"الفلل والمسابح", pl_5:"المباني والمواقف",
  sv_title:"ما نعالجه", sv_all:"جميع الخدمات",
  pr_title:"كيف تتم الزيارة", pr_lead:"أربع خطوات، سواء لشقة بغرفة واحدة أو لمبنى كامل.",
  pr_1t:"الفحص", pr_1:"نحدد أماكن دخول الحشرات وتعششها وتغذيها، ونطلعك على ما وجدناه.",
  pr_2t:"الخطة", pr_2:"تحصل على خطة مكتوبة: المناطق والمواد والتوقيت.",
  pr_3t:"المعالجة", pr_3:"يستخدم الفنيون الطريقة المناسبة لكل حشرة: الرش أو الجل أو الحقن أو محطات الطُعم.",
  pr_4t:"المتابعة", pr_4:"نتحقق من النتائج ونرشدك إلى طرق منع عودة الحشرات.",
  tf_c1:"تلف داخل إطار باب", tf_c2:"المعالجة بالحفر والحقن",
  tf_title:"النمل الأبيض يعمل بصمت. ونحن نكتشفه.",
  tf_lead:"يُفرغ النمل الأبيض إطارات الأبواب والتجهيزات الخشبية من الداخل، غالباً قبل ظهور أي ضرر على السطح بوقت طويل.",
  tf_1:"فحص الإطارات والوزرات والتجهيزات الخشبية", tf_2:"معالجة بالحفر والحقن في الخشب والجدران المصابة",
  tf_3:"معالجة حاجزة تمنع دخول مستعمرات جديدة", tf_4:"نصائح للإصلاح بعد القضاء على المستعمرة",
  tf_cta:"تعرّف على معالجة النمل الأبيض",
  cb_title:"لست متأكداً من نوع الحشرة؟ تواصل معنا.",
  s_title:"معالجات لكل أنواع الحشرات",
  s_lead:"تبدأ كل معالجة بفحص، لنستخدم الطريقة الصحيحة في الأماكن الصحيحة، ولا شيء أكثر مما يحتاجه عقارك.",
  p_title:"خطّط لمعالجتك",
  p_lead:"اختر نوع عقارك والحشرات التي رأيتها، وسنقترح خطة مناسبة للحصول على عرض سعر.",
  p_prop:"نوع العقار", p_size:"المساحة", p_pests:"الحشرات التي رأيتها", p_visit:"نوع الزيارة",
  f_title:"أسئلة شائعة",
  f_q1:"هل المعالجة آمنة للأطفال والحيوانات الأليفة؟",
  f_a1:"نختار المواد والطرق المناسبة للمنازل التي فيها عائلات. مع الجل ومحطات الطُعم لا حاجة عادةً لمغادرة المكان. وفي حالة الرش، سنخبرك بالمدة التي يجب فيها إبعاد الأطفال والحيوانات عن الغرف المعالجة.",
  f_q2:"هل أحتاج إلى إفراغ المطبخ؟",
  f_a2:"في معظم معالجات الصراصير والنمل، لا. نستخدم الجل داخل الخزائن والزوايا. وإذا احتجنا إلى الرش، سنخبرك مسبقاً بما يجب تغطيته أو نقله.",
  f_q3:"كم تستغرق الزيارة؟",
  f_a3:"تستغرق الشقة عادةً من ساعة إلى ساعتين. أما الفلل والمطاعم والمباني فتحتاج وقتاً أطول، وسنحدد لك الوقت بعد الفحص.",
  f_q4:"كم مرة يجب أن أحجز؟",
  f_a4:"تكفي المنازل غالباً زيارة كل ثلاثة أشهر. أما المطاعم ومنشآت الأغذية فتحتاج عادةً زيارة شهرية لتبقى مطابقة للاشتراطات وخالية من الحشرات.",
  f_q5:"هل تقدمون عقوداً للشركات؟",
  f_a5:"نعم. نقدم عقوداً شهرية وربع سنوية بزيارات مجدولة وتقرير خدمة بعد كل زيارة.",
  a_title:"فريق مكافحة حشرات يُطلعك على كل خطوة",
  a_lead:"تحمي الحلول الذكية المتميزة المنازل والمنشآت في مسقط من الحشرات والنمل الأبيض والقوارض.",
  a_h2:"عمل دقيق داخل منزلك أو منشأتك",
  a_p1:"تتم مكافحة الحشرات في أكثر الأماكن أهمية للناس: غرف النوم والمطابخ وغرف الطعام وصالات المحلات. لذلك نعمل بالطريقة التي نريدها في منازلنا.",
  a_p2:"يرتدي فنيونا أغطية الأحذية، ويحمون الأرضيات والأثاث، ويشرحون ما سيقومون به قبل البدء. وعند الانتهاء تحصل على نصائح واضحة لمنع عودة الحشرات.",
  v_title:"ما يمكنك أن تتوقعه منا",
  v_1t:"السلامة أولاً", v_1:"نختار طرقاً ومواد مناسبة للمنازل التي فيها أطفال وحيوانات أليفة، ونخبرك بدقة متى يمكنك العودة إلى الغرفة.",
  v_2t:"خطة واضحة", v_2:"تعرف ما سنعالجه وكيف وكم مرة قبل بدء أي عمل. لا مفاجآت يوم الزيارة.",
  v_3t:"فنيون منظمون", v_3:"أغطية أحذية، وتحكم في الغبار، ونظافة عند الانتهاء. نترك المكان كما وجدناه، ولكن بلا حشرات.",
  sc_title:"من نخدم", sc_lead:"العائلات والشركات بجميع أحجامها في أنحاء مسقط.",
  sc_1:"الشقق", sc_2:"الفلل", sc_3:"المطاعم والمقاهي", sc_4:"المكاتب", sc_5:"المعارض والمحلات", sc_6:"المباني السكنية", sc_7:"المستودعات", sc_8:"المدارس والعيادات",
  a_cta:"شاهد فنيينا أثناء العمل في مواقع حقيقية.", a_cta_btn:"شاهد أعمالنا",
  g_title:"أعمالنا في أنحاء مسقط", g_lead:"أعمال حقيقية لفريقنا: تراسات مطاعم ومكاتب ومعارض وفلل ومبانٍ.",
  c_title:"احجز فحصاً مجانياً", c_lead:"أخبرنا بموقعك وما رأيته، وسنتواصل معك لترتيب الزيارة.",
  c_name:"الاسم", c_err_name:"يرجى إدخال اسمك.", c_phone:"رقم الهاتف", c_err_phone:"يرجى إدخال رقم هاتف يمكننا التواصل معك عليه.",
  c_area:"المنطقة", c_area_ph:"مثال: الخوير، القرم، السيب", c_prop:"نوع العقار", c_pest:"الحشرة الرئيسية",
  c_msg:"هل هناك ما يجب أن نعرفه؟", c_msg_ph:"أين رأيتها، ومنذ متى المشكلة…", c_send:"أرسل الحجز"
};

/* ---------- Content data (both languages) ---------- */
const HERO_PESTS = [
  { icon:"pest1.png", link:"insects",
    en:{name:"Ants", desc:"Trails in kitchens and bathrooms usually lead back to a nest inside a wall or outside.", signs:"Trails along skirting and counters", method:"Gel bait at the source, plus a perimeter spray"},
    ar:{name:"النمل", desc:"خطوط النمل في المطابخ والحمامات تقود غالباً إلى عش داخل الجدار أو خارج المنزل.", signs:"خطوط على الوزرات وأسطح المطبخ", method:"جل عند المصدر مع رش المحيط"} },
  { icon:"pest2.png", link:"insects",
    en:{name:"Cockroaches", desc:"They hide in warm, damp places and come out at night, spreading bacteria onto food surfaces.", signs:"Droppings in cabinets, sightings at night", method:"Gel bait in kitchens, plus drain treatment"},
    ar:{name:"الصراصير", desc:"تختبئ في الأماكن الدافئة والرطبة وتخرج ليلاً وتنقل البكتيريا إلى أسطح الطعام.", signs:"فضلات في الخزائن وظهورها ليلاً", method:"جل في المطابخ مع معالجة المصارف"} },
  { icon:"pest3.png", link:"mosquitoes",
    en:{name:"Mosquitoes", desc:"Pools, plant pots and AC drains give mosquitoes water to breed in, especially after rain.", signs:"Bites at dusk, larvae in still water", method:"Breeding-site treatment and outdoor spray"},
    ar:{name:"البعوض", desc:"توفر المسابح وأصص النباتات وتصريف المكيفات مياهاً يتكاثر فيها البعوض، خاصة بعد المطر.", signs:"لسعات عند الغروب ويرقات في المياه الراكدة", method:"معالجة أماكن التكاثر مع رش خارجي"} },
  { icon:"pest4.png", link:"rodents",
    en:{name:"Rodents", desc:"Rats and mice get in through drains and gaps, then chew wiring and spoil stored food.", signs:"Gnaw marks, droppings, noises at night", method:"Secured bait stations and advice on sealing gaps"},
    ar:{name:"القوارض", desc:"تدخل الجرذان والفئران عبر المصارف والفتحات، ثم تقضم الأسلاك وتفسد الطعام المخزّن.", signs:"آثار قضم وفضلات وأصوات ليلاً", method:"محطات طُعم آمنة مع نصائح لسد الفتحات"} }
];

const ICONS = {
  bug:'<path d="M8 9a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0Z"/><path d="M12 9v10M4 12h4M16 12h4M5 7l3 2M19 7l-3 2M5 18l3-2M19 18l-3-2"/>',
  wood:'<path d="M3 11l9-7 9 7v9H3Z"/><path d="M9 20v-6h6v6"/>',
  shield:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6Z"/><path d="M9 12l2 2 4-4"/>',
  drop:'<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z"/>',
  bed:'<path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.5"/>',
  clip:'<path d="M9 3h6v3H9Z"/><path d="M7 4.5H5V21h14V4.5h-2"/><path d="M8.5 13l2.5 2.5 4.5-4.5"/>',
  phone:'<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2"/>',
  chat:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
const svg = (k) => `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${ICONS[k]}</svg>`;

const SERVICES = [
  { id:"insects", icon:"bug", img:"restaurant-2.jpg",
    en:{name:"General insect control", short:"Cockroaches, ants, silverfish and spiders in kitchens, bathrooms and dining areas.", long:"Cockroaches and ants follow food and water. We treat the places they hide: behind appliances, inside cabinets, in drains and cracks. Gel bait works inside kitchens without emptying them, and targeted spraying covers outdoor and hidden areas.", tags:["Cockroaches","Ants","Silverfish","Spiders"]},
    ar:{name:"مكافحة الحشرات العامة", short:"الصراصير والنمل والسمك الفضي والعناكب في المطابخ والحمامات وأماكن الطعام.", long:"تتبع الصراصير والنمل مصادر الطعام والماء. نعالج الأماكن التي تختبئ فيها: خلف الأجهزة وداخل الخزائن وفي المصارف والشقوق. يعمل الجل داخل المطابخ دون الحاجة إلى إفراغها، ويغطي الرش الموجّه المناطق الخارجية والمخفية.", tags:["الصراصير","النمل","السمك الفضي","العناكب"]} },
  { id:"termites", icon:"wood", img:"termite-drill-1.jpg",
    en:{name:"Termite treatment", short:"Inspection and drill-and-inject treatment for door frames, skirting and wooden fittings.", long:"Termites often go unnoticed until a door frame sounds hollow or starts to crumble. We inspect wooden fittings and walls, inject treatment directly into affected areas, and apply a barrier to keep new colonies out.", tags:["Inspection","Injection","Barrier treatment"]},
    ar:{name:"معالجة النمل الأبيض (الأرضة)", short:"فحص ومعالجة بالحفر والحقن لإطارات الأبواب والوزرات والتجهيزات الخشبية.", long:"غالباً لا يُلاحظ النمل الأبيض حتى يصبح إطار الباب أجوف أو يبدأ بالتفتت. نفحص التجهيزات الخشبية والجدران، ونحقن المادة مباشرة في المناطق المصابة، ثم نعمل حاجزاً يمنع دخول مستعمرات جديدة.", tags:["فحص","حقن","معالجة حاجزة"]} },
  { id:"rodents", icon:"shield", img:"basement.jpg",
    en:{name:"Rodent control", short:"Rats and mice in homes, stores, basements and parking areas.", long:"Rodents damage wiring, contaminate food and breed fast. We find their entry points and routes, place secured bait stations, treat drains and basements, and advise you on sealing gaps.", tags:["Rats","Mice","Bait stations","Drains"]},
    ar:{name:"مكافحة القوارض", short:"الجرذان والفئران في المنازل والمخازن والسراديب والمواقف.", long:"تُتلف القوارض الأسلاك وتلوث الطعام وتتكاثر بسرعة. نحدد نقاط الدخول وممرات الحركة، ونضع محطات طُعم آمنة، ونعالج المصارف والسراديب، وننصحك بطرق سد الفتحات.", tags:["الجرذان","الفئران","محطات الطُعم","المصارف"]} },
  { id:"mosquitoes", icon:"drop", img:"villa-pool.jpg",
    en:{name:"Mosquito & fly control", short:"Gardens, pool areas, terraces and outdoor seating.", long:"Standing water, plants and shaded corners attract mosquitoes and flies. We treat breeding spots and resting areas around gardens, pools and outdoor seating so you can enjoy them again in the evening.", tags:["Mosquitoes","Flies","Gardens","Pools"]},
    ar:{name:"مكافحة البعوض والذباب", short:"الحدائق ومناطق المسابح والتراسات والجلسات الخارجية.", long:"تجذب المياه الراكدة والنباتات والزوايا المظللة البعوض والذباب. نعالج أماكن التكاثر والاستراحة حول الحدائق والمسابح والجلسات الخارجية لتستمتع بها مجدداً في المساء.", tags:["البعوض","الذباب","الحدائق","المسابح"]} },
  { id:"bedbugs", icon:"bed", img:null,
    en:{name:"Bed bug treatment", short:"Bedrooms, sofas, hotels and staff accommodation.", long:"Bed bugs hide in mattress seams, bed frames and furniture joints. We treat the whole room, not just the bed, and schedule a second visit to catch newly hatched bugs.", tags:["Mattresses","Furniture","Staff housing"]},
    ar:{name:"معالجة بق الفراش", short:"غرف النوم والكنب والفنادق وسكن الموظفين.", long:"يختبئ بق الفراش في درزات المراتب وهياكل الأسرّة ومفاصل الأثاث. نعالج الغرفة بالكامل وليس السرير فقط، ونحدد زيارة ثانية للقضاء على البق الذي يفقس حديثاً.", tags:["المراتب","الأثاث","سكن الموظفين"]} },
  { id:"contracts", icon:"clip", img:"office.jpg",
    en:{name:"Business service contracts", short:"Monthly or quarterly visits for restaurants, offices, shops and buildings.", long:"A business can't wait for a customer to spot a pest. A contract gives you scheduled visits, treatment of every area and a service report after each visit, useful for inspections and your own records.", tags:["Monthly","Quarterly","Service reports"]},
    ar:{name:"عقود الخدمة للشركات", short:"زيارات شهرية أو ربع سنوية للمطاعم والمكاتب والمحلات والمباني.", long:"لا تستطيع المنشأة انتظار أن يرى العميل حشرة. يمنحك العقد زيارات مجدولة ومعالجة جميع المناطق وتقرير خدمة بعد كل زيارة، وهو مفيد عند التفتيش ولسجلاتك الخاصة.", tags:["شهري","ربع سنوي","تقارير الخدمة"]} }
];

const PLAN = {
  prop:[
    {v:"apartment", en:"Apartment", ar:"شقة"}, {v:"villa", en:"Villa", ar:"فيلا"}, {v:"office", en:"Office", ar:"مكتب"},
    {v:"restaurant", en:"Restaurant or café", ar:"مطعم أو مقهى"}, {v:"building", en:"Building or warehouse", ar:"مبنى أو مستودع"}],
  size:[
    {v:"s", en:"Small (1–2 rooms)", ar:"صغير (1–2 غرف)"}, {v:"m", en:"Medium (3–5 rooms)", ar:"متوسط (3–5 غرف)"}, {v:"l", en:"Large (6+ rooms)", ar:"كبير (6 غرف فأكثر)"}],
  pests:[
    {v:"insects", en:"Cockroaches & ants", ar:"الصراصير والنمل", m_en:"Gel bait in kitchens and bathrooms, drain treatment and targeted spray", m_ar:"جل في المطابخ والحمامات، ومعالجة المصارف، ورش موجّه"},
    {v:"termites", en:"Termites", ar:"النمل الأبيض", m_en:"Inspection of wooden fittings, drill-and-inject treatment and a barrier", m_ar:"فحص التجهيزات الخشبية، ومعالجة بالحفر والحقن، ومعالجة حاجزة"},
    {v:"rodents", en:"Rodents", ar:"القوارض", m_en:"Secured bait stations, drain and basement treatment", m_ar:"محطات طُعم آمنة، ومعالجة المصارف والسراديب"},
    {v:"mosquitoes", en:"Mosquitoes & flies", ar:"البعوض والذباب", m_en:"Breeding-site treatment and outdoor spray", m_ar:"معالجة أماكن التكاثر ورش خارجي"},
    {v:"bedbugs", en:"Bed bugs", ar:"بق الفراش", m_en:"Full-room treatment, then a second visit two weeks later", m_ar:"معالجة الغرفة بالكامل ثم زيارة ثانية بعد أسبوعين"}],
  visit:[
    {v:"once", en:"One-time", ar:"زيارة واحدة"}, {v:"quarterly", en:"Every 3 months", ar:"كل 3 أشهر"}, {v:"monthly", en:"Monthly", ar:"شهرياً"}],
  time:{ s:{en:"1–2 hours", ar:"ساعة إلى ساعتين"}, m:{en:"2–3 hours", ar:"ساعتان إلى 3 ساعات"}, l:{en:"About half a day", ar:"نصف يوم تقريباً"} }
};

const PLAN_TXT = {
  en:{title:"Your suggested plan", time:"Approximate time on site", schedule:"Visit schedule", food:"Food businesses usually need a monthly visit. We'll confirm this at the inspection.", note:"The final plan and price are confirmed after a free inspection.", send:"Book a free inspection", empty:"Choose at least one pest to see your plan.", msg:"Hello, I'd like a quote for this pest control plan:"},
  ar:{title:"الخطة المقترحة لك", time:"الوقت التقريبي في الموقع", schedule:"جدول الزيارات", food:"تحتاج منشآت الأغذية عادةً إلى زيارة شهرية، وسنؤكد ذلك أثناء الفحص.", note:"يتم تأكيد الخطة النهائية والسعر بعد فحص مجاني.", send:"احجز فحصاً مجانياً", empty:"اختر حشرة واحدة على الأقل لعرض خطتك.", msg:"مرحباً، أرغب في عرض سعر لخطة مكافحة الحشرات التالية:"}
};

const GALLERY = [
  {img:"restaurant-1.jpg", cat:"restaurants", en:"Restaurant terrace treatment", ar:"معالجة تراس مطعم"},
  {img:"termite-damage.jpg", cat:"termites", en:"Termite damage inside a door frame", ar:"تلف النمل الأبيض داخل إطار باب"},
  {img:"storefront-1.jpg", cat:"commercial", en:"Showroom entrance, perimeter spray", ar:"رش محيط مدخل معرض"},
  {img:"villa-pool.jpg", cat:"homes", en:"Villa pool deck", ar:"سطح مسبح فيلا"},
  {img:"termite-drill-1.jpg", cat:"termites", en:"Termite injection at a bathroom door", ar:"حقن النمل الأبيض عند باب حمام"},
  {img:"office.jpg", cat:"commercial", en:"Office ceiling and window frames", ar:"سقف المكتب وإطارات النوافذ"},
  {img:"basement.jpg", cat:"buildings", en:"Basement drain treatment", ar:"معالجة مصارف السرداب"},
  {img:"restaurant-2.jpg", cat:"restaurants", en:"Outdoor café seating", ar:"جلسات مقهى خارجية"},
  {img:"termite-drill-2.jpg", cat:"termites", en:"Drill-and-inject at floor level", ar:"الحفر والحقن عند مستوى الأرض"},
  {img:"storefront-2.jpg", cat:"commercial", en:"Glass frontage and walkway", ar:"الواجهة الزجاجية والممر"}
];
const FILTERS = [
  {v:"all", en:"All", ar:"الكل"}, {v:"termites", en:"Termites", ar:"النمل الأبيض"}, {v:"restaurants", en:"Restaurants & cafés", ar:"المطاعم والمقاهي"},
  {v:"commercial", en:"Offices & shops", ar:"المكاتب والمحلات"}, {v:"homes", en:"Homes & villas", ar:"المنازل والفلل"}, {v:"buildings", en:"Buildings", ar:"المباني"}
];

/* ---------- Helpers ---------- */
let lang = "en";
try { lang = localStorage.getItem("ss_lang") === "ar" ? "ar" : "en"; } catch (e) {}
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const page = document.body.dataset.page;

/* ---------- Layout (header, map, footer) ---------- */
function renderLayout() {
  const links = [["index.html","home","nav_home","Home"],["services.html","services","nav_services","Services"],["about.html","about","nav_about","About us"],["projects.html","projects","nav_projects","Our work"],["contact.html","contact","nav_contact","Contact"]];
  const nav = links.map(([h,p,k,t]) => `<li><a href="${h}" data-i18n="${k}"${p===page?' aria-current="page"':''}>${t}</a></li>`).join("");
  $("#site-header").outerHTML = `
  <header class="site-header">
    <div class="topbar"><div class="wrap">
      <span class="hide-sm" data-i18n="top_area">Serving Muscat and nearby areas</span>
      <span><a href="tel:${CONFIG.phone.replace(/\s/g,"")}" class="ltr">${CONFIG.phone}</a> &nbsp;|&nbsp; <span>${CONFIG.email}</span></span>
    </div></div>
    <div class="wrap nav">
      <a class="brand" href="index.html" aria-label="Smart Solution – home">
        <img src="assets/img/emblem.png" alt="" width="60" height="52">
        <span><b class="js-brand">Smart <span>Solution</span></b><small data-i18n="brand_sub">Pest Control</small></span>
      </a>
      <ul class="nav-links" id="navLinks">${nav}</ul>
      <div class="nav-actions">
        <button class="lang-btn" id="langBtn" type="button"></button>
        <a class="btn btn-primary" href="contact.html" data-i18n="cta_book">Book a free inspection</a>
        <button class="menu-btn" id="menuBtn" aria-label="Menu" aria-expanded="false" aria-controls="navLinks"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button>
      </div>
    </div>
  </header>`;

  $("#site-footer").outerHTML = `
  <section class="map-sec" aria-label="Map">
    <iframe title="Location map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=${encodeURIComponent(CONFIG.mapQuery)}&output=embed"></iframe>
    <div class="map-card">
      <h3 data-i18n="map_title">Find us</h3>
      <p><span class="js-addr"></span><br><span data-i18n="map_text">We cover Muscat and nearby areas. Call before visiting and we'll guide you.</span></p>
      <a class="btn btn-primary" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONFIG.mapQuery)}" data-i18n="map_btn">Get directions</a>
    </div>
  </section>
  <footer class="site-footer">
    <div class="wrap f-grid">
      <div>
        <a class="f-logo" href="index.html"><img src="assets/img/logo.png" alt="Smart Solution for Premium Services – Pest Control" width="200" height="70"></a>
        <p data-i18n="ft_about">Pest control for homes and businesses in Muscat. Insects, termites, rodents and more.</p>
      </div>
      <div><h4 data-i18n="ft_pages">Pages</h4><ul>${nav.replace(/ aria-current="page"/,"")}</ul></div>
      <div><h4 data-i18n="ft_services">Services</h4><ul id="fServices"></ul></div>
      <div><h4 data-i18n="ft_contact">Contact</h4><ul>
        <li><a class="ltr" href="tel:${CONFIG.phone.replace(/\s/g,"")}">${CONFIG.phone}</a></li>
        <li>${CONFIG.email}</li>
        <li class="js-hours"></li>
      </ul></div>
    </div>
    <div class="wrap f-bottom">
      <span>© ${new Date().getFullYear()} <span class="js-brand-full"></span>. <span data-i18n="ft_rights">All rights reserved.</span></span>
      <span><span data-i18n="ft_by">Designed by</span> VartexFlow</span>
    </div>
  </footer>`;

  $("#menuBtn").addEventListener("click", (e) => {
    const open = $("#navLinks").classList.toggle("open");
    e.currentTarget.setAttribute("aria-expanded", open);
  });
  $("#langBtn").addEventListener("click", () => {
    lang = lang === "en" ? "ar" : "en";
    try { localStorage.setItem("ss_lang", lang); } catch (e) {}
    applyLang();
  });
}

/* ---------- Language ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $$("[data-i18n]").forEach(el => {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    el.innerHTML = lang === "ar" && AR[el.dataset.i18n] ? AR[el.dataset.i18n] : el.dataset.en;
  });
  $$("[data-i18n-ph]").forEach(el => {
    if (el.dataset.enph === undefined) el.dataset.enph = el.placeholder;
    el.placeholder = lang === "ar" && AR[el.dataset.i18nPh] ? AR[el.dataset.i18nPh] : el.dataset.enph;
  });
  $("#langBtn").textContent = lang === "en" ? "العربية" : "English";
  $$(".js-brand").forEach(el => el.innerHTML = lang === "ar" ? "الحلول <span>الذكية</span>" : "Smart <span>Solution</span>");
  $$(".js-brand-full").forEach(el => el.textContent = lang === "ar" ? "الحلول الذكية المتميزة لمكافحة الحشرات والقوارض" : "Smart Solution for Premium Services");
  $$(".js-addr").forEach(el => el.textContent = CONFIG.address[lang]);
  $$(".js-hours").forEach(el => el.textContent = CONFIG.hours[lang]);
  $("#fServices").innerHTML = SERVICES.map(s => `<li><a href="services.html#${s.id}">${s[lang].name}</a></li>`).join("");
  renderPage();
}

/* ---------- Page renderers ---------- */
let pestIdx = 1;
const planState = { prop:"apartment", size:"m", pests:["insects"], visit:"quarterly" };
let galFilter = (location.hash || "").replace("#","") || "all";
if (!FILTERS.some(f => f.v === galFilter)) galFilter = "all";

function renderPage() {
  if ($("#pestRow")) renderPests();
  if ($("#svcList")) $("#svcList").innerHTML = SERVICES.map(s => `
    <div class="svc"><h3><span class="ic">${svg(s.icon)}</span>${s[lang].name}</h3><p>${s[lang].short}</p>
    <a href="services.html#${s.id}">${lang==="ar"?"اعرف المزيد":"Learn more"}</a></div>`).join("");
  if ($("#svcBlocks")) renderServices();
  if ($("#planForm")) renderPlanner();
  if ($("#gallery")) renderGallery();
  if ($("#bookForm")) renderContact();
}

function renderPests() {
  $("#pestRow").innerHTML = HERO_PESTS.map((p,i) => `
    <button type="button" class="pest-btn" aria-pressed="${i===pestIdx}" data-i="${i}"><img src="assets/img/${p.icon}" alt=""><span>${p[lang].name}</span></button>`).join("");
  $$(".pest-btn").forEach(b => b.addEventListener("click", () => { pestIdx = +b.dataset.i; renderPests(); }));
  const p = HERO_PESTS[pestIdx], d = p[lang], card = $("#treatCard");
  const L = lang === "ar" ? {s:"العلامات", m:"طريقتنا", b:"احجز هذه المعالجة"} : {s:"Signs", m:"Our method", b:"Book this treatment"};
  card.innerHTML = `<h3><img src="assets/img/${p.icon}" alt="">${d.name}</h3><p>${d.desc}</p>
    <dl><dt>${L.s}</dt><dd>${d.signs}</dd><dt>${L.m}</dt><dd>${d.method}</dd></dl>
    <a class="btn btn-primary" style="margin-top:16px;padding:10px 18px;font-size:.92rem" href="services.html#${p.link}">${L.b}</a>`;
  card.classList.remove("swap"); void card.offsetWidth; card.classList.add("swap");
}

function renderServices() {
  $("#svcNav").innerHTML = SERVICES.map(s => `<a href="#${s.id}">${s[lang].name}</a>`).join("");
  $("#svcBlocks").innerHTML = SERVICES.map(s => {
    const d = s[lang];
    const media = s.img ? `<img src="assets/img/${s.img}" alt="" loading="lazy">`
      : `<div style="aspect-ratio:3/4;border-radius:18px;background:var(--mist);display:grid;place-items:center"><img src="assets/img/pest2.png" alt="" style="width:110px;height:auto;aspect-ratio:auto"></div>`;
    return `<article class="svc-block" id="${s.id}"><div>
      <h2>${d.name}</h2><p>${d.long}</p>
      <div class="tags">${d.tags.map(t=>`<span>${t}</span>`).join("")}</div>
      <a class="btn btn-ghost" style="margin-top:22px" href="contact.html?service=${s.id}">${AR.cta_book && lang==="ar" ? AR.cta_book : "Book a free inspection"}</a>
    </div>${media}</article>`;
  }).join("");
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) $$("#svcNav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-40% 0px -55% 0px" });
  $$(".svc-block").forEach(b => io.observe(b));
}

function renderPlanner() {
  $$("#planForm .chips").forEach(box => {
    const g = box.dataset.group, type = box.dataset.type;
    box.innerHTML = PLAN[g].map(o => {
      const on = type === "checkbox" ? planState[g].includes(o.v) : planState[g] === o.v;
      return `<label class="chip"><input type="${type}" name="${g}" value="${o.v}"${on?" checked":""}><span>${o[lang]}</span></label>`;
    }).join("");
  });
  $("#planForm").onchange = (e) => {
    const g = e.target.name;
    planState[g] = g === "pests" ? $$('input[name=pests]:checked').map(i => i.value) : e.target.value;
    renderPlanOut();
  };
  renderPlanOut();
}
function renderPlanOut() {
  const T = PLAN_TXT[lang], find = (g,v) => PLAN[g].find(o => o.v === v);
  const out = $("#planOut");
  const prop = find("prop", planState.prop)[lang], size = find("size", planState.size)[lang], visit = find("visit", planState.visit)[lang];
  if (!planState.pests.length) { out.innerHTML = `<h3>${T.title}</h3><p class="muted">${prop}, ${size}</p><div class="plan-empty">${T.empty}</div>`; return; }
  const lines = planState.pests.map(v => { const p = find("pests", v); return {n:p[lang], m:p["m_"+lang]}; });
  const food = planState.prop === "restaurant" && planState.visit !== "monthly";
  out.innerHTML = `<h3>${T.title}</h3><p class="muted">${prop}, ${size}</p>
    <ul class="plan-lines">
      ${lines.map(l => `<li><b>${l.n}</b><small>${l.m}</small></li>`).join("")}
      <li><b>${T.schedule}</b><small>${visit}${food ? " – " + T.food : ""}</small></li>
      <li><b>${T.time}</b><small>${PLAN.time[planState.size][lang]}</small></li>
    </ul>
    <p class="muted" style="margin-bottom:16px">${T.note}</p>
    <a class="btn btn-primary" href="contact.html">${T.send}</a>`;
}

let lbList = [], lbPos = 0;
function renderGallery() {
  $("#filters").innerHTML = FILTERS.map(f => `<button type="button" data-f="${f.v}" aria-pressed="${f.v===galFilter}">${f[lang]}</button>`).join("");
  $$("#filters button").forEach(b => b.onclick = () => { galFilter = b.dataset.f; history.replaceState(null, "", galFilter === "all" ? location.pathname : "#" + galFilter); renderGallery(); });
  $("#gallery").innerHTML = GALLERY.map((g,i) => `
    <button type="button" data-i="${i}"${galFilter!=="all" && g.cat!==galFilter ? " hidden" : ""}><img src="assets/img/${g.img}" alt="${g[lang]}" loading="lazy"><span class="cap">${g[lang]}</span></button>`).join("");
  lbList = GALLERY.map((g,i) => i).filter(i => galFilter === "all" || GALLERY[i].cat === galFilter);
  $$("#gallery button").forEach(b => b.onclick = () => openLb(lbList.indexOf(+b.dataset.i)));
}
function openLb(pos) { lbPos = (pos + lbList.length) % lbList.length; const g = GALLERY[lbList[lbPos]]; $("#lbImg").src = "assets/img/" + g.img; $("#lbImg").alt = g[lang]; $("#lbCap").textContent = g[lang]; $("#lightbox").classList.add("open"); $(".lb-close").focus(); }
function closeLb() { $("#lightbox").classList.remove("open"); }
if ($("#lightbox")) {
  $("#lightbox").addEventListener("click", e => {
    const a = e.target.dataset.lb;
    if (a === "close" || e.target.id === "lightbox") closeLb();
    if (a === "prev") openLb(lbPos - (lang === "ar" ? -1 : 1));
    if (a === "next") openLb(lbPos + (lang === "ar" ? -1 : 1));
  });
  document.addEventListener("keydown", e => {
    if (!$("#lightbox").classList.contains("open")) return;
    if (e.key === "Escape") closeLb();
    if (e.key === "ArrowLeft") openLb(lbPos - 1);
    if (e.key === "ArrowRight") openLb(lbPos + 1);
  });
}

function renderContact() {
  const L = lang === "ar" ? {call:"اتصل بنا", mail:"البريد الإلكتروني", hrs:"ساعات العمل", unsure:"غير متأكد"} : {call:"Call us", mail:"Email", hrs:"Working hours", unsure:"Not sure"};
  $("#cCards").innerHTML = `
    <a class="c-card" href="tel:${CONFIG.phone.replace(/\s/g,"")}"><span class="ic">${svg("phone")}</span><span><small>${L.call}</small><b>${CONFIG.phone}</b></span></a>
    <div class="c-card"><span class="ic">${svg("mail")}</span><span><small>${L.mail}</small><b>${CONFIG.email}</b></span></div>
    <div class="c-card"><span class="ic">${svg("clock")}</span><span><small>${L.hrs}</small><span>${CONFIG.hours[lang]}</span></span></div>`;
  const keepP = $("#fProp").value, keepS = $("#fPest").value;
  $("#fProp").innerHTML = PLAN.prop.map(o => `<option value="${o.v}">${o[lang]}</option>`).join("");
  $("#fPest").innerHTML = PLAN.pests.map(o => `<option value="${o.v}">${o[lang]}</option>`).join("") + `<option value="unsure">${L.unsure}</option>`;
  const q = new URLSearchParams(location.search).get("service");
  const map = { insects:"insects", termites:"termites", rodents:"rodents", mosquitoes:"mosquitoes", bedbugs:"bedbugs" };
  if (keepP) $("#fProp").value = keepP;
  $("#fPest").value = keepS || map[q] || "insects";
  if (q === "contracts" && !keepP) $("#fProp").value = "restaurant";
}
if ($("#bookForm")) {
  $("#bookForm").addEventListener("submit", e => {
    e.preventDefault();
    const f = e.target, name = f.name.value.trim(), phone = f.phone.value.trim();
    f.name.closest(".field").classList.toggle("invalid", !name);
    f.phone.closest(".field").classList.toggle("invalid", phone.replace(/\D/g,"").length < 7);
    if ($(".field.invalid", f)) { $(".field.invalid input", f).focus(); return; }
    // Portfolio demo: nothing is sent.
    let note = $(".form-status", f);
    if (!note) { note = document.createElement("p"); note.className = "form-status"; note.setAttribute("role", "status"); f.appendChild(note); }
    note.textContent = lang === "ar" ? "شكراً! هذا موقع تجريبي، لذلك لم يتم إرسال أي رسالة." : "Thanks! This is a portfolio demo, so no message was sent.";
    f.reset();
  });
}

/* ---------- Init ---------- */
renderLayout();
applyLang();
if (location.hash && page === "services") { const t = document.getElementById(location.hash.slice(1)); if (t) setTimeout(() => t.scrollIntoView(), 50); }
