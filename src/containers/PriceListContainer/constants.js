import React from  'react';
import ShareHousePremiumIcon from "../../components/Icons/ShareHousePremiumIcon";
import ShareHouseStandardIcon from "../../components/Icons/ShareHouseStandardIcon";
import HomeStayIcon from "../../components/Icons/HomeStayIcon";

export const HOMESTAY = 'HOMESTAY';
export const SHARE_HOUSE_STANDARD = 'SHARE_HOUSE_STANDARD';
export const SHARE_HOUSE_PREMIUM = 'SHARE_HOUSE_PREMIUM';

export const GOLDCOAST = 'GOLDCOAST';
export const SYDNEY = 'SYDNEY';
export const MELBOURNE = 'MELBOURNE';
export const BRISBANE = 'BRISBANE';

export const SAYSTAY_TAX = 250;
export const UNDERAGE_TAX = 60;

//underage n tem share

export const HALF_BOARD = 'HALF_BOARD';
export const FULL_BOARD = 'FULL_BOARD';
export const NO_MEALS = 'NO_MEALS';

export const MEALPRICE = {
  [NO_MEALS]: 0,
  [HALF_BOARD]: 50,
  [FULL_BOARD]: 70,
};

export const PRICE_CHECKIN = 55;

//TODO: PRICES_CHECKIN, cada opção tem um preço diferente:
export const PRICES_CHECKIN = {
  '1': 0,
  '2': 55,
  '3': 90,
};

export const PRICE_CHECKOUT = 90;

export const HOMESTAY_PRICES = {
  [MELBOURNE]: 250,
  [SYDNEY]: 250,
  [GOLDCOAST]: 210,
  [BRISBANE]: 210,
}
export const SHAREHOUSE_STANDARD_PRICES = {
  [GOLDCOAST]: 195,
  [BRISBANE]: 195,
}
export const SHAREHOUSE_PREMIUM_PRICES = {
  [GOLDCOAST]: 210,
  [BRISBANE]: 210,
}
export const GENERAL_INFORMATION_ACCOMMODATION = [
  { 
    description: <p><span>POSSIBILITY TO EXTEND YOUR INITIAL STAY</span><small>Subject to availability</small></p>,
    icon: 'icon-extend',  
  },
  { 
    description: <p>INSURANCE INCLUDED</p>,
    icon: 'icon-bill',
  },
  { 
    description: <p>NO ADDITIONAL PAYMENT OR SECURITY DEPOSIT</p>,
    icon: 'icon-bill',
  },
  { 
    description: <p><span><strong>24 HOUR</strong> SUPPORT</span><small>For urgent manners. For non-urgent matters, please e-mail our staff</small></p>,
    icon: 'icon-clock',
  },
  { 
    description: <p><span><strong>SAYSTAY'S QUALITY CONTROL</strong></span><small>We regularly inspect your accommodation to ensure it meets our cleaning, organization and safety standards!</small></p>,
    icon: 'icon-checked',
  },  
];

const COMMON_DESCRIPTION = [
  { 
    description: <p>BILLS INCLUDED</p>,
    icon: 'icon-bill',
  },
  { 
    description: <p>UNLIMITED INTERNET</p>,
    icon: 'icon-wifi',
  },
  { 
    description: <p>FURNISHED</p>,
    icon: 'icon-furniture',
  },
  { 
    description: <p>PILLOW, BED LINEN AND BATH TOWEL</p>,
    icon: 'icon-pillow',
  },
];
export const HOMESTAY_ACCOMMODATION_ITEMS = [
  { 
    description: <p>PRIVATE ROOM (1 PERSON)</p>,
    icon: 'icon-people',
  },
  { 
    description: <p> <span>PRIVATE BATHROOM</span> <small>Available in selected homestays</small></p>,
    icon: 'icon-toilet',
  },
  { 
    description: <p><span>UP TO <strong>45 MINUTES</strong> RIDE TO THE CITY</span><small>By public transportation</small></p>,
    icon: 'icon-clock',
  },
  { 
    description: <p>
      <span>EQUIPPED KITCHEN</span>
    </p>,
    icon: 'icon-kitchen',
  },
  { 
    description: <p><span>WASHING MACHINE</span> <small>The use will be according to the homestay house rules</small></p>,
    icon: 'icon-washmachine',
  },
  { 
    description: <p><span>SWIMMING POOL</span><small>Available in selected homestays</small></p>,
    icon: 'icon-pool',
  },
  { 
    description: <p><span>GYM</span><small>Available in selected homestays</small></p>,
    icon: 'icon-gym',
  },
  { 
    description: <p><span>OUTDOOR AREA</span><small>Available in selected homestays</small></p>,
    icon: 'icon-outdoor',
  },
  ...COMMON_DESCRIPTION,
];

export const SHAREHOUSE_STANDARD_ITEMS = [
  { 
    description: <p><span>2 BEDROOM APARTMENT</span><small>Up to 4 people sharing the apartment </small></p>,
    icon: 'icon-bedroom',
  },
  { 
    description: <p>SHARE ROOM (2 PEOPLE)</p>,
    icon: 'icon-people',
  },
  { 
    description: <p> <span>2 BATHROOM APARTMENT</span> <small>En-suite is subject to availability</small></p>,
    icon: 'icon-toilet',
  },
  { 
    description: <p><span>UP TO <strong>15 MINUTES</strong> WALK TO THE CITY</span></p>,
    icon: 'icon-clock',
  },
  { 
    description: <p>
      <span>EQUIPPED KITCHEN</span>
      <small>We provide: microwave, toaster, electric kettle, plates, glasses, cutlery, pans</small>
    </p>,
    icon: 'icon-kitchen',
  },
  { 
    description: <p><span>WASHING MACHINE</span></p>,
    icon: 'icon-washmachine',
  },
  { 
    description: <p><span>SWIMMING POOL</span><small>On common areas</small></p>,
    icon: 'icon-pool',
  },
  { 
    description: <p><span>GYM</span><small>On common areas</small></p>,
    icon: 'icon-gym',
  },
  { 
    description: <p><span>OUTDOOR AREA</span><small>On common areas</small></p>,
    icon: 'icon-outdoor',
  },
  ...COMMON_DESCRIPTION,
];

export const SHAREHOUSE_PREMIUM_ITEMS = [
  { 
    description: <p><span>2 OR 3 BEDROOM APARTMENT</span><small>Up to 6 people sharing the apartment </small></p>,
    icon: 'icon-bedroom',
  },
  { 
    description: <p>SHARE ROOM (2 PEOPLE)</p>,
    icon: 'icon-people',
  },
  { 
    description: <p> <span>2 BATHROOM APARTMENT</span> <small>En-suite is subject to availability</small></p>,
    icon: 'icon-toilet',
  },
  { 
    description: <p><span>UP TO <strong>15 MINUTES</strong> WALK TO THE CITY</span></p>,
    icon: 'icon-clock',
  },
  { 
    description: <p>
      <span>EQUIPPED KITCHEN</span>
      <small>We provide: microwave, toaster, electric kettle, plates, glasses, cutlery, pans</small>
    </p>,
    icon: 'icon-kitchen',
  },
  { 
    description: <p><span>WASHING MACHINE</span></p>,
    icon: 'icon-washmachine',
  },
  { 
    description: <p><span>SWIMMING POOL</span><small>On common areas</small></p>,
    icon: 'icon-pool',
  },
  { 
    description: <p><span>GYM</span><small>On common areas</small></p>,
    icon: 'icon-gym',
  },
  { 
    description: <p><span>OUTDOOR AREA</span><small>On common areas</small></p>,
    icon: 'icon-outdoor',
  },
  ...COMMON_DESCRIPTION,
];

export const HOMESTAY_PROPS = {
  title: 'HOMESTAY',
  subtitle: '',
  mealOption: true,
  icon: HomeStayIcon,
  description: 'Experience the Australian culture and lifestyle within the comfort and safety of a family!',
  accommodationItems: HOMESTAY_ACCOMMODATION_ITEMS,
  color: '#00AEBB',
};
export const SHARE_HOUSE_STANDARD_PROPS = {
  title: 'Share House',
  subtitle: 'Standard',
  mealOption: false,
  icon: ShareHouseStandardIcon,
  description: 'Enjoy the experience of sharing a house with other international travellers during your stay in Australia!',
  accommodationItems: SHAREHOUSE_STANDARD_ITEMS,
  color: '#75BE36',
};
export const SHARE_HOUSE_PREMIUM_PROPS = {
  title: 'Share House',
  subtitle: 'Premium',
  mealOption: false,
  icon: ShareHousePremiumIcon,
  description: 'Enjoy the experience of sharing a house with other international travellers during your stay in Australia!',
  accommodationItems: SHAREHOUSE_PREMIUM_ITEMS,
  color: '#FFCC97',
};