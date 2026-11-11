import { GeneratedPaper } from "@/types/papercraft";
import { DEFAULT_METADATA } from "./defaultPatterns";

export const SEM6_COURSE_PAPERS: Record<string, GeneratedPaper> = {
  // ─────────────────────────────────────────────────────────────────────────────
  // 1. CS2611 — CRYPTOGRAPHY AND CYBER SECURITY
  // ─────────────────────────────────────────────────────────────────────────────
  CS2611: {
    id: "paper-cs2611-mayjun2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Cryptography and Cyber Security",
      courseCode: "CS2611",
      qpCode: "256101",
      semester: "VI",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: April/May 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2611_Cryptography_and_Cyber_Security_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.5 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "ccs-q1",
            questionNumber: 1,
            text: "State the CIA triad of information security and define an integrity violation with an example.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ccs-q2",
            questionNumber: 2,
            text: "Differentiate passive and active network attacks with respect to detection and prevention.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "ccs-q3",
            questionNumber: 3,
            text: "State the block size and key lengths supported by the Advanced Encryption Standard (AES).",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ccs-q4",
            questionNumber: 4,
            text: "Why is Electronic Codebook (ECB) mode vulnerable when encrypting images or structured records?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ccs-q5",
            questionNumber: 5,
            text: "In an RSA cryptosystem with prime numbers p = 7 and q = 11, calculate Euler's totient value phi(n).",
            marks: 2,
            bloomLevel: "Apply",
          },
          {
            id: "ccs-q6",
            questionNumber: 6,
            text: "State the Discrete Logarithm Problem (DLP) underlying the Diffie-Hellman key exchange.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ccs-q7",
            questionNumber: 7,
            text: "Define preimage resistance and collision resistance for cryptographic hash functions.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "ccs-q8",
            questionNumber: 8,
            text: "Differentiate Message Authentication Code (MAC) and Digital Signature regarding non-repudiation.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "ccs-q9",
            questionNumber: 9,
            text: "Compare Packet-Filtering Firewalls and Stateful Inspection Firewalls in tracking TCP connections.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "ccs-q10",
            questionNumber: 10,
            text: "What is a Zero-Day vulnerability and why do signature-based antivirus engines fail to stop it?",
            marks: 2,
            bloomLevel: "Understand",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions. Each Question carries 13 Marks.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          // Q11: Classical Cryptography
          {
            id: "ccs-q11a",
            questionNumber: 11,
            choiceLabel: "(a)",
            text: "Classical Substitution Ciphers and Cryptanalysis:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Using the Playfair cipher with the keyword 'MONARCHY', construct the 5x5 key matrix. Encrypt the plaintext message 'MEET ME AT DAWN'. Clearly detail the rules applied for duplicate letters within a diagram and odd-length padding.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Encrypt the plaintext 'CYBERSECURITY' using the Vigenère polyalphabetic cipher with the repeating key 'LOCK'. Explain why polyalphabetic ciphers resist single-letter frequency analysis compared to monoalphabetic ciphers.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ccs-q11b",
              questionNumber: 11,
              choiceLabel: "(b)",
              text: "Transposition Ciphers, Steganography, and Information Security Objectives:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the Row Transposition Cipher and encrypt the message 'ATTACK AT ONCE TONIGHT' using key 4-3-1-2-5-6-7. Demonstrate the decryption procedure and analyze its vulnerability to multiple-column anagramming.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Steganography and compare it with Cryptography. Detail the Least Significant Bit (LSB) insertion technique in image steganography and discuss methods for steganalysis.",
                  marks: 5,
                },
              ],
            },
          },

          // Q12: Symmetric Key Cryptography
          {
            id: "ccs-q12a",
            questionNumber: 12,
            choiceLabel: "(a)",
            text: "Advanced Encryption Standard (AES) Architecture and Transformations:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the AES encryption round in detail. Illustrate the 4x4 state matrix and explain each of the four transformations: (1) SubBytes (S-box substitution in GF(2^8)), (2) ShiftRows (cyclical permutation), (3) MixColumns (matrix multiplication in GF(2^8)), and (4) AddRoundKey (bitwise XOR).",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Compare Cipher Block Chaining (CBC) and Counter (CTR) modes of operation with neat block diagrams. Explain why CTR mode allows parallel encryption/decryption and random-access reading of encrypted blocks.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ccs-q12b",
              questionNumber: 12,
              choiceLabel: "(b)",
              text: "Data Encryption Standard (DES) and Feistel Cipher Structure:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the Feistel cipher network architecture. Describe the DES encryption algorithm, focusing on the 16-round structure, initial permutation (IP), round function f(R, K) with expansion permutation (E) and 8 substitution boxes (S-boxes), and the 48-bit subkey generation schedule.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Triple DES (3DES) with two-key and three-key options. Explain the Meet-in-the-Middle attack on Double DES and why 3DES uses Encrypt-Decrypt-Encrypt (EDE) mode for backward compatibility.",
                  marks: 5,
                },
              ],
            },
          },

          // Q13: Asymmetric Cryptography and Digital Signatures
          {
            id: "ccs-q13a",
            questionNumber: 13,
            choiceLabel: "(a)",
            text: "RSA Algorithm and Diffie-Hellman Key Exchange Numericals:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "In an RSA public-key cryptosystem, choose prime numbers p = 11 and q = 13.\n(a) Compute n and phi(n).\n(b) Select public key exponent e = 7 and calculate private key exponent d using the Extended Euclidean Algorithm such that (e * d) mod phi(n) = 1.\n(c) Encrypt the plaintext message M = 9 to produce ciphertext C.\n(d) Decrypt C to recover the original message M.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "In a Diffie-Hellman key exchange, Alice and Bob agree on global prime q = 23 and primitive root alpha = 5. If Alice chooses private key XA = 6 and Bob chooses private key XB = 15:\n(a) Compute public keys YA and YB.\n(b) Compute the shared secret key K on both ends.\n(c) Illustrate how an active attacker executes a Man-in-the-Middle attack when unauthenticated.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ccs-q13b",
              questionNumber: 13,
              choiceLabel: "(b)",
              text: "Cryptographic Hash Functions and Public Key Infrastructure:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the Secure Hash Algorithm (SHA-256) architecture. Detail message padding, 512-bit block parsing, 64-round compression function using bitwise operations (Ch, Maj, Sigma0, Sigma1), and explain why collision resistance is critical.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Public Key Infrastructure (PKI) and X.509 Digital Certificates. Describe the certificate lifecycle: issuance, verification, Certificate Revocation Lists (CRL), and Online Certificate Status Protocol (OCSP).",
                  marks: 5,
                },
              ],
            },
          },

          // Q14: Network and Internet Security
          {
            id: "ccs-q14a",
            questionNumber: 14,
            choiceLabel: "(a)",
            text: "IPsec Architecture and Transport vs Tunnel Modes:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain IPsec architecture in detail. Compare Authentication Header (AH) and Encapsulating Security Payload (ESP). Draw and contrast the IP packet format in Transport Mode vs Tunnel Mode for both protocols.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain Security Associations (SA) in IPsec and describe how the Internet Key Exchange (IKEv2) protocol negotiates security parameters and establishes shared secrets.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ccs-q14b",
              questionNumber: 14,
              choiceLabel: "(b)",
              text: "SSL/TLS Architecture and Firewall Deployments:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Trace the complete TLS 1.3 Handshake Protocol. Detail the exchange of ClientHello, ServerHello, key shares (ECDHE), server certificate verification, finished messages, and derivation of symmetric session keys.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain DMZ (Demilitarized Zone) firewall architecture. Differentiate between Packet Filtering, Application-Level Gateway (Proxy), and Next-Generation Firewalls (NGFW) with deep packet inspection.",
                  marks: 5,
                },
              ],
            },
          },

          // Q15: Cyber Security, Threats and Incident Response
          {
            id: "ccs-q15a",
            questionNumber: 15,
            choiceLabel: "(a)",
            text: "Malware Taxonomy and Enterprise Incident Response Lifecycle:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the 6-phase NIST Computer Security Incident Handling Guide (SP 800-61) lifecycle: Preparation, Detection & Analysis, Containment, Eradication, Recovery, and Post-Incident Activity. Detail actions taken during a major Ransomware incident.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Classify major categories of malware: Viruses (boot sector, macro), Worms, Trojan Horses, Spyware, and Rootkits. Discuss modern detection strategies including heuristic analysis and sandboxing.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "ccs-q15b",
              questionNumber: 15,
              choiceLabel: "(b)",
              text: "Denial of Service Attacks and Cyber Risk Assessment:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain Denial of Service (DoS) and Distributed Denial of Service (DDoS) attack mechanisms: SYN flood, UDP amplification, and HTTP flood. Discuss defensive countermeasures including SYN cookies, rate limiting, and Cloudflare scrubbing centers.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Vulnerability Assessment and Penetration Testing (VAPT). Differentiate Black-box, White-box, and Gray-box penetration testing and outline the phases of a penetration testing engagement.",
                  marks: 5,
                },
              ],
            },
          },
        ],
      },
      {
        sectionLabel: "Part-C",
        instructions: "Answer All Questions. Question carries 15 Marks.",
        formulaSummary: "1 x 15 = 15 Marks",
        totalMarks: 15,
        questions: [
          {
            id: "ccs-q16a",
            questionNumber: 16,
            choiceLabel: "(a)",
            text: "Enterprise Cybersecurity Defense Architecture for a Financial Banking Institution:",
            marks: 15,
            bloomLevel: "Create",
            subParts: [
              {
                partLabel: "(a)",
                text: "Design a comprehensive Enterprise Cybersecurity Defense Architecture for a multi-branch Financial Banking Institution: (1) Formulate a multi-layered perimeter defense featuring external/internal DMZs, redundant Next-Gen Firewalls, and Network/Host-based IDS/IPS, (2) Specify cryptographic protection mechanisms for data-in-transit (TLS 1.3 / IPsec VPN) and data-at-rest (AES-256 with hardware security modules HSM), (3) Formulate an identity and access management architecture utilizing Multi-Factor Authentication (MFA) and Zero-Trust Network Access (ZTNA), and (4) Outline a Security Operations Center (SOC) monitoring plan utilizing SIEM log aggregation and automated SOAR response workflows.",
                marks: 15,
              },
            ],
            orQuestion: {
              id: "ccs-q16b",
              questionNumber: 16,
              choiceLabel: "(b)",
              text: "End-to-End Cryptographic Protocol and Public Key Infrastructure Design:",
              marks: 15,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(b)",
                  text: "Design an End-to-End Secure Messaging and File Exchange Protocol for government defense communication: (1) Formulate an asymmetric identity exchange utilizing X.509 PKI certificates signed by a trusted root CA, (2) Design a session key agreement protocol utilizing Elliptic Curve Diffie-Hellman Ephemeral (ECDHE) ensuring Perfect Forward Secrecy (PFS), (3) Implement message integrity and authentication using HMAC-SHA256 and RSA/ECDSA digital signatures, and (4) Formulate key revocation procedures using OCSP stapling to mitigate compromised private keys.",
                  marks: 15,
                },
              ],
            },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────────────────
  // 2. CS2612 — INTERNET OF THINGS
  // ─────────────────────────────────────────────────────────────────────────────
  CS2612: {
    id: "paper-cs2612-mayjun2026",
    metadata: {
      ...DEFAULT_METADATA,
      subject: "Internet of Things",
      courseCode: "CS2612",
      qpCode: "256102",
      semester: "VI",
      regulation: "R-2022",
      degree: "B.E.",
      department: "Computer Science and Engineering",
      examTitle: "End Semester Examinations :: April/May 2026",
      maxMarks: 100,
      duration: "3 Hours",
    },
    patternId: "autonomous-100",
    createdAt: new Date().toISOString(),
    status: "generated",
    sourceDocumentName: "CS2612_Internet_of_Things_R2022_Syllabus.pdf",
    sourceDocumentSize: "2.4 MB",
    sections: [
      {
        sectionLabel: "Part-A",
        instructions: "Answer All Questions.",
        formulaSummary: "10 x 2 = 20 Marks",
        totalMarks: 20,
        questions: [
          {
            id: "iot-q1",
            questionNumber: 1,
            text: "List four core characteristics of an Internet of Things (IoT) system.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "iot-q2",
            questionNumber: 2,
            text: "Differentiate between physical design and logical design of IoT systems.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "iot-q3",
            questionNumber: 3,
            text: "Differentiate IoT and M2M with respect to communication protocols and software architecture.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "iot-q4",
            questionNumber: 4,
            text: "What is an IoT Gateway and why is it necessary for sensor networks utilizing short-range protocols?",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "iot-q5",
            questionNumber: 5,
            text: "State the frequency bands and maximum data transfer rates supported by the IEEE 802.15.4 standard.",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "iot-q6",
            questionNumber: 6,
            text: "Differentiate a Zigbee Coordinator (ZC) from a Zigbee End Device (ZED).",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "iot-q7",
            questionNumber: 7,
            text: "What are GPIO pins on a Raspberry Pi and what is the role of Pulse Width Modulation (PWM)?",
            marks: 2,
            bloomLevel: "Remember",
          },
          {
            id: "iot-q8",
            questionNumber: 8,
            text: "Differentiate between analogRead() and digitalRead() functions in Arduino programming.",
            marks: 2,
            bloomLevel: "Understand",
          },
          {
            id: "iot-q9",
            questionNumber: 9,
            text: "Differentiate Edge Analytics and Cloud Analytics in IoT processing with respect to latency.",
            marks: 2,
            bloomLevel: "Analyze",
          },
          {
            id: "iot-q10",
            questionNumber: 10,
            text: "What type of sensor is typically deployed for parking slot occupancy detection in Smart Parking?",
            marks: 2,
            bloomLevel: "Remember",
          },
        ],
      },
      {
        sectionLabel: "Part-B",
        instructions: "Answer All Questions. Each Question carries 13 Marks.",
        formulaSummary: "5 x 13 = 65 Marks",
        totalMarks: 65,
        questions: [
          // Q11: Unit 1
          {
            id: "iot-q11a",
            questionNumber: 11,
            choiceLabel: "(a)",
            text: "Logical Design of IoT and IoT Communication Models:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain the Logical Design of IoT. Detail the functional blocks (Device, Communication, Services, Management, Security, Application) and explain the 4 IoT communication models: Request-Response, Publish-Subscribe, Push-Pull, and Exclusive Pair with diagrams.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Compare IoT Level-1 (single node, local storage/app) and IoT Level-5 (multiple coordinator nodes, cloud-based coordinator & big data storage) deployment templates with real-world application examples.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "iot-q11b",
              questionNumber: 11,
              choiceLabel: "(b)",
              text: "IoT Architecture, Enabling Technologies, and M2M Comparison:",
              marks: 13,
              bloomLevel: "Analyze",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain the layered IoT architecture (Perception Layer, Network Layer, Middleware Layer, Application Layer). Discuss key enabling technologies including Wireless Sensor Networks (WSN), Cloud Computing, and Embedded Systems.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Compare IoT and M2M across communication protocols, hardware dependency, IP addressing, software applications, and data handling scales.",
                  marks: 5,
                },
              ],
            },
          },

          // Q12: Unit 2
          {
            id: "iot-q12a",
            questionNumber: 12,
            choiceLabel: "(a)",
            text: "Zigbee Protocol Architecture and IEEE 802.15.4 Standard:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Explain Zigbee protocol architecture in detail. Draw the complete protocol stack showing IEEE 802.15.4 PHY and MAC layers, Zigbee Network Layer (NWK), Application Support Sublayer (APS), and Application Framework. Detail the roles of Zigbee Coordinator (ZC), Zigbee Router (ZR), and Zigbee End Device (ZED).",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the IEEE 802.15.4 superframe structure. Detail beacon frames, Contention Access Period (CAP), Contention Free Period (CFP), and Guaranteed Time Slots (GTS).",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "iot-q12b",
              questionNumber: 12,
              choiceLabel: "(b)",
              text: "Industrial and Building Automation Protocols (SCADA, RFID, Modbus, BACnet):",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain SCADA architecture and RFID systems in industrial IoT. Differentiate between Active, Passive, and Semi-passive RFID tags with respect to read range, power source, and cost.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain Modbus and BACnet protocols used in building automation. Compare Master-Slave polling in Modbus with object-oriented client-server communication in BACnet.",
                  marks: 5,
                },
              ],
            },
          },

          // Q13: Unit 3
          {
            id: "iot-q13a",
            questionNumber: 13,
            choiceLabel: "(a)",
            text: "Raspberry Pi Interfacing and Embedded Python Programming:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Write a complete Python script for Raspberry Pi using RPi.GPIO to: (1) Read an analog temperature sensor via an external MCP3008 ADC using the SPI interface, (2) If temperature exceeds 40°C, turn ON a cooling fan connected to GPIO pin 18 via a relay, and (3) Log readings with timestamps to a local CSV file every 5 seconds.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain the hardware interfaces available on a Raspberry Pi board: GPIO, I2C, SPI, UART, Camera Serial Interface (CSI), and Display Serial Interface (DSI).",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "iot-q13b",
              questionNumber: 13,
              choiceLabel: "(b)",
              text: "Arduino and NodeMCU ESP8266 IoT Prototyping:",
              marks: 13,
              bloomLevel: "Apply",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Write an Arduino C++ sketch for an ESP8266 NodeMCU board that: (1) Connects to a Wi-Fi network with SSID and password, (2) Reads temperature and humidity from a DHT11 sensor connected to digital pin D4, and (3) Publishes the readings via MQTT protocol to topics 'home/temp' and 'home/humidity' every 10 seconds.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Compare Raspberry Pi, Arduino Uno, and NodeMCU ESP8266 with respect to processing power, operating system dependency, power consumption, cost, and typical IoT use cases.",
                  marks: 5,
                },
              ],
            },
          },

          // Q14: Unit 4
          {
            id: "iot-q14a",
            questionNumber: 14,
            choiceLabel: "(a)",
            text: "IoT Cloud Integration, Storage Models, and Real-Time Analytics Pipeline:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Design the end-to-end cloud data pipeline for an industrial predictive maintenance system: (1) Ingestion layer using MQTT Broker / Apache Kafka, (2) Storage layer with NoSQL time-series database (InfluxDB / MongoDB), (3) Analytics layer utilizing Apache Spark streaming, and (4) Real-time visualization dashboard with Grafana. Include architectural block diagram and data schema.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Compare Edge Analytics, Fog Computing, and Cloud Analytics with respect to latency, bandwidth consumption, computational capacity, and battery efficiency for mission-critical autonomous drones.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "iot-q14b",
              questionNumber: 14,
              choiceLabel: "(b)",
              text: "Time-Series Data Management and Remote Device Management:",
              marks: 13,
              bloomLevel: "Understand",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Explain time-series data characteristics in IoT deployments. Discuss data retention policies, downsampling techniques, rollups, and compression algorithms (e.g., Gorilla compression) in time-series databases.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Explain IoT Remote Device Management. Detail Over-The-Air (OTA) firmware updates, remote device provisioning, telemetry monitoring, and secure cryptographic bootstrapping.",
                  marks: 5,
                },
              ],
            },
          },

          // Q15: Unit 5
          {
            id: "iot-q15a",
            questionNumber: 15,
            choiceLabel: "(a)",
            text: "IoT Case Study: Smart Parking System Architecture and Implementation:",
            marks: 13,
            bloomLevel: "Apply",
            subParts: [
              {
                partLabel: "(i).",
                text: "Design a complete IoT-based Smart Parking System for a multi-level municipal parking complex: (1) Sensor node hardware selection (Ultrasonic / Magnetometer occupancy sensors with ESP32 microcontrollers), (2) Communication protocol stack (LoRaWAN to gateway and MQTT to cloud broker), (3) Cloud data processing & reservation logic handling dynamic slot allocation, and (4) Mobile application interface for drivers and centralized display boards for parking managers.",
                marks: 8,
              },
              {
                partLabel: "(ii).",
                text: "Explain an IoT-based Weather Monitoring System. Specify the sensors used for temperature, humidity, atmospheric pressure, and rainfall, and illustrate the complete sensor-to-cloud data flow.",
                marks: 5,
              },
            ],
            orQuestion: {
              id: "iot-q15b",
              questionNumber: 15,
              choiceLabel: "(b)",
              text: "IoT Case Study: Automated Smart Irrigation and Forest Fire Detection:",
              marks: 13,
              bloomLevel: "Apply",
              subParts: [
                {
                  partLabel: "(i).",
                  text: "Design an Automated Smart Plant Irrigation System: (1) Hardware interface with soil-moisture sensor, ambient temperature/humidity sensor, and solenoid water valve controlled by a relay, (2) Threshold-based automated watering algorithm with cloud remote override, and (3) Cloud data logging and mobile app telemetry.",
                  marks: 8,
                },
                {
                  partLabel: "(ii).",
                  text: "Design an IoT-based Forest Fire Detection System using thermal infrared and smoke sensors deployed in remote forest canopies. Explain solar-powered energy harvesting and long-range LoRaWAN telemetry.",
                  marks: 5,
                },
              ],
            },
          },
        ],
      },
      {
        sectionLabel: "Part-C",
        instructions: "Answer All Questions. Question carries 15 Marks.",
        formulaSummary: "1 x 15 = 15 Marks",
        totalMarks: 15,
        questions: [
          {
            id: "iot-q16a",
            questionNumber: 16,
            choiceLabel: "(a)",
            text: "Comprehensive Smart City Municipal Infrastructure Platform Design:",
            marks: 15,
            bloomLevel: "Create",
            subParts: [
              {
                partLabel: "(a)",
                text: "Design an Integrated Smart City Municipal Infrastructure Platform combining Smart Parking, Adaptive Street Lighting, and Real-Time Air Quality Monitoring: (1) Detail the sensor and actuator specifications for each domain, (2) Formulate a unified heterogeneous wireless communication backbone (LoRaWAN + Cellular 5G + MQTT), (3) Design an edge-fog-cloud hierarchical processing architecture that reduces cloud bandwidth by 70%, and (4) Present the central command center analytics dashboard architecture showing real-time geospatial alerts.",
                marks: 15,
              },
            ],
            orQuestion: {
              id: "iot-q16b",
              questionNumber: 16,
              choiceLabel: "(b)",
              text: "Industrial IoT (IIoT) Predictive Maintenance and Digital Twin Architecture:",
              marks: 15,
              bloomLevel: "Create",
              subParts: [
                {
                  partLabel: "(b)",
                  text: "Design an Industrial IoT (IIoT) Predictive Maintenance and Digital Twin System for critical factory equipment: (1) Sensor instrumentation including 3-axis vibration sensors, thermal cameras, and acoustic sensors interfaced with industrial edge gateways via Modbus TCP, (2) Edge streaming analytics performing FFT (Fast Fourier Transform) vibration anomaly detection, (3) Cloud Digital Twin synchronization using OPC UA and cloud pub-sub messaging, and (4) Machine Learning predictive model predicting Remaining Useful Life (RUL) with automated maintenance ticket generation.",
                  marks: 15,
                },
              ],
            },
          },
        ],
      },
    ],
  },
};
