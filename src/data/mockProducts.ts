import { ManufacturedProduct, TradingProduct } from '@/types/product';

export const initialManufacturedProducts: ManufacturedProduct[] = [
  {
    id: 'mfg-001',
    productType: 'manufactured',
    name: 'Industrial Power Controller XR-5000',
    category: 'Power Electronics',
    description: 'The XR-5000 is our flagship industrial power controller designed for heavy-duty manufacturing environments. It features advanced microprocessor-based control, multiple protection circuits, and seamless integration with existing automation systems. Built with premium components and rigorous quality standards, this controller delivers exceptional reliability and precision in power management applications.',
    shortDescription: 'Advanced microprocessor-based power controller for industrial automation',
    specifications: {
      'Input Voltage': '380-480V AC, 3-Phase',
      'Output Power': 'Up to 500kW',
      'Control Interface': 'RS-485, Modbus RTU, Ethernet/IP',
      'Protection': 'Overcurrent, Overvoltage, Short Circuit, Thermal',
      'Operating Temp': '-20°C to +60°C',
      'Enclosure': 'IP65 Rated',
      'Certifications': 'CE, UL, ISO 9001'
    },
    applications: [
      'Manufacturing automation',
      'Process control systems',
      'Heavy machinery control',
      'Industrial HVAC systems',
      'Conveyor systems'
    ],
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800'
    ],
    featured: true,
    createdAt: '2024-01-15',
    updatedAt: '2024-03-10'
  },
  {
    id: 'mfg-002',
    productType: 'manufactured',
    name: 'Precision Servo Drive Module SD-200',
    category: 'Motion Control',
    description: 'The SD-200 Precision Servo Drive Module offers unparalleled accuracy in motion control applications. Engineered for high-performance robotics and CNC machinery, it provides smooth, precise control with minimal latency. The modular design allows easy integration and maintenance while the advanced algorithms ensure optimal performance across varying load conditions.',
    shortDescription: 'High-precision servo drive for robotics and CNC applications',
    specifications: {
      'Rated Power': '2kW - 20kW range',
      'Position Accuracy': '±0.01mm',
      'Max Speed': '6000 RPM',
      'Communication': 'EtherCAT, CANopen, PROFINET',
      'Feedback': 'Encoder, Resolver, Hall sensors',
      'Response Time': '<1ms',
      'Efficiency': '>96%'
    },
    applications: [
      'CNC machining centers',
      'Industrial robotics',
      'Semiconductor equipment',
      'Packaging machinery',
      'Textile manufacturing'
    ],
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800'
    ],
    featured: true,
    createdAt: '2024-02-01',
    updatedAt: '2024-03-15'
  },
  {
    id: 'mfg-003',
    productType: 'manufactured',
    name: 'Smart Sensor Gateway IoT-Hub 500',
    category: 'Industrial IoT',
    description: 'The IoT-Hub 500 is a comprehensive sensor gateway solution that bridges traditional industrial sensors with modern IoT infrastructure. It supports multiple sensor protocols, provides edge computing capabilities, and ensures secure data transmission to cloud platforms. Perfect for Industry 4.0 implementations and smart factory initiatives.',
    shortDescription: 'Industrial IoT gateway with edge computing capabilities',
    specifications: {
      'Sensor Inputs': '32 analog, 64 digital',
      'Protocols': 'MQTT, OPC-UA, HTTP/REST',
      'Connectivity': '4G/LTE, Wi-Fi, Ethernet',
      'Edge Processing': 'ARM Cortex-A72, 4GB RAM',
      'Storage': '128GB industrial SSD',
      'Security': 'TLS 1.3, Hardware TPM',
      'Power': '24V DC, <15W consumption'
    },
    applications: [
      'Predictive maintenance systems',
      'Environmental monitoring',
      'Asset tracking',
      'Energy management',
      'Quality control automation'
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    ],
    featured: true,
    createdAt: '2024-01-20',
    updatedAt: '2024-03-20'
  },
  {
    id: 'mfg-004',
    productType: 'manufactured',
    name: 'Variable Frequency Drive VFD-Pro 750',
    category: 'Power Electronics',
    description: 'The VFD-Pro 750 delivers superior motor control with advanced vector control algorithms. Designed for demanding industrial applications, it offers exceptional energy efficiency and precise speed control. Features built-in EMC filters, multiple safety inputs, and comprehensive diagnostics.',
    shortDescription: 'Premium variable frequency drive with vector control',
    specifications: {
      'Power Range': '0.75kW - 750kW',
      'Control Mode': 'V/F, SVC, FVC',
      'Input': '380-480V AC ±10%',
      'Frequency Range': '0-400Hz',
      'Overload': '150% for 60s, 180% for 3s',
      'Ambient Temp': '-10°C to +50°C',
      'EMC': 'Built-in Class C3 filter'
    },
    applications: [
      'Pump and fan control',
      'Compressor systems',
      'Crane and hoist',
      'Extruders',
      'Mixers and agitators'
    ],
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'
    ],
    featured: false,
    createdAt: '2024-02-10',
    updatedAt: '2024-03-05'
  },
  {
    id: 'mfg-005',
    productType: 'manufactured',
    name: 'Industrial HMI Panel Touch-Pro 15',
    category: 'Human Machine Interface',
    description: 'The Touch-Pro 15 industrial HMI panel combines a brilliant 15-inch display with ruggedized construction for harsh environments. Features include multi-touch capability, sunlight readability, and wide viewing angles. Runs our proprietary visualization software with easy SCADA integration.',
    shortDescription: '15-inch industrial touchscreen HMI with SCADA integration',
    specifications: {
      'Display': '15.6" TFT LCD, 1920x1080',
      'Touch': 'Projected capacitive, 10-point',
      'Processor': 'Intel Core i5, 8GB RAM',
      'Storage': '256GB SSD',
      'I/O': 'USB 3.0, RS-232/485, Ethernet x2',
      'Protection': 'IP66 front panel',
      'Operating Temp': '0°C to +55°C'
    },
    applications: [
      'Machine monitoring',
      'Process visualization',
      'Production dashboards',
      'Operator stations',
      'Quality inspection'
    ],
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800'
    ],
    featured: false,
    createdAt: '2024-02-15',
    updatedAt: '2024-03-12'
  },
  {
    id: 'mfg-006',
    productType: 'manufactured',
    name: 'Programmable Logic Controller PLC-X Series',
    category: 'Control Systems',
    description: 'The PLC-X Series represents the next generation of programmable logic controllers, offering unprecedented processing power and I/O flexibility. With hot-swappable modules, redundant power options, and extensive communication capabilities, it is ideal for mission-critical applications.',
    shortDescription: 'Next-gen PLC with modular architecture and high performance',
    specifications: {
      'Scan Time': '<1ms for 1K instructions',
      'Program Memory': '10MB',
      'Max I/O': '8192 points',
      'Communication': 'EtherNet/IP, Modbus, PROFIBUS',
      'Languages': 'IEC 61131-3 compliant',
      'Redundancy': 'CPU and power supply',
      'Battery Backup': '5+ years retention'
    },
    applications: [
      'Discrete manufacturing',
      'Batch processing',
      'Material handling',
      'Water treatment',
      'Building automation'
    ],
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800'
    ],
    featured: false,
    createdAt: '2024-01-25',
    updatedAt: '2024-03-08'
  }
];

export const initialTradingProducts: TradingProduct[] = [
  {
    id: 'trd-001',
    productType: 'trading',
    name: 'Industrial Relay Module 24V DC',
    category: 'Relays & Switches',
    type: 'Electromechanical',
    brand: 'Omron',
    description: 'High-quality industrial relay modules suitable for automation and control applications. These relays offer reliable switching performance with long operational life. Available in various configurations to meet different voltage and current requirements.',
    shortDescription: 'Reliable 24V DC relay modules for industrial applications',
    specifications: {
      'Coil Voltage': '24V DC',
      'Contact Rating': '10A @ 250V AC',
      'Contact Type': 'DPDT',
      'Mechanical Life': '10 million operations',
      'Electrical Life': '100,000 operations',
      'Response Time': '<15ms'
    },
    applications: [
      'Control panels',
      'Safety circuits',
      'Motor starters',
      'Lighting control',
      'HVAC systems'
    ],
    images: [
      'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800'
    ],
    featured: true,
    createdAt: '2024-02-01',
    updatedAt: '2024-03-10'
  },
  {
    id: 'trd-002',
    productType: 'trading',
    name: 'Proximity Sensor Inductive 12mm',
    category: 'Sensors',
    type: 'Inductive',
    brand: 'Sick',
    description: 'Inductive proximity sensors for non-contact detection of metallic objects. Features high switching frequency and excellent repeatability. Suitable for position detection, counting, and presence sensing in automated systems.',
    shortDescription: 'Inductive proximity sensor with 12mm detection range',
    specifications: {
      'Sensing Range': '12mm',
      'Output Type': 'PNP, NO/NC',
      'Supply Voltage': '10-30V DC',
      'Switching Freq': '500Hz',
      'Protection': 'IP67',
      'Housing': 'M18 threaded, stainless steel'
    },
    applications: [
      'Object detection',
      'Position sensing',
      'Counting systems',
      'End-of-travel detection',
      'Conveyor monitoring'
    ],
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    ],
    featured: true,
    createdAt: '2024-01-28',
    updatedAt: '2024-03-05'
  },
  {
    id: 'trd-003',
    productType: 'trading',
    name: 'Circuit Breaker 3-Pole 100A',
    category: 'Protection Devices',
    type: 'MCB',
    brand: 'Schneider Electric',
    description: 'Industrial-grade molded case circuit breakers providing reliable overcurrent and short-circuit protection. Features adjustable thermal and magnetic trip settings. Suitable for motor and feeder protection in industrial distribution systems.',
    shortDescription: '100A industrial circuit breaker with adjustable trip',
    specifications: {
      'Rated Current': '100A',
      'Breaking Capacity': '50kA @ 415V',
      'Poles': '3P',
      'Trip Unit': 'Thermal-magnetic',
      'Frame Size': '100A',
      'Mounting': 'DIN rail or panel'
    },
    applications: [
      'Main distribution',
      'Motor protection',
      'Feeder protection',
      'Generator protection',
      'UPS systems'
    ],
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'
    ],
    featured: true,
    createdAt: '2024-02-05',
    updatedAt: '2024-03-12'
  },
  {
    id: 'trd-004',
    productType: 'trading',
    name: 'Industrial Ethernet Switch 8-Port',
    category: 'Networking',
    type: 'Managed Switch',
    brand: 'Moxa',
    description: 'Managed industrial Ethernet switch designed for harsh environments. Features include redundant power inputs, VLAN support, QoS, and comprehensive network management. Built for reliable 24/7 operation in industrial networks.',
    shortDescription: '8-port managed Ethernet switch for industrial networks',
    specifications: {
      'Ports': '8 x 10/100/1000 Mbps',
      'Management': 'Web, CLI, SNMP v3',
      'Redundancy': 'RSTP, MSTP, Turbo Ring',
      'Power': 'Dual 12-48V DC',
      'Operating Temp': '-40°C to +75°C',
      'Certifications': 'UL, CE, IEC 61850-3'
    },
    applications: [
      'Factory automation',
      'SCADA networks',
      'Substation automation',
      'Transportation systems',
      'Oil and gas'
    ],
    images: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800'
    ],
    featured: false,
    createdAt: '2024-02-08',
    updatedAt: '2024-03-15'
  },
  {
    id: 'trd-005',
    productType: 'trading',
    name: 'Power Supply 24V 10A DIN Rail',
    category: 'Power Supplies',
    type: 'AC-DC',
    brand: 'Phoenix Contact',
    description: 'Reliable switched-mode power supply for industrial control systems. Features wide input range, power factor correction, and comprehensive protections. DIN rail mounting for easy installation in control cabinets.',
    shortDescription: '24V 10A DIN rail mount industrial power supply',
    specifications: {
      'Output': '24V DC, 10A (240W)',
      'Input': '100-240V AC',
      'Efficiency': '>94%',
      'PFC': 'Active, >0.99',
      'Protection': 'OVP, OCP, SCP, OTP',
      'MTBF': '>500,000 hours'
    },
    applications: [
      'Control cabinet power',
      'PLC systems',
      'Sensor power',
      'Communication devices',
      'Actuator power'
    ],
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800'
    ],
    featured: false,
    createdAt: '2024-02-12',
    updatedAt: '2024-03-18'
  },
  {
    id: 'trd-006',
    productType: 'trading',
    name: 'Temperature Controller PID',
    category: 'Controllers',
    type: 'PID Controller',
    brand: 'Autonics',
    description: 'Digital PID temperature controller with auto-tuning capability. Features dual display, multiple input types, and various output options. Suitable for precise temperature control in industrial heating and cooling applications.',
    shortDescription: 'Digital PID temperature controller with auto-tuning',
    specifications: {
      'Input': 'TC (K, J, R, S, T), RTD, 4-20mA',
      'Output': 'Relay, SSR, 4-20mA',
      'Accuracy': '±0.3% FS',
      'Control': 'PID, ON/OFF, manual',
      'Display': 'Dual 4-digit LED',
      'Size': '48x48mm (1/16 DIN)'
    },
    applications: [
      'Ovens and furnaces',
      'Injection molding',
      'Packaging machines',
      'Food processing',
      'HVAC systems'
    ],
    images: [
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800'
    ],
    featured: false,
    createdAt: '2024-02-15',
    updatedAt: '2024-03-20'
  },
  {
    id: 'trd-007',
    productType: 'trading',
    name: 'Industrial Cable Gland M20',
    category: 'Cable Management',
    type: 'Brass',
    brand: 'Lapp',
    description: 'High-quality brass cable glands for secure cable entry in industrial enclosures. Provides IP68 protection with wide clamping range. Suitable for various cable types in demanding environments.',
    shortDescription: 'IP68 brass cable gland for industrial applications',
    specifications: {
      'Thread': 'M20 x 1.5',
      'Cable Range': '6-12mm',
      'Material': 'Nickel-plated brass',
      'Sealing': 'Neoprene (IP68)',
      'Temp Range': '-20°C to +100°C',
      'Certifications': 'ATEX, IECEx'
    },
    applications: [
      'Control panels',
      'Junction boxes',
      'Motor connections',
      'Outdoor enclosures',
      'Hazardous areas'
    ],
    images: [
      'https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800'
    ],
    featured: false,
    createdAt: '2024-02-18',
    updatedAt: '2024-03-22'
  },
  {
    id: 'trd-008',
    productType: 'trading',
    name: 'Contactor 3-Pole 65A',
    category: 'Relays & Switches',
    type: 'AC Contactor',
    brand: 'ABB',
    description: 'Industrial AC contactor for motor starting and power switching applications. Features low power consumption coil, built-in surge suppression, and easy auxiliary contact add-on. Compact design for space-efficient installations.',
    shortDescription: '65A AC contactor for motor control applications',
    specifications: {
      'Rated Current': '65A (AC-3)',
      'Coil Voltage': '230V AC / 24V DC available',
      'Poles': '3 main + 1NO+1NC aux',
      'Mechanical Life': '15 million ops',
      'Electrical Life': '2 million ops (AC-3)',
      'Mounting': '35mm DIN rail'
    },
    applications: [
      'Motor starting',
      'Lighting control',
      'Heating loads',
      'Capacitor switching',
      'Power factor correction'
    ],
    images: [
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800'
    ],
    featured: false,
    createdAt: '2024-02-20',
    updatedAt: '2024-03-25'
  }
];

export const productCategories = {
  manufactured: [
    'Power Electronics',
    'Motion Control',
    'Industrial IoT',
    'Human Machine Interface',
    'Control Systems'
  ],
  trading: [
    'Relays & Switches',
    'Sensors',
    'Protection Devices',
    'Networking',
    'Power Supplies',
    'Controllers',
    'Cable Management'
  ]
};

export const tradingProductTypes = [
  'Electromechanical',
  'Inductive',
  'MCB',
  'Managed Switch',
  'AC-DC',
  'PID Controller',
  'Brass',
  'AC Contactor'
];
