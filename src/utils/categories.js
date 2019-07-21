const categories = [
  {
    alias: '3dprinting',
    title: '3D Printing',
    parents: ['localservices']
  },
  {
    alias: 'abruzzese',
    title: 'Abruzzese',
    parents: ['italian'],
    country_whitelist: ['IT']
  },
  {
    alias: 'absinthebars',
    title: 'Absinthe Bars',
    parents: ['bars'],
    country_whitelist: ['CZ']
  },
  {
    alias: 'acaibowls',
    title: 'Acai Bowls',
    parents: ['food'],
    country_blacklist: ['MX', 'CL', 'PL', 'TR', 'IT', 'AR']
  },
  {
    alias: 'accessories',
    title: 'Accessories',
    parents: ['fashion']
  },
  {
    alias: 'accountants',
    title: 'Accountants',
    parents: ['professional']
  },
  {
    alias: 'acnetreatment',
    title: 'Acne Treatment',
    parents: ['beautysvc']
  },
  {
    alias: 'active',
    title: 'Active Life',
    parents: []
  },
  {
    alias: 'acupuncture',
    title: 'Acupuncture',
    parents: ['health']
  },
  {
    alias: 'addictionmedicine',
    title: 'Addiction Medicine',
    parents: ['physicians'],
    country_blacklist: ['JP']
  },
  {
    alias: 'adoptionservices',
    title: 'Adoption Services',
    parents: ['localservices']
  },
  {
    alias: 'adult',
    title: 'Adult',
    parents: ['shopping']
  },
  {
    alias: 'adultedu',
    title: 'Adult Education',
    parents: ['education']
  },
  {
    alias: 'adultentertainment',
    title: 'Adult Entertainment',
    parents: ['nightlife']
  },
  {
    alias: 'advertising',
    title: 'Advertising',
    parents: ['professional']
  },
  {
    alias: 'aerialfitness',
    title: 'Aerial Fitness',
    parents: ['fitness']
  },
  {
    alias: 'aerialtours',
    title: 'Aerial Tours',
    parents: ['tours']
  },
  {
    alias: 'aestheticians',
    title: 'Aestheticians',
    parents: ['medicalspa'],
    country_blacklist: ['CH', 'MX', 'CL', 'BE', 'AR', 'FR']
  },
  {
    alias: 'afghani',
    title: 'Afghan',
    parents: ['restaurants'],
    country_blacklist: ['MX', 'TR']
  },
  {
    alias: 'african',
    title: 'African',
    parents: ['restaurants'],
    country_blacklist: ['TR']
  },
  {
    alias: 'afrobrazilian',
    title: 'Afro-Brazilian',
    parents: ['religiousorgs'],
    country_whitelist: ['BR']
  },
  {
    alias: 'agriturismi',
    title: 'Agriturismi',
    parents: ['hotels'],
    country_whitelist: ['CH', 'AR', 'CZ', 'AT', 'MX', 'TW', 'CL', 'DE', 'PL', 'ES', 'IT', 'FR']
  },
  {
    alias: 'aircraftdealers',
    title: 'Aircraft Dealers',
    parents: ['auto'],
    country_whitelist: ['US', 'PT', 'CZ']
  },
  {
    alias: 'aircraftrepairs',
    title: 'Aircraft Repairs',
    parents: ['auto']
  },
  {
    alias: 'airductcleaning',
    title: 'Air Duct Cleaning',
    parents: ['localservices'],
    country_whitelist: ['SG', 'IE', 'NZ', 'US', 'CA', 'MY', 'GB', 'PH', 'AU', 'ES', 'IT']
  },
  {
    alias: 'airlines',
    title: 'Airlines',
    parents: ['transport']
  },
  {
    alias: 'airport_shuttles',
    title: 'Airport Shuttles',
    parents: ['transport']
  },
  {
    alias: 'airportlounges',
    title: 'Airport Lounges',
    parents: ['bars']
  },
  {
    alias: 'airports',
    title: 'Airports',
    parents: ['hotelstravel']
  },
  {
    alias: 'airportterminals',
    title: 'Airport Terminals',
    parents: ['airports']
  },
  {
    alias: 'airsoft',
    title: 'Airsoft',
    parents: ['active']
  },
  {
    alias: 'alentejo',
    title: 'Alentejo',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'algarve',
    title: 'Algarve',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'allergist',
    title: 'Allergists',
    parents: ['physicians']
  },
  {
    alias: 'alsatian',
    title: 'Alsatian',
    parents: ['french'],
    country_whitelist: ['FR', 'DE']
  },
  {
    alias: 'alternativemedicine',
    title: 'Alternative Medicine',
    parents: ['health'],
    country_blacklist: [
      'CH',
      'TR',
      'MY',
      'AR',
      'PH',
      'MX',
      'TW',
      'PL',
      'AT',
      'CL',
      'JP',
      'DE',
      'PT',
      'HK',
      'ES',
      'FI'
    ]
  },
  {
    alias: 'altoatesine',
    title: 'Altoatesine',
    parents: ['italian'],
    country_whitelist: ['IT']
  },
  {
    alias: 'amateursportsteams',
    title: 'Amateur Sports Teams',
    parents: ['active'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'amusementparks',
    title: 'Amusement Parks',
    parents: ['active']
  },
  {
    alias: 'andalusian',
    title: 'Andalusian',
    parents: ['restaurants'],
    country_whitelist: ['IT', 'ES']
  },
  {
    alias: 'anesthesiologists',
    title: 'Anesthesiologists',
    parents: ['physicians'],
    country_whitelist: ['SE', 'AU', 'US', 'BE', 'PT', 'IT', 'FR']
  },
  {
    alias: 'animalassistedtherapy',
    title: 'Animal Assisted Therapy',
    parents: ['health']
  },
  {
    alias: 'animalholistic',
    title: 'Holistic Animal Care',
    parents: ['petservices']
  },
  {
    alias: 'animalphysicaltherapy',
    title: 'Animal Physical Therapy',
    parents: ['petservices']
  },
  {
    alias: 'animalshelters',
    title: 'Animal Shelters',
    parents: ['pets']
  },
  {
    alias: 'antiques',
    title: 'Antiques',
    parents: ['shopping']
  },
  {
    alias: 'apartmentagents',
    title: 'Apartment Agents',
    parents: ['realestateagents']
  },
  {
    alias: 'apartments',
    title: 'Apartments',
    parents: ['realestate']
  },
  {
    alias: 'appliances',
    title: 'Appliances',
    parents: ['homeandgarden']
  },
  {
    alias: 'appraisalservices',
    title: 'Appraisal Services',
    parents: ['localservices']
  },
  {
    alias: 'apulian',
    title: 'Apulian',
    parents: ['italian'],
    country_whitelist: ['IT', 'FR']
  },
  {
    alias: 'aquariums',
    title: 'Aquariums',
    parents: ['active']
  },
  {
    alias: 'aquariumservices',
    title: 'Aquarium Services',
    parents: ['petservices'],
    country_blacklist: ['MX', 'JP', 'CL', 'HK', 'AR']
  },
  {
    alias: 'arabian',
    title: 'Arabian',
    parents: ['restaurants'],
    country_blacklist: ['DK']
  },
  {
    alias: 'arabpizza',
    title: 'Arab Pizza',
    parents: ['arabian'],
    country_whitelist: ['BR']
  },
  {
    alias: 'arcades',
    title: 'Arcades',
    parents: ['arts']
  },
  {
    alias: 'archery',
    title: 'Archery',
    parents: ['active']
  },
  {
    alias: 'architects',
    title: 'Architects',
    parents: ['professional']
  },
  {
    alias: 'architecturaltours',
    title: 'Architectural Tours',
    parents: ['tours']
  },
  {
    alias: 'argentine',
    title: 'Argentine',
    parents: ['restaurants'],
    country_blacklist: ['FI']
  },
  {
    alias: 'armenian',
    title: 'Armenian',
    parents: ['restaurants'],
    country_whitelist: ['TR', 'US', 'AR', 'GB', 'CZ', 'PL', 'BE', 'ES', 'IT', 'FR']
  },
  {
    alias: 'arroceria_paella',
    title: 'Arroceria / Paella',
    parents: ['spanish'],
    country_whitelist: ['ES']
  },
  {
    alias: 'artclasses',
    title: 'Art Classes',
    parents: ['education'],
    country_blacklist: ['MX', 'JP', 'CL', 'HK', 'AR']
  },
  {
    alias: 'artconsultants',
    title: 'Art Consultants',
    parents: ['professional']
  },
  {
    alias: 'artificialturf',
    title: 'Artificial Turf',
    parents: ['homeservices']
  },
  {
    alias: 'artinstallation',
    title: 'Art Installation',
    parents: ['localservices'],
    country_whitelist: ['CH', 'PH', 'AT', 'DE', 'PL', 'US', 'MY']
  },
  {
    alias: 'artmuseums',
    title: 'Art Museums',
    parents: ['museums'],
    country_blacklist: ['FR']
  },
  {
    alias: 'artrestoration',
    title: 'Art Restoration',
    parents: ['localservices']
  },
  {
    alias: 'arts',
    title: 'Arts & Entertainment',
    parents: []
  },
  {
    alias: 'artsandcrafts',
    title: 'Arts & Crafts',
    parents: ['shopping']
  },
  {
    alias: 'artschools',
    title: 'Art Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'artspacerentals',
    title: 'Art Space Rentals',
    parents: ['realestate'],
    country_whitelist: ['SG', 'IE', 'US', 'GB', 'SE', 'JP', 'HK', 'IT']
  },
  {
    alias: 'artsupplies',
    title: 'Art Supplies',
    parents: ['artsandcrafts']
  },
  {
    alias: 'arttours',
    title: 'Art Tours',
    parents: ['tours']
  },
  {
    alias: 'asianfusion',
    title: 'Asian Fusion',
    parents: ['restaurants']
  },
  {
    alias: 'assistedliving',
    title: 'Assisted Living Facilities',
    parents: ['health']
  },
  {
    alias: 'astrologers',
    title: 'Astrologers',
    parents: ['psychic_astrology']
  },
  {
    alias: 'asturian',
    title: 'Asturian',
    parents: ['restaurants'],
    country_whitelist: ['ES']
  },
  {
    alias: 'ateliers',
    title: 'Ateliers',
    parents: ['artsandcrafts'],
    country_whitelist: ['CH', 'NO', 'TR', 'AT', 'DK', 'JP', 'DE', 'BE', 'IT', 'NL']
  },
  {
    alias: 'attractionfarms',
    title: 'Attraction Farms',
    parents: ['farms'],
    country_whitelist: ['CH', 'NO', 'US', 'BR', 'SE', 'AT', 'DK', 'DE', 'PT', 'ES', 'IT']
  },
  {
    alias: 'atvrentals',
    title: 'ATV Rentals/Tours',
    parents: ['active'],
    country_whitelist: [
      'CH',
      'NO',
      'US',
      'AR',
      'SE',
      'AT',
      'MX',
      'CL',
      'DE',
      'PL',
      'BE',
      'ES',
      'FI',
      'NL'
    ]
  },
  {
    alias: 'auctionhouses',
    title: 'Auction Houses',
    parents: ['shopping'],
    country_blacklist: ['TR', 'MY', 'AR', 'PH', 'TW', 'JP', 'CL', 'HK']
  },
  {
    alias: 'audiologist',
    title: 'Audiologist',
    parents: ['physicians'],
    country_blacklist: ['CH', 'CZ', 'AT', 'DE']
  },
  {
    alias: 'audiovisualequipmentrental',
    title: 'Audio/Visual Equipment Rental',
    parents: ['partyequipmentrentals'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'SE',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NO',
      'BR',
      'AT',
      'DE',
      'BE',
      'ES',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'australian',
    title: 'Australian',
    parents: ['restaurants']
  },
  {
    alias: 'austrian',
    title: 'Austrian',
    parents: ['restaurants'],
    country_blacklist: ['DK', 'ES']
  },
  {
    alias: 'authorized_postal_representative',
    title: 'Authorized Postal Representative',
    parents: ['publicservicesgovt'],
    country_whitelist: ['NO', 'SE']
  },
  {
    alias: 'auto',
    title: 'Automotive',
    parents: []
  },
  {
    alias: 'auto_detailing',
    title: 'Auto Detailing',
    parents: ['auto'],
    country_blacklist: ['AU', 'BR', 'ES']
  },
  {
    alias: 'autocustomization',
    title: 'Auto Customization',
    parents: ['auto'],
    country_whitelist: [
      'SG',
      'CH',
      'US',
      'CA',
      'AR',
      'CZ',
      'AT',
      'MX',
      'CL',
      'DE',
      'PL',
      'PT',
      'ES'
    ]
  },
  {
    alias: 'autodamageassessment',
    title: 'Car Inspectors',
    parents: ['auto'],
    country_whitelist: ['NO', 'US', 'BR', 'SE', 'DK', 'DE', 'BE', 'PT', 'NL']
  },
  {
    alias: 'autoelectric',
    title: 'Auto Electric Services',
    parents: ['auto'],
    country_whitelist: ['BR', 'AR', 'CZ', 'MX', 'CL', 'PT', 'ES', 'IT']
  },
  {
    alias: 'autoglass',
    title: 'Auto Glass Services',
    parents: ['auto'],
    country_blacklist: ['ES']
  },
  {
    alias: 'autoinsurance',
    title: 'Auto Insurance',
    parents: ['insurance'],
    country_blacklist: [
      'SG',
      'CH',
      'IE',
      'NZ',
      'CA',
      'MY',
      'GB',
      'AT',
      'PH',
      'TW',
      'DE',
      'HK',
      'FI',
      'FR'
    ]
  },
  {
    alias: 'autoloanproviders',
    title: 'Auto Loan Providers',
    parents: ['auto'],
    country_whitelist: [
      'IE',
      'TR',
      'US',
      'CA',
      'MY',
      'GB',
      'CZ',
      'PH',
      'AU',
      'PL',
      'SG',
      'NZ',
      'PT',
      'BE',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'autopartssupplies',
    title: 'Auto Parts & Supplies',
    parents: ['auto']
  },
  {
    alias: 'autorepair',
    title: 'Auto Repair',
    parents: ['auto']
  },
  {
    alias: 'autosecurity',
    title: 'Auto Security',
    parents: ['auto'],
    country_blacklist: ['FR']
  },
  {
    alias: 'autoupholstery',
    title: 'Auto Upholstery',
    parents: ['auto']
  },
  {
    alias: 'auvergnat',
    title: 'Auvergnat',
    parents: ['french'],
    country_whitelist: ['FR']
  },
  {
    alias: 'aviationservices',
    title: 'Aviation Services',
    parents: ['auto']
  },
  {
    alias: 'awnings',
    title: 'Awnings',
    parents: ['localservices']
  },
  {
    alias: 'axethrowing',
    title: 'Axe Throwing',
    parents: ['active'],
    country_whitelist: ['US', 'GB', 'CA']
  },
  {
    alias: 'ayurveda',
    title: 'Ayurveda',
    parents: ['health']
  },
  {
    alias: 'azores',
    title: 'Azores',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'baby_gear',
    title: 'Baby Gear & Furniture',
    parents: ['shopping']
  },
  {
    alias: 'backflowservices',
    title: 'Backflow Services',
    parents: ['plumbing'],
    country_whitelist: ['US']
  },
  {
    alias: 'backshop',
    title: 'Backshop',
    parents: ['food'],
    country_whitelist: ['AT', 'CH', 'DE']
  },
  {
    alias: 'baden',
    title: 'Baden',
    parents: ['german'],
    country_whitelist: ['DE']
  },
  {
    alias: 'badminton',
    title: 'Badminton',
    parents: ['active'],
    country_blacklist: ['PL', 'BR', 'SG', 'NZ']
  },
  {
    alias: 'bagels',
    title: 'Bagels',
    parents: ['food'],
    country_blacklist: ['AU', 'ES']
  },
  {
    alias: 'baguettes',
    title: 'Baguettes',
    parents: ['restaurants'],
    country_whitelist: ['NO', 'TR', 'CZ', 'SE', 'MX', 'DE', 'PT', 'IT']
  },
  {
    alias: 'bailbondsmen',
    title: 'Bail Bondsmen',
    parents: ['localservices'],
    country_whitelist: ['US', 'PT']
  },
  {
    alias: 'bakeries',
    title: 'Bakeries',
    parents: ['food']
  },
  {
    alias: 'balloonservices',
    title: 'Balloon Services',
    parents: ['eventservices'],
    country_whitelist: [
      'SG',
      'CH',
      'IE',
      'NZ',
      'US',
      'BR',
      'CA',
      'GB',
      'AT',
      'AU',
      'DE',
      'PL',
      'BE',
      'NL'
    ]
  },
  {
    alias: 'bangladeshi',
    title: 'Bangladeshi',
    parents: ['restaurants'],
    country_blacklist: ['MX', 'DK', 'TR', 'PT', 'ES']
  },
  {
    alias: 'bankruptcy',
    title: 'Bankruptcy Law',
    parents: ['lawyers']
  },
  {
    alias: 'banks',
    title: 'Banks & Credit Unions',
    parents: ['financialservices']
  },
  {
    alias: 'barbers',
    title: 'Barbers',
    parents: ['beautysvc']
  },
  {
    alias: 'barcrawl',
    title: 'Bar Crawl',
    parents: ['nightlife'],
    country_whitelist: ['CH', 'US', 'AR', 'CZ', 'AT', 'AU', 'MX', 'DE', 'PL']
  },
  {
    alias: 'barreclasses',
    title: 'Barre Classes',
    parents: ['fitness'],
    country_whitelist: [
      'IE',
      'NZ',
      'NO',
      'US',
      'CA',
      'GB',
      'CZ',
      'AU',
      'DK',
      'BE',
      'PT',
      'FI',
      'NL'
    ]
  },
  {
    alias: 'bars',
    title: 'Bars',
    parents: ['nightlife']
  },
  {
    alias: 'bartenders',
    title: 'Bartenders',
    parents: ['eventservices'],
    country_blacklist: [
      'SG',
      'CH',
      'IE',
      'NZ',
      'NO',
      'TR',
      'MY',
      'GB',
      'AT',
      'PH',
      'TW',
      'JP',
      'PL',
      'HK',
      'FI'
    ]
  },
  {
    alias: 'bartendingschools',
    title: 'Bartending Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'baseballfields',
    title: 'Baseball Fields',
    parents: ['active'],
    country_blacklist: ['FR']
  },
  {
    alias: 'basketballcourts',
    title: 'Basketball Courts',
    parents: ['active'],
    country_blacklist: ['SE', 'IE', 'PL', 'BR', 'CA', 'NL', 'GB']
  },
  {
    alias: 'basque',
    title: 'Basque',
    parents: ['restaurants'],
    country_blacklist: ['CZ', 'SG', 'AU', 'DK', 'TR', 'PT']
  },
  {
    alias: 'bathing_area',
    title: 'Bathing Area',
    parents: ['active'],
    country_whitelist: ['CH', 'NO', 'CZ', 'SE', 'AT', 'DK', 'JP', 'DE', 'PT', 'FI']
  },
  {
    alias: 'batterystores',
    title: 'Battery Stores',
    parents: ['shopping'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'battingcages',
    title: 'Batting Cages',
    parents: ['active'],
    country_whitelist: ['SG', 'US', 'TW', 'JP']
  },
  {
    alias: 'bavarian',
    title: 'Bavarian',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'bbq',
    title: 'Barbeque',
    parents: ['restaurants'],
    country_blacklist: ['AU', 'BR']
  },
  {
    alias: 'beachbars',
    title: 'Beach Bars',
    parents: ['bars'],
    country_blacklist: [
      'IE',
      'NZ',
      'TR',
      'US',
      'CA',
      'MY',
      'GB',
      'CZ',
      'PH',
      'TW',
      'JP',
      'PL',
      'BE',
      'HK',
      'FI'
    ]
  },
  {
    alias: 'beachequipmentrental',
    title: 'Beach Equipment Rentals',
    parents: ['active']
  },
  {
    alias: 'beaches',
    title: 'Beaches',
    parents: ['active']
  },
  {
    alias: 'beachvolleyball',
    title: 'Beach Volleyball',
    parents: ['active'],
    country_blacklist: [
      'CH',
      'IE',
      'TR',
      'US',
      'CA',
      'MY',
      'GB',
      'PH',
      'TW',
      'PL',
      'NZ',
      'BE',
      'HK',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'beautysvc',
    title: 'Beauty & Spas',
    parents: []
  },
  {
    alias: 'bedbreakfast',
    title: 'Bed & Breakfast',
    parents: ['hotelstravel']
  },
  {
    alias: 'beer_and_wine',
    title: 'Beer, Wine & Spirits',
    parents: ['food']
  },
  {
    alias: 'beerbar',
    title: 'Beer Bar',
    parents: ['bars']
  },
  {
    alias: 'beergarden',
    title: 'Beer Garden',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'CZ', 'AT', 'DE']
  },
  {
    alias: 'beergardens',
    title: 'Beer Gardens',
    parents: ['nightlife'],
    country_whitelist: [
      'IE',
      'NO',
      'US',
      'CA',
      'GB',
      'CZ',
      'SE',
      'AU',
      'MX',
      'DK',
      'JP',
      'PL',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'beerhall',
    title: 'Beer Hall',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'beertours',
    title: 'Beer Tours',
    parents: ['tours']
  },
  {
    alias: 'behavioranalysts',
    title: 'Behavior Analysts',
    parents: ['health']
  },
  {
    alias: 'beira',
    title: 'Beira',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'beisl',
    title: 'Beisl',
    parents: ['restaurants'],
    country_whitelist: ['AT']
  },
  {
    alias: 'belgian',
    title: 'Belgian',
    parents: ['restaurants']
  },
  {
    alias: 'bento',
    title: 'Bento',
    parents: ['food'],
    country_whitelist: ['JP']
  },
  {
    alias: 'berrichon',
    title: 'Berrichon',
    parents: ['french'],
    country_whitelist: ['FR']
  },
  {
    alias: 'bespoke',
    title: 'Bespoke Clothing',
    parents: ['shopping'],
    country_blacklist: ['TR', 'BR', 'AR', 'SE', 'MX', 'JP', 'CL', 'FI']
  },
  {
    alias: 'bettingcenters',
    title: 'Betting Centers',
    parents: ['arts'],
    country_blacklist: ['SG', 'NZ', 'NO', 'US', 'CA', 'FI', 'FR']
  },
  {
    alias: 'beverage_stores',
    title: 'Beverage Store',
    parents: ['food'],
    country_whitelist: ['CH', 'TR', 'US', 'AT', 'AU', 'CL', 'DE', 'BE', 'PT', 'ES', 'IT', 'NL']
  },
  {
    alias: 'bicyclepaths',
    title: 'Bicycle Paths',
    parents: ['active'],
    country_blacklist: ['CH', 'TR', 'US', 'CA', 'MY', 'AT', 'PH', 'TW', 'DE', 'HK', 'IT', 'FR']
  },
  {
    alias: 'bicycles',
    title: 'Bicycles',
    parents: [],
    country_whitelist: ['PL', 'PT', 'CZ', 'DK']
  },
  {
    alias: 'bike_repair_maintenance',
    title: 'Bike Repair/Maintenance',
    parents: ['localservices']
  },
  {
    alias: 'bikeassociations',
    title: 'Bike Associations',
    parents: ['bicycles'],
    country_whitelist: ['PT', 'DK']
  },
  {
    alias: 'bikeparking',
    title: 'Bike Parking',
    parents: ['active'],
    country_blacklist: ['FR']
  },
  {
    alias: 'bikerentals',
    title: 'Bike Rentals',
    parents: ['active']
  },
  {
    alias: 'bikerepair',
    title: 'Bike Repair',
    parents: ['bicycles'],
    country_whitelist: ['PT', 'DK']
  },
  {
    alias: 'bikes',
    title: 'Bikes',
    parents: ['sportgoods']
  },
  {
    alias: 'bikesharing',
    title: 'Bike Sharing',
    parents: ['transport']
  },
  {
    alias: 'bikeshop',
    title: 'Bike Shop',
    parents: ['bicycles'],
    country_whitelist: ['PT', 'DK']
  },
  {
    alias: 'biketours',
    title: 'Bike tours',
    parents: ['tours']
  },
  {
    alias: 'billingservices',
    title: 'Billing Services',
    parents: ['professional'],
    country_whitelist: ['US', 'SE']
  },
  {
    alias: 'bingo',
    title: 'Bingo Halls',
    parents: ['arts'],
    country_whitelist: [
      'IE',
      'NZ',
      'NO',
      'US',
      'BR',
      'AR',
      'GB',
      'SE',
      'AU',
      'MX',
      'CL',
      'DK',
      'ES',
      'FI',
      'IT'
    ]
  },
  {
    alias: 'biohazardcleanup',
    title: 'Biohazard Cleanup',
    parents: ['localservices']
  },
  {
    alias: 'birdshops',
    title: 'Bird Shops',
    parents: ['petstore'],
    country_whitelist: ['SG', 'NO', 'US', 'SE', 'DK', 'DE', 'BE', 'ES', 'IT', 'NL']
  },
  {
    alias: 'bistros',
    title: 'Bistros',
    parents: ['restaurants'],
    country_blacklist: ['US']
  },
  {
    alias: 'blacksea',
    title: 'Black Sea',
    parents: ['restaurants'],
    country_whitelist: ['TR']
  },
  {
    alias: 'blinds',
    title: 'Shades & Blinds',
    parents: ['homeservices']
  },
  {
    alias: 'blooddonation',
    title: 'Blood & Plasma Donation Centers',
    parents: ['health'],
    country_blacklist: ['SG', 'IE', 'CA', 'MY', 'GB', 'PH', 'TW', 'BE', 'HK', 'NL']
  },
  {
    alias: 'blowfish',
    title: 'Blowfish',
    parents: ['japanese'],
    country_whitelist: ['JP']
  },
  {
    alias: 'blowoutservices',
    title: 'Blow Dry/Out Services',
    parents: ['hair'],
    country_whitelist: ['IE', 'NO', 'TR', 'US', 'CA', 'GB', 'CZ', 'AU', 'DK', 'PT', 'FR']
  },
  {
    alias: 'boatcharters',
    title: 'Boat Charters',
    parents: ['eventservices'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'boatdealers',
    title: 'Boat Dealers',
    parents: ['auto'],
    country_blacklist: ['TR', 'BR', 'MY', 'PH', 'TW', 'CL', 'JP', 'HK', 'FI', 'IT', 'FR']
  },
  {
    alias: 'boating',
    title: 'Boating',
    parents: ['active']
  },
  {
    alias: 'boatpartsandsupplies',
    title: 'Boat Parts & Supplies',
    parents: ['auto']
  },
  {
    alias: 'boatrepair',
    title: 'Boat Repair',
    parents: ['professional'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'boattours',
    title: 'Boat Tours',
    parents: ['tours']
  },
  {
    alias: 'bobsledding',
    title: 'Bobsledding',
    parents: ['active']
  },
  {
    alias: 'bocceball',
    title: 'Bocce Ball',
    parents: ['active']
  },
  {
    alias: 'bodycontouring',
    title: 'Body Contouring',
    parents: ['health'],
    country_blacklist: ['IT', 'FR']
  },
  {
    alias: 'bodyshops',
    title: 'Body Shops',
    parents: ['auto']
  },
  {
    alias: 'bookbinding',
    title: 'Bookbinding',
    parents: ['localservices']
  },
  {
    alias: 'bookkeepers',
    title: 'Bookkeepers',
    parents: ['professional'],
    country_whitelist: [
      'SG',
      'IE',
      'NZ',
      'US',
      'CA',
      'MY',
      'GB',
      'CZ',
      'PH',
      'AU',
      'TW',
      'BE',
      'HK',
      'NL'
    ]
  },
  {
    alias: 'bookstores',
    title: 'Bookstores',
    parents: ['media']
  },
  {
    alias: 'bootcamps',
    title: 'Boot Camps',
    parents: ['fitness'],
    country_whitelist: ['NZ', 'NO', 'US', 'CZ', 'SE', 'AU', 'DK', 'PL', 'PT', 'ES', 'IT']
  },
  {
    alias: 'boudoirphotography',
    title: 'Boudoir Photography',
    parents: ['photographers'],
    country_whitelist: ['US', 'SE', 'DE', 'CA']
  },
  {
    alias: 'bouncehouserentals',
    title: 'Bounce House Rentals',
    parents: ['partyequipmentrentals'],
    country_whitelist: [
      'CH',
      'IE',
      'NZ',
      'NO',
      'US',
      'CA',
      'GB',
      'SE',
      'AT',
      'AU',
      'DK',
      'DE',
      'PL',
      'BE',
      'NL'
    ]
  },
  {
    alias: 'bourguignon',
    title: 'Bourguignon',
    parents: ['french'],
    country_whitelist: ['FR']
  },
  {
    alias: 'bowling',
    title: 'Bowling',
    parents: ['active']
  },
  {
    alias: 'boxing',
    title: 'Boxing',
    parents: ['fitness'],
    country_blacklist: ['SE', 'SG', 'AU', 'PL', 'TR', 'ES', 'FI']
  },
  {
    alias: 'brasseries',
    title: 'Brasseries',
    parents: ['restaurants'],
    country_blacklist: ['MX', 'AR']
  },
  {
    alias: 'brazilian',
    title: 'Brazilian',
    parents: ['restaurants']
  },
  {
    alias: 'brazilianempanadas',
    title: 'Brazilian Empanadas',
    parents: ['brazilian'],
    country_whitelist: ['BR']
  },
  {
    alias: 'brazilianjiujitsu',
    title: 'Brazilian Jiu-jitsu',
    parents: ['martialarts']
  },
  {
    alias: 'breakfast_brunch',
    title: 'Breakfast & Brunch',
    parents: ['restaurants']
  },
  {
    alias: 'breweries',
    title: 'Breweries',
    parents: ['food']
  },
  {
    alias: 'brewingsupplies',
    title: 'Brewing Supplies',
    parents: ['shopping'],
    country_blacklist: ['JP', 'AR', 'HK', 'CL']
  },
  {
    alias: 'brewpubs',
    title: 'Brewpubs',
    parents: ['breweries'],
    country_blacklist: ['MX', 'CL', 'ES', 'IT', 'AR', 'FR']
  },
  {
    alias: 'bridal',
    title: 'Bridal',
    parents: ['shopping']
  },
  {
    alias: 'british',
    title: 'British',
    parents: ['restaurants'],
    country_blacklist: ['FI']
  },
  {
    alias: 'bubblesoccer',
    title: 'Bubble Soccer',
    parents: ['active']
  },
  {
    alias: 'bubbletea',
    title: 'Bubble Tea',
    parents: ['food'],
    country_blacklist: ['CH', 'AT', 'MX', 'TR', 'ES', 'AR']
  },
  {
    alias: 'buddhist_temples',
    title: 'Buddhist Temples',
    parents: ['religiousorgs']
  },
  {
    alias: 'buffets',
    title: 'Buffets',
    parents: ['restaurants']
  },
  {
    alias: 'buildingsupplies',
    title: 'Building Supplies',
    parents: ['homeservices']
  },
  {
    alias: 'bulgarian',
    title: 'Bulgarian',
    parents: ['restaurants'],
    country_blacklist: ['SG', 'NZ', 'NO', 'TR', 'BR', 'CA', 'DK', 'NL']
  },
  {
    alias: 'bulkbilling',
    title: 'Bulk Billing',
    parents: ['medcenters'],
    country_whitelist: ['AU']
  },
  {
    alias: 'bungeejumping',
    title: 'Bungee Jumping',
    parents: ['active']
  },
  {
    alias: 'burgers',
    title: 'Burgers',
    parents: ['restaurants']
  },
  {
    alias: 'burmese',
    title: 'Burmese',
    parents: ['restaurants'],
    country_blacklist: ['CZ', 'DK', 'TR', 'PT', 'ES', 'FI']
  },
  {
    alias: 'buses',
    title: 'Buses',
    parents: ['transport']
  },
  {
    alias: 'businessconsulting',
    title: 'Business Consulting',
    parents: ['professional'],
    country_blacklist: ['CZ', 'TW', 'TR', 'HK', 'FI']
  },
  {
    alias: 'businessfinancing',
    title: 'Business Financing',
    parents: ['financialservices']
  },
  {
    alias: 'businesslawyers',
    title: 'Business Law',
    parents: ['lawyers'],
    country_whitelist: ['IE', 'NO', 'US', 'BR', 'CA', 'GB', 'CZ', 'DK', 'PL', 'PT']
  },
  {
    alias: 'busrental',
    title: 'Bus Rental',
    parents: ['localservices']
  },
  {
    alias: 'busstations',
    title: 'Bus Stations',
    parents: ['transport'],
    country_blacklist: ['FR']
  },
  {
    alias: 'bustours',
    title: 'Bus Tours',
    parents: ['tours']
  },
  {
    alias: 'butcher',
    title: 'Butcher',
    parents: ['food'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'c_and_mh',
    title: 'Counseling & Mental Health',
    parents: ['health']
  },
  {
    alias: 'cabaret',
    title: 'Cabaret',
    parents: ['arts'],
    country_blacklist: ['MX', 'JP', 'CL', 'HK', 'AR']
  },
  {
    alias: 'cabinetry',
    title: 'Cabinetry',
    parents: ['homeservices'],
    country_blacklist: ['MX', 'JP', 'CL', 'HK', 'AR']
  },
  {
    alias: 'cablecars',
    title: 'Cable Cars',
    parents: ['transport'],
    country_whitelist: ['CH', 'NZ', 'TR', 'BR', 'US', 'CZ', 'AT', 'JP', 'DE', 'PT', 'IT', 'FR']
  },
  {
    alias: 'cafes',
    title: 'Cafes',
    parents: ['restaurants'],
    country_blacklist: ['MX', 'AR', 'ES', 'FI']
  },
  {
    alias: 'cafeteria',
    title: 'Cafeteria',
    parents: ['restaurants'],
    country_blacklist: ['SE', 'SG', 'IE', 'NZ', 'BR', 'CA', 'FR']
  },
  {
    alias: 'cajun',
    title: 'Cajun/Creole',
    parents: ['restaurants'],
    country_blacklist: ['AU', 'PT', 'ES', 'SG']
  },
  {
    alias: 'cakeshop',
    title: 'Patisserie/Cake Shop',
    parents: ['food']
  },
  {
    alias: 'calabrian',
    title: 'Calabrian',
    parents: ['italian'],
    country_whitelist: ['IT', 'US', 'FR']
  },
  {
    alias: 'calligraphy',
    title: 'Calligraphy',
    parents: ['localservices'],
    country_whitelist: ['TR', 'BR', 'BE', 'ES', 'US', 'IT', 'NL']
  },
  {
    alias: 'cambodian',
    title: 'Cambodian',
    parents: ['restaurants'],
    country_blacklist: ['CZ', 'DK', 'TR', 'PT', 'ES', 'FI']
  },
  {
    alias: 'campgrounds',
    title: 'Campgrounds',
    parents: ['hotelstravel']
  },
  {
    alias: 'candlestores',
    title: 'Candle Stores',
    parents: ['homeandgarden']
  },
  {
    alias: 'candy',
    title: 'Candy Stores',
    parents: ['gourmet']
  },
  {
    alias: 'cannabis_clinics',
    title: 'Cannabis Clinics',
    parents: ['health'],
    country_whitelist: ['IE', 'TR', 'US', 'CA', 'GB', 'PL', 'IT', 'NL']
  },
  {
    alias: 'cannabiscollective',
    title: 'Cannabis Collective',
    parents: ['health'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'cannabisdispensaries',
    title: 'Cannabis Dispensaries',
    parents: ['shopping'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'cannabisreferrals',
    title: 'Medical Cannabis Referrals',
    parents: ['health'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'cannabistours',
    title: 'Cannabis Tours',
    parents: ['cannabis_clinics'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'canteen',
    title: 'Canteen',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'NO', 'CZ', 'AT', 'DK', 'JP', 'DE', 'PL', 'BE', 'FI', 'IT', 'NL']
  },
  {
    alias: 'cantonese',
    title: 'Cantonese',
    parents: ['chinese'],
    country_whitelist: [
      'US',
      'CA',
      'MY',
      'AR',
      'GB',
      'SE',
      'AU',
      'TW',
      'SG',
      'NZ',
      'JP',
      'BE',
      'HK',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'canyoneering',
    title: 'Canyoneering',
    parents: ['active']
  },
  {
    alias: 'car_dealers',
    title: 'Car Dealers',
    parents: ['auto']
  },
  {
    alias: 'carauctions',
    title: 'Car Auctions',
    parents: ['auto'],
    country_whitelist: ['SG', 'PH', 'TW', 'US', 'HK', 'MY']
  },
  {
    alias: 'carbrokers',
    title: 'Car Brokers',
    parents: ['auto'],
    country_whitelist: ['AU', 'AR', 'US', 'NZ']
  },
  {
    alias: 'carbuyers',
    title: 'Car Buyers',
    parents: ['auto'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'CZ',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'DE',
      'BE',
      'NL'
    ]
  },
  {
    alias: 'cardioclasses',
    title: 'Cardio Classes',
    parents: ['fitness']
  },
  {
    alias: 'cardiology',
    title: 'Cardiologists',
    parents: ['physicians']
  },
  {
    alias: 'careercounseling',
    title: 'Career Counseling',
    parents: ['professional']
  },
  {
    alias: 'caribbean',
    title: 'Caribbean',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'PT', 'FI']
  },
  {
    alias: 'caricatures',
    title: 'Caricatures',
    parents: ['eventservices'],
    country_whitelist: ['SG', 'NO', 'US', 'BR', 'SE', 'DK', 'PL', 'ES', 'IT']
  },
  {
    alias: 'carousels',
    title: 'Carousels',
    parents: ['active']
  },
  {
    alias: 'carpenters',
    title: 'Carpenters',
    parents: ['homeservices'],
    country_blacklist: ['TR']
  },
  {
    alias: 'carpet_cleaning',
    title: 'Carpet Cleaning',
    parents: ['localservices']
  },
  {
    alias: 'carpetdyeing',
    title: 'Carpet Dyeing',
    parents: ['localservices'],
    country_whitelist: ['SG', 'IE', 'NZ', 'US', 'CA', 'MY', 'GB', 'PH', 'AU', 'PL']
  },
  {
    alias: 'carpeting',
    title: 'Carpeting',
    parents: ['homeservices']
  },
  {
    alias: 'carpetinstallation',
    title: 'Carpet Installation',
    parents: ['homeservices']
  },
  {
    alias: 'carrental',
    title: 'Car Rental',
    parents: ['hotelstravel']
  },
  {
    alias: 'carshares',
    title: 'Car Share Services',
    parents: ['auto'],
    country_blacklist: ['SG', 'TR', 'BR', 'TW', 'JP', 'BE', 'HK', 'PT', 'FI', 'NL']
  },
  {
    alias: 'carwash',
    title: 'Car Wash',
    parents: ['auto']
  },
  {
    alias: 'carwindowtinting',
    title: 'Car Window Tinting',
    parents: ['autoglass'],
    country_whitelist: ['SG', 'IE', 'NZ', 'US', 'CA', 'GB', 'AU', 'BE', 'ES', 'IT', 'NL']
  },
  {
    alias: 'casinos',
    title: 'Casinos',
    parents: ['arts'],
    country_blacklist: ['HK', 'JP']
  },
  {
    alias: 'castles',
    title: 'Castles',
    parents: ['arts'],
    country_whitelist: [
      'CH',
      'NO',
      'GB',
      'CZ',
      'SE',
      'AT',
      'DK',
      'JP',
      'DE',
      'BE',
      'PT',
      'ES',
      'FI',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'catalan',
    title: 'Catalan',
    parents: ['restaurants'],
    country_whitelist: ['TR', 'US', 'AR', 'MX', 'CL', 'PT', 'ES', 'IT', 'FR']
  },
  {
    alias: 'catering',
    title: 'Caterers',
    parents: ['eventservices']
  },
  {
    alias: 'cellphoneaccessories',
    title: 'Mobile Phone Accessories',
    parents: ['shopping'],
    country_blacklist: ['PH', 'PL', 'TR', 'FI', 'MY']
  },
  {
    alias: 'centralbrazilian',
    title: 'Central Brazilian',
    parents: ['brazilian'],
    country_whitelist: ['BR']
  },
  {
    alias: 'ceremonialclothing',
    title: 'Ceremonial Clothing',
    parents: ['fashion'],
    country_blacklist: ['CH', 'AT', 'JP', 'DE', 'FR']
  },
  {
    alias: 'challengecourses',
    title: 'Challenge Courses',
    parents: ['active'],
    country_whitelist: [
      'SG',
      'CH',
      'NZ',
      'NO',
      'US',
      'CA',
      'CZ',
      'SE',
      'AT',
      'DK',
      'DE',
      'PL',
      'HK',
      'FR'
    ]
  },
  {
    alias: 'champagne_bars',
    title: 'Champagne Bars',
    parents: ['bars'],
    country_blacklist: ['AU']
  },
  {
    alias: 'cheekufta',
    title: 'Chee Kufta',
    parents: ['turkish'],
    country_whitelist: ['TR', 'DE']
  },
  {
    alias: 'cheerleading',
    title: 'Cheerleading',
    parents: ['specialtyschools'],
    country_whitelist: ['SE', 'CH', 'AT', 'DE', 'US', 'CA']
  },
  {
    alias: 'cheese',
    title: 'Cheese Shops',
    parents: ['gourmet']
  },
  {
    alias: 'cheesesteaks',
    title: 'Cheesesteaks',
    parents: ['restaurants'],
    country_whitelist: ['AU', 'IE', 'PL', 'US', 'CA', 'NL', 'GB']
  },
  {
    alias: 'cheesetastingclasses',
    title: 'Cheese Tasting Classes',
    parents: ['tastingclasses']
  },
  {
    alias: 'chicken_wings',
    title: 'Chicken Wings',
    parents: ['restaurants'],
    country_blacklist: ['CH', 'NO', 'CL', 'DK', 'JP', 'BE', 'PT', 'ES', 'FI', 'IT', 'NL', 'FR']
  },
  {
    alias: 'chickenshop',
    title: 'Chicken Shop',
    parents: ['restaurants'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'childbirthedu',
    title: 'Childbirth Education',
    parents: ['specialtyschools'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'SE',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'DE',
      'BE',
      'ES',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'childcare',
    title: 'Child Care & Day Care',
    parents: ['localservices']
  },
  {
    alias: 'childcloth',
    title: "Children's Clothing",
    parents: ['fashion']
  },
  {
    alias: 'childproofing',
    title: 'Childproofing',
    parents: ['homeservices'],
    country_whitelist: ['US', 'BR', 'PT']
  },
  {
    alias: 'childrensmuseums',
    title: "Children's Museums",
    parents: ['museums'],
    country_blacklist: ['FR']
  },
  {
    alias: 'chilean',
    title: 'Chilean',
    parents: ['restaurants'],
    country_whitelist: ['BR', 'FR', 'CL', 'FI']
  },
  {
    alias: 'chimneycakes',
    title: 'Chimney Cakes',
    parents: ['food'],
    country_whitelist: ['PL', 'US', 'CZ', 'FR']
  },
  {
    alias: 'chimneysweeps',
    title: 'Chimney Sweeps',
    parents: ['homeservices'],
    country_blacklist: ['MX']
  },
  {
    alias: 'chinese',
    title: 'Chinese',
    parents: ['restaurants']
  },
  {
    alias: 'chinesebazaar',
    title: 'Chinese Bazaar',
    parents: ['shopping'],
    country_whitelist: ['PT', 'ES']
  },
  {
    alias: 'chinesemartialarts',
    title: 'Chinese Martial Arts',
    parents: ['martialarts']
  },
  {
    alias: 'chiropractors',
    title: 'Chiropractors',
    parents: ['health']
  },
  {
    alias: 'chocolate',
    title: 'Chocolatiers & Shops',
    parents: ['gourmet']
  },
  {
    alias: 'choirs',
    title: 'Choirs',
    parents: ['arts'],
    country_blacklist: ['SG', 'NZ', 'US', 'BR', 'CA', 'CZ', 'PL', 'BE', 'NL']
  },
  {
    alias: 'christmastrees',
    title: 'Christmas Trees',
    parents: ['homeandgarden']
  },
  {
    alias: 'churches',
    title: 'Churches',
    parents: ['religiousorgs']
  },
  {
    alias: 'churros',
    title: 'Churros',
    parents: ['food'],
    country_whitelist: ['MX', 'CL', 'BR', 'PT', 'ES', 'AR']
  },
  {
    alias: 'cideries',
    title: 'Cideries',
    parents: ['food'],
    country_blacklist: ['NO', 'TR', 'DK', 'JP', 'BE', 'IT', 'NL', 'FR']
  },
  {
    alias: 'cigarbars',
    title: 'Cigar Bars',
    parents: ['bars'],
    country_whitelist: ['US']
  },
  {
    alias: 'circuittraininggyms',
    title: 'Circuit Training Gyms',
    parents: ['gyms'],
    country_whitelist: ['US']
  },
  {
    alias: 'circusschools',
    title: 'Circus Schools',
    parents: ['specialtyschools'],
    country_whitelist: ['BR', 'AR', 'MX', 'CL', 'PT', 'ES', 'FI', 'FR']
  },
  {
    alias: 'civiccenter',
    title: 'Civic Center',
    parents: ['publicservicesgovt'],
    country_whitelist: ['US']
  },
  {
    alias: 'climbing',
    title: 'Climbing',
    parents: ['active']
  },
  {
    alias: 'clockrepair',
    title: 'Clock Repair',
    parents: ['localservices'],
    country_blacklist: ['MX', 'CL', 'JP', 'IT', 'AR']
  },
  {
    alias: 'clothingrental',
    title: 'Clothing Rental',
    parents: ['fashion']
  },
  {
    alias: 'clowns',
    title: 'Clowns',
    parents: ['eventservices'],
    country_blacklist: ['CZ', 'SG', 'SE', 'PL', 'TR', 'FI']
  },
  {
    alias: 'clubcrawl',
    title: 'Club Crawl',
    parents: ['nightlife'],
    country_whitelist: ['US']
  },
  {
    alias: 'cocktailbars',
    title: 'Cocktail Bars',
    parents: ['bars']
  },
  {
    alias: 'coffee',
    title: 'Coffee & Tea',
    parents: ['food']
  },
  {
    alias: 'coffeeroasteries',
    title: 'Coffee Roasteries',
    parents: ['food']
  },
  {
    alias: 'coffeeshops',
    title: 'Coffeeshops',
    parents: ['nightlife'],
    country_whitelist: ['NL', 'PT']
  },
  {
    alias: 'coffeeteasupplies',
    title: 'Coffee & Tea Supplies',
    parents: ['food'],
    country_blacklist: ['US', 'BR', 'MY', 'AR', 'CZ', 'PH', 'MX', 'CL', 'PT', 'ES', 'FI', 'IT']
  },
  {
    alias: 'collegecounseling',
    title: 'College Counseling',
    parents: ['education'],
    country_whitelist: ['US', 'PT']
  },
  {
    alias: 'collegeuniv',
    title: 'Colleges & Universities',
    parents: ['education']
  },
  {
    alias: 'colombian',
    title: 'Colombian',
    parents: ['latin'],
    country_whitelist: ['US', 'CA', 'AR', 'MX', 'CL', 'BE', 'ES', 'FI', 'FR']
  },
  {
    alias: 'colonics',
    title: 'Colonics',
    parents: ['health'],
    country_whitelist: ['SG', 'IE', 'NZ', 'NO', 'US', 'CA', 'GB', 'AU', 'DK']
  },
  {
    alias: 'comedyclubs',
    title: 'Comedy Clubs',
    parents: ['nightlife'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'comfortfood',
    title: 'Comfort Food',
    parents: ['restaurants'],
    country_whitelist: ['MX', 'JP', 'CL', 'US', 'CA', 'FI', 'AR']
  },
  {
    alias: 'comicbooks',
    title: 'Comic Books',
    parents: ['media']
  },
  {
    alias: 'commercialrealestate',
    title: 'Commercial Real Estate',
    parents: ['realestate'],
    country_whitelist: ['NO', 'US', 'BR', 'CA', 'CZ', 'AU', 'DK', 'DE', 'PL', 'BE', 'PT', 'NL']
  },
  {
    alias: 'commissionedartists',
    title: 'Commissioned Artists',
    parents: ['professional'],
    country_blacklist: ['FR']
  },
  {
    alias: 'communitybookbox',
    title: 'Community Book Box',
    parents: ['localservices'],
    country_blacklist: ['MY', 'AR', 'PH', 'MX', 'CL', 'JP', 'ES', 'IT', 'FR']
  },
  {
    alias: 'communitycenters',
    title: 'Community Centers',
    parents: ['publicservicesgovt'],
    country_whitelist: ['IE', 'NO', 'US', 'BR', 'CA', 'GB', 'CZ', 'SE', 'DK', 'PT']
  },
  {
    alias: 'communitygardens',
    title: 'Community Gardens',
    parents: ['localservices'],
    country_whitelist: [
      'IE',
      'US',
      'CA',
      'GB',
      'SE',
      'AU',
      'DK',
      'SG',
      'NZ',
      'NO',
      'BR',
      'DE',
      'PT',
      'ES',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'computers',
    title: 'Computers',
    parents: ['shopping']
  },
  {
    alias: 'concept_shops',
    title: 'Concept Shops',
    parents: ['shopping'],
    country_blacklist: [
      'SG',
      'NZ',
      'TR',
      'BR',
      'US',
      'CA',
      'AR',
      'SE',
      'CL',
      'JP',
      'PL',
      'HK',
      'ES',
      'IT'
    ]
  },
  {
    alias: 'conciergemedicine',
    title: 'Concierge Medicine',
    parents: ['health'],
    country_whitelist: ['US']
  },
  {
    alias: 'condominiums',
    title: 'Condominiums',
    parents: ['realestate'],
    country_blacklist: ['AU', 'NZ']
  },
  {
    alias: 'congee',
    title: 'Congee',
    parents: ['chinese'],
    country_whitelist: ['MY', 'HK', 'SG', 'TW']
  },
  {
    alias: 'consumerlaw',
    title: 'Consumer Law',
    parents: ['lawyers'],
    country_blacklist: ['NO', 'TR', 'CZ', 'SE', 'TW', 'DK', 'JP', 'HK', 'ES', 'FI']
  },
  {
    alias: 'contractlaw',
    title: 'Contract Law',
    parents: ['lawyers'],
    country_blacklist: ['FR']
  },
  {
    alias: 'contractors',
    title: 'Contractors',
    parents: ['homeservices']
  },
  {
    alias: 'convenience',
    title: 'Convenience Stores',
    parents: ['food'],
    country_blacklist: ['FI']
  },
  {
    alias: 'conveyorsushi',
    title: 'Conveyor Belt Sushi',
    parents: ['japanese'],
    country_whitelist: [
      'SG',
      'CH',
      'US',
      'SE',
      'AT',
      'TW',
      'JP',
      'DE',
      'PL',
      'BE',
      'HK',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'cookingclasses',
    title: 'Cooking Classes',
    parents: ['artsandcrafts']
  },
  {
    alias: 'cookingschools',
    title: 'Cooking Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'copyshops',
    title: 'Printing Services',
    parents: ['localservices']
  },
  {
    alias: 'corsican',
    title: 'Corsican',
    parents: ['restaurants'],
    country_whitelist: ['BE', 'FR']
  },
  {
    alias: 'cosmeticdentists',
    title: 'Cosmetic Dentists',
    parents: ['dentists'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'cosmetics',
    title: 'Cosmetics & Beauty Supply',
    parents: ['shopping', 'beautysvc']
  },
  {
    alias: 'cosmeticsurgeons',
    title: 'Cosmetic Surgeons',
    parents: ['physicians']
  },
  {
    alias: 'cosmetology_schools',
    title: 'Cosmetology Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'costumes',
    title: 'Costumes',
    parents: ['artsandcrafts']
  },
  {
    alias: 'countertopinstall',
    title: 'Countertop Installation',
    parents: ['homeservices'],
    country_blacklist: ['CZ', 'CH', 'AT', 'DE', 'IT', 'FR']
  },
  {
    alias: 'countryclubs',
    title: 'Country Clubs',
    parents: ['arts'],
    country_whitelist: ['SG', 'US', 'BR', 'AR', 'MX', 'TW', 'CL', 'JP', 'HK', 'ES', 'IT']
  },
  {
    alias: 'countrydancehalls',
    title: 'Country Dance Halls',
    parents: ['nightlife'],
    country_whitelist: ['US', 'SE']
  },
  {
    alias: 'couriers',
    title: 'Couriers & Delivery Services',
    parents: ['localservices']
  },
  {
    alias: 'courthouses',
    title: 'Courthouses',
    parents: ['publicservicesgovt'],
    country_blacklist: [
      'IE',
      'TR',
      'CA',
      'MY',
      'AR',
      'GB',
      'PH',
      'MX',
      'TW',
      'SG',
      'NZ',
      'CL',
      'JP',
      'HK',
      'ES',
      'FI'
    ]
  },
  {
    alias: 'courtreporters',
    title: 'Court Reporters',
    parents: ['legalservices'],
    country_whitelist: ['NL', 'BE', 'US', 'CA']
  },
  {
    alias: 'cprclasses',
    title: 'CPR Classes',
    parents: ['specialtyschools'],
    country_whitelist: ['AU', 'US', 'PT', 'SE']
  },
  {
    alias: 'craneservices',
    title: 'Crane Services',
    parents: ['localservices'],
    country_blacklist: ['TR', 'MY', 'PH', 'TW', 'JP', 'HK', 'FI', 'FR']
  },
  {
    alias: 'cremationservices',
    title: 'Cremation Services',
    parents: ['funeralservices'],
    country_blacklist: ['TR']
  },
  {
    alias: 'creperies',
    title: 'Creperies',
    parents: ['restaurants']
  },
  {
    alias: 'criminaldefense',
    title: 'Criminal Defense Law',
    parents: ['lawyers']
  },
  {
    alias: 'crisispregnancycenters',
    title: 'Crisis Pregnancy Centers',
    parents: ['health'],
    country_whitelist: ['US']
  },
  {
    alias: 'cryotherapy',
    title: 'Cryotherapy',
    parents: ['health'],
    country_whitelist: ['IT', 'US']
  },
  {
    alias: 'csa',
    title: 'CSA',
    parents: ['food'],
    country_whitelist: ['CH', 'AT', 'DE', 'US', 'FR']
  },
  {
    alias: 'cuban',
    title: 'Cuban',
    parents: ['restaurants'],
    country_blacklist: ['SG', 'TR', 'DK']
  },
  {
    alias: 'cucinacampana',
    title: 'Cucina campana',
    parents: ['italian'],
    country_whitelist: ['IT']
  },
  {
    alias: 'culturalcenter',
    title: 'Cultural Center',
    parents: ['arts'],
    country_blacklist: ['IE', 'TR', 'NZ', 'CA']
  },
  {
    alias: 'cupcakes',
    title: 'Cupcakes',
    parents: ['food'],
    country_blacklist: ['TR', 'CZ', 'ES', 'CA']
  },
  {
    alias: 'currencyexchange',
    title: 'Currency Exchange',
    parents: ['financialservices']
  },
  {
    alias: 'currysausage',
    title: 'Curry Sausage',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'customcakes',
    title: 'Custom Cakes',
    parents: ['food'],
    country_blacklist: ['CH', 'FR', 'AT', 'DE']
  },
  {
    alias: 'custommerchandise',
    title: 'Customized Merchandise',
    parents: ['shopping']
  },
  {
    alias: 'customsbrokers',
    title: 'Customs Brokers',
    parents: ['professional']
  },
  {
    alias: 'cyclingclasses',
    title: 'Cycling Classes',
    parents: ['active'],
    country_blacklist: ['IE', 'MX', 'NZ', 'BR', 'PT', 'CA', 'AR']
  },
  {
    alias: 'cypriot',
    title: 'Cypriot',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'czech',
    title: 'Czech',
    parents: ['restaurants'],
    country_whitelist: [
      'IE',
      'NO',
      'US',
      'CA',
      'GB',
      'CZ',
      'SE',
      'AU',
      'DK',
      'DE',
      'PL',
      'BE',
      'FI',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'czechslovakian',
    title: 'Czech/Slovakian',
    parents: ['restaurants'],
    country_whitelist: ['MX', 'AR', 'PT']
  },
  {
    alias: 'dagashi',
    title: 'Dagashi',
    parents: ['gourmet'],
    country_whitelist: ['JP']
  },
  {
    alias: 'damagerestoration',
    title: 'Damage Restoration',
    parents: ['homeservices'],
    country_whitelist: ['SG', 'AU', 'NZ', 'TR', 'PT', 'US', 'CA']
  },
  {
    alias: 'dance_schools',
    title: 'Dance Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'danceclubs',
    title: 'Dance Clubs',
    parents: ['nightlife']
  },
  {
    alias: 'dancerestaurants',
    title: 'Dance Restaurants',
    parents: ['nightlife'],
    country_whitelist: ['FI']
  },
  {
    alias: 'dancestudio',
    title: 'Dance Studios',
    parents: ['fitness']
  },
  {
    alias: 'dancewear',
    title: 'Dance Wear',
    parents: ['sportswear']
  },
  {
    alias: 'danish',
    title: 'Danish',
    parents: ['restaurants'],
    country_whitelist: ['NO', 'FR', 'DK', 'SE']
  },
  {
    alias: 'dartarenas',
    title: 'Dart Arenas',
    parents: ['active'],
    country_whitelist: ['CH', 'AT', 'DE', 'PL', 'US']
  },
  {
    alias: 'datarecovery',
    title: 'Data Recovery',
    parents: ['itservices'],
    country_blacklist: ['NL', 'PH', 'TW', 'JP', 'HK', 'FI', 'MY']
  },
  {
    alias: 'daycamps',
    title: 'Day Camps',
    parents: ['active'],
    country_blacklist: ['MX', 'JP', 'CL', 'HK', 'AR']
  },
  {
    alias: 'debtrelief',
    title: 'Debt Relief Services',
    parents: ['financialservices'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'decksrailing',
    title: 'Decks & Railing',
    parents: ['homeservices']
  },
  {
    alias: 'delicatessen',
    title: 'Delicatessen',
    parents: ['food'],
    country_blacklist: ['US']
  },
  {
    alias: 'delis',
    title: 'Delis',
    parents: ['restaurants'],
    country_blacklist: ['SE', 'CL', 'BE', 'PT', 'IT', 'NL', 'FR']
  },
  {
    alias: 'demolitionservices',
    title: 'Demolition Services',
    parents: ['homeservices'],
    country_whitelist: [
      'CH',
      'NO',
      'US',
      'BR',
      'CZ',
      'AT',
      'AU',
      'DK',
      'DE',
      'PL',
      'BE',
      'PT',
      'ES',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'dentalhygeiniststorefront',
    title: 'Storefront Clinics',
    parents: ['dentalhygienists'],
    country_whitelist: ['CA']
  },
  {
    alias: 'dentalhygienists',
    title: 'Dental Hygienists',
    parents: ['health'],
    country_whitelist: ['DK', 'DE', 'NO', 'US', 'PT', 'CA', 'NL']
  },
  {
    alias: 'dentalhygienistsmobile',
    title: 'Mobile Clinics',
    parents: ['dentalhygienists'],
    country_whitelist: ['CA']
  },
  {
    alias: 'dentists',
    title: 'Dentists',
    parents: ['health']
  },
  {
    alias: 'departmentsofmotorvehicles',
    title: 'Departments of Motor Vehicles',
    parents: ['publicservicesgovt'],
    country_blacklist: ['BE', 'FR']
  },
  {
    alias: 'deptstores',
    title: 'Department Stores',
    parents: ['fashion', 'shopping']
  },
  {
    alias: 'dermatology',
    title: 'Dermatologists',
    parents: ['physicians']
  },
  {
    alias: 'desserts',
    title: 'Desserts',
    parents: ['food']
  },
  {
    alias: 'diagnosticimaging',
    title: 'Diagnostic Imaging',
    parents: ['diagnosticservices'],
    country_whitelist: ['IE', 'US', 'BR', 'CA', 'AR', 'GB', 'AU', 'MX', 'CL', 'PT', 'ES', 'FR']
  },
  {
    alias: 'diagnosticservices',
    title: 'Diagnostic Services',
    parents: ['health']
  },
  {
    alias: 'dialysisclinics',
    title: 'Dialysis Clinics',
    parents: ['health'],
    country_whitelist: ['TR', 'BR', 'US', 'AR', 'MX', 'CL', 'PT', 'ES', 'IT']
  },
  {
    alias: 'diamondbuyers',
    title: 'Diamond Buyers',
    parents: ['shopping']
  },
  {
    alias: 'dietitians',
    title: 'Dietitians',
    parents: ['health']
  },
  {
    alias: 'digitizingservices',
    title: 'Digitizing Services',
    parents: ['professional'],
    country_whitelist: ['NO', 'US', 'BR', 'DK']
  },
  {
    alias: 'dimsum',
    title: 'Dim Sum',
    parents: ['chinese'],
    country_blacklist: ['TR', 'BR', 'PT']
  },
  {
    alias: 'diners',
    title: 'Diners',
    parents: ['restaurants'],
    country_blacklist: ['AU', 'CZ', 'SE', 'FI']
  },
  {
    alias: 'dinnertheater',
    title: 'Dinner Theater',
    parents: ['restaurants'],
    country_blacklist: ['JP', 'BE', 'IT', 'NL', 'FR']
  },
  {
    alias: 'disabilitylaw',
    title: 'Disability Law',
    parents: ['lawyers']
  },
  {
    alias: 'discgolf',
    title: 'Disc Golf',
    parents: ['active'],
    country_blacklist: ['AU', 'DK', 'SG']
  },
  {
    alias: 'discountstore',
    title: 'Discount Store',
    parents: ['shopping']
  },
  {
    alias: 'distilleries',
    title: 'Distilleries',
    parents: ['food']
  },
  {
    alias: 'divebars',
    title: 'Dive Bars',
    parents: ['bars'],
    country_blacklist: ['CZ', 'AU', 'BE', 'IT', 'NL', 'FR']
  },
  {
    alias: 'diveshops',
    title: 'Dive Shops',
    parents: ['sportgoods'],
    country_whitelist: [
      'CH',
      'NZ',
      'US',
      'BR',
      'AR',
      'AT',
      'AU',
      'MX',
      'CL',
      'JP',
      'DE',
      'ES',
      'IT'
    ]
  },
  {
    alias: 'diving',
    title: 'Diving',
    parents: ['active']
  },
  {
    alias: 'divorce',
    title: 'Divorce & Family Law',
    parents: ['lawyers']
  },
  {
    alias: 'diyautoshop',
    title: 'DIY Auto Shop',
    parents: ['autorepair'],
    country_whitelist: ['CH', 'AT', 'AU', 'DE', 'US', 'PT']
  },
  {
    alias: 'diyfood',
    title: 'Do-It-Yourself Food',
    parents: ['food'],
    country_blacklist: ['CH', 'NZ', 'CZ', 'SE', 'AT', 'MX', 'CL', 'DE', 'ES', 'FI', 'IT', 'FR']
  },
  {
    alias: 'djs',
    title: 'DJs',
    parents: ['eventservices']
  },
  {
    alias: 'dog_parks',
    title: 'Dog Parks',
    parents: ['parks']
  },
  {
    alias: 'dogwalkers',
    title: 'Dog Walkers',
    parents: ['petservices']
  },
  {
    alias: 'dolmusstation',
    title: 'Dolmus Station',
    parents: ['transport'],
    country_whitelist: ['TR']
  },
  {
    alias: 'dominican',
    title: 'Dominican',
    parents: ['caribbean'],
    country_whitelist: ['US']
  },
  {
    alias: 'donairs',
    title: 'Donairs',
    parents: ['food'],
    country_whitelist: ['CZ', 'DK', 'PL', 'TR', 'BE', 'CA', 'FR']
  },
  {
    alias: 'donationcenter',
    title: 'Donation Center',
    parents: ['localservices'],
    country_whitelist: ['CH', 'NO', 'US', 'BR', 'AT', 'DK', 'DE', 'BE', 'ES', 'NL']
  },
  {
    alias: 'donburi',
    title: 'Donburi',
    parents: ['japanese'],
    country_whitelist: ['HK', 'JP', 'TW']
  },
  {
    alias: 'donuts',
    title: 'Donuts',
    parents: ['food'],
    country_blacklist: ['ES']
  },
  {
    alias: 'doorsales',
    title: 'Door Sales/Installation',
    parents: ['homeservices'],
    country_blacklist: [
      'IE',
      'TR',
      'MY',
      'AR',
      'SE',
      'PH',
      'MX',
      'TW',
      'DK',
      'NO',
      'CL',
      'JP',
      'HK',
      'ES',
      'FI',
      'FR'
    ]
  },
  {
    alias: 'doulas',
    title: 'Doulas',
    parents: ['health'],
    country_whitelist: ['CZ', 'US', 'BE', 'PT', 'CA', 'IT', 'FR']
  },
  {
    alias: 'dramaschools',
    title: 'Drama Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'driedfruit',
    title: 'Dried Fruit',
    parents: ['gourmet'],
    country_whitelist: ['TR', 'BR', 'AR', 'CZ', 'SE', 'MX', 'TW', 'CL', 'JP', 'PL', 'HK', 'ES']
  },
  {
    alias: 'driveintheater',
    title: 'Drive-In Theater',
    parents: ['movietheaters'],
    country_blacklist: ['MX', 'CL', 'PL', 'AR', 'FR']
  },
  {
    alias: 'drivethrubars',
    title: 'Drive-Thru Bars',
    parents: ['bars'],
    country_whitelist: ['US']
  },
  {
    alias: 'driving_schools',
    title: 'Driving Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'drones',
    title: 'Drones',
    parents: ['shopping']
  },
  {
    alias: 'drugstores',
    title: 'Drugstores',
    parents: ['shopping'],
    country_blacklist: ['NO', 'TR', 'AR', 'SE', 'MX', 'CL', 'DK', 'FR']
  },
  {
    alias: 'dryclean',
    title: 'Dry Cleaning',
    parents: ['laundryservices']
  },
  {
    alias: 'drywall',
    title: 'Drywall Installation & Repair',
    parents: ['homeservices'],
    country_blacklist: ['HK', 'JP']
  },
  {
    alias: 'duilawyers',
    title: 'DUI Law',
    parents: ['lawyers'],
    country_whitelist: ['US', 'DE', 'CA']
  },
  {
    alias: 'duischools',
    title: 'DUI Schools',
    parents: ['specialtyschools'],
    country_whitelist: ['US']
  },
  {
    alias: 'dumplings',
    title: 'Dumplings',
    parents: ['restaurants'],
    country_whitelist: [
      'SG',
      'CH',
      'IE',
      'NZ',
      'CA',
      'GB',
      'AT',
      'AU',
      'JP',
      'DE',
      'PL',
      'BE',
      'NL'
    ]
  },
  {
    alias: 'dumpsterrental',
    title: 'Dumpster Rental',
    parents: ['junkremovalandhauling'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'AT',
      'DE',
      'BE',
      'HK',
      'NL'
    ]
  },
  {
    alias: 'duplicationservices',
    title: 'Duplication Services',
    parents: ['professional'],
    country_whitelist: ['US']
  },
  {
    alias: 'dutyfreeshops',
    title: 'Duty-Free Shops',
    parents: ['shopping']
  },
  {
    alias: 'earnosethroat',
    title: 'Ear Nose & Throat',
    parents: ['physicians']
  },
  {
    alias: 'eastern_european',
    title: 'Eastern European',
    parents: ['restaurants'],
    country_whitelist: ['CZ', 'AU', 'DK', 'NO', 'FR']
  },
  {
    alias: 'easterngerman',
    title: 'Eastern German',
    parents: ['german'],
    country_whitelist: ['DE']
  },
  {
    alias: 'easternmexican',
    title: 'Eastern Mexican',
    parents: ['mexican'],
    country_whitelist: ['MX']
  },
  {
    alias: 'eatertainment',
    title: 'Eatertainment',
    parents: ['arts'],
    country_whitelist: ['CH', 'AT', 'DE', 'US', 'BR', 'BE', 'NL']
  },
  {
    alias: 'editorialservices',
    title: 'Editorial Services',
    parents: ['professional'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'AR',
      'GB',
      'PH',
      'AU',
      'MX',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'CL',
      'DE',
      'BE',
      'PT',
      'ES',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'education',
    title: 'Education',
    parents: []
  },
  {
    alias: 'educationservices',
    title: 'Educational Services',
    parents: ['education'],
    country_blacklist: ['BR']
  },
  {
    alias: 'egyptian',
    title: 'Egyptian',
    parents: ['mideastern'],
    country_whitelist: ['US', 'BE', 'CA', 'IT', 'FR']
  },
  {
    alias: 'eldercareplanning',
    title: 'Elder Care Planning',
    parents: ['localservices']
  },
  {
    alias: 'elderlaw',
    title: 'Elder Law',
    parents: ['lawyers'],
    country_whitelist: ['CH', 'TR', 'BR', 'US', 'AT', 'DE', 'PL', 'PT']
  },
  {
    alias: 'electricians',
    title: 'Electricians',
    parents: ['homeservices']
  },
  {
    alias: 'electricitysuppliers',
    title: 'Electricity Suppliers',
    parents: ['utilities']
  },
  {
    alias: 'electronics',
    title: 'Electronics',
    parents: ['shopping']
  },
  {
    alias: 'electronicsrepair',
    title: 'Electronics Repair',
    parents: ['localservices']
  },
  {
    alias: 'elementaryschools',
    title: 'Elementary Schools',
    parents: ['education']
  },
  {
    alias: 'elevatorservices',
    title: 'Elevator Services',
    parents: ['localservices'],
    country_blacklist: ['MY', 'AR', 'CZ', 'PH', 'MX', 'CL', 'JP', 'FI', 'FR']
  },
  {
    alias: 'eltern_cafes',
    title: 'Parent Cafes',
    parents: ['food', 'restaurants'],
    country_whitelist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'embassy',
    title: 'Embassy',
    parents: ['publicservicesgovt'],
    country_blacklist: ['TR']
  },
  {
    alias: 'embroideryandcrochet',
    title: 'Embroidery & Crochet',
    parents: ['artsandcrafts']
  },
  {
    alias: 'emergencymedicine',
    title: 'Emergency Medicine',
    parents: ['physicians']
  },
  {
    alias: 'emergencypethospital',
    title: 'Emergency Pet Hospital',
    parents: ['petservices']
  },
  {
    alias: 'emergencyrooms',
    title: 'Emergency Rooms',
    parents: ['health']
  },
  {
    alias: 'emilian',
    title: 'Emilian',
    parents: ['italian'],
    country_whitelist: ['IT']
  },
  {
    alias: 'empanadas',
    title: 'Empanadas',
    parents: ['food'],
    country_whitelist: ['AR', 'US', 'CL', 'ES']
  },
  {
    alias: 'employmentagencies',
    title: 'Employment Agencies',
    parents: ['professional']
  },
  {
    alias: 'employmentlawyers',
    title: 'Employment Law',
    parents: ['lawyers']
  },
  {
    alias: 'emstraining',
    title: 'EMS Training',
    parents: ['fitness'],
    country_whitelist: ['SE', 'CH', 'AT', 'DE', 'ES']
  },
  {
    alias: 'endocrinologists',
    title: 'Endocrinologists',
    parents: ['physicians'],
    country_blacklist: ['SG', 'IE', 'NZ', 'CA', 'GB', 'SE', 'AU', 'TW', 'JP', 'PL', 'HK', 'FI']
  },
  {
    alias: 'endodontists',
    title: 'Endodontists',
    parents: ['dentists'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'engraving',
    title: 'Engraving',
    parents: ['localservices']
  },
  {
    alias: 'entertainmentlaw',
    title: 'Entertainment Law',
    parents: ['lawyers'],
    country_whitelist: ['US']
  },
  {
    alias: 'enviroabatement',
    title: 'Environmental Abatement',
    parents: ['localservices']
  },
  {
    alias: 'environmentaltesting',
    title: 'Environmental Testing',
    parents: ['localservices'],
    country_whitelist: ['SG', 'IE', 'NZ', 'NO', 'US', 'CA', 'GB', 'AU', 'DK', 'BE', 'FI', 'NL']
  },
  {
    alias: 'eritrean',
    title: 'Eritrean',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DE', 'US', 'IT']
  },
  {
    alias: 'eroticmassage',
    title: 'Erotic Massage',
    parents: ['beautysvc'],
    country_blacklist: ['NO', 'TR', 'US', 'MY', 'SE', 'PH', 'TW', 'JP', 'CL', 'DK', 'HK', 'FI']
  },
  {
    alias: 'escapegames',
    title: 'Escape Games',
    parents: ['active']
  },
  {
    alias: 'estateliquidation',
    title: 'Estate Liquidation',
    parents: ['realestate'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'estatephotography',
    title: 'Real Estate Photography',
    parents: ['realestatesvcs'],
    country_blacklist: ['IT', 'JP']
  },
  {
    alias: 'estateplanning',
    title: 'Estate Planning Law',
    parents: ['lawyers'],
    country_blacklist: ['NO', 'SE']
  },
  {
    alias: 'estheticians',
    title: 'Estheticians',
    parents: ['skincare']
  },
  {
    alias: 'ethicgrocery',
    title: 'Ethical Grocery',
    parents: ['food'],
    country_blacklist: ['CH', 'TR', 'US', 'MY', 'CZ', 'AT', 'PH', 'JP', 'DE', 'BE', 'NL', 'FR']
  },
  {
    alias: 'ethiopian',
    title: 'Ethiopian',
    parents: ['restaurants'],
    country_blacklist: ['MX', 'TR', 'CZ', 'SG']
  },
  {
    alias: 'evchargingstations',
    title: 'EV Charging Stations',
    parents: ['auto']
  },
  {
    alias: 'eventphotography',
    title: 'Event Photography',
    parents: ['photographers']
  },
  {
    alias: 'eventplanning',
    title: 'Party & Event Planning',
    parents: ['eventservices']
  },
  {
    alias: 'eventservices',
    title: 'Event Planning & Services',
    parents: []
  },
  {
    alias: 'excavationservices',
    title: 'Excavation Services',
    parents: ['homeservices']
  },
  {
    alias: 'experiences',
    title: 'Experiences',
    parents: ['active'],
    country_whitelist: ['CZ', 'SE', 'DK', 'DE', 'NO', 'PT']
  },
  {
    alias: 'eyebrowservices',
    title: 'Eyebrow Services',
    parents: ['beautysvc']
  },
  {
    alias: 'eyelashservice',
    title: 'Eyelash Service',
    parents: ['beautysvc'],
    country_blacklist: ['IT']
  },
  {
    alias: 'fabricstores',
    title: 'Fabric Stores',
    parents: ['artsandcrafts']
  },
  {
    alias: 'facepainting',
    title: 'Face Painting',
    parents: ['eventservices'],
    country_blacklist: [
      'TR',
      'MY',
      'AR',
      'SE',
      'PH',
      'MX',
      'TW',
      'PL',
      'SG',
      'CL',
      'JP',
      'HK',
      'ES',
      'FI',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'fado_houses',
    title: 'Fado Houses',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'faithbasedcpc',
    title: 'Faith-based Crisis Pregnancy Centers',
    parents: ['crisispregnancycenters'],
    country_whitelist: ['US']
  },
  {
    alias: 'falafel',
    title: 'Falafel',
    parents: ['mediterranean'],
    country_blacklist: ['MX', 'AR', 'PT']
  },
  {
    alias: 'familydr',
    title: 'Family Practice',
    parents: ['physicians'],
    country_blacklist: ['BR']
  },
  {
    alias: 'farmequipmentrepair',
    title: 'Farm Equipment Repair',
    parents: ['localservices']
  },
  {
    alias: 'farmersmarket',
    title: 'Farmers Market',
    parents: ['food']
  },
  {
    alias: 'farmingequipment',
    title: 'Farming Equipment',
    parents: ['shopping']
  },
  {
    alias: 'farms',
    title: 'Farms',
    parents: ['arts']
  },
  {
    alias: 'farriers',
    title: 'Farriers',
    parents: ['petservices']
  },
  {
    alias: 'fashion',
    title: 'Fashion',
    parents: ['shopping']
  },
  {
    alias: 'fasil',
    title: 'Fasil Music',
    parents: ['nightlife'],
    country_whitelist: ['TR']
  },
  {
    alias: 'fencesgates',
    title: 'Fences & Gates',
    parents: ['homeservices']
  },
  {
    alias: 'fencing',
    title: 'Fencing Clubs',
    parents: ['active']
  },
  {
    alias: 'fengshui',
    title: 'Feng Shui',
    parents: ['professional']
  },
  {
    alias: 'ferries',
    title: 'Ferries',
    parents: ['transport']
  },
  {
    alias: 'fertility',
    title: 'Fertility',
    parents: ['physicians']
  },
  {
    alias: 'festivals',
    title: 'Festivals',
    parents: ['arts']
  },
  {
    alias: 'filipino',
    title: 'Filipino',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'CZ', 'DK', 'FI']
  },
  {
    alias: 'financialadvising',
    title: 'Financial Advising',
    parents: ['financialservices']
  },
  {
    alias: 'financialservices',
    title: 'Financial Services',
    parents: []
  },
  {
    alias: 'fingerprinting',
    title: 'Fingerprinting',
    parents: ['localservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'firearmtraining',
    title: 'Firearm Training',
    parents: ['specialtyschools'],
    country_whitelist: ['US']
  },
  {
    alias: 'firedepartments',
    title: 'Fire Departments',
    parents: ['publicservicesgovt'],
    country_blacklist: ['SG', 'IE', 'NZ', 'CA', 'GB']
  },
  {
    alias: 'fireplace',
    title: 'Fireplace Services',
    parents: ['homeservices']
  },
  {
    alias: 'fireprotection',
    title: 'Fire Protection Services',
    parents: ['homeservices']
  },
  {
    alias: 'firewood',
    title: 'Firewood',
    parents: ['homeservices'],
    country_blacklist: ['TR', 'MY', 'CZ', 'PH', 'TW', 'JP', 'BE', 'HK', 'NL']
  },
  {
    alias: 'fireworks',
    title: 'Fireworks',
    parents: ['shopping'],
    country_whitelist: ['NZ', 'US', 'CA', 'AR', 'GB', 'CZ', 'AU', 'MX', 'CL', 'PT']
  },
  {
    alias: 'firstaidclasses',
    title: 'First Aid Classes',
    parents: ['specialtyschools'],
    country_blacklist: ['SG', 'IE', 'NZ', 'BR', 'BE', 'NL', 'FR']
  },
  {
    alias: 'fischbroetchen',
    title: 'Fischbroetchen',
    parents: ['restaurants'],
    country_whitelist: ['DE']
  },
  {
    alias: 'fishing',
    title: 'Fishing',
    parents: ['active']
  },
  {
    alias: 'fishmonger',
    title: 'Fishmonger',
    parents: ['food'],
    country_whitelist: [
      'CH',
      'NO',
      'CZ',
      'SE',
      'AT',
      'AU',
      'DK',
      'DE',
      'PL',
      'BE',
      'PT',
      'FI',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'fishnchips',
    title: 'Fish & Chips',
    parents: ['restaurants'],
    country_blacklist: ['BR', 'PT']
  },
  {
    alias: 'fitness',
    title: 'Fitness & Instruction',
    parents: ['active']
  },
  {
    alias: 'fitnessequipment',
    title: 'Fitness/Exercise Equipment',
    parents: ['shopping']
  },
  {
    alias: 'flatbread',
    title: 'Flatbread',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DK', 'DE', 'PL']
  },
  {
    alias: 'fleamarkets',
    title: 'Flea Markets',
    parents: ['shopping']
  },
  {
    alias: 'flemish',
    title: 'Flemish',
    parents: ['belgian'],
    country_whitelist: ['FR']
  },
  {
    alias: 'flightinstruction',
    title: 'Flight Instruction',
    parents: ['specialtyschools']
  },
  {
    alias: 'floatspa',
    title: 'Float Spa',
    parents: ['health'],
    country_blacklist: ['IT', 'FR', 'JP']
  },
  {
    alias: 'flooring',
    title: 'Flooring',
    parents: ['homeservices']
  },
  {
    alias: 'floraldesigners',
    title: 'Floral Designers',
    parents: ['eventservices'],
    country_blacklist: ['FR']
  },
  {
    alias: 'florists',
    title: 'Florists',
    parents: ['flowers']
  },
  {
    alias: 'flowers',
    title: 'Flowers & Gifts',
    parents: ['shopping']
  },
  {
    alias: 'flyboarding',
    title: 'Flyboarding',
    parents: ['active']
  },
  {
    alias: 'fondue',
    title: 'Fondue',
    parents: ['restaurants'],
    country_blacklist: ['CZ', 'DK', 'ES']
  },
  {
    alias: 'food',
    title: 'Food',
    parents: []
  },
  {
    alias: 'food_court',
    title: 'Food Court',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'TW', 'FR', 'FI']
  },
  {
    alias: 'foodbanks',
    title: 'Food Banks',
    parents: ['nonprofit']
  },
  {
    alias: 'fooddeliveryservices',
    title: 'Food Delivery Services',
    parents: ['food']
  },
  {
    alias: 'foodsafety',
    title: 'Food Safety Training',
    parents: ['specialtyschools'],
    country_whitelist: ['US', 'BR', 'SG', 'PT']
  },
  {
    alias: 'foodstands',
    title: 'Food Stands',
    parents: ['restaurants']
  },
  {
    alias: 'foodtours',
    title: 'Food Tours',
    parents: ['tours']
  },
  {
    alias: 'foodtrucks',
    title: 'Food Trucks',
    parents: ['food'],
    country_blacklist: ['SG']
  },
  {
    alias: 'football',
    title: 'Soccer',
    parents: ['active']
  },
  {
    alias: 'footcare',
    title: 'Foot Care',
    parents: ['beautysvc'],
    country_whitelist: [
      'SG',
      'CH',
      'IE',
      'NZ',
      'CA',
      'MY',
      'GB',
      'AT',
      'PH',
      'AU',
      'JP',
      'DE',
      'BE',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'forestry',
    title: 'Forestry',
    parents: ['localservices'],
    country_whitelist: ['CZ', 'SE', 'DK', 'NO', 'CA', 'FI']
  },
  {
    alias: 'formalwear',
    title: 'Formal Wear',
    parents: ['fashion'],
    country_blacklist: ['CH', 'TR', 'MY', 'SE', 'PH', 'TW', 'JP', 'HK', 'FI', 'IT']
  },
  {
    alias: 'foundationrepair',
    title: 'Foundation Repair',
    parents: ['homeservices'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'framing',
    title: 'Framing',
    parents: ['artsandcrafts']
  },
  {
    alias: 'franconian',
    title: 'Franconian',
    parents: ['german'],
    country_whitelist: ['DE']
  },
  {
    alias: 'freediving',
    title: 'Free Diving',
    parents: ['diving']
  },
  {
    alias: 'freiduria',
    title: 'Freiduria',
    parents: ['restaurants'],
    country_whitelist: ['MX', 'AR', 'CL', 'ES']
  },
  {
    alias: 'french',
    title: 'French',
    parents: ['restaurants']
  },
  {
    alias: 'friterie',
    title: 'Friterie',
    parents: ['food'],
    country_whitelist: ['AU', 'PL', 'BE', 'IT', 'NL', 'FR']
  },
  {
    alias: 'friulan',
    title: 'Friulan',
    parents: ['italian'],
    country_whitelist: ['IT']
  },
  {
    alias: 'frozenfood',
    title: 'Frozen Food',
    parents: ['gourmet'],
    country_whitelist: ['FR', 'SG', 'BE', 'ES', 'IT', 'GB']
  },
  {
    alias: 'fueldocks',
    title: 'Fuel Docks',
    parents: ['auto'],
    country_whitelist: ['SE', 'MX', 'DK', 'NO', 'US', 'ES']
  },
  {
    alias: 'funeralservices',
    title: 'Funeral Services & Cemeteries',
    parents: ['localservices']
  },
  {
    alias: 'funfair',
    title: 'Fun Fair',
    parents: ['festivals'],
    country_whitelist: ['CH', 'NO', 'CZ', 'AT', 'DK', 'DE', 'BE', 'PT', 'NL']
  },
  {
    alias: 'furclothing',
    title: 'Fur Clothing',
    parents: ['fashion']
  },
  {
    alias: 'furniture',
    title: 'Furniture Stores',
    parents: ['homeandgarden']
  },
  {
    alias: 'furnitureassembly',
    title: 'Furniture Assembly',
    parents: ['homeservices'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'furniturerepair',
    title: 'Furniture Repair',
    parents: ['localservices']
  },
  {
    alias: 'fuzhou',
    title: 'Fuzhou',
    parents: ['chinese'],
    country_whitelist: ['MY', 'HK', 'SG', 'TW']
  },
  {
    alias: 'galician',
    title: 'Galician',
    parents: ['restaurants'],
    country_whitelist: ['PT', 'ES']
  },
  {
    alias: 'galleries',
    title: 'Art Galleries',
    parents: ['arts', 'shopping']
  },
  {
    alias: 'gamemeat',
    title: 'Game Meat',
    parents: ['restaurants'],
    country_blacklist: [
      'TR',
      'BR',
      'CA',
      'MY',
      'AR',
      'PH',
      'MX',
      'TW',
      'CL',
      'JP',
      'PT',
      'HK',
      'FI'
    ]
  },
  {
    alias: 'gametruckrental',
    title: 'Game Truck Rental',
    parents: ['eventservices'],
    country_whitelist: ['MX', 'CL', 'US', 'CA', 'AR']
  },
  {
    alias: 'garage_door_services',
    title: 'Garage Door Services',
    parents: ['homeservices'],
    country_blacklist: ['CH', 'MY', 'AR', 'SE', 'AT', 'PH', 'TW', 'CL', 'JP', 'DE', 'PL', 'HK']
  },
  {
    alias: 'gardeners',
    title: 'Gardeners',
    parents: ['homeservices']
  },
  {
    alias: 'gardening',
    title: 'Nurseries & Gardening',
    parents: ['homeandgarden']
  },
  {
    alias: 'gardens',
    title: 'Botanical Gardens',
    parents: ['arts']
  },
  {
    alias: 'gastroenterologist',
    title: 'Gastroenterologist',
    parents: ['physicians']
  },
  {
    alias: 'gastropubs',
    title: 'Gastropubs',
    parents: ['restaurants']
  },
  {
    alias: 'gaybars',
    title: 'Gay Bars',
    parents: ['bars']
  },
  {
    alias: 'gelato',
    title: 'Gelato',
    parents: ['food'],
    country_whitelist: ['SG', 'NO', 'US', 'CZ', 'SE', 'PH', 'AU', 'DK', 'PL', 'PT', 'IT']
  },
  {
    alias: 'gemstonesandminerals',
    title: 'Gemstones & Minerals',
    parents: ['shopping']
  },
  {
    alias: 'general_litigation',
    title: 'General Litigation',
    parents: ['lawyers']
  },
  {
    alias: 'generaldentistry',
    title: 'General Dentistry',
    parents: ['dentists']
  },
  {
    alias: 'generalfestivals',
    title: 'General Festivals',
    parents: ['festivals'],
    country_whitelist: ['CH', 'AT', 'JP', 'DE', 'PT']
  },
  {
    alias: 'generatorinstallrepair',
    title: 'Generator Installation/Repair',
    parents: ['localservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'geneticists',
    title: 'Geneticists',
    parents: ['physicians']
  },
  {
    alias: 'georgian',
    title: 'Georgian',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'US', 'GB', 'CZ', 'AT', 'DE', 'PL', 'FI']
  },
  {
    alias: 'german',
    title: 'German',
    parents: ['restaurants']
  },
  {
    alias: 'gerontologist',
    title: 'Gerontologists',
    parents: ['physicians']
  },
  {
    alias: 'gestorias',
    title: 'Gestorias',
    parents: ['localservices'],
    country_whitelist: ['MX', 'AR', 'CL', 'ES']
  },
  {
    alias: 'giblets',
    title: 'Giblets',
    parents: ['restaurants'],
    country_whitelist: ['TR']
  },
  {
    alias: 'giftshops',
    title: 'Gift Shops',
    parents: ['flowers'],
    country_blacklist: ['PL', 'TR', 'SG']
  },
  {
    alias: 'glassandmirrors',
    title: 'Glass & Mirrors',
    parents: ['homeservices'],
    country_blacklist: ['TR']
  },
  {
    alias: 'glassblowing',
    title: 'Glass Blowing',
    parents: ['artclasses'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'gliding',
    title: 'Gliding',
    parents: ['active'],
    country_whitelist: ['CH', 'NO', 'CZ', 'SE', 'AT', 'DE', 'PL', 'PT', 'FR']
  },
  {
    alias: 'gluhwein',
    title: 'Mulled Wine',
    parents: ['food'],
    country_whitelist: ['CZ', 'SE', 'CH', 'AT', 'DE']
  },
  {
    alias: 'gluten_free',
    title: 'Gluten-Free',
    parents: ['restaurants']
  },
  {
    alias: 'gokarts',
    title: 'Go Karts',
    parents: ['active']
  },
  {
    alias: 'goldbuyers',
    title: 'Gold Buyers',
    parents: ['shopping'],
    country_whitelist: [
      'CH',
      'US',
      'BR',
      'CA',
      'SE',
      'AT',
      'DE',
      'BE',
      'PT',
      'ES',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'golf',
    title: 'Golf',
    parents: ['active']
  },
  {
    alias: 'golfcartdealers',
    title: 'Golf Cart Dealers',
    parents: ['auto'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'golfcartrentals',
    title: 'Golf Cart Rentals',
    parents: ['eventservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'golfequipment',
    title: 'Golf Equipment',
    parents: ['sportgoods'],
    country_whitelist: ['AU', 'DE', 'US', 'BE', 'CA', 'NL']
  },
  {
    alias: 'golflessons',
    title: 'Golf Lessons',
    parents: ['fitness'],
    country_blacklist: [
      'SG',
      'CH',
      'IE',
      'TR',
      'BR',
      'CA',
      'MY',
      'AT',
      'PH',
      'TW',
      'DE',
      'HK',
      'FI'
    ]
  },
  {
    alias: 'gourmet',
    title: 'Specialty Food',
    parents: ['food']
  },
  {
    alias: 'gozleme',
    title: 'Gozleme',
    parents: ['turkish'],
    country_whitelist: ['TR']
  },
  {
    alias: 'graphicdesign',
    title: 'Graphic Design',
    parents: ['professional']
  },
  {
    alias: 'greek',
    title: 'Greek',
    parents: ['restaurants']
  },
  {
    alias: 'grillingequipment',
    title: 'Grilling Equipment',
    parents: ['homeandgarden']
  },
  {
    alias: 'grillservices',
    title: 'Grill Services',
    parents: ['localservices'],
    country_whitelist: ['CH', 'US', 'BR', 'AR', 'AT', 'MX', 'CL', 'DE', 'PL', 'PT', 'ES']
  },
  {
    alias: 'grocery',
    title: 'Grocery',
    parents: ['food']
  },
  {
    alias: 'groomer',
    title: 'Pet Groomers',
    parents: ['petservices']
  },
  {
    alias: 'groutservices',
    title: 'Grout Services',
    parents: ['homeservices'],
    country_blacklist: ['FR']
  },
  {
    alias: 'guamanian',
    title: 'Guamanian',
    parents: ['restaurants'],
    country_blacklist: ['MX', 'JP', 'CL', 'PL', 'TR', 'AR', 'FR']
  },
  {
    alias: 'guesthouses',
    title: 'Guest Houses',
    parents: ['hotelstravel'],
    country_blacklist: ['SG']
  },
  {
    alias: 'guitarstores',
    title: 'Guitar Stores',
    parents: ['musicinstrumentservices']
  },
  {
    alias: 'gun_ranges',
    title: 'Gun/Rifle Ranges',
    parents: ['active'],
    country_blacklist: ['CH', 'BE', 'SG', 'AT']
  },
  {
    alias: 'guns_and_ammo',
    title: 'Guns & Ammo',
    parents: ['shopping'],
    country_whitelist: [
      'CH',
      'US',
      'CA',
      'MY',
      'AR',
      'AT',
      'PH',
      'MX',
      'CL',
      'DE',
      'PL',
      'PT',
      'ES'
    ]
  },
  {
    alias: 'gunsmith',
    title: 'Gunsmith',
    parents: ['localservices'],
    country_blacklist: ['CH', 'TR', 'BR', 'AT', 'TW', 'JP', 'DE', 'BE', 'HK', 'NL']
  },
  {
    alias: 'gutterservices',
    title: 'Gutter Services',
    parents: ['homeservices'],
    country_blacklist: ['MX', 'AR']
  },
  {
    alias: 'gymnastics',
    title: 'Gymnastics',
    parents: ['active'],
    country_whitelist: ['NZ', 'NO', 'US', 'BR', 'CA', 'CZ', 'MX', 'DK', 'PT']
  },
  {
    alias: 'gyms',
    title: 'Gyms',
    parents: ['fitness']
  },
  {
    alias: 'gyudon',
    title: 'Gyudon',
    parents: ['donburi'],
    country_whitelist: ['JP']
  },
  {
    alias: 'habilitativeservices',
    title: 'Habilitative Services',
    parents: ['health']
  },
  {
    alias: 'hainan',
    title: 'Hainan',
    parents: ['chinese'],
    country_whitelist: ['SG', 'PH', 'US', 'HK', 'MY']
  },
  {
    alias: 'hair',
    title: 'Hair Salons',
    parents: ['beautysvc']
  },
  {
    alias: 'hair_extensions',
    title: 'Hair Extensions',
    parents: ['hair', 'beautysvc'],
    country_blacklist: ['PL', 'TR', 'BE', 'HK', 'NL']
  },
  {
    alias: 'hairloss',
    title: 'Hair Loss Centers',
    parents: ['beautysvc']
  },
  {
    alias: 'hairremoval',
    title: 'Hair Removal',
    parents: ['beautysvc']
  },
  {
    alias: 'hairstylists',
    title: 'Hair Stylists',
    parents: ['hair'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'AR',
      'GB',
      'CZ',
      'SE',
      'AU',
      'MX',
      'TW',
      'DK',
      'PL',
      'SG',
      'NO',
      'AT',
      'CL',
      'DE',
      'BE',
      'PT',
      'ES',
      'HK',
      'NL'
    ]
  },
  {
    alias: 'haitian',
    title: 'Haitian',
    parents: ['caribbean'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'hakka',
    title: 'Hakka',
    parents: ['chinese'],
    country_whitelist: ['SG', 'PH', 'TW', 'HK', 'CA', 'MY']
  },
  {
    alias: 'halal',
    title: 'Halal',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'PT']
  },
  {
    alias: 'halfwayhouses',
    title: 'Halfway Houses',
    parents: ['health'],
    country_whitelist: ['US']
  },
  {
    alias: 'halotherapy',
    title: 'Halotherapy',
    parents: ['health'],
    country_blacklist: ['FR']
  },
  {
    alias: 'handball',
    title: 'Handball',
    parents: ['active'],
    country_blacklist: [
      'IE',
      'TR',
      'US',
      'CA',
      'MY',
      'GB',
      'CZ',
      'PH',
      'AU',
      'MX',
      'TW',
      'SG',
      'NZ',
      'DE',
      'PT',
      'HK'
    ]
  },
  {
    alias: 'handrolls',
    title: 'Hand Rolls',
    parents: ['japanese'],
    country_whitelist: ['BR', 'TW']
  },
  {
    alias: 'handyman',
    title: 'Handyman',
    parents: ['homeservices']
  },
  {
    alias: 'hanggliding',
    title: 'Hang Gliding',
    parents: ['active'],
    country_blacklist: [
      'SG',
      'IE',
      'TR',
      'CA',
      'MY',
      'GB',
      'CZ',
      'PH',
      'TW',
      'DK',
      'DE',
      'PL',
      'HK',
      'FI',
      'NL'
    ]
  },
  {
    alias: 'hardware',
    title: 'Hardware Stores',
    parents: ['homeandgarden']
  },
  {
    alias: 'hats',
    title: 'Hats',
    parents: ['fashion'],
    country_blacklist: ['CH', 'IE', 'TR', 'GB', 'SE', 'AT', 'JP', 'PL', 'HK']
  },
  {
    alias: 'hauntedhouses',
    title: 'Haunted Houses',
    parents: ['arts']
  },
  {
    alias: 'hawaiian',
    title: 'Hawaiian',
    parents: ['restaurants'],
    country_blacklist: ['CZ', 'AU', 'DK', 'TR', 'PT']
  },
  {
    alias: 'hawkercentre',
    title: 'Hawker Centre',
    parents: ['food'],
    country_whitelist: ['SG', 'MY', 'AR', 'PH', 'MX', 'TW', 'CL', 'HK']
  },
  {
    alias: 'hazardouswastedisposal',
    title: 'Hazardous Waste Disposal',
    parents: ['localservices'],
    country_blacklist: [
      'CH',
      'TR',
      'BR',
      'MY',
      'CZ',
      'SE',
      'AT',
      'PH',
      'JP',
      'DE',
      'PT',
      'HK',
      'FR'
    ]
  },
  {
    alias: 'headshops',
    title: 'Head Shops',
    parents: ['shopping']
  },
  {
    alias: 'health',
    title: 'Health & Medical',
    parents: []
  },
  {
    alias: 'healthcoach',
    title: 'Health Coach',
    parents: ['health']
  },
  {
    alias: 'healthinsurance',
    title: 'Health Insurance Offices',
    parents: ['health'],
    country_whitelist: [
      'SG',
      'CH',
      'NZ',
      'US',
      'BR',
      'CZ',
      'AT',
      'AU',
      'MX',
      'DE',
      'PL',
      'BE',
      'PT',
      'FR'
    ]
  },
  {
    alias: 'healthmarkets',
    title: 'Health Markets',
    parents: ['gourmet']
  },
  {
    alias: 'healthretreats',
    title: 'Health Retreats',
    parents: ['hotelstravel'],
    country_blacklist: ['MX', 'AR']
  },
  {
    alias: 'healthtrainers',
    title: 'Trainers',
    parents: ['fitness']
  },
  {
    alias: 'hearing_aids',
    title: 'Hearing Aids',
    parents: ['health'],
    country_whitelist: [
      'CH',
      'NO',
      'BR',
      'AR',
      'CZ',
      'AT',
      'MX',
      'CL',
      'DK',
      'DE',
      'PL',
      'PT',
      'ES',
      'FI',
      'FR'
    ]
  },
  {
    alias: 'hearingaidproviders',
    title: 'Hearing Aid Providers',
    parents: ['health'],
    country_blacklist: ['CH', 'TR', 'AR', 'CZ', 'SE', 'AT', 'MX', 'CL', 'JP', 'DE', 'HK', 'ES']
  },
  {
    alias: 'henghwa',
    title: 'Henghwa',
    parents: ['chinese'],
    country_whitelist: ['MY', 'HK', 'SG', 'TW']
  },
  {
    alias: 'hennaartists',
    title: 'Henna Artists',
    parents: ['eventservices'],
    country_whitelist: ['CH', 'NZ', 'NO', 'US', 'BR', 'CA', 'AT', 'AU', 'DK', 'DE', 'IT', 'FR']
  },
  {
    alias: 'hepatologists',
    title: 'Hepatologists',
    parents: ['physicians']
  },
  {
    alias: 'herbalshops',
    title: 'Herbal Shops',
    parents: ['health']
  },
  {
    alias: 'herbsandspices',
    title: 'Herbs & Spices',
    parents: ['gourmet']
  },
  {
    alias: 'hessian',
    title: 'Hessian',
    parents: ['german'],
    country_whitelist: ['DE']
  },
  {
    alias: 'heuriger',
    title: 'Heuriger',
    parents: ['restaurants'],
    country_whitelist: ['AT']
  },
  {
    alias: 'hifi',
    title: 'High Fidelity Audio Equipment',
    parents: ['shopping'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'highschools',
    title: 'Middle Schools & High Schools',
    parents: ['education']
  },
  {
    alias: 'hiking',
    title: 'Hiking',
    parents: ['active']
  },
  {
    alias: 'himalayan',
    title: 'Himalayan/Nepalese',
    parents: ['restaurants']
  },
  {
    alias: 'hindu_temples',
    title: 'Hindu Temples',
    parents: ['religiousorgs']
  },
  {
    alias: 'historicaltours',
    title: 'Historical Tours',
    parents: ['tours']
  },
  {
    alias: 'hkcafe',
    title: 'Hong Kong Style Cafe',
    parents: ['restaurants'],
    country_whitelist: ['US', 'HK', 'TW', 'CA']
  },
  {
    alias: 'hobbyshops',
    title: 'Hobby Shops',
    parents: ['shopping']
  },
  {
    alias: 'hockeyequipment',
    title: 'Hockey Equipment',
    parents: ['sportgoods']
  },
  {
    alias: 'hokkien',
    title: 'Hokkien',
    parents: ['chinese'],
    country_whitelist: ['MY', 'HK', 'SG', 'TW']
  },
  {
    alias: 'holidaydecorations',
    title: 'Holiday Decorations',
    parents: ['homeandgarden']
  },
  {
    alias: 'home_inspectors',
    title: 'Home Inspectors',
    parents: ['homeservices']
  },
  {
    alias: 'home_organization',
    title: 'Home Organization',
    parents: ['homeservices'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'homeandgarden',
    title: 'Home & Garden',
    parents: ['shopping']
  },
  {
    alias: 'homeappliancerepair',
    title: 'Appliances & Repair',
    parents: ['localservices']
  },
  {
    alias: 'homeautomation',
    title: 'Home Automation',
    parents: ['homeservices']
  },
  {
    alias: 'homecleaning',
    title: 'Home Cleaning',
    parents: ['homeservices']
  },
  {
    alias: 'homedecor',
    title: 'Home Decor',
    parents: ['homeandgarden']
  },
  {
    alias: 'homedevelopers',
    title: 'Home Developers',
    parents: ['realestate'],
    country_blacklist: ['MX', 'CL', 'BR', 'IT', 'AR']
  },
  {
    alias: 'homeenergyauditors',
    title: 'Home Energy Auditors',
    parents: ['homeservices'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'SE',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'AT',
      'DE',
      'BE',
      'PT',
      'ES',
      'FI',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'homehealthcare',
    title: 'Home Health Care',
    parents: ['health']
  },
  {
    alias: 'homeinsurance',
    title: 'Home & Rental Insurance',
    parents: ['insurance']
  },
  {
    alias: 'homelessshelters',
    title: 'Homeless Shelters',
    parents: ['nonprofit'],
    country_whitelist: ['US']
  },
  {
    alias: 'homemadefood',
    title: 'Homemade Food',
    parents: ['turkish'],
    country_whitelist: ['TR']
  },
  {
    alias: 'homenetworkinstall',
    title: 'Home Network Installation',
    parents: ['homeservices'],
    country_whitelist: [
      'CH',
      'NO',
      'US',
      'BR',
      'CZ',
      'SE',
      'AT',
      'DK',
      'DE',
      'BE',
      'PT',
      'ES',
      'FI',
      'NL'
    ]
  },
  {
    alias: 'homeopathic',
    title: 'Homeopathic',
    parents: ['physicians'],
    country_blacklist: ['SG', 'IE', 'NZ', 'TR', 'US', 'CA', 'GB', 'AU', 'TW', 'HK']
  },
  {
    alias: 'homeownerassociation',
    title: 'Homeowner Association',
    parents: ['realestate'],
    country_whitelist: ['PL', 'US', 'CZ']
  },
  {
    alias: 'homeservices',
    title: 'Home Services',
    parents: []
  },
  {
    alias: 'homestaging',
    title: 'Home Staging',
    parents: ['realestate'],
    country_blacklist: ['CZ', 'BR', 'PT', 'ES', 'FR']
  },
  {
    alias: 'hometheatreinstallation',
    title: 'Home Theatre Installation',
    parents: ['homeservices'],
    country_blacklist: ['CZ', 'DK']
  },
  {
    alias: 'homewindowtinting',
    title: 'Home Window Tinting',
    parents: ['homeservices'],
    country_whitelist: ['SG', 'IE', 'NZ', 'US', 'CA', 'GB', 'AU', 'BE', 'PT', 'NL']
  },
  {
    alias: 'honduran',
    title: 'Honduran',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'JP']
  },
  {
    alias: 'honey',
    title: 'Honey',
    parents: ['food'],
    country_whitelist: ['TR', 'US', 'SE', 'DE', 'PL', 'FI', 'IT', 'FR']
  },
  {
    alias: 'hookah_bars',
    title: 'Hookah Bars',
    parents: ['bars'],
    country_blacklist: ['AU', 'SG']
  },
  {
    alias: 'horse_boarding',
    title: 'Horse Boarding',
    parents: ['pets'],
    country_whitelist: ['IE', 'NZ', 'NO', 'US', 'CA', 'GB', 'CZ', 'SE', 'AU', 'DK', 'DE', 'FR']
  },
  {
    alias: 'horsebackriding',
    title: 'Horseback Riding',
    parents: ['active']
  },
  {
    alias: 'horsequipment',
    title: 'Horse Equipment Shops',
    parents: ['shopping'],
    country_blacklist: ['CH', 'NZ', 'TR', 'MY', 'PH', 'TW', 'JP', 'HK']
  },
  {
    alias: 'horseracing',
    title: 'Horse Racing',
    parents: ['active'],
    country_blacklist: ['SG', 'IE', 'NZ', 'BR', 'CA', 'MY', 'GB', 'PH', 'IT', 'FR']
  },
  {
    alias: 'horumon',
    title: 'Horumon',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'hospice',
    title: 'Hospice',
    parents: ['health']
  },
  {
    alias: 'hospitalists',
    title: 'Hospitalists',
    parents: ['physicians'],
    country_blacklist: ['CH', 'AT', 'JP', 'DE', 'TR', 'IT']
  },
  {
    alias: 'hospitals',
    title: 'Hospitals',
    parents: ['health']
  },
  {
    alias: 'hostels',
    title: 'Hostels',
    parents: ['hotelstravel']
  },
  {
    alias: 'hot_air_balloons',
    title: 'Hot Air Balloons',
    parents: ['active'],
    country_blacklist: ['BR', 'SG', 'NZ', 'CA']
  },
  {
    alias: 'hotdog',
    title: 'Hot Dogs',
    parents: ['restaurants']
  },
  {
    alias: 'hotdogs',
    title: 'Fast Food',
    parents: ['restaurants']
  },
  {
    alias: 'hotel_bar',
    title: 'Hotel bar',
    parents: ['bars'],
    country_whitelist: ['SE', 'DK', 'NO', 'PT', 'BR', 'FI']
  },
  {
    alias: 'hotels',
    title: 'Hotels',
    parents: ['eventservices', 'hotelstravel']
  },
  {
    alias: 'hotelstravel',
    title: 'Hotels & Travel',
    parents: []
  },
  {
    alias: 'hotpot',
    title: 'Hot Pot',
    parents: ['restaurants'],
    country_whitelist: ['SG', 'US', 'BR', 'CA', 'MY', 'SE', 'PH', 'TW', 'JP', 'HK', 'FR']
  },
  {
    alias: 'hotsprings',
    title: 'Hot Springs',
    parents: ['beautysvc'],
    country_whitelist: ['CH', 'NZ', 'US', 'BR', 'CZ', 'AT', 'AU', 'TW', 'JP', 'DE']
  },
  {
    alias: 'hottubandpool',
    title: 'Hot Tub & Pool',
    parents: ['homeandgarden']
  },
  {
    alias: 'housesitters',
    title: 'House Sitters',
    parents: ['homeservices'],
    country_whitelist: ['CH', 'US', 'CA', 'AT', 'AU', 'DE', 'PL', 'IT']
  },
  {
    alias: 'housingcooperatives',
    title: 'Housing Cooperatives',
    parents: ['realestate'],
    country_blacklist: ['IT', 'AR', 'MX', 'CL']
  },
  {
    alias: 'hunan',
    title: 'Hunan',
    parents: ['chinese'],
    country_whitelist: ['SG', 'TW', 'HK', 'MY', 'FR']
  },
  {
    alias: 'hungarian',
    title: 'Hungarian',
    parents: ['restaurants']
  },
  {
    alias: 'huntingfishingsupplies',
    title: 'Hunting & Fishing Supplies',
    parents: ['sportgoods']
  },
  {
    alias: 'hvac',
    title: 'Heating & Air Conditioning/HVAC',
    parents: ['homeservices']
  },
  {
    alias: 'hybridcarrepair',
    title: 'Hybrid Car Repair',
    parents: ['auto'],
    country_whitelist: ['SG', 'IE', 'NZ', 'US', 'GB', 'CZ', 'SE', 'AU', 'PL']
  },
  {
    alias: 'hydrojetting',
    title: 'Hydro-jetting',
    parents: ['localservices'],
    country_whitelist: ['US', 'CZ']
  },
  {
    alias: 'hydroponics',
    title: 'Hydroponics',
    parents: ['gardening']
  },
  {
    alias: 'hydrotherapy',
    title: 'Hydrotherapy',
    parents: ['health']
  },
  {
    alias: 'hypnosis',
    title: 'Hypnosis/Hypnotherapy',
    parents: ['health'],
    country_blacklist: ['NL', 'TR', 'HK']
  },
  {
    alias: 'iberian',
    title: 'Iberian',
    parents: ['restaurants'],
    country_whitelist: ['US', 'PT', 'CA']
  },
  {
    alias: 'icecream',
    title: 'Ice Cream & Frozen Yogurt',
    parents: ['food']
  },
  {
    alias: 'icedelivery',
    title: 'Ice Delivery',
    parents: ['localservices']
  },
  {
    alias: 'immigrationlawyers',
    title: 'Immigration Law',
    parents: ['lawyers']
  },
  {
    alias: 'immunodermatologists',
    title: 'Immunodermatologists',
    parents: ['physicians'],
    country_blacklist: ['JP', 'FR']
  },
  {
    alias: 'importedfood',
    title: 'Imported Food',
    parents: ['food']
  },
  {
    alias: 'indonesian',
    title: 'Indonesian',
    parents: ['restaurants'],
    country_blacklist: ['MX', 'ES']
  },
  {
    alias: 'indoor_playcenter',
    title: 'Indoor Playcentre',
    parents: ['active'],
    country_blacklist: [
      'SG',
      'CH',
      'IE',
      'TR',
      'BR',
      'MY',
      'AR',
      'AT',
      'PH',
      'MX',
      'TW',
      'CL',
      'PL',
      'HK',
      'FI'
    ]
  },
  {
    alias: 'indoorlandscaping',
    title: 'Indoor Landscaping',
    parents: ['professional'],
    country_blacklist: ['IT']
  },
  {
    alias: 'indpak',
    title: 'Indian',
    parents: ['restaurants']
  },
  {
    alias: 'infectiousdisease',
    title: 'Infectious Disease Specialists',
    parents: ['physicians']
  },
  {
    alias: 'installmentloans',
    title: 'Installment Loans',
    parents: ['financialservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'insulationinstallation',
    title: 'Insulation Installation',
    parents: ['homeservices']
  },
  {
    alias: 'insurance',
    title: 'Insurance',
    parents: ['financialservices']
  },
  {
    alias: 'interiordesign',
    title: 'Interior Design',
    parents: ['homeservices']
  },
  {
    alias: 'interlocksystems',
    title: 'Interlock Systems',
    parents: ['auto'],
    country_whitelist: ['US']
  },
  {
    alias: 'internalmed',
    title: 'Internal Medicine',
    parents: ['physicians'],
    country_blacklist: ['BR']
  },
  {
    alias: 'international',
    title: 'International',
    parents: ['restaurants'],
    country_blacklist: ['PH', 'TR', 'US', 'FI', 'IT', 'MY']
  },
  {
    alias: 'internetbooth',
    title: 'Internet Booths & Calling Centers',
    parents: ['localservices'],
    country_whitelist: ['MX', 'CL', 'BR', 'ES', 'IT', 'AR']
  },
  {
    alias: 'internetcafe',
    title: 'Internet Cafes',
    parents: ['food']
  },
  {
    alias: 'intervaltraininggyms',
    title: 'Interval Training Gyms',
    parents: ['gyms'],
    country_whitelist: ['US']
  },
  {
    alias: 'intlgrocery',
    title: 'International Grocery',
    parents: ['food']
  },
  {
    alias: 'investing',
    title: 'Investing',
    parents: ['financialservices']
  },
  {
    alias: 'iplaw',
    title: 'IP & Internet Law',
    parents: ['lawyers'],
    country_whitelist: ['US', 'CZ']
  },
  {
    alias: 'irish',
    title: 'Irish',
    parents: ['restaurants']
  },
  {
    alias: 'irish_pubs',
    title: 'Irish Pub',
    parents: ['bars']
  },
  {
    alias: 'irrigation',
    title: 'Irrigation',
    parents: ['homeservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'island_pub',
    title: 'Island Pub',
    parents: ['restaurants'],
    country_whitelist: ['SE']
  },
  {
    alias: 'isps',
    title: 'Internet Service Providers',
    parents: ['professional', 'homeservices']
  },
  {
    alias: 'israeli',
    title: 'Israeli',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'CZ', 'AT', 'DE']
  },
  {
    alias: 'italian',
    title: 'Italian',
    parents: ['restaurants']
  },
  {
    alias: 'itservices',
    title: 'IT Services & Computer Repair',
    parents: ['localservices']
  },
  {
    alias: 'ivhydration',
    title: 'IV Hydration',
    parents: ['health'],
    country_whitelist: ['US']
  },
  {
    alias: 'izakaya',
    title: 'Izakaya',
    parents: ['japanese'],
    country_whitelist: ['SG', 'NZ', 'US', 'BR', 'AU', 'MX', 'TW', 'JP', 'HK']
  },
  {
    alias: 'jailsandprisons',
    title: 'Jails & Prisons',
    parents: ['publicservicesgovt']
  },
  {
    alias: 'jaliscan',
    title: 'Jaliscan',
    parents: ['mexican'],
    country_whitelist: ['MX']
  },
  {
    alias: 'japacurry',
    title: 'Japanese Curry',
    parents: ['japanese'],
    country_whitelist: ['SG', 'TW', 'JP', 'US', 'HK']
  },
  {
    alias: 'japanese',
    title: 'Japanese',
    parents: ['restaurants']
  },
  {
    alias: 'jazzandblues',
    title: 'Jazz & Blues',
    parents: ['arts', 'nightlife']
  },
  {
    alias: 'jetskis',
    title: 'Jet Skis',
    parents: ['active']
  },
  {
    alias: 'jewelry',
    title: 'Jewelry',
    parents: ['shopping']
  },
  {
    alias: 'jewelryrepair',
    title: 'Jewelry Repair',
    parents: ['localservices'],
    country_blacklist: ['SG', 'CH', 'IE', 'NZ', 'GB', 'SE', 'AT', 'TW', 'DE', 'HK', 'FI']
  },
  {
    alias: 'jewish',
    title: 'Jewish',
    parents: ['restaurants'],
    country_whitelist: ['IT', 'PL', 'DE']
  },
  {
    alias: 'jpsweets',
    title: 'Japanese Sweets',
    parents: ['food'],
    country_whitelist: ['JP']
  },
  {
    alias: 'juicebars',
    title: 'Juice Bars & Smoothies',
    parents: ['food']
  },
  {
    alias: 'junkremovalandhauling',
    title: 'Junk Removal & Hauling',
    parents: ['localservices']
  },
  {
    alias: 'junkyards',
    title: 'Junkyards',
    parents: ['localservices'],
    country_whitelist: [
      'IE',
      'US',
      'CA',
      'GB',
      'CZ',
      'SE',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'DE',
      'BE',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'kaiseki',
    title: 'Kaiseki',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'karaoke',
    title: 'Karaoke',
    parents: ['nightlife']
  },
  {
    alias: 'karaokerental',
    title: 'Karaoke Rental',
    parents: ['partyequipmentrentals']
  },
  {
    alias: 'karate',
    title: 'Karate',
    parents: ['martialarts']
  },
  {
    alias: 'kebab',
    title: 'Kebab',
    parents: ['restaurants']
  },
  {
    alias: 'kickboxing',
    title: 'Kickboxing',
    parents: ['martialarts']
  },
  {
    alias: 'kids_activities',
    title: 'Kids Activities',
    parents: ['active'],
    country_blacklist: ['SG']
  },
  {
    alias: 'kidshairsalons',
    title: 'Kids Hair Salons',
    parents: ['hair']
  },
  {
    alias: 'kimonos',
    title: 'Kimonos',
    parents: ['fashion'],
    country_whitelist: ['JP']
  },
  {
    alias: 'kiosk',
    title: 'Kiosk',
    parents: ['food', 'shopping'],
    country_blacklist: ['SG', 'IE', 'NZ', 'US', 'BR', 'CA', 'GB', 'HK', 'IT', 'FR']
  },
  {
    alias: 'kitchenandbath',
    title: 'Kitchen & Bath',
    parents: ['homeandgarden']
  },
  {
    alias: 'kitchenincubators',
    title: 'Kitchen Incubators',
    parents: ['realestate'],
    country_whitelist: ['US', 'GB']
  },
  {
    alias: 'kitchensupplies',
    title: 'Kitchen Supplies',
    parents: ['kitchenandbath']
  },
  {
    alias: 'kiteboarding',
    title: 'Kiteboarding',
    parents: ['active'],
    country_blacklist: ['HK', 'IT', 'CZ']
  },
  {
    alias: 'knifesharpening',
    title: 'Knife Sharpening',
    parents: ['localservices']
  },
  {
    alias: 'knittingsupplies',
    title: 'Knitting Supplies',
    parents: ['shopping']
  },
  {
    alias: 'kombucha',
    title: 'Kombucha',
    parents: ['food'],
    country_whitelist: ['US']
  },
  {
    alias: 'kopitiam',
    title: 'Kopitiam',
    parents: ['restaurants'],
    country_whitelist: ['MY', 'SG']
  },
  {
    alias: 'korean',
    title: 'Korean',
    parents: ['restaurants']
  },
  {
    alias: 'kosher',
    title: 'Kosher',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'PT']
  },
  {
    alias: 'kurdish',
    title: 'Kurdish',
    parents: ['restaurants'],
    country_whitelist: ['NO', 'SE']
  },
  {
    alias: 'kushikatsu',
    title: 'Kushikatsu',
    parents: ['japanese'],
    country_whitelist: ['JP']
  },
  {
    alias: 'laboratorytesting',
    title: 'Laboratory Testing',
    parents: ['diagnosticservices'],
    country_whitelist: [
      'US',
      'BR',
      'CA',
      'AR',
      'CZ',
      'AU',
      'MX',
      'CL',
      'PL',
      'BE',
      'PT',
      'ES',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'lactationservices',
    title: 'Lactation Services',
    parents: ['health'],
    country_whitelist: ['US', 'BR', 'BE', 'PT', 'IT', 'FR']
  },
  {
    alias: 'lahmacun',
    title: 'Lahmacun',
    parents: ['turkish'],
    country_whitelist: ['TR']
  },
  {
    alias: 'lakes',
    title: 'Lakes',
    parents: ['active']
  },
  {
    alias: 'lancenters',
    title: 'LAN Centers',
    parents: ['arts'],
    country_blacklist: ['IT', 'MY', 'PH']
  },
  {
    alias: 'landmarks',
    title: 'Landmarks & Historical Buildings',
    parents: ['publicservicesgovt']
  },
  {
    alias: 'landscapearchitects',
    title: 'Landscape Architects',
    parents: ['homeservices']
  },
  {
    alias: 'landscaping',
    title: 'Landscaping',
    parents: ['homeservices']
  },
  {
    alias: 'landsurveying',
    title: 'Land Surveying',
    parents: ['realestatesvcs'],
    country_blacklist: ['JP']
  },
  {
    alias: 'language_schools',
    title: 'Language Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'laos',
    title: 'Laos',
    parents: ['restaurants'],
    country_whitelist: ['AU']
  },
  {
    alias: 'laotian',
    title: 'Laotian',
    parents: ['restaurants'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'laser_hair_removal',
    title: 'Laser Hair Removal',
    parents: ['hairremoval']
  },
  {
    alias: 'laserlasikeyes',
    title: 'Laser Eye Surgery/Lasik',
    parents: ['health']
  },
  {
    alias: 'lasertag',
    title: 'Laser Tag',
    parents: ['active'],
    country_blacklist: ['IE', 'BR']
  },
  {
    alias: 'latin',
    title: 'Latin American',
    parents: ['restaurants']
  },
  {
    alias: 'laundromat',
    title: 'Laundromat',
    parents: ['laundryservices']
  },
  {
    alias: 'laundryservices',
    title: 'Laundry Services',
    parents: ['localservices']
  },
  {
    alias: 'lawn_bowling',
    title: 'Lawn Bowling',
    parents: ['active'],
    country_whitelist: ['SE', 'AU', 'NZ', 'NO', 'PT', 'FI']
  },
  {
    alias: 'lawnservices',
    title: 'Lawn Services',
    parents: ['landscaping'],
    country_whitelist: ['US', 'BR', 'BE', 'CA', 'NL']
  },
  {
    alias: 'lawyers',
    title: 'Lawyers',
    parents: ['professional']
  },
  {
    alias: 'leather',
    title: 'Leather Goods',
    parents: ['fashion']
  },
  {
    alias: 'lebanese',
    title: 'Lebanese',
    parents: ['mideastern'],
    country_blacklist: ['AR', 'HK', 'JP']
  },
  {
    alias: 'legalservices',
    title: 'Legal Services',
    parents: ['professional'],
    country_blacklist: [
      'CH',
      'IE',
      'MY',
      'AR',
      'GB',
      'SE',
      'AT',
      'PH',
      'MX',
      'TW',
      'CL',
      'DE',
      'HK',
      'ES',
      'FI'
    ]
  },
  {
    alias: 'libraries',
    title: 'Libraries',
    parents: ['publicservicesgovt']
  },
  {
    alias: 'liceservices',
    title: 'Lice Services',
    parents: ['health'],
    country_blacklist: ['AR', 'CZ', 'MX', 'CL', 'JP', 'DE', 'HK', 'FI']
  },
  {
    alias: 'lifecoach',
    title: 'Life Coach',
    parents: ['professional']
  },
  {
    alias: 'lifeinsurance',
    title: 'Life Insurance',
    parents: ['insurance'],
    country_blacklist: ['CH', 'CA', 'MY', 'AT', 'PH', 'TW', 'DE', 'PT', 'HK', 'FI', 'FR']
  },
  {
    alias: 'lighting',
    title: 'Lighting Fixtures & Equipment',
    parents: ['homeservices']
  },
  {
    alias: 'lightingstores',
    title: 'Lighting Stores',
    parents: ['homeandgarden']
  },
  {
    alias: 'ligurian',
    title: 'Ligurian',
    parents: ['italian'],
    country_whitelist: ['IT', 'FR']
  },
  {
    alias: 'limos',
    title: 'Limos',
    parents: ['transport']
  },
  {
    alias: 'linens',
    title: 'Linens',
    parents: ['homeandgarden'],
    country_whitelist: ['CH', 'NO', 'CZ', 'AT', 'DK', 'DE', 'BE', 'PT', 'IT', 'FR']
  },
  {
    alias: 'lingerie',
    title: 'Lingerie',
    parents: ['fashion']
  },
  {
    alias: 'livestocksupply',
    title: 'Livestock Feed & Supply',
    parents: ['shopping']
  },
  {
    alias: 'localfishstores',
    title: 'Local Fish Stores',
    parents: ['petstore'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'CZ',
      'SE',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'AT',
      'JP',
      'DE',
      'BE',
      'ES',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'localflavor',
    title: 'Local Flavor',
    parents: []
  },
  {
    alias: 'localservices',
    title: 'Local Services',
    parents: []
  },
  {
    alias: 'locksmiths',
    title: 'Keys & Locksmiths',
    parents: ['homeservices']
  },
  {
    alias: 'lounges',
    title: 'Lounges',
    parents: ['bars']
  },
  {
    alias: 'luggage',
    title: 'Luggage',
    parents: ['shopping']
  },
  {
    alias: 'luggagestorage',
    title: 'Luggage Storage',
    parents: ['travelservices']
  },
  {
    alias: 'lumbard',
    title: 'Lumbard',
    parents: ['italian'],
    country_whitelist: ['IT']
  },
  {
    alias: 'lyonnais',
    title: 'Lyonnais',
    parents: ['restaurants'],
    country_whitelist: ['BE', 'FR']
  },
  {
    alias: 'macarons',
    title: 'Macarons',
    parents: ['gourmet'],
    country_blacklist: ['IT', 'MY', 'PH']
  },
  {
    alias: 'machinerental',
    title: 'Machine & Tool Rental',
    parents: ['localservices']
  },
  {
    alias: 'machineshops',
    title: 'Machine Shops',
    parents: ['localservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'madeira',
    title: 'Madeira',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'magicians',
    title: 'Magicians',
    parents: ['eventservices'],
    country_blacklist: ['SG', 'TR', 'SE', 'FI']
  },
  {
    alias: 'mags',
    title: 'Newspapers & Magazines',
    parents: ['media']
  },
  {
    alias: 'mahjong',
    title: 'Mah Jong Halls',
    parents: ['arts'],
    country_whitelist: ['HK', 'JP']
  },
  {
    alias: 'mailboxcenters',
    title: 'Mailbox Centers',
    parents: ['localservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'makerspaces',
    title: 'Makerspaces',
    parents: ['arts'],
    country_blacklist: ['IT']
  },
  {
    alias: 'makeupartists',
    title: 'Makeup Artists',
    parents: ['beautysvc']
  },
  {
    alias: 'malaysian',
    title: 'Malaysian',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'PT', 'CZ', 'ES']
  },
  {
    alias: 'mamak',
    title: 'Mamak',
    parents: ['malaysian'],
    country_whitelist: ['AU', 'MY']
  },
  {
    alias: 'marchingbands',
    title: 'Marching Bands',
    parents: ['arts'],
    country_whitelist: ['CH', 'NO', 'TR', 'GB', 'SE', 'AT', 'DE', 'PT']
  },
  {
    alias: 'marinas',
    title: 'Marinas',
    parents: ['auto'],
    country_whitelist: [
      'CH',
      'IE',
      'TR',
      'US',
      'CA',
      'AR',
      'GB',
      'SE',
      'AU',
      'MX',
      'DK',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'CL',
      'DE',
      'BE',
      'ES',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'marketing',
    title: 'Marketing',
    parents: ['professional']
  },
  {
    alias: 'markets',
    title: 'Fruits & Veggies',
    parents: ['gourmet']
  },
  {
    alias: 'marketstalls',
    title: 'Market Stalls',
    parents: ['shopping'],
    country_whitelist: ['CH', 'IE', 'NO', 'GB', 'CZ', 'AT', 'DK', 'DE', 'PL', 'PT', 'IT']
  },
  {
    alias: 'martialarts',
    title: 'Martial Arts',
    parents: ['fitness']
  },
  {
    alias: 'masonry_concrete',
    title: 'Masonry/Concrete',
    parents: ['homeservices'],
    country_blacklist: ['SG', 'IE', 'NZ', 'BR', 'BE', 'NL', 'GB']
  },
  {
    alias: 'massage',
    title: 'Massage',
    parents: ['beautysvc']
  },
  {
    alias: 'massage_schools',
    title: 'Massage Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'massage_therapy',
    title: 'Massage Therapy',
    parents: ['health'],
    country_blacklist: [
      'CH',
      'IE',
      'TR',
      'MY',
      'CZ',
      'SE',
      'PH',
      'TW',
      'PL',
      'SG',
      'NZ',
      'AT',
      'DE',
      'HK',
      'FI',
      'FR'
    ]
  },
  {
    alias: 'massmedia',
    title: 'Mass Media',
    parents: []
  },
  {
    alias: 'matchmakers',
    title: 'Matchmakers',
    parents: ['professional'],
    country_whitelist: [
      'CH',
      'NO',
      'US',
      'CA',
      'AR',
      'AU',
      'MX',
      'CL',
      'DK',
      'DE',
      'JP',
      'PL',
      'PT',
      'ES',
      'FR'
    ]
  },
  {
    alias: 'materialeelettrico',
    title: 'Materiale elettrico',
    parents: ['homeandgarden'],
    country_whitelist: ['MX', 'CL', 'ES', 'IT', 'AR']
  },
  {
    alias: 'maternity',
    title: 'Maternity Wear',
    parents: ['fashion']
  },
  {
    alias: 'mattresses',
    title: 'Mattresses',
    parents: ['homeandgarden']
  },
  {
    alias: 'mauritius',
    title: 'Mauritius',
    parents: ['french'],
    country_blacklist: [
      'CH',
      'NZ',
      'NO',
      'TR',
      'BR',
      'AR',
      'AT',
      'AU',
      'MX',
      'CL',
      'DK',
      'DE',
      'JP',
      'PL'
    ]
  },
  {
    alias: 'meaderies',
    title: 'Meaderies',
    parents: ['food'],
    country_whitelist: ['CH', 'US', 'AR', 'AT', 'MX', 'CL', 'DE', 'PL', 'ES']
  },
  {
    alias: 'meatballs',
    title: 'Meatballs',
    parents: ['restaurants'],
    country_whitelist: ['NL', 'BE', 'FR', 'TR']
  },
  {
    alias: 'meats',
    title: 'Meat Shops',
    parents: ['gourmet']
  },
  {
    alias: 'medcenters',
    title: 'Medical Centers',
    parents: ['health']
  },
  {
    alias: 'media',
    title: 'Books, Mags, Music & Video',
    parents: ['shopping']
  },
  {
    alias: 'mediators',
    title: 'Mediators',
    parents: ['professional'],
    country_whitelist: [
      'SG',
      'CH',
      'IE',
      'NZ',
      'US',
      'CA',
      'GB',
      'AT',
      'AU',
      'DE',
      'BE',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'medicalfoot',
    title: 'Medical Foot Care',
    parents: ['health'],
    country_blacklist: [
      'TR',
      'US',
      'MY',
      'AR',
      'CZ',
      'PH',
      'MX',
      'PL',
      'BR',
      'AT',
      'CL',
      'JP',
      'PT',
      'ES',
      'FI',
      'IT'
    ]
  },
  {
    alias: 'medicallaw',
    title: 'Medical Law',
    parents: ['lawyers']
  },
  {
    alias: 'medicalspa',
    title: 'Medical Spas',
    parents: ['health', 'beautysvc']
  },
  {
    alias: 'medicalsupplies',
    title: 'Medical Supplies',
    parents: ['shopping']
  },
  {
    alias: 'medicaltransportation',
    title: 'Medical Transportation',
    parents: ['health'],
    country_whitelist: [
      'SG',
      'CH',
      'NO',
      'US',
      'BR',
      'AT',
      'AU',
      'DK',
      'DE',
      'BE',
      'PT',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'meditationcenters',
    title: 'Meditation Centers',
    parents: ['fitness']
  },
  {
    alias: 'mediterranean',
    title: 'Mediterranean',
    parents: ['restaurants']
  },
  {
    alias: 'memorycare',
    title: 'Memory Care',
    parents: ['health']
  },
  {
    alias: 'menscloth',
    title: "Men's Clothing",
    parents: ['fashion']
  },
  {
    alias: 'menshair',
    title: "Men's Hair Salons",
    parents: ['hair'],
    country_whitelist: ['NO', 'US', 'AR', 'CZ', 'AU', 'MX', 'CL', 'DK', 'BE', 'PT', 'ES', 'NL']
  },
  {
    alias: 'metaldetectorservices',
    title: 'Metal Detector Services',
    parents: ['localservices']
  },
  {
    alias: 'metalfabricators',
    title: 'Metal Fabricators',
    parents: ['localservices'],
    country_blacklist: ['MX', 'AR', 'SE']
  },
  {
    alias: 'metrostations',
    title: 'Metro Stations',
    parents: ['transport']
  },
  {
    alias: 'mexican',
    title: 'Mexican',
    parents: ['restaurants']
  },
  {
    alias: 'mideastern',
    title: 'Middle Eastern',
    parents: ['restaurants'],
    country_blacklist: ['BR']
  },
  {
    alias: 'midwives',
    title: 'Midwives',
    parents: ['health']
  },
  {
    alias: 'militarysurplus',
    title: 'Military Surplus',
    parents: ['shopping']
  },
  {
    alias: 'milkbars',
    title: 'Milk Bars',
    parents: ['restaurants'],
    country_whitelist: ['AU', 'PL']
  },
  {
    alias: 'milkshakebars',
    title: 'Milkshake Bars',
    parents: ['food'],
    country_whitelist: ['GB']
  },
  {
    alias: 'minho',
    title: 'Minho',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'mini_golf',
    title: 'Mini Golf',
    parents: ['active'],
    country_blacklist: ['IT']
  },
  {
    alias: 'mistingsystemservices',
    title: 'Misting System Services',
    parents: ['localservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'mobile_home_repair',
    title: 'Mobile Home Repair',
    parents: ['homeservices'],
    country_whitelist: ['SE', 'US', 'BE', 'CA', 'NL']
  },
  {
    alias: 'mobiledentrepair',
    title: 'Mobile Dent Repair',
    parents: ['auto'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'mobilehomes',
    title: 'Mobile Home Dealers',
    parents: ['realestate'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'mobileparks',
    title: 'Mobile Home Parks',
    parents: ['realestate'],
    country_whitelist: ['US']
  },
  {
    alias: 'mobilephonerepair',
    title: 'Mobile Phone Repair',
    parents: ['itservices']
  },
  {
    alias: 'mobilephones',
    title: 'Mobile Phones',
    parents: ['shopping']
  },
  {
    alias: 'mobilityequipment',
    title: 'Mobility Equipment Sales & Services',
    parents: ['auto'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'modern_australian',
    title: 'Modern Australian',
    parents: ['restaurants'],
    country_whitelist: ['AU']
  },
  {
    alias: 'modern_european',
    title: 'Modern European',
    parents: ['restaurants']
  },
  {
    alias: 'mohels',
    title: 'Mohels',
    parents: ['eventservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'mongolian',
    title: 'Mongolian',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'PT', 'ES', 'FI']
  },
  {
    alias: 'montessori',
    title: 'Montessori Schools',
    parents: ['education']
  },
  {
    alias: 'moroccan',
    title: 'Moroccan',
    parents: ['restaurants'],
    country_blacklist: ['TR']
  },
  {
    alias: 'mortgagebrokers',
    title: 'Mortgage Brokers',
    parents: ['realestate'],
    country_blacklist: ['BR', 'DK', 'ES']
  },
  {
    alias: 'mortgagelenders',
    title: 'Mortgage Lenders',
    parents: ['financialservices'],
    country_blacklist: ['CH', 'AT', 'DE', 'TR', 'FR']
  },
  {
    alias: 'mortuaryservices',
    title: 'Mortuary Services',
    parents: ['funeralservices'],
    country_blacklist: ['IT']
  },
  {
    alias: 'mosques',
    title: 'Mosques',
    parents: ['religiousorgs']
  },
  {
    alias: 'motodealers',
    title: 'Motorsport Vehicle Dealers',
    parents: ['auto'],
    country_whitelist: ['SE', 'TW', 'US', 'ES', 'IT']
  },
  {
    alias: 'motorcycle_rental',
    title: 'Motorcycle Rental',
    parents: ['hotelstravel'],
    country_whitelist: [
      'SG',
      'NZ',
      'NO',
      'US',
      'BR',
      'CZ',
      'AU',
      'MX',
      'DE',
      'PT',
      'ES',
      'FI',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'motorcycledealers',
    title: 'Motorcycle Dealers',
    parents: ['auto']
  },
  {
    alias: 'motorcyclepartsandsupplies',
    title: 'Motorcycle Parts & Supplies',
    parents: ['autopartssupplies']
  },
  {
    alias: 'motorcyclerepair',
    title: 'Motorcycle Repair',
    parents: ['auto']
  },
  {
    alias: 'motorcyclinggear',
    title: 'Motorcycle Gear',
    parents: ['shopping'],
    country_blacklist: ['IE', 'GB', 'NZ', 'CA']
  },
  {
    alias: 'motorepairs',
    title: 'Motorsport Vehicle Repairs',
    parents: ['auto'],
    country_whitelist: ['SE', 'TW', 'US', 'ES', 'IT']
  },
  {
    alias: 'mountainbiking',
    title: 'Mountain Biking',
    parents: ['active']
  },
  {
    alias: 'mountainhuts',
    title: 'Mountain Huts',
    parents: ['hotels'],
    country_whitelist: [
      'CH',
      'NZ',
      'NO',
      'US',
      'AR',
      'CZ',
      'SE',
      'AT',
      'CL',
      'DE',
      'PL',
      'ES',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'movers',
    title: 'Movers',
    parents: ['homeservices']
  },
  {
    alias: 'movietheaters',
    title: 'Cinema',
    parents: ['arts']
  },
  {
    alias: 'muaythai',
    title: 'Muay Thai',
    parents: ['martialarts']
  },
  {
    alias: 'municipality',
    title: 'Municipality',
    parents: ['publicservicesgovt'],
    country_whitelist: ['US']
  },
  {
    alias: 'museums',
    title: 'Museums',
    parents: ['arts']
  },
  {
    alias: 'musicalinstrumentsandteachers',
    title: 'Musical Instruments & Teachers',
    parents: ['shopping']
  },
  {
    alias: 'musicians',
    title: 'Musicians',
    parents: ['eventservices'],
    country_blacklist: ['TR']
  },
  {
    alias: 'musicinstrumentservices',
    title: 'Musical Instrument Services',
    parents: ['localservices']
  },
  {
    alias: 'musicproduction',
    title: 'Music Production Services',
    parents: ['professional']
  },
  {
    alias: 'musicvenues',
    title: 'Music Venues',
    parents: ['arts', 'nightlife']
  },
  {
    alias: 'musicvideo',
    title: 'Music & DVDs',
    parents: ['media']
  },
  {
    alias: 'mystics',
    title: 'Mystics',
    parents: ['psychic_astrology'],
    country_blacklist: ['FR']
  },
  {
    alias: 'nailtechnicians',
    title: 'Nail Technicians',
    parents: ['othersalons'],
    country_blacklist: ['CH', 'AT', 'JP', 'DE', 'TR', 'BR', 'FR']
  },
  {
    alias: 'nannys',
    title: 'Nanny Services',
    parents: ['localservices'],
    country_blacklist: ['SE', 'FI']
  },
  {
    alias: 'napoletana',
    title: 'Napoletana',
    parents: ['italian'],
    country_whitelist: ['IT', 'CZ', 'FR']
  },
  {
    alias: 'nasilemak',
    title: 'Nasi Lemak',
    parents: ['food'],
    country_whitelist: ['MY', 'SG']
  },
  {
    alias: 'naturalgassuppliers',
    title: 'Natural Gas Suppliers',
    parents: ['utilities']
  },
  {
    alias: 'naturopathic',
    title: 'Naturopathic/Holistic',
    parents: ['physicians']
  },
  {
    alias: 'nephrologists',
    title: 'Nephrologists',
    parents: ['physicians'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'neurologist',
    title: 'Neurologist',
    parents: ['physicians']
  },
  {
    alias: 'neuropathologists',
    title: 'Neuropathologists',
    parents: ['physicians']
  },
  {
    alias: 'neurotologists',
    title: 'Neurotologists',
    parents: ['physicians'],
    country_blacklist: ['JP']
  },
  {
    alias: 'newamerican',
    title: 'American (New)',
    parents: ['restaurants'],
    country_whitelist: ['SE', 'IE', 'DK', 'NO', 'US', 'GB']
  },
  {
    alias: 'newcanadian',
    title: 'Canadian (New)',
    parents: ['restaurants'],
    country_whitelist: ['CA']
  },
  {
    alias: 'newmexican',
    title: 'New Mexican Cuisine',
    parents: ['restaurants'],
    country_whitelist: ['US']
  },
  {
    alias: 'newzealand',
    title: 'New Zealand',
    parents: ['restaurants'],
    country_whitelist: ['NZ']
  },
  {
    alias: 'nicaraguan',
    title: 'Nicaraguan',
    parents: ['restaurants'],
    country_blacklist: ['AR', 'CL']
  },
  {
    alias: 'nicois',
    title: 'Nicoise',
    parents: ['french'],
    country_whitelist: ['FR']
  },
  {
    alias: 'nightfood',
    title: 'Night Food',
    parents: ['restaurants'],
    country_whitelist: ['SE', 'DK', 'NO', 'PL', 'TR']
  },
  {
    alias: 'nightlife',
    title: 'Nightlife',
    parents: []
  },
  {
    alias: 'nikkei',
    title: 'Nikkei',
    parents: ['restaurants'],
    country_whitelist: ['MX', 'CL', 'BR', 'ES', 'AR']
  },
  {
    alias: 'nonprofit',
    title: 'Community Service/Non-Profit',
    parents: ['localservices']
  },
  {
    alias: 'noodles',
    title: 'Noodles',
    parents: ['restaurants'],
    country_blacklist: ['CH', 'FR', 'AT', 'DE']
  },
  {
    alias: 'norcinerie',
    title: 'Norcinerie',
    parents: ['restaurants'],
    country_whitelist: ['IT']
  },
  {
    alias: 'northeasternbrazilian',
    title: 'Northeastern Brazilian',
    parents: ['brazilian'],
    country_whitelist: ['BR']
  },
  {
    alias: 'northernbrazilian',
    title: 'Northern Brazilian',
    parents: ['brazilian'],
    country_whitelist: ['BR']
  },
  {
    alias: 'northerngerman',
    title: 'Northern German',
    parents: ['german'],
    country_whitelist: ['DE']
  },
  {
    alias: 'northernmexican',
    title: 'Northern Mexican',
    parents: ['mexican'],
    country_whitelist: ['MX']
  },
  {
    alias: 'norwegian',
    title: 'Traditional Norwegian',
    parents: ['restaurants'],
    country_whitelist: ['NO', 'FR']
  },
  {
    alias: 'notaries',
    title: 'Notaries',
    parents: ['localservices'],
    country_blacklist: ['NO']
  },
  {
    alias: 'nudist',
    title: 'Nudist',
    parents: ['active'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'GB',
      'CZ',
      'SE',
      'AU',
      'DK',
      'PL',
      'NZ',
      'NO',
      'BR',
      'AT',
      'DE',
      'BE',
      'PT',
      'ES',
      'FI',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'nursepractitioner',
    title: 'Nurse Practitioner',
    parents: ['health']
  },
  {
    alias: 'nursingschools',
    title: 'Nursing Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'nutritionists',
    title: 'Nutritionists',
    parents: ['health']
  },
  {
    alias: 'nyonya',
    title: 'Nyonya',
    parents: ['malaysian'],
    country_whitelist: ['AU', 'MY']
  },
  {
    alias: 'oaxacan',
    title: 'Oaxacan',
    parents: ['mexican'],
    country_whitelist: ['MX']
  },
  {
    alias: 'obgyn',
    title: 'Obstetricians & Gynecologists',
    parents: ['physicians']
  },
  {
    alias: 'observatories',
    title: 'Observatories',
    parents: ['arts']
  },
  {
    alias: 'occupationaltherapy',
    title: 'Occupational Therapy',
    parents: ['health'],
    country_blacklist: [
      'CH',
      'TR',
      'MY',
      'CZ',
      'SE',
      'PH',
      'TW',
      'PL',
      'SG',
      'NZ',
      'AT',
      'JP',
      'HK',
      'FI',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'oden',
    title: 'Oden',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'officecleaning',
    title: 'Office Cleaning',
    parents: ['professional']
  },
  {
    alias: 'officeequipment',
    title: 'Office Equipment',
    parents: ['shopping']
  },
  {
    alias: 'officiants',
    title: 'Officiants',
    parents: ['eventservices']
  },
  {
    alias: 'oilchange',
    title: 'Oil Change Stations',
    parents: ['auto'],
    country_blacklist: ['CH', 'SE', 'AT', 'DE']
  },
  {
    alias: 'okinawan',
    title: 'Okinawan',
    parents: ['japanese'],
    country_whitelist: ['JP']
  },
  {
    alias: 'okonomiyaki',
    title: 'Okonomiyaki',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'oliveoil',
    title: 'Olive Oil',
    parents: ['gourmet'],
    country_whitelist: ['AT', 'DE', 'US', 'BE', 'ES', 'FR']
  },
  {
    alias: 'oncologist',
    title: 'Oncologist',
    parents: ['physicians']
  },
  {
    alias: 'onigiri',
    title: 'Onigiri',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'opensandwiches',
    title: 'Open Sandwiches',
    parents: ['restaurants'],
    country_whitelist: ['NO', 'TR', 'DK', 'SE']
  },
  {
    alias: 'opera',
    title: 'Opera & Ballet',
    parents: ['arts']
  },
  {
    alias: 'opthamalogists',
    title: 'Ophthalmologists',
    parents: ['physicians']
  },
  {
    alias: 'opticians',
    title: 'Eyewear & Opticians',
    parents: ['shopping']
  },
  {
    alias: 'optometrists',
    title: 'Optometrists',
    parents: ['health'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'oralsurgeons',
    title: 'Oral Surgeons',
    parents: ['dentists']
  },
  {
    alias: 'organdonorservices',
    title: 'Organ & Tissue Donor Services',
    parents: ['health'],
    country_whitelist: ['US']
  },
  {
    alias: 'organic_stores',
    title: 'Organic Stores',
    parents: ['food']
  },
  {
    alias: 'oriental',
    title: 'Oriental',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DE', 'PL', 'PT', 'FR']
  },
  {
    alias: 'orthodontists',
    title: 'Orthodontists',
    parents: ['dentists']
  },
  {
    alias: 'orthopedists',
    title: 'Orthopedists',
    parents: ['physicians']
  },
  {
    alias: 'orthotics',
    title: 'Orthotics',
    parents: ['health'],
    country_whitelist: [
      'SG',
      'IE',
      'NZ',
      'NO',
      'US',
      'BR',
      'GB',
      'CZ',
      'AU',
      'DK',
      'ES',
      'FI',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'osteopathicphysicians',
    title: 'Osteopathic Physicians',
    parents: ['physicians']
  },
  {
    alias: 'osteopaths',
    title: 'Osteopaths',
    parents: ['medcenters'],
    country_whitelist: ['AU']
  },
  {
    alias: 'othersalons',
    title: 'Nail Salons',
    parents: ['beautysvc']
  },
  {
    alias: 'otologists',
    title: 'Otologists',
    parents: ['physicians'],
    country_blacklist: ['CH', 'FR', 'AT', 'DE']
  },
  {
    alias: 'ottomancuisine',
    title: 'Ottoman Cuisine',
    parents: ['turkish'],
    country_whitelist: ['TR']
  },
  {
    alias: 'outdoorfurniture',
    title: 'Outdoor Furniture Stores',
    parents: ['homeandgarden']
  },
  {
    alias: 'outdoorgear',
    title: 'Outdoor Gear',
    parents: ['sportgoods']
  },
  {
    alias: 'outdoormovies',
    title: 'Outdoor Movies',
    parents: ['movietheaters'],
    country_blacklist: ['PL']
  },
  {
    alias: 'outdoorpowerequipmentservices',
    title: 'Outdoor Power Equipment Services',
    parents: ['localservices'],
    country_whitelist: ['CH', 'NO', 'US', 'BR', 'CA', 'MY', 'AT', 'PH', 'DK', 'DE', 'PL', 'PT']
  },
  {
    alias: 'outlet_stores',
    title: 'Outlet Stores',
    parents: ['shopping']
  },
  {
    alias: 'oxygenbars',
    title: 'Oxygen Bars',
    parents: ['health'],
    country_whitelist: ['US']
  },
  {
    alias: 'oyakodon',
    title: 'Oyakodon',
    parents: ['donburi'],
    country_whitelist: ['JP']
  },
  {
    alias: 'pachinko',
    title: 'Pachinko',
    parents: ['arts'],
    country_whitelist: ['JP']
  },
  {
    alias: 'packingservices',
    title: 'Packing Services',
    parents: ['homeservices'],
    country_whitelist: ['SG', 'US', 'CA', 'MY', 'CZ', 'PH', 'TW', 'PL', 'BE', 'HK', 'FR']
  },
  {
    alias: 'packingsupplies',
    title: 'Packing Supplies',
    parents: ['shopping'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'GB',
      'CZ',
      'AU',
      'DK',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'JP',
      'DE',
      'BE',
      'PT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'paddleboarding',
    title: 'Paddleboarding',
    parents: ['active'],
    country_blacklist: ['TR', 'MY', 'SE', 'PH', 'TW', 'JP', 'HK', 'IT']
  },
  {
    alias: 'painmanagement',
    title: 'Pain Management',
    parents: ['physicians']
  },
  {
    alias: 'paintandsip',
    title: 'Paint & Sip',
    parents: ['arts'],
    country_whitelist: ['US', 'HK']
  },
  {
    alias: 'paintball',
    title: 'Paintball',
    parents: ['active'],
    country_blacklist: ['SG']
  },
  {
    alias: 'painters',
    title: 'Painters',
    parents: ['homeservices']
  },
  {
    alias: 'paintstores',
    title: 'Paint Stores',
    parents: ['homeandgarden'],
    country_blacklist: ['PH', 'TW', 'TR', 'PT', 'HK', 'FI', 'MY']
  },
  {
    alias: 'paintyourownpottery',
    title: 'Paint-Your-Own Pottery',
    parents: ['artsandcrafts'],
    country_whitelist: ['SG', 'US', 'CA', 'MY', 'PH', 'TW', 'DE', 'HK']
  },
  {
    alias: 'pakistani',
    title: 'Pakistani',
    parents: ['restaurants']
  },
  {
    alias: 'palatine',
    title: 'Palatine',
    parents: ['german'],
    country_whitelist: ['DE']
  },
  {
    alias: 'panasian',
    title: 'Pan Asian',
    parents: ['restaurants'],
    country_blacklist: ['IT']
  },
  {
    alias: 'pancakes',
    title: 'Pancakes',
    parents: ['breakfast_brunch']
  },
  {
    alias: 'panzerotti',
    title: 'Panzerotti',
    parents: ['food'],
    country_whitelist: ['IT']
  },
  {
    alias: 'paragliding',
    title: 'Paragliding',
    parents: ['active']
  },
  {
    alias: 'parasailing',
    title: 'Parasailing',
    parents: ['active']
  },
  {
    alias: 'parentingclasses',
    title: 'Parenting Classes',
    parents: ['specialtyschools']
  },
  {
    alias: 'parking',
    title: 'Parking',
    parents: ['auto']
  },
  {
    alias: 'parklets',
    title: 'Parklets',
    parents: ['localflavor'],
    country_whitelist: ['US']
  },
  {
    alias: 'parks',
    title: 'Parks',
    parents: ['active']
  },
  {
    alias: 'parma',
    title: 'Parma',
    parents: ['restaurants'],
    country_whitelist: ['AU']
  },
  {
    alias: 'partybikerentals',
    title: 'Party Bike Rentals',
    parents: ['eventservices'],
    country_whitelist: ['IE', 'DE', 'US', 'BE', 'ES', 'NL']
  },
  {
    alias: 'partybusrentals',
    title: 'Party Bus Rentals',
    parents: ['eventservices'],
    country_blacklist: [
      'IE',
      'CA',
      'MY',
      'CZ',
      'PH',
      'MX',
      'TW',
      'JP',
      'PL',
      'PT',
      'HK',
      'ES',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'partycharacters',
    title: 'Party Characters',
    parents: ['eventservices']
  },
  {
    alias: 'partyequipmentrentals',
    title: 'Party Equipment Rentals',
    parents: ['eventservices'],
    country_blacklist: ['HK', 'TW', 'FI']
  },
  {
    alias: 'partysupplies',
    title: 'Party Supplies',
    parents: ['eventservices']
  },
  {
    alias: 'passportvisaservices',
    title: 'Passport & Visa Services',
    parents: ['travelservices']
  },
  {
    alias: 'pastashops',
    title: 'Pasta Shops',
    parents: ['gourmet'],
    country_whitelist: [
      'SG',
      'IE',
      'NZ',
      'NO',
      'US',
      'AR',
      'GB',
      'CZ',
      'AU',
      'CL',
      'DK',
      'JP',
      'BE',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'patentlaw',
    title: 'Patent Law',
    parents: ['professional']
  },
  {
    alias: 'pathologists',
    title: 'Pathologists',
    parents: ['physicians']
  },
  {
    alias: 'patiocoverings',
    title: 'Patio Coverings',
    parents: ['homeservices'],
    country_whitelist: ['US', 'BR', 'BE', 'PT', 'CA', 'IT', 'NL']
  },
  {
    alias: 'pawn',
    title: 'Pawn Shops',
    parents: ['shopping'],
    country_blacklist: ['TR', 'BR']
  },
  {
    alias: 'paydayloans',
    title: 'Check Cashing/Pay-day Loans',
    parents: ['financialservices'],
    country_blacklist: ['CH', 'NZ', 'CZ', 'AT', 'DK', 'DE', 'ES', 'IT']
  },
  {
    alias: 'payroll',
    title: 'Payroll Services',
    parents: ['professional'],
    country_whitelist: ['SG', 'IE', 'NZ', 'TR', 'US', 'CA', 'GB', 'CZ', 'AU', 'BE', 'NL']
  },
  {
    alias: 'pediatric_dentists',
    title: 'Pediatric Dentists',
    parents: ['dentists']
  },
  {
    alias: 'pediatricians',
    title: 'Pediatricians',
    parents: ['physicians']
  },
  {
    alias: 'pedicabs',
    title: 'Pedicabs',
    parents: ['transport'],
    country_whitelist: ['CH', 'NO', 'US', 'MY', 'SE', 'AT', 'PH', 'DK', 'DE']
  },
  {
    alias: 'pekinese',
    title: 'Pekinese',
    parents: ['chinese'],
    country_whitelist: ['SG', 'TW', 'JP', 'HK', 'IT', 'MY', 'FR']
  },
  {
    alias: 'pensions',
    title: 'Pensions',
    parents: ['hotels'],
    country_whitelist: ['NO', 'BR', 'CZ', 'SE', 'AT', 'DK', 'JP', 'DE', 'ES']
  },
  {
    alias: 'perfume',
    title: 'Perfume',
    parents: ['shopping', 'beautysvc'],
    country_blacklist: ['SG', 'PL', 'TR', 'CA', 'FI']
  },
  {
    alias: 'periodontists',
    title: 'Periodontists',
    parents: ['dentists']
  },
  {
    alias: 'permanentmakeup',
    title: 'Permanent Makeup',
    parents: ['beautysvc'],
    country_blacklist: ['SG', 'NZ', 'FI']
  },
  {
    alias: 'persian',
    title: 'Persian/Iranian',
    parents: ['restaurants']
  },
  {
    alias: 'personal_injury',
    title: 'Personal Injury Law',
    parents: ['lawyers'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'personal_shopping',
    title: 'Personal Shopping',
    parents: ['shopping'],
    country_blacklist: ['CZ', 'MX', 'CL', 'BR', 'ES', 'AR']
  },
  {
    alias: 'personalassistants',
    title: 'Personal Assistants',
    parents: ['professional'],
    country_whitelist: ['US', 'PT', 'CZ']
  },
  {
    alias: 'personalcare',
    title: 'Personal Care Services',
    parents: ['health'],
    country_whitelist: ['NO', 'US', 'BR', 'CZ', 'AU', 'DK', 'PL', 'BE', 'FI', 'NL', 'FR']
  },
  {
    alias: 'personalchefs',
    title: 'Personal Chefs',
    parents: ['eventservices']
  },
  {
    alias: 'peruvian',
    title: 'Peruvian',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'PT', 'SG']
  },
  {
    alias: 'pest_control',
    title: 'Pest Control',
    parents: ['localservices']
  },
  {
    alias: 'pet_sitting',
    title: 'Pet Sitting',
    parents: ['petservices']
  },
  {
    alias: 'pet_training',
    title: 'Pet Training',
    parents: ['petservices']
  },
  {
    alias: 'petadoption',
    title: 'Pet Adoption',
    parents: ['pets'],
    country_blacklist: ['MX', 'JP', 'CL', 'HK', 'AR']
  },
  {
    alias: 'petboarding',
    title: 'Pet Boarding',
    parents: ['pet_sitting']
  },
  {
    alias: 'petbreeders',
    title: 'Pet Breeders',
    parents: ['petservices'],
    country_blacklist: [
      'SG',
      'IE',
      'NZ',
      'TR',
      'BR',
      'MY',
      'AR',
      'PH',
      'MX',
      'TW',
      'CL',
      'PT',
      'HK',
      'FI'
    ]
  },
  {
    alias: 'petcremation',
    title: 'Pet Cremation Services',
    parents: ['petservices']
  },
  {
    alias: 'pethospice',
    title: 'Pet Hospice',
    parents: ['petservices']
  },
  {
    alias: 'petinsurance',
    title: 'Pet Insurance',
    parents: ['petservices']
  },
  {
    alias: 'petphotography',
    title: 'Pet Photography',
    parents: ['petservices']
  },
  {
    alias: 'pets',
    title: 'Pets',
    parents: []
  },
  {
    alias: 'petservices',
    title: 'Pet Services',
    parents: ['pets']
  },
  {
    alias: 'petstore',
    title: 'Pet Stores',
    parents: ['pets']
  },
  {
    alias: 'pettingzoos',
    title: 'Petting Zoos',
    parents: ['zoos'],
    country_whitelist: ['CH', 'NO', 'US', 'GB', 'AT', 'DK', 'DE', 'BE', 'ES', 'IT', 'NL']
  },
  {
    alias: 'pettransport',
    title: 'Pet Transportation',
    parents: ['petservices'],
    country_whitelist: ['US', 'SE']
  },
  {
    alias: 'petwasteremoval',
    title: 'Pet Waste Removal',
    parents: ['petservices']
  },
  {
    alias: 'pfcomercial',
    title: 'PF/Comercial',
    parents: ['restaurants'],
    country_whitelist: ['BR']
  },
  {
    alias: 'pharmacy',
    title: 'Pharmacy',
    parents: ['health'],
    country_blacklist: ['FI']
  },
  {
    alias: 'phlebologists',
    title: 'Phlebologists',
    parents: ['physicians']
  },
  {
    alias: 'photoboothrentals',
    title: 'Photo Booth Rentals',
    parents: ['eventservices'],
    country_blacklist: ['HK', 'JP', 'FI']
  },
  {
    alias: 'photoclasses',
    title: 'Photography Classes',
    parents: ['specialtyschools']
  },
  {
    alias: 'photographers',
    title: 'Photographers',
    parents: ['eventservices']
  },
  {
    alias: 'photographystores',
    title: 'Photography Stores & Services',
    parents: ['shopping']
  },
  {
    alias: 'physicaltherapy',
    title: 'Physical Therapy',
    parents: ['health']
  },
  {
    alias: 'physicians',
    title: 'Doctors',
    parents: ['health']
  },
  {
    alias: 'piadina',
    title: 'Piadina',
    parents: ['food'],
    country_whitelist: ['IT', 'US']
  },
  {
    alias: 'pianobars',
    title: 'Piano Bars',
    parents: ['nightlife'],
    country_blacklist: ['SG', 'CH', 'IE', 'NZ', 'BR', 'AT', 'AU', 'PL', 'ES', 'FI']
  },
  {
    alias: 'pianoservices',
    title: 'Piano Services',
    parents: ['musicinstrumentservices']
  },
  {
    alias: 'pianostores',
    title: 'Piano Stores',
    parents: ['musicinstrumentservices']
  },
  {
    alias: 'pickleball',
    title: 'Pickleball',
    parents: ['active'],
    country_whitelist: ['CH', 'AT', 'DE', 'PL', 'US']
  },
  {
    alias: 'pickyourown',
    title: 'Pick Your Own Farms',
    parents: ['farms'],
    country_whitelist: ['CH', 'NO', 'US', 'CZ', 'AT', 'DK', 'JP', 'DE', 'FR']
  },
  {
    alias: 'piemonte',
    title: 'Piemonte',
    parents: ['italian'],
    country_whitelist: ['IT', 'FR']
  },
  {
    alias: 'piercing',
    title: 'Piercing',
    parents: ['beautysvc']
  },
  {
    alias: 'pierogis',
    title: 'Pierogis',
    parents: ['polish'],
    country_whitelist: ['PL']
  },
  {
    alias: 'pilates',
    title: 'Pilates',
    parents: ['fitness']
  },
  {
    alias: 'pita',
    title: 'Pita',
    parents: ['restaurants'],
    country_whitelist: ['TR']
  },
  {
    alias: 'pizza',
    title: 'Pizza',
    parents: ['restaurants']
  },
  {
    alias: 'placentaencapsulation',
    title: 'Placenta Encapsulations',
    parents: ['health'],
    country_blacklist: ['CZ', 'CH', 'AT', 'DE', 'PL', 'TR', 'FR']
  },
  {
    alias: 'planetarium',
    title: 'Planetarium',
    parents: ['arts']
  },
  {
    alias: 'plasticsurgeons',
    title: 'Plastic Surgeons',
    parents: ['physicians'],
    country_blacklist: ['MX', 'AR', 'CL', 'ES']
  },
  {
    alias: 'playgrounds',
    title: 'Playgrounds',
    parents: ['active']
  },
  {
    alias: 'playsets',
    title: 'Playsets',
    parents: ['homeandgarden']
  },
  {
    alias: 'plumbing',
    title: 'Plumbing',
    parents: ['homeservices']
  },
  {
    alias: 'plus_size_fashion',
    title: 'Plus Size Fashion',
    parents: ['fashion'],
    country_blacklist: ['SG', 'IE', 'TR', 'CA', 'AR', 'GB', 'MX', 'CL', 'JP', 'PL', 'HK']
  },
  {
    alias: 'podiatrists',
    title: 'Podiatrists',
    parents: ['physicians'],
    country_blacklist: ['FR']
  },
  {
    alias: 'poke',
    title: 'Poke',
    parents: ['food'],
    country_whitelist: [
      false,
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'SE',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'BR',
      'AT',
      'DE',
      'BE',
      'PT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'poledancingclasses',
    title: 'Pole Dancing Classes',
    parents: ['specialtyschools'],
    country_blacklist: [
      'CH',
      'IE',
      'TR',
      'CA',
      'AR',
      'GB',
      'AT',
      'MX',
      'CL',
      'PL',
      'BE',
      'PT',
      'ES'
    ]
  },
  {
    alias: 'policedepartments',
    title: 'Police Departments',
    parents: ['publicservicesgovt']
  },
  {
    alias: 'polish',
    title: 'Polish',
    parents: ['restaurants'],
    country_blacklist: ['SG', 'FI']
  },
  {
    alias: 'polynesian',
    title: 'Polynesian',
    parents: ['restaurants'],
    country_whitelist: ['US']
  },
  {
    alias: 'poolbilliards',
    title: 'Pool & Billiards',
    parents: ['shopping'],
    country_blacklist: ['CH', 'NO', 'AR', 'CZ', 'SE', 'AT', 'MX', 'CL', 'DE', 'PL', 'ES', 'FI']
  },
  {
    alias: 'poolcleaners',
    title: 'Pool Cleaners',
    parents: ['homeservices'],
    country_blacklist: ['NO', 'DK']
  },
  {
    alias: 'poolhalls',
    title: 'Pool Halls',
    parents: ['nightlife']
  },
  {
    alias: 'poolservice',
    title: 'Pool & Hot Tub Service',
    parents: ['homeservices']
  },
  {
    alias: 'popcorn',
    title: 'Popcorn Shops',
    parents: ['gourmet'],
    country_whitelist: ['JP', 'US', 'GB']
  },
  {
    alias: 'popuprestaurants',
    title: 'Pop-Up Restaurants',
    parents: ['restaurants'],
    country_whitelist: [
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'SE',
      'PH',
      'AU',
      'TW',
      'DK',
      'SG',
      'NZ',
      'NO',
      'DE',
      'BE',
      'HK',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'popupshops',
    title: 'Pop-up Shops',
    parents: ['shopping'],
    country_blacklist: ['PT']
  },
  {
    alias: 'portabletoiletservices',
    title: 'Portable Toilet Services',
    parents: ['localservices'],
    country_blacklist: ['MY', 'AR', 'CZ', 'PH', 'MX', 'TW', 'CL', 'JP', 'HK', 'FI', 'FR']
  },
  {
    alias: 'portuguese',
    title: 'Portuguese',
    parents: ['restaurants'],
    country_blacklist: ['FI']
  },
  {
    alias: 'postoffices',
    title: 'Post Offices',
    parents: ['publicservicesgovt']
  },
  {
    alias: 'postpartumcare',
    title: 'Postpartum Care',
    parents: ['health'],
    country_whitelist: ['TW', 'JP', 'PL', 'HK', 'MY']
  },
  {
    alias: 'potatoes',
    title: 'Potatoes',
    parents: ['restaurants'],
    country_whitelist: ['AU', 'CH', 'AT', 'DE']
  },
  {
    alias: 'poutineries',
    title: 'Poutineries',
    parents: ['restaurants'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'powdercoating',
    title: 'Powder Coating',
    parents: ['localservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'prenatal',
    title: 'Prenatal/Perinatal Care',
    parents: ['health'],
    country_blacklist: [
      'SG',
      'CH',
      'IE',
      'TR',
      'CA',
      'MY',
      'GB',
      'AT',
      'PH',
      'TW',
      'JP',
      'DE',
      'PL',
      'HK'
    ]
  },
  {
    alias: 'preschools',
    title: 'Preschools',
    parents: ['education'],
    country_blacklist: ['DK']
  },
  {
    alias: 'pressurewashers',
    title: 'Pressure Washers',
    parents: ['homeservices'],
    country_blacklist: ['MX', 'JP', 'CL', 'HK', 'AR']
  },
  {
    alias: 'pretzels',
    title: 'Pretzels',
    parents: ['food'],
    country_whitelist: ['US', 'PT', 'CH', 'DE']
  },
  {
    alias: 'preventivemedicine',
    title: 'Preventive Medicine',
    parents: ['physicians']
  },
  {
    alias: 'printmedia',
    title: 'Print Media',
    parents: ['massmedia']
  },
  {
    alias: 'privateinvestigation',
    title: 'Private Investigation',
    parents: ['professional']
  },
  {
    alias: 'privatejetcharter',
    title: 'Private Jet Charter',
    parents: ['transport']
  },
  {
    alias: 'privateschools',
    title: 'Private Schools',
    parents: ['education'],
    country_whitelist: [
      'NZ',
      'NO',
      'US',
      'BR',
      'AR',
      'CZ',
      'SE',
      'AU',
      'MX',
      'CL',
      'DK',
      'PT',
      'ES'
    ]
  },
  {
    alias: 'privatetutors',
    title: 'Private Tutors',
    parents: ['education']
  },
  {
    alias: 'processservers',
    title: 'Process Servers',
    parents: ['legalservices'],
    country_whitelist: ['US', 'BE', 'FR']
  },
  {
    alias: 'proctologist',
    title: 'Proctologists',
    parents: ['physicians']
  },
  {
    alias: 'productdesign',
    title: 'Product Design',
    parents: ['professional'],
    country_whitelist: ['SG', 'IE', 'NO', 'US', 'CA', 'GB', 'PH', 'AU', 'DK', 'BE', 'NL', 'FR']
  },
  {
    alias: 'professional',
    title: 'Professional Services',
    parents: []
  },
  {
    alias: 'propane',
    title: 'Propane',
    parents: ['localservices'],
    country_blacklist: ['MX', 'AR', 'CZ', 'NZ']
  },
  {
    alias: 'propertymgmt',
    title: 'Property Management',
    parents: ['realestate']
  },
  {
    alias: 'props',
    title: 'Props',
    parents: ['shopping'],
    country_whitelist: ['US', 'BE']
  },
  {
    alias: 'prosthetics',
    title: 'Prosthetics',
    parents: ['health'],
    country_whitelist: ['AU', 'IT', 'US', 'ES']
  },
  {
    alias: 'prosthodontists',
    title: 'Prosthodontists',
    parents: ['health'],
    country_whitelist: ['IT', 'US', 'ES']
  },
  {
    alias: 'provencal',
    title: 'Provencal',
    parents: ['french'],
    country_whitelist: ['FR']
  },
  {
    alias: 'psychiatrists',
    title: 'Psychiatrists',
    parents: ['physicians']
  },
  {
    alias: 'psychic_astrology',
    title: 'Supernatural Readings',
    parents: ['arts']
  },
  {
    alias: 'psychicmediums',
    title: 'Psychic Mediums',
    parents: ['psychic_astrology'],
    country_blacklist: ['PL']
  },
  {
    alias: 'psychics',
    title: 'Psychics',
    parents: ['psychic_astrology']
  },
  {
    alias: 'psychoanalysts',
    title: 'Psychoanalysts',
    parents: ['c_and_mh'],
    country_whitelist: ['BR', 'AR', 'CZ', 'MX', 'BE', 'PT', 'ES', 'NL', 'FR']
  },
  {
    alias: 'psychologists',
    title: 'Psychologists',
    parents: ['c_and_mh'],
    country_blacklist: ['SG', 'IE', 'JP', 'PL', 'HK', 'GB']
  },
  {
    alias: 'psychotechnicaltests',
    title: 'Psychotechnical Tests',
    parents: ['health'],
    country_whitelist: ['BR', 'ES']
  },
  {
    alias: 'psychotherapists',
    title: 'Psychotherapists',
    parents: ['c_and_mh'],
    country_whitelist: ['SG', 'CH', 'NO', 'BR', 'CZ', 'AT', 'DK', 'DE', 'FI', 'FR']
  },
  {
    alias: 'pubfood',
    title: 'Pub Food',
    parents: ['restaurants'],
    country_whitelist: ['AU']
  },
  {
    alias: 'publicadjusters',
    title: 'Public Adjusters',
    parents: ['professional'],
    country_whitelist: ['US']
  },
  {
    alias: 'publicart',
    title: 'Public Art',
    parents: ['localflavor']
  },
  {
    alias: 'publicmarkets',
    title: 'Public Markets',
    parents: ['shopping']
  },
  {
    alias: 'publicplazas',
    title: 'Public Plazas',
    parents: ['active'],
    country_blacklist: ['IE', 'NZ', 'US', 'CA', 'GB', 'AU', 'BE', 'NL']
  },
  {
    alias: 'publicrelations',
    title: 'Public Relations',
    parents: ['professional']
  },
  {
    alias: 'publicservicesgovt',
    title: 'Public Services & Government',
    parents: []
  },
  {
    alias: 'publictransport',
    title: 'Public Transportation',
    parents: ['transport']
  },
  {
    alias: 'pubs',
    title: 'Pubs',
    parents: ['bars']
  },
  {
    alias: 'pueblan',
    title: 'Pueblan',
    parents: ['mexican'],
    country_whitelist: ['MX']
  },
  {
    alias: 'puertorican',
    title: 'Puerto Rican',
    parents: ['caribbean'],
    country_whitelist: ['US']
  },
  {
    alias: 'pulmonologist',
    title: 'Pulmonologist',
    parents: ['physicians']
  },
  {
    alias: 'pulquerias',
    title: 'Pulquerias',
    parents: ['bars'],
    country_whitelist: ['MX']
  },
  {
    alias: 'pumpkinpatches',
    title: 'Pumpkin Patches',
    parents: ['homeandgarden'],
    country_whitelist: ['US']
  },
  {
    alias: 'qigong',
    title: 'Qi Gong',
    parents: ['fitness']
  },
  {
    alias: 'races',
    title: 'Races & Competitions',
    parents: ['active'],
    country_blacklist: [
      'IE',
      'TR',
      'CA',
      'MY',
      'AR',
      'PH',
      'MX',
      'TW',
      'CL',
      'JP',
      'PT',
      'HK',
      'ES',
      'FI',
      'IT'
    ]
  },
  {
    alias: 'racetracks',
    title: 'Race Tracks',
    parents: ['arts'],
    country_blacklist: ['SG', 'CH', 'AT', 'IE', 'DE', 'BR']
  },
  {
    alias: 'racingexperience',
    title: 'Racing Experience',
    parents: ['active'],
    country_whitelist: ['US', 'FR', 'SE']
  },
  {
    alias: 'radiologists',
    title: 'Radiologists',
    parents: ['physicians']
  },
  {
    alias: 'radiostations',
    title: 'Radio Stations',
    parents: ['massmedia']
  },
  {
    alias: 'rafting',
    title: 'Rafting/Kayaking',
    parents: ['active']
  },
  {
    alias: 'ramen',
    title: 'Ramen',
    parents: ['japanese']
  },
  {
    alias: 'ranches',
    title: 'Ranches',
    parents: ['farms'],
    country_whitelist: ['CZ', 'MX', 'CL', 'US', 'ES', 'AR']
  },
  {
    alias: 'raw_food',
    title: 'Live/Raw Food',
    parents: ['restaurants']
  },
  {
    alias: 'realestate',
    title: 'Real Estate',
    parents: ['homeservices']
  },
  {
    alias: 'realestateagents',
    title: 'Real Estate Agents',
    parents: ['realestate']
  },
  {
    alias: 'realestatelawyers',
    title: 'Real Estate Law',
    parents: ['lawyers']
  },
  {
    alias: 'realestatesvcs',
    title: 'Real Estate Services',
    parents: ['realestate'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'record_labels',
    title: 'Record Labels',
    parents: ['localservices'],
    country_whitelist: ['CH', 'NO', 'BR', 'CZ', 'AT', 'DK', 'DE', 'PT']
  },
  {
    alias: 'recording_studios',
    title: 'Recording & Rehearsal Studios',
    parents: ['localservices']
  },
  {
    alias: 'recreation',
    title: 'Recreation Centers',
    parents: ['active']
  },
  {
    alias: 'recyclingcenter',
    title: 'Recycling Center',
    parents: ['localservices']
  },
  {
    alias: 'refinishing',
    title: 'Refinishing Services',
    parents: ['homeservices']
  },
  {
    alias: 'reflexology',
    title: 'Reflexology',
    parents: ['health'],
    country_blacklist: ['PL', 'TR', 'SE', 'FI']
  },
  {
    alias: 'registrationservices',
    title: 'Registration Services',
    parents: ['auto'],
    country_blacklist: ['MX', 'CL', 'DK', 'NO', 'ES', 'AR']
  },
  {
    alias: 'registry_office',
    title: 'Registry Office',
    parents: ['publicservicesgovt'],
    country_whitelist: ['CH', 'NO', 'BR', 'CZ', 'AT', 'DK', 'DE', 'BE', 'PT', 'FI', 'IT', 'NL']
  },
  {
    alias: 'rehabilitation_center',
    title: 'Rehabilitation Center',
    parents: ['health'],
    country_blacklist: ['SG', 'CH', 'TR', 'MY', 'AT', 'PH', 'TW', 'HK', 'FR']
  },
  {
    alias: 'reiki',
    title: 'Reiki',
    parents: ['health'],
    country_blacklist: ['MX', 'JP', 'CL', 'HK', 'AR']
  },
  {
    alias: 'religiousitems',
    title: 'Religious Items',
    parents: ['shopping']
  },
  {
    alias: 'religiousorgs',
    title: 'Religious Organizations',
    parents: []
  },
  {
    alias: 'religiousschools',
    title: 'Religious Schools',
    parents: ['education'],
    country_whitelist: [
      'NZ',
      'NO',
      'US',
      'BR',
      'MY',
      'AR',
      'CZ',
      'PH',
      'AU',
      'MX',
      'CL',
      'DK',
      'PT',
      'ES'
    ]
  },
  {
    alias: 'rentfurniture',
    title: 'Furniture Rental',
    parents: ['localservices'],
    country_whitelist: ['US', 'CA', 'AR', 'AU', 'MX', 'CL', 'JP', 'BE', 'PT', 'ES', 'NL']
  },
  {
    alias: 'reproductivehealthservices',
    title: 'Reproductive Health Services',
    parents: ['health']
  },
  {
    alias: 'reptileshops',
    title: 'Reptile Shops',
    parents: ['petstore'],
    country_whitelist: ['NO', 'US', 'SE', 'DK', 'JP', 'DE', 'BE', 'ES', 'IT', 'NL']
  },
  {
    alias: 'residences',
    title: 'Residences',
    parents: ['hotels'],
    country_whitelist: ['SG', 'CH', 'US', 'MY', 'CZ', 'AT', 'PH', 'DE', 'PL', 'ES', 'IT']
  },
  {
    alias: 'resorts',
    title: 'Resorts',
    parents: ['hotelstravel']
  },
  {
    alias: 'restaurants',
    title: 'Restaurants',
    parents: []
  },
  {
    alias: 'reststops',
    title: 'Rest Stops',
    parents: ['hotels']
  },
  {
    alias: 'retinaspecialists',
    title: 'Retina Specialists',
    parents: ['opthamalogists'],
    country_blacklist: ['CH', 'FR', 'AT', 'DE']
  },
  {
    alias: 'retirement_homes',
    title: 'Retirement Homes',
    parents: ['health']
  },
  {
    alias: 'reunion',
    title: 'Reunion',
    parents: ['french'],
    country_blacklist: [
      'CH',
      'NZ',
      'NO',
      'TR',
      'BR',
      'AR',
      'AT',
      'AU',
      'MX',
      'CL',
      'DK',
      'DE',
      'JP',
      'PL'
    ]
  },
  {
    alias: 'reupholstery',
    title: 'Furniture Reupholstery',
    parents: ['localservices']
  },
  {
    alias: 'rhematologists',
    title: 'Rheumatologists',
    parents: ['physicians'],
    country_blacklist: ['SG', 'IE', 'NZ', 'TR', 'CA', 'GB', 'AU', 'TW', 'JP', 'PL', 'HK', 'FI']
  },
  {
    alias: 'rhinelandian',
    title: 'Rhinelandian',
    parents: ['german'],
    country_whitelist: ['DE']
  },
  {
    alias: 'ribatejo',
    title: 'Ribatejo',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'riceshop',
    title: 'Rice',
    parents: ['restaurants'],
    country_whitelist: ['TR', 'JP']
  },
  {
    alias: 'roadsideassist',
    title: 'Roadside Assistance',
    parents: ['auto'],
    country_blacklist: ['SG', 'IE', 'NZ', 'TR', 'BR', 'GB', 'SE', 'TW', 'PT', 'HK', 'FI', 'FR']
  },
  {
    alias: 'robatayaki',
    title: 'Robatayaki',
    parents: ['japanese'],
    country_whitelist: ['HK', 'JP', 'TW']
  },
  {
    alias: 'rock_climbing',
    title: 'Rock Climbing',
    parents: ['active']
  },
  {
    alias: 'rodeo',
    title: 'Rodeo',
    parents: ['arts'],
    country_whitelist: ['US']
  },
  {
    alias: 'rodizios',
    title: 'Rodizios',
    parents: ['brazilian'],
    country_whitelist: ['AR', 'BR', 'PT']
  },
  {
    alias: 'roman',
    title: 'Roman',
    parents: ['italian'],
    country_whitelist: ['IT', 'FR', 'JP']
  },
  {
    alias: 'romanian',
    title: 'Romanian',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'CZ', 'AT', 'DE', 'PL', 'BE', 'ES', 'FR']
  },
  {
    alias: 'roofing',
    title: 'Roofing',
    parents: ['homeservices']
  },
  {
    alias: 'roofinspectors',
    title: 'Roof Inspectors',
    parents: ['homeservices'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'rotisserie_chicken',
    title: 'Rotisserie Chicken',
    parents: ['restaurants'],
    country_whitelist: [
      'NZ',
      'BR',
      'AR',
      'AU',
      'MX',
      'CL',
      'PL',
      'BE',
      'PT',
      'ES',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'rugs',
    title: 'Rugs',
    parents: ['homeandgarden'],
    country_blacklist: ['CH', 'IE', 'CZ', 'AT', 'JP', 'DE', 'PL', 'HK']
  },
  {
    alias: 'russian',
    title: 'Russian',
    parents: ['restaurants']
  },
  {
    alias: 'rv_dealers',
    title: 'RV Dealers',
    parents: ['auto'],
    country_blacklist: [
      'SG',
      'IE',
      'NZ',
      'TR',
      'MY',
      'AR',
      'GB',
      'PH',
      'AU',
      'MX',
      'TW',
      'CL',
      'JP',
      'PT',
      'HK'
    ]
  },
  {
    alias: 'rvparks',
    title: 'RV Parks',
    parents: ['hotelstravel'],
    country_whitelist: [
      'CH',
      'IE',
      'TR',
      'US',
      'CA',
      'AR',
      'GB',
      'CZ',
      'SE',
      'AU',
      'MX',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'AT',
      'CL',
      'DE',
      'BE',
      'ES',
      'FI',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'rvrental',
    title: 'RV Rental',
    parents: ['hotelstravel'],
    country_blacklist: ['SG']
  },
  {
    alias: 'rvrepair',
    title: 'RV Repair',
    parents: ['auto'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'DE',
      'BE',
      'PT',
      'NL'
    ]
  },
  {
    alias: 'ryokan',
    title: 'Ryokan',
    parents: ['hotels'],
    country_whitelist: ['JP']
  },
  {
    alias: 'safestores',
    title: 'Safe Stores',
    parents: ['shopping']
  },
  {
    alias: 'safetyequipment',
    title: 'Safety Equipment',
    parents: ['shopping']
  },
  {
    alias: 'sailing',
    title: 'Sailing',
    parents: ['active']
  },
  {
    alias: 'sakebars',
    title: 'Sake Bars',
    parents: ['bars'],
    country_whitelist: ['JP']
  },
  {
    alias: 'salad',
    title: 'Salad',
    parents: ['restaurants']
  },
  {
    alias: 'salumerie',
    title: 'Salumerie',
    parents: ['food'],
    country_whitelist: ['MX', 'CL', 'PT', 'ES', 'IT', 'AR']
  },
  {
    alias: 'salvadoran',
    title: 'Salvadoran',
    parents: ['latin'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'sambaschools',
    title: 'Samba Schools',
    parents: ['specialtyschools'],
    country_whitelist: ['IT', 'BR', 'SE', 'FI']
  },
  {
    alias: 'sandblasting',
    title: 'Sandblasting',
    parents: ['localservices'],
    country_whitelist: ['CH', 'US', 'BR', 'AT', 'DE', 'BE', 'ES', 'IT', 'NL']
  },
  {
    alias: 'sandwiches',
    title: 'Sandwiches',
    parents: ['restaurants']
  },
  {
    alias: 'sardinian',
    title: 'Sardinian',
    parents: ['italian'],
    country_whitelist: ['IT', 'US', 'FR']
  },
  {
    alias: 'saunainstallation',
    title: 'Sauna Installation & Repair',
    parents: ['homeservices'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'GB',
      'CZ',
      'SE',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'AT',
      'DE',
      'FI',
      'IT'
    ]
  },
  {
    alias: 'saunas',
    title: 'Saunas',
    parents: ['health'],
    country_blacklist: ['SG', 'NZ', 'CA', 'MY', 'PH', 'AU', 'PL', 'ES']
  },
  {
    alias: 'scandinavian',
    title: 'Scandinavian',
    parents: ['restaurants'],
    country_blacklist: ['PT']
  },
  {
    alias: 'scandinaviandesign',
    title: 'Scandinavian Design',
    parents: ['shopping'],
    country_whitelist: ['NO', 'SE', 'DK', 'FI']
  },
  {
    alias: 'scavengerhunts',
    title: 'Scavenger Hunts',
    parents: ['active'],
    country_whitelist: ['US']
  },
  {
    alias: 'schnitzel',
    title: 'Schnitzel',
    parents: ['restaurants'],
    country_whitelist: ['PL', 'CH', 'AT', 'DE']
  },
  {
    alias: 'scooterrentals',
    title: 'Scooter Rentals',
    parents: ['active']
  },
  {
    alias: 'scootertours',
    title: 'Scooter Tours',
    parents: ['tours']
  },
  {
    alias: 'scottish',
    title: 'Scottish',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'IE', 'DE', 'US', 'CA', 'GB']
  },
  {
    alias: 'screen_printing_tshirt_printing',
    title: 'Screen Printing/T-Shirt Printing',
    parents: ['localservices'],
    country_blacklist: ['SG', 'IE', 'NZ', 'TR', 'CA', 'GB', 'CZ', 'TW', 'PL', 'HK', 'FI', 'IT']
  },
  {
    alias: 'screenprinting',
    title: 'Screen Printing',
    parents: ['localservices']
  },
  {
    alias: 'scuba',
    title: 'Scuba Diving',
    parents: ['diving']
  },
  {
    alias: 'seafood',
    title: 'Seafood',
    parents: ['restaurants']
  },
  {
    alias: 'seafoodmarkets',
    title: 'Seafood Markets',
    parents: ['gourmet']
  },
  {
    alias: 'seasonaldecorservices',
    title: 'Holiday Decorating Services',
    parents: ['homeservices'],
    country_blacklist: ['CH', 'NO', 'TR', 'AT', 'DK', 'JP', 'DE', 'BE', 'IT', 'NL', 'FR']
  },
  {
    alias: 'security',
    title: 'Security Services',
    parents: ['professional'],
    country_blacklist: ['NZ']
  },
  {
    alias: 'securitysystems',
    title: 'Security Systems',
    parents: ['homeservices']
  },
  {
    alias: 'selfdefenseclasses',
    title: 'Self-defense Classes',
    parents: ['fitness']
  },
  {
    alias: 'selfstorage',
    title: 'Self Storage',
    parents: ['localservices']
  },
  {
    alias: 'senegalese',
    title: 'Senegalese',
    parents: ['african'],
    country_whitelist: ['US', 'BE', 'CA', 'IT', 'FR']
  },
  {
    alias: 'seniorcenters',
    title: 'Senior Centers',
    parents: ['active'],
    country_blacklist: ['FR']
  },
  {
    alias: 'septicservices',
    title: 'Septic Services',
    parents: ['localservices'],
    country_whitelist: ['NO', 'US', 'BR', 'CA', 'DK', 'PL', 'BE', 'PT', 'NL']
  },
  {
    alias: 'serbocroatian',
    title: 'Serbo Croatian',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AR', 'CZ', 'SE', 'AT', 'CL', 'DE', 'PL', 'BE', 'IT', 'FR']
  },
  {
    alias: 'service_stations',
    title: 'Service Stations',
    parents: ['auto'],
    country_blacklist: [
      'NO',
      'TR',
      'BR',
      'MY',
      'CZ',
      'SE',
      'PH',
      'TW',
      'DK',
      'JP',
      'PT',
      'HK',
      'FI',
      'FR'
    ]
  },
  {
    alias: 'servicestations',
    title: 'Gas Stations',
    parents: ['auto']
  },
  {
    alias: 'sessionphotography',
    title: 'Session Photography',
    parents: ['photographers']
  },
  {
    alias: 'sewingalterations',
    title: 'Sewing & Alterations',
    parents: ['localservices']
  },
  {
    alias: 'sextherapists',
    title: 'Sex Therapists',
    parents: ['c_and_mh']
  },
  {
    alias: 'shanghainese',
    title: 'Shanghainese',
    parents: ['chinese'],
    country_whitelist: ['SG', 'US', 'MY', 'SE', 'AU', 'TW', 'JP', 'BE', 'HK', 'IT', 'FR']
  },
  {
    alias: 'sharedofficespaces',
    title: 'Shared Office Spaces',
    parents: ['realestate']
  },
  {
    alias: 'sharedtaxis',
    title: 'Shared Taxis',
    parents: ['transport'],
    country_whitelist: ['SE', 'PH', 'DK', 'NO', 'TR', 'BR']
  },
  {
    alias: 'shavedice',
    title: 'Shaved Ice',
    parents: ['food'],
    country_whitelist: ['SG', 'US', 'AR', 'CZ', 'MX', 'TW', 'CL', 'JP', 'IT']
  },
  {
    alias: 'shavedsnow',
    title: 'Shaved Snow',
    parents: ['food'],
    country_whitelist: ['SG', 'TW', 'US', 'HK', 'CA', 'MY']
  },
  {
    alias: 'shedsandoutdoorstorage',
    title: 'Sheds & Outdoor Storage',
    parents: ['homeandgarden'],
    country_blacklist: ['NO', 'TR', 'CZ', 'SE', 'TW', 'DK', 'JP', 'HK', 'ES', 'FI', 'FR']
  },
  {
    alias: 'shipping_centers',
    title: 'Shipping Centers',
    parents: ['localservices'],
    country_blacklist: ['NO', 'SE']
  },
  {
    alias: 'shoerepair',
    title: 'Shoe Repair',
    parents: ['localservices']
  },
  {
    alias: 'shoes',
    title: 'Shoe Stores',
    parents: ['fashion']
  },
  {
    alias: 'shoeshine',
    title: 'Shoe Shine',
    parents: ['localservices'],
    country_blacklist: ['NL', 'BE']
  },
  {
    alias: 'shopping',
    title: 'Shopping',
    parents: []
  },
  {
    alias: 'shoppingcenters',
    title: 'Shopping Centers',
    parents: ['shopping']
  },
  {
    alias: 'shoppingpassages',
    title: 'Shopping Passages',
    parents: ['shopping'],
    country_blacklist: ['US']
  },
  {
    alias: 'shredding',
    title: 'Shredding Services',
    parents: ['professional'],
    country_whitelist: [
      'SG',
      'CH',
      'IE',
      'NZ',
      'US',
      'CA',
      'GB',
      'CZ',
      'AT',
      'AU',
      'DE',
      'BE',
      'NL'
    ]
  },
  {
    alias: 'shrines',
    title: 'Shrines',
    parents: ['religiousorgs'],
    country_whitelist: ['MX', 'JP', 'CL', 'ES', 'AR']
  },
  {
    alias: 'shutters',
    title: 'Shutters',
    parents: ['homeservices']
  },
  {
    alias: 'sicilian',
    title: 'Sicilian',
    parents: ['italian'],
    country_whitelist: ['CZ', 'PL', 'US', 'IT', 'FR']
  },
  {
    alias: 'signature_cuisine',
    title: 'Signature Cuisine',
    parents: ['restaurants'],
    country_whitelist: ['NO', 'AR', 'SE', 'MX', 'CL', 'DK', 'PT', 'ES']
  },
  {
    alias: 'signmaking',
    title: 'Signmaking',
    parents: ['professional']
  },
  {
    alias: 'sikhtemples',
    title: 'Sikh Temples',
    parents: ['religiousorgs']
  },
  {
    alias: 'silentdisco',
    title: 'Silent Disco',
    parents: ['eventservices'],
    country_blacklist: ['JP']
  },
  {
    alias: 'singaporean',
    title: 'Singaporean',
    parents: ['restaurants'],
    country_blacklist: ['CZ', 'DK', 'TR', 'PT', 'ES', 'FI']
  },
  {
    alias: 'skate_parks',
    title: 'Skate Parks',
    parents: ['parks']
  },
  {
    alias: 'skateshops',
    title: 'Skate Shops',
    parents: ['sportgoods']
  },
  {
    alias: 'skatingrinks',
    title: 'Skating Rinks',
    parents: ['active']
  },
  {
    alias: 'skiing',
    title: 'Skiing',
    parents: ['active'],
    country_blacklist: [
      'SG',
      'IE',
      'TR',
      'BR',
      'US',
      'MY',
      'GB',
      'PH',
      'AU',
      'MX',
      'TW',
      'PL',
      'HK',
      'IT',
      'FR'
    ]
  },
  {
    alias: 'skillednursing',
    title: 'Skilled Nursing',
    parents: ['health'],
    country_whitelist: ['US']
  },
  {
    alias: 'skincare',
    title: 'Skin Care',
    parents: ['beautysvc']
  },
  {
    alias: 'skiresorts',
    title: 'Ski Resorts',
    parents: ['hotelstravel'],
    country_blacklist: ['SG', 'MX', 'BR', 'DK']
  },
  {
    alias: 'skischools',
    title: 'Ski Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'skishops',
    title: 'Ski & Snowboard Shops',
    parents: ['sportgoods'],
    country_blacklist: ['SG', 'TR', 'BR', 'MY', 'PH', 'MX', 'TW', 'DK', 'PT', 'HK']
  },
  {
    alias: 'skydiving',
    title: 'Skydiving',
    parents: ['active']
  },
  {
    alias: 'sledding',
    title: 'Sledding',
    parents: ['active'],
    country_whitelist: ['CH', 'NZ', 'NO', 'TR', 'US', 'CA', 'CZ', 'AT', 'DE', 'PT', 'FI', 'IT']
  },
  {
    alias: 'sleepspecialists',
    title: 'Sleep Specialists',
    parents: ['health']
  },
  {
    alias: 'sleepwear',
    title: 'Sleepwear',
    parents: ['fashion'],
    country_whitelist: ['AU', 'PT']
  },
  {
    alias: 'slovakian',
    title: 'Slovakian',
    parents: ['restaurants'],
    country_whitelist: ['IE', 'US', 'CA', 'GB', 'CZ', 'AU', 'PL', 'BE', 'IT', 'FR']
  },
  {
    alias: 'smog_check_stations',
    title: 'Smog Check Stations',
    parents: ['auto'],
    country_blacklist: ['NO', 'SE', 'DK', 'FI']
  },
  {
    alias: 'smokehouse',
    title: 'Smokehouse',
    parents: ['food'],
    country_blacklist: ['MX', 'CL', 'PL', 'TR', 'IT', 'AR', 'FR']
  },
  {
    alias: 'smokingareas',
    title: 'Smoking Areas',
    parents: ['localservices'],
    country_whitelist: ['JP']
  },
  {
    alias: 'snorkeling',
    title: 'Snorkeling',
    parents: ['active'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'snowremoval',
    title: 'Snow Removal',
    parents: ['localservices'],
    country_blacklist: ['MX', 'BR', 'HK', 'NZ']
  },
  {
    alias: 'snuggleservices',
    title: 'Snuggle Services',
    parents: ['localservices'],
    country_whitelist: ['US', 'JP']
  },
  {
    alias: 'soba',
    title: 'Soba',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'social_clubs',
    title: 'Social Clubs',
    parents: ['arts']
  },
  {
    alias: 'socialsecuritylaw',
    title: 'Social Security Law',
    parents: ['lawyers'],
    country_blacklist: ['PL', 'CZ']
  },
  {
    alias: 'softwaredevelopment',
    title: 'Software Development',
    parents: ['professional']
  },
  {
    alias: 'solarinstallation',
    title: 'Solar Installation',
    parents: ['homeservices']
  },
  {
    alias: 'solarpanelcleaning',
    title: 'Solar Panel Cleaning',
    parents: ['homeservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'somali',
    title: 'Somali',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DE', 'PL', 'US', 'IT']
  },
  {
    alias: 'sommelierservices',
    title: 'Sommelier Services',
    parents: ['eventservices'],
    country_blacklist: ['FR']
  },
  {
    alias: 'sophrologists',
    title: 'Sophrologists',
    parents: ['c_and_mh'],
    country_whitelist: ['PL', 'BE', 'CZ', 'FR']
  },
  {
    alias: 'soulfood',
    title: 'Soul Food',
    parents: ['restaurants'],
    country_whitelist: ['IE', 'NO', 'US', 'CA', 'GB', 'SE', 'PL', 'ES', 'NL']
  },
  {
    alias: 'soup',
    title: 'Soup',
    parents: ['restaurants']
  },
  {
    alias: 'southafrican',
    title: 'South African',
    parents: ['african'],
    country_whitelist: ['AU', 'US', 'BE', 'CA', 'IT', 'FR']
  },
  {
    alias: 'southern',
    title: 'Southern',
    parents: ['restaurants'],
    country_whitelist: ['IE', 'NZ', 'TR', 'US', 'CA', 'GB', 'SE', 'PL', 'NL']
  },
  {
    alias: 'souvenirs',
    title: 'Souvenir Shops',
    parents: ['shopping'],
    country_blacklist: ['SG', 'CA']
  },
  {
    alias: 'spanish',
    title: 'Spanish',
    parents: ['restaurants']
  },
  {
    alias: 'spas',
    title: 'Day Spas',
    parents: ['beautysvc']
  },
  {
    alias: 'speakeasies',
    title: 'Speakeasies',
    parents: ['bars'],
    country_blacklist: ['NO', 'IT', 'TR', 'DK']
  },
  {
    alias: 'specialbikes',
    title: 'Special Bikes',
    parents: ['bicycles'],
    country_whitelist: ['PT', 'DK']
  },
  {
    alias: 'specialed',
    title: 'Special Education',
    parents: ['education'],
    country_blacklist: ['FI']
  },
  {
    alias: 'specialtyschools',
    title: 'Specialty Schools',
    parents: ['education']
  },
  {
    alias: 'speech_therapists',
    title: 'Speech Therapists',
    parents: ['health']
  },
  {
    alias: 'speechtraining',
    title: 'Speech Training',
    parents: ['specialtyschools']
  },
  {
    alias: 'spermclinic',
    title: 'Sperm Clinic',
    parents: ['health'],
    country_whitelist: ['NO', 'US', 'AR', 'MX', 'DK', 'CL', 'DE', 'BE', 'ES', 'IT', 'NL', 'FR']
  },
  {
    alias: 'spinesurgeons',
    title: 'Spine Surgeons',
    parents: ['physicians'],
    country_whitelist: ['US']
  },
  {
    alias: 'spiritism',
    title: 'Spiritism',
    parents: ['religiousorgs'],
    country_whitelist: ['BR']
  },
  {
    alias: 'spiritual_shop',
    title: 'Spiritual Shop',
    parents: ['shopping']
  },
  {
    alias: 'sport_equipment_hire',
    title: 'Sport Equipment Hire',
    parents: ['active'],
    country_whitelist: ['NO', 'AR', 'CZ', 'AU', 'MX', 'CL', 'DK', 'PT', 'ES']
  },
  {
    alias: 'sportgoods',
    title: 'Sporting Goods',
    parents: ['shopping']
  },
  {
    alias: 'sports_clubs',
    title: 'Sports Clubs',
    parents: ['active']
  },
  {
    alias: 'sportsbars',
    title: 'Sports Bars',
    parents: ['bars'],
    country_blacklist: ['CH', 'AT']
  },
  {
    alias: 'sportsbetting',
    title: 'Sports Betting',
    parents: ['arts'],
    country_whitelist: ['IT', 'US']
  },
  {
    alias: 'sportsmed',
    title: 'Sports Medicine',
    parents: ['physicians']
  },
  {
    alias: 'sportspsychologists',
    title: 'Sports Psychologists',
    parents: ['c_and_mh'],
    country_whitelist: ['IT', 'US', 'SG', 'NZ']
  },
  {
    alias: 'sportsteams',
    title: 'Professional Sports Teams',
    parents: ['arts']
  },
  {
    alias: 'sportswear',
    title: 'Sports Wear',
    parents: ['fashion', 'sportgoods']
  },
  {
    alias: 'spraytanning',
    title: 'Spray Tanning',
    parents: ['tanning'],
    country_blacklist: ['SE', 'IE', 'PL', 'BR', 'CA']
  },
  {
    alias: 'squash',
    title: 'Squash',
    parents: ['active'],
    country_blacklist: ['BR', 'SG', 'NZ', 'PT']
  },
  {
    alias: 'srilankan',
    title: 'Sri Lankan',
    parents: ['restaurants'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'stadiumsarenas',
    title: 'Stadiums & Arenas',
    parents: ['arts']
  },
  {
    alias: 'stationery',
    title: 'Cards & Stationery',
    parents: ['eventservices', 'flowers', 'artsandcrafts']
  },
  {
    alias: 'steak',
    title: 'Steakhouses',
    parents: ['restaurants']
  },
  {
    alias: 'stereo_installation',
    title: 'Car Stereo Installation',
    parents: ['auto'],
    country_blacklist: ['CH', 'DK', 'AT']
  },
  {
    alias: 'stockings',
    title: 'Stockings',
    parents: ['fashion'],
    country_whitelist: ['CZ', 'CH', 'AT', 'DE', 'BE', 'PT', 'NL']
  },
  {
    alias: 'stonemasons',
    title: 'Stonemasons',
    parents: ['localservices']
  },
  {
    alias: 'streetart',
    title: 'Street Art',
    parents: ['arts'],
    country_blacklist: ['SG', 'CH', 'IE', 'TR', 'US', 'CA', 'MY', 'GB', 'AT', 'FI']
  },
  {
    alias: 'streetvendors',
    title: 'Street Vendors',
    parents: ['food']
  },
  {
    alias: 'stripclubs',
    title: 'Strip Clubs',
    parents: ['adultentertainment']
  },
  {
    alias: 'stripteasedancers',
    title: 'Striptease Dancers',
    parents: ['adultentertainment']
  },
  {
    alias: 'structuralengineers',
    title: 'Structural Engineers',
    parents: ['homeservices']
  },
  {
    alias: 'stucco',
    title: 'Stucco Services',
    parents: ['homeservices']
  },
  {
    alias: 'studiotaping',
    title: 'Studio Taping',
    parents: ['arts'],
    country_whitelist: ['NL', 'BE', 'US']
  },
  {
    alias: 'sud_ouest',
    title: 'French Southwest',
    parents: ['restaurants'],
    country_whitelist: ['BE', 'FR']
  },
  {
    alias: 'sugaring',
    title: 'Sugaring',
    parents: ['hairremoval'],
    country_whitelist: ['CH', 'NO', 'US', 'CZ', 'AT', 'DK', 'DE', 'FI']
  },
  {
    alias: 'sugarshacks',
    title: 'Sugar Shacks',
    parents: ['food'],
    country_whitelist: ['CA']
  },
  {
    alias: 'sukiyaki',
    title: 'Sukiyaki',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'summer_camps',
    title: 'Summer Camps',
    parents: ['active']
  },
  {
    alias: 'sunglasses',
    title: 'Sunglasses',
    parents: ['opticians']
  },
  {
    alias: 'supperclubs',
    title: 'Supper Clubs',
    parents: ['restaurants'],
    country_whitelist: ['GB', 'US', 'ES', 'CA']
  },
  {
    alias: 'suppliesrestaurant',
    title: 'Restaurant Supplies',
    parents: ['wholesalers'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'AR',
      'GB',
      'AU',
      'MX',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'AT',
      'CL',
      'JP',
      'DE',
      'BE',
      'ES',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'surfing',
    title: 'Surfing',
    parents: ['active'],
    country_whitelist: [
      'NZ',
      'US',
      'BR',
      'AR',
      'SE',
      'MX',
      'DK',
      'CL',
      'DE',
      'JP',
      'PT',
      'ES',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'surflifesaving',
    title: 'Surf Lifesaving',
    parents: ['active'],
    country_whitelist: ['NZ', 'BR', 'AR', 'AU', 'MX', 'CL', 'PT', 'ES']
  },
  {
    alias: 'surfschools',
    title: 'Surf Schools',
    parents: ['specialtyschools']
  },
  {
    alias: 'surfshop',
    title: 'Surf Shop',
    parents: ['fashion'],
    country_blacklist: ['SG', 'IE', 'NO', 'BR', 'CA', 'CZ', 'SE', 'BE', 'FI', 'NL', 'FR']
  },
  {
    alias: 'surgeons',
    title: 'Surgeons',
    parents: ['physicians']
  },
  {
    alias: 'sushi',
    title: 'Sushi Bars',
    parents: ['restaurants']
  },
  {
    alias: 'swabian',
    title: 'Swabian',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'swedish',
    title: 'Swedish',
    parents: ['restaurants'],
    country_whitelist: ['SE']
  },
  {
    alias: 'swimminglessons',
    title: 'Swimming Lessons/Schools',
    parents: ['fitness', 'specialtyschools']
  },
  {
    alias: 'swimmingpools',
    title: 'Swimming Pools',
    parents: ['active']
  },
  {
    alias: 'swimwear',
    title: 'Swimwear',
    parents: ['fashion']
  },
  {
    alias: 'swissfood',
    title: 'Swiss Food',
    parents: ['restaurants'],
    country_whitelist: ['CZ', 'CH', 'MX', 'CL', 'DE', 'ES', 'AR']
  },
  {
    alias: 'synagogues',
    title: 'Synagogues',
    parents: ['religiousorgs']
  },
  {
    alias: 'syrian',
    title: 'Syrian',
    parents: ['restaurants']
  },
  {
    alias: 'szechuan',
    title: 'Szechuan',
    parents: ['chinese'],
    country_whitelist: ['SG', 'IE', 'NZ', 'US', 'MY', 'GB', 'AU', 'TW', 'JP', 'HK', 'FR']
  },
  {
    alias: 'tabac',
    title: 'Tabac',
    parents: ['bars'],
    country_whitelist: ['CZ', 'BE', 'ES', 'IT', 'FR']
  },
  {
    alias: 'tabernas',
    title: 'Tabernas',
    parents: ['restaurants'],
    country_whitelist: ['TR', 'PT', 'ES']
  },
  {
    alias: 'tablaoflamenco',
    title: 'Tablao Flamenco',
    parents: ['arts'],
    country_whitelist: ['MX', 'CL', 'PT', 'ES', 'AR']
  },
  {
    alias: 'tabletopgames',
    title: 'Tabletop Games',
    parents: ['shopping']
  },
  {
    alias: 'tableware',
    title: 'Tableware',
    parents: ['homeandgarden'],
    country_whitelist: [
      'CH',
      'NO',
      'US',
      'BR',
      'AR',
      'CZ',
      'AT',
      'MX',
      'CL',
      'DK',
      'DE',
      'BE',
      'PT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'tacos',
    title: 'Tacos',
    parents: ['mexican'],
    country_whitelist: ['MX', 'US']
  },
  {
    alias: 'taekwondo',
    title: 'Taekwondo',
    parents: ['martialarts']
  },
  {
    alias: 'taichi',
    title: 'Tai Chi',
    parents: ['fitness']
  },
  {
    alias: 'taiwanese',
    title: 'Taiwanese',
    parents: ['restaurants'],
    country_blacklist: ['CZ', 'TR', 'PT', 'ES', 'FI']
  },
  {
    alias: 'taiyaki',
    title: 'Taiyaki',
    parents: ['jpsweets'],
    country_whitelist: ['JP']
  },
  {
    alias: 'takoyaki',
    title: 'Takoyaki',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'talentagencies',
    title: 'Talent Agencies',
    parents: ['professional'],
    country_blacklist: ['SG', 'CH', 'IE', 'NZ', 'TR', 'CA', 'GB', 'CZ', 'AT', 'AU', 'HK']
  },
  {
    alias: 'tamales',
    title: 'Tamales',
    parents: ['mexican'],
    country_whitelist: ['MX']
  },
  {
    alias: 'tanning',
    title: 'Tanning',
    parents: ['beautysvc']
  },
  {
    alias: 'tanningbeds',
    title: 'Tanning Beds',
    parents: ['tanning'],
    country_blacklist: ['PL', 'BR', 'SE', 'FI']
  },
  {
    alias: 'taoisttemples',
    title: 'Taoist Temples',
    parents: ['religiousorgs'],
    country_whitelist: ['HK', 'TW']
  },
  {
    alias: 'tapas',
    title: 'Tapas Bars',
    parents: ['restaurants'],
    country_blacklist: ['AU', 'SG', 'FI']
  },
  {
    alias: 'tapasmallplates',
    title: 'Tapas/Small Plates',
    parents: ['restaurants']
  },
  {
    alias: 'tastingclasses',
    title: 'Tasting Classes',
    parents: ['education']
  },
  {
    alias: 'tattoo',
    title: 'Tattoo',
    parents: ['beautysvc']
  },
  {
    alias: 'tattooremoval',
    title: 'Tattoo Removal',
    parents: ['physicians']
  },
  {
    alias: 'tavolacalda',
    title: 'Tavola Calda',
    parents: ['restaurants'],
    country_whitelist: ['IT']
  },
  {
    alias: 'taxidermy',
    title: 'Taxidermy',
    parents: ['professional'],
    country_blacklist: ['SG', 'IE', 'NZ', 'NO', 'BR', 'CA', 'CZ', 'SE', 'DK', 'FI', 'NL']
  },
  {
    alias: 'taxis',
    title: 'Taxis',
    parents: ['transport']
  },
  {
    alias: 'taxlaw',
    title: 'Tax Law',
    parents: ['lawyers'],
    country_whitelist: ['SG', 'CH', 'US', 'BR', 'CZ', 'AT', 'AU', 'DE', 'PL', 'BE', 'FR']
  },
  {
    alias: 'taxoffice',
    title: 'Tax Office',
    parents: ['publicservicesgovt'],
    country_blacklist: ['SG', 'PL', 'US', 'ES', 'CA']
  },
  {
    alias: 'taxservices',
    title: 'Tax Services',
    parents: ['financialservices']
  },
  {
    alias: 'tcm',
    title: 'Traditional Chinese Medicine',
    parents: ['health'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'tea',
    title: 'Tea Rooms',
    parents: ['food']
  },
  {
    alias: 'teachersupplies',
    title: 'Teacher Supplies',
    parents: ['shopping'],
    country_blacklist: ['IT', 'FR']
  },
  {
    alias: 'teambuilding',
    title: 'Team Building Activities',
    parents: ['eventservices']
  },
  {
    alias: 'teethwhitening',
    title: 'Teeth Whitening',
    parents: ['beautysvc'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'telecommunications',
    title: 'Telecommunications',
    parents: ['itservices'],
    country_blacklist: ['JP', 'AR', 'MX', 'CL']
  },
  {
    alias: 'televisionserviceproviders',
    title: 'Television Service Providers',
    parents: ['homeservices']
  },
  {
    alias: 'televisionstations',
    title: 'Television Stations',
    parents: ['massmedia']
  },
  {
    alias: 'tempura',
    title: 'Tempura',
    parents: ['japanese'],
    country_whitelist: ['SG', 'TW', 'JP']
  },
  {
    alias: 'tenantlaw',
    title: 'Tenant and Eviction Law',
    parents: ['professional'],
    country_blacklist: ['CZ']
  },
  {
    alias: 'tennis',
    title: 'Tennis',
    parents: ['active']
  },
  {
    alias: 'teochew',
    title: 'Teochew',
    parents: ['chinese'],
    country_whitelist: ['MY', 'HK', 'SG', 'TW']
  },
  {
    alias: 'teppanyaki',
    title: 'Teppanyaki',
    parents: ['japanese'],
    country_whitelist: ['SG', 'NZ', 'US', 'AU', 'MX', 'TW', 'JP', 'HK']
  },
  {
    alias: 'testprep',
    title: 'Test Preparation',
    parents: ['education']
  },
  {
    alias: 'tex-mex',
    title: 'Tex-Mex',
    parents: ['restaurants'],
    country_blacklist: ['AU', 'PT', 'DK', 'ES']
  },
  {
    alias: 'thai',
    title: 'Thai',
    parents: ['restaurants']
  },
  {
    alias: 'theater',
    title: 'Performing Arts',
    parents: ['arts']
  },
  {
    alias: 'themedcafes',
    title: 'Themed Cafes',
    parents: ['cafes'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'AR',
      'GB',
      'SE',
      'PH',
      'AU',
      'MX',
      'TW',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'AT',
      'JP',
      'CL',
      'DE',
      'BE',
      'HK',
      'FI',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'threadingservices',
    title: 'Threading Services',
    parents: ['hairremoval']
  },
  {
    alias: 'thrift_stores',
    title: 'Thrift Stores',
    parents: ['shopping'],
    country_blacklist: ['FI']
  },
  {
    alias: 'tickets',
    title: 'Tickets',
    parents: ['shopping'],
    country_whitelist: ['NO', 'CZ', 'SE', 'CL', 'DK', 'PL', 'PT', 'FI']
  },
  {
    alias: 'ticketsales',
    title: 'Ticket Sales',
    parents: ['arts'],
    country_blacklist: ['SG', 'IE', 'NZ', 'TR', 'GB', 'SE', 'PL', 'ES', 'FI', 'NL']
  },
  {
    alias: 'tikibars',
    title: 'Tiki Bars',
    parents: ['bars'],
    country_blacklist: ['CH', 'AT', 'JP', 'DE', 'PL', 'TR', 'FR']
  },
  {
    alias: 'tiling',
    title: 'Tiling',
    parents: ['homeservices'],
    country_blacklist: [
      'IE',
      'TR',
      'BR',
      'CA',
      'MY',
      'GB',
      'PH',
      'TW',
      'JP',
      'PL',
      'BE',
      'HK',
      'PT',
      'FI',
      'NL'
    ]
  },
  {
    alias: 'tires',
    title: 'Tires',
    parents: ['auto']
  },
  {
    alias: 'titleloans',
    title: 'Title Loans',
    parents: ['financialservices'],
    country_whitelist: ['US', 'CA']
  },
  {
    alias: 'tobaccoshops',
    title: 'Tobacco Shops',
    parents: ['shopping']
  },
  {
    alias: 'tofu',
    title: 'Tofu Shops',
    parents: ['gourmet'],
    country_whitelist: ['JP']
  },
  {
    alias: 'tonkatsu',
    title: 'Tonkatsu',
    parents: ['japanese'],
    country_whitelist: ['SG', 'TW', 'JP']
  },
  {
    alias: 'torshi',
    title: 'Torshi',
    parents: ['food'],
    country_whitelist: ['TR']
  },
  {
    alias: 'tortillas',
    title: 'Tortillas',
    parents: ['food'],
    country_whitelist: ['MX']
  },
  {
    alias: 'tours',
    title: 'Tours',
    parents: ['hotelstravel']
  },
  {
    alias: 'towing',
    title: 'Towing',
    parents: ['auto']
  },
  {
    alias: 'towncarservice',
    title: 'Town Car Service',
    parents: ['transport'],
    country_whitelist: [
      'SG',
      'IE',
      'NZ',
      'US',
      'CA',
      'MY',
      'GB',
      'PH',
      'AU',
      'TW',
      'BE',
      'HK',
      'NL'
    ]
  },
  {
    alias: 'townhall',
    title: 'Town Hall',
    parents: ['publicservicesgovt'],
    country_blacklist: [
      'SG',
      'IE',
      'NZ',
      'CA',
      'MY',
      'GB',
      'PH',
      'AU',
      'TW',
      'JP',
      'PL',
      'HK',
      'FI'
    ]
  },
  {
    alias: 'toxicologists',
    title: 'Toxicologists',
    parents: ['physicians']
  },
  {
    alias: 'toys',
    title: 'Toy Stores',
    parents: ['shopping']
  },
  {
    alias: 'tradamerican',
    title: 'American (Traditional)',
    parents: ['restaurants']
  },
  {
    alias: 'tradclothing',
    title: 'Traditional Clothing',
    parents: ['fashion']
  },
  {
    alias: 'tradefairs',
    title: 'Trade Fairs',
    parents: ['festivals'],
    country_whitelist: [
      'CH',
      'NZ',
      'NO',
      'TR',
      'CZ',
      'AT',
      'MX',
      'DK',
      'JP',
      'DE',
      'BE',
      'PT',
      'FI',
      'IT',
      'NL'
    ]
  },
  {
    alias: 'traditional_swedish',
    title: 'Traditional Swedish',
    parents: ['restaurants'],
    country_whitelist: ['SE', 'FI']
  },
  {
    alias: 'trafficschools',
    title: 'Traffic Schools',
    parents: ['specialtyschools'],
    country_whitelist: ['US']
  },
  {
    alias: 'trafficticketinglaw',
    title: 'Traffic Ticketing Law',
    parents: ['lawyers'],
    country_whitelist: ['US']
  },
  {
    alias: 'trailerdealers',
    title: 'Trailer Dealers',
    parents: ['auto'],
    country_whitelist: ['SG', 'IE', 'NZ', 'NO', 'US', 'CA', 'GB', 'AU', 'DK', 'DE']
  },
  {
    alias: 'trailerrental',
    title: 'Trailer Rental',
    parents: ['auto']
  },
  {
    alias: 'trailerrepair',
    title: 'Trailer Repair',
    parents: ['auto'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'MY',
      'GB',
      'SE',
      'PH',
      'AU',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'DE',
      'BE',
      'PT',
      'NL'
    ]
  },
  {
    alias: 'trains',
    title: 'Trains',
    parents: ['transport'],
    country_blacklist: [
      'SG',
      'NZ',
      'TR',
      'MY',
      'AR',
      'PH',
      'MX',
      'TW',
      'CL',
      'JP',
      'HK',
      'ES',
      'FI',
      'IT'
    ]
  },
  {
    alias: 'trainstations',
    title: 'Train Stations',
    parents: ['hotelstravel']
  },
  {
    alias: 'trampoline',
    title: 'Trampoline Parks',
    parents: ['active'],
    country_blacklist: ['SG', 'NZ', 'BR', 'MY', 'AR', 'PH', 'MX', 'TW', 'CL', 'JP', 'HK', 'ES']
  },
  {
    alias: 'translationservices',
    title: 'Translation Services',
    parents: ['professional'],
    country_blacklist: ['SE']
  },
  {
    alias: 'transmissionrepair',
    title: 'Transmission Repair',
    parents: ['auto'],
    country_blacklist: ['CH', 'AT', 'PH', 'DE', 'IT', 'MY']
  },
  {
    alias: 'transport',
    title: 'Transportation',
    parents: ['hotelstravel']
  },
  {
    alias: 'tras_os_montes',
    title: 'Tras-os-Montes',
    parents: ['portuguese'],
    country_whitelist: ['PT']
  },
  {
    alias: 'trattorie',
    title: 'Trattorie',
    parents: ['restaurants'],
    country_whitelist: ['CH', 'CL', 'PL', 'IT', 'AR', 'FR']
  },
  {
    alias: 'travelagents',
    title: 'Travel Agents',
    parents: ['travelservices'],
    country_blacklist: ['IT']
  },
  {
    alias: 'travelservices',
    title: 'Travel Services',
    parents: ['hotelstravel']
  },
  {
    alias: 'treeservices',
    title: 'Tree Services',
    parents: ['homeservices']
  },
  {
    alias: 'trinidadian',
    title: 'Trinidadian',
    parents: ['caribbean'],
    country_whitelist: ['US']
  },
  {
    alias: 'triviahosts',
    title: 'Trivia Hosts',
    parents: ['eventservices'],
    country_whitelist: ['US']
  },
  {
    alias: 'trophyshops',
    title: 'Trophy Shops',
    parents: ['shopping'],
    country_blacklist: ['SG', 'SE', 'NZ', 'TR', 'BR', 'FI']
  },
  {
    alias: 'tropicalmedicine',
    title: 'Tropical Medicine',
    parents: ['physicians'],
    country_whitelist: ['CH', 'AT', 'DE', 'BR', 'BE', 'IT', 'NL']
  },
  {
    alias: 'truck_rental',
    title: 'Truck Rental',
    parents: ['auto'],
    country_blacklist: ['CZ', 'SE', 'JP', 'TR', 'FI', 'NL']
  },
  {
    alias: 'truckdealers',
    title: 'Commercial Truck Dealers',
    parents: ['auto'],
    country_blacklist: ['CZ', 'SE', 'TW', 'JP', 'TR', 'HK', 'FI']
  },
  {
    alias: 'truckrepair',
    title: 'Commercial Truck Repair',
    parents: ['auto'],
    country_whitelist: [
      'CH',
      'IE',
      'US',
      'CA',
      'AR',
      'MY',
      'GB',
      'PH',
      'AU',
      'MX',
      'DK',
      'PL',
      'SG',
      'NZ',
      'NO',
      'BR',
      'AT',
      'CL',
      'DE',
      'BE',
      'ES',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'tubing',
    title: 'Tubing',
    parents: ['active'],
    country_whitelist: ['US']
  },
  {
    alias: 'tuina',
    title: 'Tui Na',
    parents: ['tcm']
  },
  {
    alias: 'turkish',
    title: 'Turkish',
    parents: ['restaurants']
  },
  {
    alias: 'turkishravioli',
    title: 'Turkish Ravioli',
    parents: ['turkish'],
    country_whitelist: ['TR']
  },
  {
    alias: 'tuscan',
    title: 'Tuscan',
    parents: ['italian'],
    country_whitelist: ['IT', 'US', 'FR']
  },
  {
    alias: 'tutoring',
    title: 'Tutoring Centers',
    parents: ['education']
  },
  {
    alias: 'tvmounting',
    title: 'TV Mounting',
    parents: ['localservices'],
    country_blacklist: ['JP', 'BE', 'IT', 'NL', 'FR']
  },
  {
    alias: 'udon',
    title: 'Udon',
    parents: ['japanese'],
    country_whitelist: ['SE', 'TW', 'JP', 'DK', 'NO', 'HK', 'FI']
  },
  {
    alias: 'ukrainian',
    title: 'Ukrainian',
    parents: ['restaurants'],
    country_blacklist: ['TR', 'DK', 'ES']
  },
  {
    alias: 'ultrasoundimagingcenters',
    title: 'Ultrasound Imaging Centers',
    parents: ['health']
  },
  {
    alias: 'unagi',
    title: 'Unagi',
    parents: ['japanese'],
    country_whitelist: ['TW', 'JP']
  },
  {
    alias: 'underseamedicine',
    title: 'Undersea/Hyperbaric Medicine',
    parents: ['physicians']
  },
  {
    alias: 'uniforms',
    title: 'Uniforms',
    parents: ['shopping'],
    country_blacklist: ['CH', 'IE', 'TR', 'CZ', 'SE', 'AT', 'JP', 'NL']
  },
  {
    alias: 'university_housing',
    title: 'University Housing',
    parents: ['realestate']
  },
  {
    alias: 'unofficialyelpevents',
    title: 'Unofficial Yelp Events',
    parents: ['localflavor']
  },
  {
    alias: 'urgent_care',
    title: 'Urgent Care',
    parents: ['health']
  },
  {
    alias: 'urologists',
    title: 'Urologists',
    parents: ['physicians']
  },
  {
    alias: 'usedbooks',
    title: 'Used Bookstore',
    parents: ['shopping'],
    country_blacklist: ['AU', 'AR', 'TR', 'CL']
  },
  {
    alias: 'usedcardealers',
    title: 'Used Car Dealers',
    parents: ['auto']
  },
  {
    alias: 'utilities',
    title: 'Utilities',
    parents: ['homeservices'],
    country_whitelist: ['SG', 'US', 'GB', 'CZ', 'AU', 'PL', 'BE', 'PT', 'IT', 'NL']
  },
  {
    alias: 'uzbek',
    title: 'Uzbek',
    parents: ['restaurants'],
    country_whitelist: ['US', 'CZ']
  },
  {
    alias: 'vacation_rentals',
    title: 'Vacation Rentals',
    parents: ['hotelstravel'],
    country_blacklist: ['SG']
  },
  {
    alias: 'vacationrentalagents',
    title: 'Vacation Rental Agents',
    parents: ['hotelstravel'],
    country_blacklist: ['SG', 'ES']
  },
  {
    alias: 'valetservices',
    title: 'Valet Services',
    parents: ['eventservices'],
    country_whitelist: ['TR', 'BR', 'US']
  },
  {
    alias: 'vapeshops',
    title: 'Vape Shops',
    parents: ['shopping'],
    country_blacklist: ['BR', 'SG']
  },
  {
    alias: 'vascularmedicine',
    title: 'Vascular Medicine',
    parents: ['physicians']
  },
  {
    alias: 'vegan',
    title: 'Vegan',
    parents: ['restaurants']
  },
  {
    alias: 'vegetarian',
    title: 'Vegetarian',
    parents: ['restaurants']
  },
  {
    alias: 'vehicleshipping',
    title: 'Vehicle Shipping',
    parents: ['auto']
  },
  {
    alias: 'vehiclewraps',
    title: 'Vehicle Wraps',
    parents: ['auto'],
    country_blacklist: ['TR', 'BE', 'FR']
  },
  {
    alias: 'venetian',
    title: 'Venetian',
    parents: ['italian'],
    country_whitelist: ['IT', 'FR']
  },
  {
    alias: 'venezuelan',
    title: 'Venezuelan',
    parents: ['latin'],
    country_whitelist: ['CL', 'US', 'PT', 'ES', 'CA', 'AR', 'FR']
  },
  {
    alias: 'venison',
    title: 'Venison',
    parents: ['restaurants'],
    country_whitelist: ['SG', 'IE', 'NZ', 'NO', 'CA', 'GB', 'CZ', 'AU', 'DK', 'PL', 'IT']
  },
  {
    alias: 'venues',
    title: 'Venues & Event Spaces',
    parents: ['eventservices']
  },
  {
    alias: 'vermouthbars',
    title: 'Vermouth Bars',
    parents: ['bars'],
    country_blacklist: ['NO', 'TR', 'BR', 'DK', 'JP', 'PL', 'IT', 'FR']
  },
  {
    alias: 'vet',
    title: 'Veterinarians',
    parents: ['pets']
  },
  {
    alias: 'veteransorganizations',
    title: 'Veterans Organizations',
    parents: ['social_clubs'],
    country_whitelist: ['US']
  },
  {
    alias: 'videoandgames',
    title: 'Videos & Video Game Rental',
    parents: ['media']
  },
  {
    alias: 'videofilmproductions',
    title: 'Video/Film Production',
    parents: ['professional']
  },
  {
    alias: 'videogamestores',
    title: 'Video Game Stores',
    parents: ['media']
  },
  {
    alias: 'videographers',
    title: 'Videographers',
    parents: ['eventservices']
  },
  {
    alias: 'vietnamese',
    title: 'Vietnamese',
    parents: ['restaurants']
  },
  {
    alias: 'vintage',
    title: 'Used, Vintage & Consignment',
    parents: ['fashion']
  },
  {
    alias: 'vinyl_records',
    title: 'Vinyl Records',
    parents: ['media']
  },
  {
    alias: 'vinylsiding',
    title: 'Siding',
    parents: ['homeservices'],
    country_whitelist: ['SG', 'IE', 'NZ', 'NO', 'US', 'CA', 'GB', 'SE', 'AU', 'DK', 'BE', 'NL']
  },
  {
    alias: 'virtualrealitycenters',
    title: 'Virtual Reality Centers',
    parents: ['arts']
  },
  {
    alias: 'visitorcenters',
    title: 'Visitor Centers',
    parents: ['travelservices']
  },
  {
    alias: 'vitaminssupplements',
    title: 'Vitamins & Supplements',
    parents: ['shopping'],
    country_blacklist: ['MY', 'PH']
  },
  {
    alias: 'vocalcoach',
    title: 'Vocal Coach',
    parents: ['musicinstrumentservices']
  },
  {
    alias: 'vocation',
    title: 'Vocational & Technical School',
    parents: ['specialtyschools']
  },
  {
    alias: 'volleyball',
    title: 'Volleyball',
    parents: ['active'],
    country_whitelist: [
      'SG',
      'NZ',
      'NO',
      'BR',
      'CZ',
      'SE',
      'AT',
      'AU',
      'DK',
      'JP',
      'DE',
      'FI',
      'FR'
    ]
  },
  {
    alias: 'waffles',
    title: 'Waffles',
    parents: ['restaurants']
  },
  {
    alias: 'waldorfschools',
    title: 'Waldorf Schools',
    parents: ['education'],
    country_blacklist: ['FI']
  },
  {
    alias: 'walkinclinics',
    title: 'Walk-in Clinics',
    parents: ['medcenters'],
    country_blacklist: ['IT', 'CH', 'AT', 'DE']
  },
  {
    alias: 'walkingtours',
    title: 'Walking Tours',
    parents: ['tours']
  },
  {
    alias: 'wallpapering',
    title: 'Wallpapering',
    parents: ['homeservices']
  },
  {
    alias: 'watch_repair',
    title: 'Watch Repair',
    parents: ['localservices']
  },
  {
    alias: 'watches',
    title: 'Watches',
    parents: ['shopping']
  },
  {
    alias: 'waterdelivery',
    title: 'Water Delivery',
    parents: ['localservices'],
    country_whitelist: ['PH', 'US', 'BR', 'HK', 'CA', 'MY']
  },
  {
    alias: 'waterheaterinstallrepair',
    title: 'Water Heater Installation/Repair',
    parents: ['homeservices']
  },
  {
    alias: 'waterparks',
    title: 'Water Parks',
    parents: ['active'],
    country_blacklist: ['CH', 'IE', 'NZ', 'MY', 'AR', 'GB', 'AT', 'AU', 'CL', 'DE', 'HK', 'FI']
  },
  {
    alias: 'waterproofing',
    title: 'Waterproofing',
    parents: ['homeservices']
  },
  {
    alias: 'waterpurification',
    title: 'Water Purification Services',
    parents: ['homeservices']
  },
  {
    alias: 'waterstores',
    title: 'Water Stores',
    parents: ['food'],
    country_whitelist: ['MX', 'US', 'BR', 'CA']
  },
  {
    alias: 'watersuppliers',
    title: 'Water Suppliers',
    parents: ['utilities']
  },
  {
    alias: 'watertaxis',
    title: 'Water Taxis',
    parents: ['transport'],
    country_whitelist: ['AU', 'MX', 'IE', 'NZ', 'IT', 'GB']
  },
  {
    alias: 'waxing',
    title: 'Waxing',
    parents: ['hairremoval']
  },
  {
    alias: 'web_design',
    title: 'Web Design',
    parents: ['professional']
  },
  {
    alias: 'wedding_planning',
    title: 'Wedding Planning',
    parents: ['eventservices']
  },
  {
    alias: 'weddingchappels',
    title: 'Wedding Chapels',
    parents: ['eventservices'],
    country_whitelist: ['AU', 'US', 'JP']
  },
  {
    alias: 'weightlosscenters',
    title: 'Weight Loss Centers',
    parents: ['health']
  },
  {
    alias: 'welldrilling',
    title: 'Well Drilling',
    parents: ['localservices'],
    country_whitelist: [
      'CH',
      'US',
      'MY',
      'AR',
      'CZ',
      'PH',
      'MX',
      'DK',
      'PL',
      'NO',
      'BR',
      'AT',
      'CL',
      'DE',
      'ES',
      'IT'
    ]
  },
  {
    alias: 'westernjapanese',
    title: 'Western Style Japanese Food',
    parents: ['japanese'],
    country_whitelist: ['SG', 'TW', 'JP']
  },
  {
    alias: 'whalewatchingtours',
    title: 'Whale Watching Tours',
    parents: ['tours'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'wheelrimrepair',
    title: 'Wheel & Rim Repair',
    parents: ['auto'],
    country_whitelist: ['IT', 'US', 'PT']
  },
  {
    alias: 'whiskeybars',
    title: 'Whiskey Bars',
    parents: ['bars'],
    country_blacklist: ['IT']
  },
  {
    alias: 'wholesale_stores',
    title: 'Wholesale Stores',
    parents: ['shopping'],
    country_blacklist: ['CH', 'AT', 'DE']
  },
  {
    alias: 'wholesalers',
    title: 'Wholesalers',
    parents: ['professional'],
    country_blacklist: ['TR', 'BR', 'MY', 'CZ', 'SE', 'PH', 'TW', 'PT', 'HK', 'FI', 'FR']
  },
  {
    alias: 'wigs',
    title: 'Wigs',
    parents: ['shopping'],
    country_blacklist: [
      'SG',
      'CH',
      'IE',
      'NZ',
      'TR',
      'BR',
      'MY',
      'GB',
      'SE',
      'AT',
      'PH',
      'TW',
      'JP',
      'HK'
    ]
  },
  {
    alias: 'wildlifecontrol',
    title: 'Wildlife Control',
    parents: ['localservices'],
    country_blacklist: ['JP']
  },
  {
    alias: 'wildlifehunting',
    title: 'Wildlife Hunting Ranges',
    parents: ['active'],
    country_whitelist: ['US']
  },
  {
    alias: 'willstrustsprobates',
    title: 'Wills, Trusts, & Probates',
    parents: ['estateplanning'],
    country_whitelist: ['SG', 'IE', 'NZ', 'US', 'CA', 'GB', 'AU', 'BE', 'IT', 'NL']
  },
  {
    alias: 'windowsinstallation',
    title: 'Windows Installation',
    parents: ['homeservices']
  },
  {
    alias: 'windowwashing',
    title: 'Window Washing',
    parents: ['homeservices']
  },
  {
    alias: 'windshieldinstallrepair',
    title: 'Windshield Installation & Repair',
    parents: ['auto'],
    country_blacklist: ['CH', 'CZ', 'AT', 'DE']
  },
  {
    alias: 'wine_bars',
    title: 'Wine Bars',
    parents: ['bars']
  },
  {
    alias: 'wineries',
    title: 'Wineries',
    parents: ['food', 'arts'],
    country_blacklist: ['FI']
  },
  {
    alias: 'winetasteclasses',
    title: 'Wine Tasting Classes',
    parents: ['tastingclasses']
  },
  {
    alias: 'winetastingroom',
    title: 'Wine Tasting Room',
    parents: ['wineries']
  },
  {
    alias: 'winetours',
    title: 'Wine Tours',
    parents: ['tours']
  },
  {
    alias: 'wok',
    title: 'Wok',
    parents: ['restaurants'],
    country_blacklist: [
      'SG',
      'IE',
      'NZ',
      'TR',
      'BR',
      'US',
      'CA',
      'AR',
      'GB',
      'AU',
      'TW',
      'JP',
      'PL',
      'HK',
      'IT'
    ]
  },
  {
    alias: 'womenscloth',
    title: "Women's Clothing",
    parents: ['fashion']
  },
  {
    alias: 'workerscomplaw',
    title: 'Workers Compensation Law',
    parents: ['lawyers'],
    country_blacklist: ['CH', 'FR', 'AT', 'DE']
  },
  {
    alias: 'wraps',
    title: 'Wraps',
    parents: ['restaurants'],
    country_whitelist: ['CZ', 'SE', 'DK', 'NO', 'TR', 'PT', 'US']
  },
  {
    alias: 'xmasmarkets',
    title: 'Christmas Markets',
    parents: ['festivals'],
    country_blacklist: ['SG', 'IE', 'NZ', 'TR', 'BR', 'US', 'CA']
  },
  {
    alias: 'yakiniku',
    title: 'Yakiniku',
    parents: ['japanese'],
    country_whitelist: ['SG', 'TW', 'JP']
  },
  {
    alias: 'yakitori',
    title: 'Yakitori',
    parents: ['japanese'],
    country_whitelist: ['SG', 'TW', 'JP']
  },
  {
    alias: 'yelpevents',
    title: 'Yelp Events',
    parents: ['localflavor']
  },
  {
    alias: 'yoga',
    title: 'Yoga',
    parents: ['fitness']
  },
  {
    alias: 'youth_club',
    title: 'Youth Club',
    parents: ['localservices'],
    country_whitelist: [
      'CH',
      'IE',
      'CA',
      'GB',
      'CZ',
      'SE',
      'AU',
      'DK',
      'SG',
      'NZ',
      'NO',
      'DE',
      'BE',
      'PT',
      'FI',
      'IT',
      'NL',
      'FR'
    ]
  },
  {
    alias: 'yucatan',
    title: 'Yucatan',
    parents: ['mexican'],
    country_whitelist: ['MX']
  },
  {
    alias: 'yugoslav',
    title: 'Yugoslav',
    parents: ['restaurants'],
    country_whitelist: ['SE', 'AU', 'BE', 'PT', 'IT', 'FR']
  },
  {
    alias: 'zapiekanka',
    title: 'Zapiekanka',
    parents: ['food'],
    country_whitelist: ['PL']
  },
  {
    alias: 'zipline',
    title: 'Ziplining',
    parents: ['active']
  },
  {
    alias: 'zoos',
    title: 'Zoos',
    parents: ['active']
  },
  {
    alias: 'zorbing',
    title: 'Zorbing',
    parents: ['active'],
    country_whitelist: ['CZ', 'MX', 'NZ', 'US', 'PT', 'ES']
  }
];

export default categories;
