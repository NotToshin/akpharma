/**
 * ============================================================
 * AK PHARMA — Products Database (products-data.js)
 * Dedicated, easy-to-edit file for managing all product entries.
 * Works seamlessly whether running on a local file (file://) or live web server.
 * ============================================================
 *
 * HOW TO ADD A NEW PRODUCT:
 * Copy a product object, paste it into the AK_PRODUCTS array, and update the values.
 */

var AK_PRODUCTS = [
  {
    "id": "ova-wom",
    "name": "Ova-Wom",
    "generic": "Myo-Inositol + Folic Acid + Vitamin D3 + Melatonin + Vitamin B12",
    "category": "maternal",
    "therapeuticClass": "Nutritional Supplement for Women’s Reproductive Health",
    "form": "Tablet",
    "packSize": "3 x 10 Tablets (30 Tablets / Box)",
    "rx": false,
    "img": "products/ova-wom.avif",
    "images": [],
    "strength": "Myo-Inositol 1000mg + Folic Acid 400mcg + Vit D3 1000IU + Melatonin 3mg + B12 20mcg",
    "manufacturer": "AK Pharma Health Sciences",
    "origin": "Bangladesh",
    "storage": "Store in a cool, dry place. Protect from direct sunlight. Keep out of reach of children.",
    "shelfLife": "24 months",
    "dgdaReg": "DA-Reg-2104-2022",
    "description": "Ova-Wom Tablets are a scientifically formulated dietary supplement designed to support female reproductive health, hormonal balance, and overall well-being. Enriched with Myo-Inositol, Folic Acid, Vitamin D3, Melatonin, and Vitamin B12, this supplement helps promote regular menstrual cycles, ovarian function, and fertility support. It also provides essential nutrients that aid in general health and wellness, making it suitable for women planning pregnancy or managing reproductive health concerns.",
    "indications": [
      "Supports female reproductive health and ovarian function",
      "Promotes regular menstrual cycles",
      "Provides essential vitamins and minerals for fertility support",
      "Helps improve hormonal balance and overall wellness",
      "Supports healthy sleep patterns through Melatonin"
    ],
    "dosage": "Take as directed by a dietician or healthcare practitioner. Do not exceed the stated recommended daily usage.",
    "composition": [
      [
        "Myo-Inositol",
        "1000 mg"
      ],
      [
        "Folic Acid",
        "400 mcg"
      ],
      [
        "Vitamin D3",
        "1000 IU"
      ],
      [
        "Melatonin",
        "3 mg"
      ],
      [
        "Vitamin B12",
        "20 mcg"
      ]
    ],
    "otherIngredients": "Starch (E1422), DCP (E341), PVPK 30 (E1202), Aerosil (E551), Talc (E553b), Magnesium Stearate (E572), Approved Colour.",
    "contraindications": "Hypersensitivity to any component. Folic acid should not be used for untreated vitamin B12 deficiency without concurrent B12 therapy.",
    "sideEffects": "Generally well tolerated. Rarely: mild gastrointestinal discomfort (nausea, flatulence).",
    "interactions": "Antiepileptics may reduce folate levels. Melatonin may enhance sedation with CNS depressants.",
    "warnings": "This is a nutraceutical product and is not intended to diagnose, treat, cure, or prevent any disease. Appropriate overages of nutrients are added to compensate for potential loss of potency during storage.",
    "storage_full": "Store in a cool, dry place. Protect from direct sunlight. Keep out of reach of children."
  },
  {
    "id": "lybon-d",
    "name": "Lybon-D (Murakkab Jawahidar)",
    "generic": "Natural Coral Calcium + Vitamins (B1, B2, B6, D, E) + Minerals + Herbal Extracts",
    "category": "vitamins",
    "therapeuticClass": "High-Potency Natural Coral Calcium with Vitamin D",
    "form": "Tablet",
    "packSize": "30 Tablets / Pack",
    "rx": false,
    "img": "products/lybon-d.avif",
    "images": [],
    "strength": "Cyprea moneta 125mg + Zinc 40mg + Vitamin D 10mg",
    "manufacturer": "AK Pharma Health Sciences",
    "origin": "Bangladesh",
    "storage": "Store in a cool, dry place. Protect from direct sunlight.",
    "shelfLife": "24 months",
    "dgdaReg": "DA-Reg-0498-2021",
    "description": "Lybon-D is a high-potency supplement formulated with natural coral calcium, essential vitamins, minerals, and traditional herbal ingredients. It is designed to support bone health, calcium balance, brain function, and overall vitality. Combining modern science with traditional remedies, Lybon-D is ideal for adults seeking holistic wellness and targeted nutritional support.",
    "indications": [
      "Calcium deficiency and bone disorders (Osteoporosis, Osteomalacia)",
      "General weakness, fatigue, and reduced immunity",
      "Brain weakness and cognitive support",
      "Urinary issues: Phosphate urine, Haematuria",
      "Vascular weakness, nephritis, dropsy, rheumatism, gout",
      "Sterility support"
    ],
    "dosage": "Adults and children over 12 years: 1 tablet 1–2 times daily or as prescribed by a physician.",
    "composition": [
      [
        "Cyprea moneta",
        "125 mg"
      ],
      [
        "Zinc metallicum",
        "40 mg"
      ],
      [
        "Copper sulphate",
        "2 mg"
      ],
      [
        "Vitamin B1",
        "1.50 mg"
      ],
      [
        "Vitamin B2",
        "1.70 mg"
      ],
      [
        "Vitamin B6",
        "2 mg"
      ],
      [
        "Vitamin D",
        "10 mg"
      ],
      [
        "Vitamin E",
        "15 mg"
      ],
      [
        "Salvia haematodes",
        "25 mg"
      ],
      [
        "Centaurea behen",
        "25 mg"
      ]
    ],
    "otherIngredients": "Natural coral calcium base, purified herbal decoctions, pharmaceutical excipients.",
    "contraindications": "Severe hypercalcaemia, hypervitaminosis D, or severe renal impairment.",
    "sideEffects": "Generally well tolerated. Rarely mild gastrointestinal fullness.",
    "interactions": "Separate administration of oral tetracyclines or iron supplements by at least two hours.",
    "warnings": "Do not exceed the recommended daily dosage unless advised by a qualified physician.",
    "storage_full": "Store in a cool, dry place below 25°C. Protect from direct sunlight and moisture. Keep out of reach of children."
  },
  {
    "id": "drostility-25",
    "name": "Drostility 25",
    "generic": "Dehydroepiandrosterone (DHEA) 25 mg",
    "category": "wellness",
    "therapeuticClass": "Dehydroepiandrosterone (DHEA) Supplement",
    "form": "Film-Coated Tablet",
    "packSize": "30 Film-Coated Tablets",
    "rx": false,
    "img": "products/drostility.jpg",
    "images": [],
    "strength": "25 mg",
    "manufacturer": "AK Pharma Health Sciences",
    "origin": "Bangladesh",
    "storage": "Store in a cool, dry place. Protect from direct sunlight. Keep out of reach of children.",
    "shelfLife": "24 months",
    "dgdaReg": "DA-Reg-3211-2023",
    "description": "Drostility 25 is a nutraceutical supplement containing 25 mg of Dehydroepiandrosterone (DHEA) per film-coated tablet. DHEA is a naturally occurring hormone that plays a key role in maintaining hormonal balance, supporting vitality, and promoting overall wellness. This supplement is intended to provide nutritional support and is not a medicinal product.",
    "indications": [
      "Supports hormonal balance and vitality",
      "Promotes general well-being and energy",
      "Nutritional support for ovarian reserve, reproductive vitality, and healthy aging",
      "Nutritional supplement for adults"
    ],
    "dosage": "Take as directed by a dietician or health practitioner. Do not exceed the recommended dosage.",
    "composition": [
      [
        "Dehydroepiandrosterone (DHEA)",
        "25 mg"
      ],
      [
        "Energy",
        "0.76 Kcal"
      ],
      [
        "Protein",
        "0.19 g"
      ],
      [
        "Carbohydrate",
        "0.00 g"
      ],
      [
        "Fat & Fatty Acids",
        "0.00 g"
      ],
      [
        "Cholesterol",
        "0.00 g"
      ]
    ],
    "otherIngredients": "Starch (E1422), Dicalcium Phosphate (E341), PVPK 30 (E1202), Aerosil (E551), Talc (E553b), Magnesium Stearate (E572), Approved Colour.",
    "contraindications": "Hypersensitivity to DHEA or any inactive ingredients. Not recommended for pregnant or lactating women unless advised by a specialist.",
    "sideEffects": "Generally well tolerated within suggested dosage range.",
    "interactions": "Consult a healthcare practitioner if using other hormonal or steroid preparations.",
    "warnings": "Appropriate overages are added to compensate for potential loss of potency during storage. This product is a nutraceutical supplement and is not intended to diagnose, treat, cure, or prevent any disease. Not for medicinal use.",
    "storage_full": "Store in a cool, dry place. Protect from direct sunlight. Keep out of reach of children."
  }
];

if (typeof window !== "undefined") {
  window.AK_PRODUCTS = AK_PRODUCTS;
}
