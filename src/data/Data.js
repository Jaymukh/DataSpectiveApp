export const user = {
    name: 'Guest'
}
export const accountMenuItems = [
    {
        key: 1,
        text: "OurSolution",
        id: '#ourSolution'
    },
    {
        key: 2,
        text: "Become a Partner",
        id: '#becomeaPartner'
    },

    {
        key: 3,
        text: "Pricing",
        id: '#pricing'
    },
    {
        key: 4,
        text: "Resources",
        id: '#resources'
    }

];
export const businessType = [
    "Lifescience and Healthcare",
    "Automotive",
    "Banking",
    "Insurance",
    "Telecommunication",
];

export const questions = [
    {
        id: 0,
        question: "Which Industry Domain does your offering deal with?",
        answers: ['Lifesciences', 'Banking', 'Manufacturing', 'Consumer Goods and Retail', 'Education', 'Professional Services', 'Utilities', 'Apparel ^ Footwear', 'Aerospace and Defence', 'Energy', 'Public Sector'],
    },
    {
        id: 1,
        question: "Is your offering an On-Premise or Cloud based solution?",
        answers: ['On-Premise', 'Cloud'],
    },
    {
        id: 2,
        question: "Is your offering available on multiple platforms?",
        answers: ['Yes', 'No'],
    },
    {
        id: 3,
        question: "Is confidential information or personal data is stored by your offering?",
        answers: ['Yes', 'No'],
    },
    {
        id: 4,
        question: "Your offering can directly or indirectly affect user's personal safety?",
        answers: ['Yes', 'No'],
    },
    {
        id: 5,
        question: "Your offering directly or indirectly communicates with the internet?",
        answers: ['Yes', 'No'],
    }, 
    {
        id: 6,
        question: "Your offering processes minor's data?",
        answers: ['Yes', 'No'],
    },
    {
        id: 7,
        question: "Your offering caters to more than one country?",
        answers: ['Yes', 'No'],
    },
]
export const questionnaire = [
    {
        "id": 1,
        "category": "General Information",
        "description": "Questions related to general information about data processing.",
        "questions": [
            {
                question: "1.1 Is personal data being processed?",
                answer: "", // Initialize the answer with an empty string
            },
            {
                question: "1.2 What is the concrete name of the processing activity?",
                answer: "",
            },
            {
                question: "1.3 Please describe the processing activity",
                answer: "",
            },
            {
                question: "1.4 What is the responsible department?",
                answer: "",
            },
            {
                question: "1.5 Who is the contact person?",
                answer: "",
            },
            {
                question: "1.6 Acting as Data Controller, Data Processor, or Joint Controllers?",
                answer: "",
            },
        ]
    },
    {
        "id": 2,
        "category": "Information about the Data Controller",
        "description": "Questions about the entity responsible for data processing.",
        "questions": [
            {
                question: "2.1 What is the responsible entity?",
                answer: "",
            },
            {
                question: "2.2 What is the responsible entity?",
                answer: "",
            },
            {
                question: "2.3 What is the entity within a Joint Control?",
                answer: "",
            },
            {
                question: "2.4 What is the entity within a Joint Control?",
                answer: "",
            },
        ],
    },
    {
        "id": 3,
        "category": "Information about the Data Processor",
        "description": "Questions about the data processor and their processing activities.",
        "questions": [
            {
                question: "3.1 Who is the data processor?",
                answer: "",
            },
            {
                question: "3.2 Who is the data processor?",
                answer: "",
            },
            {
                question: "3.3 What categories of processing are performed by the data processor?",
                answer: "",
            },
        ],
    },
    {
        "id": 4,
        "category": "Legal Basis",
        "description": "Questions about the legal bases for data processing.",
        "questions": [
            {
                question: "4.1 What are the legal bases of the processing activity?",
                answer: "",
            },
            {
                question: "4.2 Do you retain evidence of the consent given?",
                answer: "",
            },
            {
                question: "4.3 Which attributes apply with regard to valid consent?",
                answer: "",
            },
            {
                question: "4.4 Is withdrawing consent as easy as giving consent?",
                answer: "",
            },
            {
                question: "4.5 What are the legitimate interests you are pursuing?",
                answer: "",
            },
        ],
    },
    {
        "id": 5,
        "category": "Data Subject Information and Rights",
        "description": "Questions about informing data subjects of their rights and ensuring those rights.",
        "questions": [
            {
                question: "5.1 How are the data subjects being informed?",
                answer: "",
            },
            {
                question: "5.2 What attributes describe the notice used to inform data subjects of their rights best?",
                answer: "",
            },
            {
                question: "5.3 Can the rights of the data subjects actually be fulfilled?",
                answer: "",
            },
            {
                question: "5.4 Which data subject rights do you ensure in detail?",
                answer: "",
            },
        ],
    },
    {
        "id": 6,
        "category": "Details of the Processing Activity",
        "description": "Questions about the specific details of data processing activities.",
        "questions": [
            {
                question: "6.1 What is the purpose of the processing activity?",
                answer: "",
            },
            {
                question: "6.2 Which data subjects and data categories are affected?",
                answer: "",
            },
            {
                question: "6.3 Where exactly are the data subjects located?",
                answer: "",
            },
            {
                question: "6.4 What is the approximate number of affected data subjects?",
                answer: "",
            },
            {
                question: "6.5 What is the data source?",
                answer: "",
            },
            {
                question: "6.6 Which transfer method (from source) is used?",
                answer: "",
            },
            {
                question: "6.7 Which transfer method (to additional destinations) is used?",
                answer: "",
            },
            {
                question: "6.8 Which internal recipients receive the data?",
                answer: "",
            },
            {
                question: "6.9 Which external recipients receive the data?",
                answer: "",
            },
            {
                question: "6.10 In which recipient country (specific location) will the data be accessed or used?",
                answer: "",
            },
            {
                question: "6.11 Which Cross-Border Transfer Mechanism(s) are in place?",
                answer: "",
            },
            {
                question: "6.12 Have you already defined a standard period for the deletion of the processed personal data as part of a deletion concept?",
                answer: "",
            },
            {
                question: "6.13 How have you regulated the access permissions?",
                answer: "",
            },
            {
                question: "6.14 What assets are used for the processing activity?",
                answer: "",
            },
            {
                question: "6.15 Has Information Security already been assessed as part of the processing activity?",
                answer: "",
            },
            {
                question: "6.16 Have you performed an initial risk assessment of data protection risks?",
                answer: "",
            },
            {
                question: "6.17 Is a data protection impact assessment to be carried out?",
                answer: "",
            },
            {
                question: "6.18 Is an automated decision (profiling) made that has legal effect on data subjects or similarly significantly affects them?",
                answer: "",
            },
            {
                question: "6.19 How is data protection ensured through technology design and data protection-friendly default settings?",
                answer: "",
            },
        ],
    }
];

export const AssessmentDetails = {
    "ID": "64",
    "Name": "Pressure Measurement Compression (PuMP)",
    "Organization": "PH AG",
    "Description": "The idea of PuMP is about developing an interface wearable unit to be used under a compression bandage (initially with Pütter® Pro 2) for the measurement of the sub-bandage pressure. The wearable unit transmits the measured values wirelessly via NFC (Near Field Communication) interface to a software application (Android/iOS app) on a mobile device (smartphone, tablet, etc.), which enables reading-out and monitoring these values. In this way, the wearable unit will enable controlling and monitoring of the pressure applied by the Healthcare Professionals (HCP), patients and/or caring relatives during and after the bandage application. PuMP shall help the Healthcare Professionals (HCP), patients and caring relatives to achieve the right pressure level with the usage of the wearable unit and know whether the bandage must be reapplied or not. It shall also increase patient compliance within the therapy due to the digital visualization of the daily results via the app.",
    "Approver": "Barbara Schlick, Alexander Wild, Christoph Kempe",
    "Respondent": "Berksoy Bilgin, Manas Fiedel Ganguly",
    "Template": "Notification of processing",
    "Workflows": "Default Assessment Workflow",
    "Creator": "Christoph Kempe",
    "DateCreated": "10/14/2022 11:13 AM",
    "LastUpdated": "04/19/2023 02:32 PM",
    "Stage": "In Progress",
    "ApprovalStage": "",
    "Status": "Active",
    "VeryHighRisks": 0,
    "HighRisks": 0,
    "MediumRisks": 0,
    "LowRisks": 0,
    "TotalRisks": 0,
    "ResidualRiskLevel": "None",
    "ResidualRiskScore": 0.0,
    "Result": "",
    "ResultComments": "Under Review (Barbara Schlick - Not Reviewed) ; (Alexander Wild - Not Reviewed) ; (Christoph Kempe - Not Reviewed) ;",
    "PrimaryRecordId": "",
    "PrimaryRecordName": "",
    "TemplateVersion": 5,
    "OpenRiskCount": 0
};



